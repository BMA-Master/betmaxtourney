(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function Gn(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const ve={},vs=[],yt=()=>{},Di=()=>!1,Oa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),jn=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Yn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Pl=Object.prototype.hasOwnProperty,_e=(e,t)=>Pl.call(e,t),ue=Array.isArray,ws=e=>Xs(e)==="[object Map]",Ca=e=>Xs(e)==="[object Set]",br=e=>Xs(e)==="[object Date]",fe=e=>typeof e=="function",Pe=e=>typeof e=="string",wt=e=>typeof e=="symbol",we=e=>e!==null&&typeof e=="object",Ii=e=>(we(e)||fe(e))&&fe(e.then)&&fe(e.catch),Ni=Object.prototype.toString,Xs=e=>Ni.call(e),Ol=e=>Xs(e).slice(8,-1),Bi=e=>Xs(e)==="[object Object]",qn=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rs=Gn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Cl=/-\w/g,at=La(e=>e.replace(Cl,t=>t.slice(1).toUpperCase())),Ll=/\B([A-Z])/g,Zt=La(e=>e.replace(Ll,"-$1").toLowerCase()),Ra=La(e=>e.charAt(0).toUpperCase()+e.slice(1)),Va=La(e=>e?`on${Ra(e)}`:""),Vt=(e,t)=>!Object.is(e,t),ca=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Fi=(e,t,s,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:s})},Rl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ml=e=>{const t=Pe(e)?Number(e):NaN;return isNaN(t)?e:t};let _r;const Ma=()=>_r||(_r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kn(e){if(ue(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],n=Pe(a)?Bl(a):Kn(a);if(n)for(const r in n)t[r]=n[r]}return t}else if(Pe(e)||we(e))return e}const Dl=/;(?![^(]*\))/g,Il=/:([^]+)/,Nl=/\/\*[^]*?\*\//g;function Bl(e){const t={};return e.replace(Nl,"").split(Dl).forEach(s=>{if(s){const a=s.split(Il);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Jt(e){let t="";if(Pe(e))t=e;else if(ue(e))for(let s=0;s<e.length;s++){const a=Jt(e[s]);a&&(t+=a+" ")}else if(we(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$l=Gn(Fl);function $i(e){return!!e||e===""}function zl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let a=0;s&&a<e.length;a++)s=Da(e[a],t[a]);return s}function Da(e,t){if(e===t)return!0;let s=br(e),a=br(t);if(s||a)return s&&a?e.getTime()===t.getTime():!1;if(s=wt(e),a=wt(t),s||a)return e===t;if(s=ue(e),a=ue(t),s||a)return s&&a?zl(e,t):!1;if(s=we(e),a=we(t),s||a){if(!s||!a)return!1;const n=Object.keys(e).length,r=Object.keys(t).length;if(n!==r)return!1;for(const i in e){const o=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(o&&!l||!o&&l||!Da(e[i],t[i]))return!1}}return String(e)===String(t)}function zi(e,t){return e.findIndex(s=>Da(s,t))}const Hi=e=>!!(e&&e.__v_isRef===!0),Ui=e=>Pe(e)?e:e==null?"":ue(e)||we(e)&&(e.toString===Ni||!fe(e.toString))?Hi(e)?Ui(e.value):JSON.stringify(e,Gi,2):String(e),Gi=(e,t)=>Hi(t)?Gi(e,t.value):ws(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,n],r)=>(s[Wa(a,r)+" =>"]=n,s),{})}:Ca(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Wa(s))}:wt(t)?Wa(t):we(t)&&!ue(t)&&!Bi(t)?String(t):t,Wa=(e,t="")=>{var s;return wt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Me;class ji{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Me;try{return Me=this,t()}finally{Me=s}}}on(){++this._on===1&&(this.prevScope=Me,Me=this)}off(){this._on>0&&--this._on===0&&(Me=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(this.effects.length=0,s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Yi(e){return new ji(e)}function qi(){return Me}function Hl(e,t=!1){Me&&Me.cleanups.push(e)}let Te;const Ja=new WeakSet;class Ki{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yr(this),Ji(this);const t=Te,s=ot;Te=this,ot=!0;try{return this.fn()}finally{Xi(this),Te=t,ot=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Jn(t);this.deps=this.depsTail=void 0,yr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wn(this)&&this.run()}get dirty(){return wn(this)}}let Vi=0,Ms,Ds;function Wi(e,t=!1){if(e.flags|=8,t){e.next=Ds,Ds=e;return}e.next=Ms,Ms=e}function Vn(){Vi++}function Wn(){if(--Vi>0)return;if(Ds){let t=Ds;for(Ds=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Ms;){let t=Ms;for(Ms=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=s}}if(e)throw e}function Ji(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xi(e){let t,s=e.depsTail,a=s;for(;a;){const n=a.prevDep;a.version===-1?(a===s&&(s=n),Jn(a),Ul(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=n}e.deps=t,e.depsTail=s}function wn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Us)||(e.globalVersion=Us,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!wn(e))))return;e.flags|=2;const t=e.dep,s=Te,a=ot;Te=e,ot=!0;try{Ji(e);const n=e.fn(e._value);(t.version===0||Vt(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{Te=s,ot=a,Xi(e),e.flags&=-3}}function Jn(e,t=!1){const{dep:s,prevSub:a,nextSub:n}=e;if(a&&(a.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=a,e.nextSub=void 0),s.subs===e&&(s.subs=a,!a&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Jn(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ul(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let ot=!0;const Zi=[];function It(){Zi.push(ot),ot=!1}function Nt(){const e=Zi.pop();ot=e===void 0?!0:e}function yr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=Te;Te=void 0;try{t()}finally{Te=s}}}let Us=0;class Gl{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Te||!ot||Te===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Te)s=this.activeLink=new Gl(Te,this),Te.deps?(s.prevDep=Te.depsTail,Te.depsTail.nextDep=s,Te.depsTail=s):Te.deps=Te.depsTail=s,eo(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const a=s.nextDep;a.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=a),s.prevDep=Te.depsTail,s.nextDep=void 0,Te.depsTail.nextDep=s,Te.depsTail=s,Te.deps===s&&(Te.deps=a)}return s}trigger(t){this.version++,Us++,this.notify(t)}notify(t){Vn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Wn()}}}function eo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)eo(a)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const ga=new WeakMap,us=Symbol(""),xn=Symbol(""),Gs=Symbol("");function De(e,t,s){if(ot&&Te){let a=ga.get(e);a||ga.set(e,a=new Map);let n=a.get(s);n||(a.set(s,n=new Xn),n.map=a,n.key=s),n.track()}}function Lt(e,t,s,a,n,r){const i=ga.get(e);if(!i){Us++;return}const o=l=>{l&&l.trigger()};if(Vn(),t==="clear")i.forEach(o);else{const l=ue(e),c=l&&qn(s);if(l&&s==="length"){const d=Number(a);i.forEach((u,p)=>{(p==="length"||p===Gs||!wt(p)&&p>=d)&&o(u)})}else switch((s!==void 0||i.has(void 0))&&o(i.get(s)),c&&o(i.get(Gs)),t){case"add":l?c&&o(i.get("length")):(o(i.get(us)),ws(e)&&o(i.get(xn)));break;case"delete":l||(o(i.get(us)),ws(e)&&o(i.get(xn)));break;case"set":ws(e)&&o(i.get(us));break}}Wn()}function jl(e,t){const s=ga.get(e);return s&&s.get(t)}function gs(e){const t=ge(e);return t===e?t:(De(t,"iterate",Gs),lt(e)?t:t.map(Fe))}function Qn(e){return De(e=ge(e),"iterate",Gs),e}const Yl={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,Fe)},concat(...e){return gs(this).concat(...e.map(t=>ue(t)?gs(t):t))},entries(){return Xa(this,"entries",e=>(e[1]=Fe(e[1]),e))},every(e,t){return St(this,"every",e,t,void 0,arguments)},filter(e,t){return St(this,"filter",e,t,s=>s.map(Fe),arguments)},find(e,t){return St(this,"find",e,t,Fe,arguments)},findIndex(e,t){return St(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return St(this,"findLast",e,t,Fe,arguments)},findLastIndex(e,t){return St(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return St(this,"forEach",e,t,void 0,arguments)},includes(...e){return Qa(this,"includes",e)},indexOf(...e){return Qa(this,"indexOf",e)},join(e){return gs(this).join(e)},lastIndexOf(...e){return Qa(this,"lastIndexOf",e)},map(e,t){return St(this,"map",e,t,void 0,arguments)},pop(){return As(this,"pop")},push(...e){return As(this,"push",e)},reduce(e,...t){return vr(this,"reduce",e,t)},reduceRight(e,...t){return vr(this,"reduceRight",e,t)},shift(){return As(this,"shift")},some(e,t){return St(this,"some",e,t,void 0,arguments)},splice(...e){return As(this,"splice",e)},toReversed(){return gs(this).toReversed()},toSorted(e){return gs(this).toSorted(e)},toSpliced(...e){return gs(this).toSpliced(...e)},unshift(...e){return As(this,"unshift",e)},values(){return Xa(this,"values",Fe)}};function Xa(e,t,s){const a=Qn(e),n=a[t]();return a!==e&&!lt(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=s(r.value)),r}),n}const ql=Array.prototype;function St(e,t,s,a,n,r){const i=Qn(e),o=i!==e&&!lt(e),l=i[t];if(l!==ql[t]){const u=l.apply(e,r);return o?Fe(u):u}let c=s;i!==e&&(o?c=function(u,p){return s.call(this,Fe(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=l.call(i,c,a);return o&&n?n(d):d}function vr(e,t,s,a){const n=Qn(e);let r=s;return n!==e&&(lt(e)?s.length>3&&(r=function(i,o,l){return s.call(this,i,o,l,e)}):r=function(i,o,l){return s.call(this,i,Fe(o),l,e)}),n[t](r,...a)}function Qa(e,t,s){const a=ge(e);De(a,"iterate",Gs);const n=a[t](...s);return(n===-1||n===!1)&&tr(s[0])?(s[0]=ge(s[0]),a[t](...s)):n}function As(e,t,s=[]){It(),Vn();const a=ge(e)[t].apply(e,s);return Wn(),Nt(),a}const Kl=Gn("__proto__,__v_isRef,__isVue"),to=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wt));function Vl(e){wt(e)||(e=String(e));const t=ge(this);return De(t,"has",e),t.hasOwnProperty(e)}class so{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,a){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return a===(n?r?nc:io:r?ro:no).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const i=ue(t);if(!n){let l;if(i&&(l=Yl[s]))return l;if(s==="hasOwnProperty")return Vl}const o=Reflect.get(t,s,ke(t)?t:a);if((wt(s)?to.has(s):Kl(s))||(n||De(t,"get",s),r))return o;if(ke(o)){const l=i&&qn(s)?o:o.value;return n&&we(l)?Sn(l):l}return we(o)?n?Sn(o):Mt(o):o}}class ao extends so{constructor(t=!1){super(!1,t)}set(t,s,a,n){let r=t[s];if(!this._isShallow){const l=hs(r);if(!lt(a)&&!hs(a)&&(r=ge(r),a=ge(a)),!ue(t)&&ke(r)&&!ke(a))return l||(r.value=a),!0}const i=ue(t)&&qn(s)?Number(s)<t.length:_e(t,s),o=Reflect.set(t,s,a,ke(t)?t:n);return t===ge(n)&&(i?Vt(a,r)&&Lt(t,"set",s,a):Lt(t,"add",s,a)),o}deleteProperty(t,s){const a=_e(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&a&&Lt(t,"delete",s,void 0),n}has(t,s){const a=Reflect.has(t,s);return(!wt(s)||!to.has(s))&&De(t,"has",s),a}ownKeys(t){return De(t,"iterate",ue(t)?"length":us),Reflect.ownKeys(t)}}class Wl extends so{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Jl=new ao,Xl=new Wl,Ql=new ao(!0);const Tn=e=>e,ta=e=>Reflect.getPrototypeOf(e);function Zl(e,t,s){return function(...a){const n=this.__v_raw,r=ge(n),i=ws(r),o=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=n[e](...a),d=s?Tn:t?En:Fe;return!t&&De(r,"iterate",l?xn:us),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:o?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function sa(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ec(e,t){const s={get(n){const r=this.__v_raw,i=ge(r),o=ge(n);e||(Vt(n,o)&&De(i,"get",n),De(i,"get",o));const{has:l}=ta(i),c=t?Tn:e?En:Fe;if(l.call(i,n))return c(r.get(n));if(l.call(i,o))return c(r.get(o));r!==i&&r.get(n)},get size(){const n=this.__v_raw;return!e&&De(ge(n),"iterate",us),n.size},has(n){const r=this.__v_raw,i=ge(r),o=ge(n);return e||(Vt(n,o)&&De(i,"has",n),De(i,"has",o)),n===o?r.has(n):r.has(n)||r.has(o)},forEach(n,r){const i=this,o=i.__v_raw,l=ge(o),c=t?Tn:e?En:Fe;return!e&&De(l,"iterate",us),o.forEach((d,u)=>n.call(r,c(d),c(u),i))}};return Ce(s,e?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(n){!t&&!lt(n)&&!hs(n)&&(n=ge(n));const r=ge(this);return ta(r).has.call(r,n)||(r.add(n),Lt(r,"add",n,n)),this},set(n,r){!t&&!lt(r)&&!hs(r)&&(r=ge(r));const i=ge(this),{has:o,get:l}=ta(i);let c=o.call(i,n);c||(n=ge(n),c=o.call(i,n));const d=l.call(i,n);return i.set(n,r),c?Vt(r,d)&&Lt(i,"set",n,r):Lt(i,"add",n,r),this},delete(n){const r=ge(this),{has:i,get:o}=ta(r);let l=i.call(r,n);l||(n=ge(n),l=i.call(r,n)),o&&o.call(r,n);const c=r.delete(n);return l&&Lt(r,"delete",n,void 0),c},clear(){const n=ge(this),r=n.size!==0,i=n.clear();return r&&Lt(n,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=Zl(n,e,t)}),s}function Zn(e,t){const s=ec(e,t);return(a,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?a:Reflect.get(_e(s,n)&&n in a?s:a,n,r)}const tc={get:Zn(!1,!1)},sc={get:Zn(!1,!0)},ac={get:Zn(!0,!1)};const no=new WeakMap,ro=new WeakMap,io=new WeakMap,nc=new WeakMap;function rc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ic(e){return e.__v_skip||!Object.isExtensible(e)?0:rc(Ol(e))}function Mt(e){return hs(e)?e:er(e,!1,Jl,tc,no)}function oo(e){return er(e,!1,Ql,sc,ro)}function Sn(e){return er(e,!0,Xl,ac,io)}function er(e,t,s,a,n){if(!we(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=ic(e);if(r===0)return e;const i=n.get(e);if(i)return i;const o=new Proxy(e,r===2?a:s);return n.set(e,o),o}function ps(e){return hs(e)?ps(e.__v_raw):!!(e&&e.__v_isReactive)}function hs(e){return!!(e&&e.__v_isReadonly)}function lt(e){return!!(e&&e.__v_isShallow)}function tr(e){return e?!!e.__v_raw:!1}function ge(e){const t=e&&e.__v_raw;return t?ge(t):e}function sr(e){return!_e(e,"__v_skip")&&Object.isExtensible(e)&&Fi(e,"__v_skip",!0),e}const Fe=e=>we(e)?Mt(e):e,En=e=>we(e)?Sn(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function Qe(e){return lo(e,!1)}function oc(e){return lo(e,!0)}function lo(e,t){return ke(e)?e:new lc(e,t)}class lc{constructor(t,s){this.dep=new Xn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ge(t),this._value=s?t:Fe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,a=this.__v_isShallow||lt(t)||hs(t);t=a?t:ge(t),Vt(t,s)&&(this._rawValue=t,this._value=a?t:Fe(t),this.dep.trigger())}}function Wt(e){return ke(e)?e.value:e}const cc={get:(e,t,s)=>t==="__v_raw"?e:Wt(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const n=e[t];return ke(n)&&!ke(s)?(n.value=s,!0):Reflect.set(e,t,s,a)}};function co(e){return ps(e)?e:new Proxy(e,cc)}function dc(e){const t=ue(e)?new Array(e.length):{};for(const s in e)t[s]=pc(e,s);return t}class uc{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return jl(ge(this._object),this._key)}}function pc(e,t,s){const a=e[t];return ke(a)?a:new uc(e,t,s)}class fc{constructor(t,s,a){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Xn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Wi(this,!0),!0}get value(){const t=this.dep.track();return Qi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function hc(e,t,s=!1){let a,n;return fe(e)?a=e:(a=e.get,n=e.set),new fc(a,n,s)}const aa={},ma=new WeakMap;let os;function gc(e,t=!1,s=os){if(s){let a=ma.get(s);a||ma.set(s,a=[]),a.push(e)}}function mc(e,t,s=ve){const{immediate:a,deep:n,once:r,scheduler:i,augmentJob:o,call:l}=s,c=v=>n?v:lt(v)||n===!1||n===0?Rt(v,1):Rt(v);let d,u,p,f,g=!1,m=!1;if(ke(e)?(u=()=>e.value,g=lt(e)):ps(e)?(u=()=>c(e),g=!0):ue(e)?(m=!0,g=e.some(v=>ps(v)||lt(v)),u=()=>e.map(v=>{if(ke(v))return v.value;if(ps(v))return c(v);if(fe(v))return l?l(v,2):v()})):fe(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){It();try{p()}finally{Nt()}}const v=os;os=d;try{return l?l(e,3,[f]):e(f)}finally{os=v}}:u=yt,t&&n){const v=u,O=n===!0?1/0:n;u=()=>Rt(v(),O)}const A=qi(),S=()=>{d.stop(),A&&A.active&&Yn(A.effects,d)};if(r&&t){const v=t;t=(...O)=>{v(...O),S()}}let P=m?new Array(e.length).fill(aa):aa;const w=v=>{if(!(!(d.flags&1)||!d.dirty&&!v))if(t){const O=d.run();if(n||g||(m?O.some((R,T)=>Vt(R,P[T])):Vt(O,P))){p&&p();const R=os;os=d;try{const T=[O,P===aa?void 0:m&&P[0]===aa?[]:P,f];P=O,l?l(t,3,T):t(...T)}finally{os=R}}}else d.run()};return o&&o(w),d=new Ki(u),d.scheduler=i?()=>i(w,!1):w,f=v=>gc(v,!1,d),p=d.onStop=()=>{const v=ma.get(d);if(v){if(l)l(v,4);else for(const O of v)O();ma.delete(d)}},t?a?w(!0):P=d.run():i?i(w.bind(null,!0),!0):d.run(),S.pause=d.pause.bind(d),S.resume=d.resume.bind(d),S.stop=S,S}function Rt(e,t=1/0,s){if(t<=0||!we(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,ke(e))Rt(e.value,t,s);else if(ue(e))for(let a=0;a<e.length;a++)Rt(e[a],t,s);else if(Ca(e)||ws(e))e.forEach(a=>{Rt(a,t,s)});else if(Bi(e)){for(const a in e)Rt(e[a],t,s);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Rt(e[a],t,s)}return e}function Qs(e,t,s,a){try{return a?e(...a):e()}catch(n){Ia(n,t,s)}}function ct(e,t,s,a){if(fe(e)){const n=Qs(e,t,s,a);return n&&Ii(n)&&n.catch(r=>{Ia(r,t,s)}),n}if(ue(e)){const n=[];for(let r=0;r<e.length;r++)n.push(ct(e[r],t,s,a));return n}}function Ia(e,t,s,a=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ve;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const d=o.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}o=o.parent}if(r){It(),Qs(r,null,10,[e,l,c]),Nt();return}}bc(e,s,n,a,i)}function bc(e,t,s,a=!0,n=!1){if(n)throw e;console.error(e)}const $e=[];let gt=-1;const xs=[];let Gt=null,_s=0;const uo=Promise.resolve();let ba=null;function ar(e){const t=ba||uo;return e?t.then(this?e.bind(this):e):t}function _c(e){let t=gt+1,s=$e.length;for(;t<s;){const a=t+s>>>1,n=$e[a],r=js(n);r<e||r===e&&n.flags&2?t=a+1:s=a}return t}function nr(e){if(!(e.flags&1)){const t=js(e),s=$e[$e.length-1];!s||!(e.flags&2)&&t>=js(s)?$e.push(e):$e.splice(_c(t),0,e),e.flags|=1,po()}}function po(){ba||(ba=uo.then(ho))}function yc(e){ue(e)?xs.push(...e):Gt&&e.id===-1?Gt.splice(_s+1,0,e):e.flags&1||(xs.push(e),e.flags|=1),po()}function wr(e,t,s=gt+1){for(;s<$e.length;s++){const a=$e[s];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;$e.splice(s,1),s--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function fo(e){if(xs.length){const t=[...new Set(xs)].sort((s,a)=>js(s)-js(a));if(xs.length=0,Gt){Gt.push(...t);return}for(Gt=t,_s=0;_s<Gt.length;_s++){const s=Gt[_s];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Gt=null,_s=0}}const js=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ho(e){try{for(gt=0;gt<$e.length;gt++){const t=$e[gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gt<$e.length;gt++){const t=$e[gt];t&&(t.flags&=-2)}gt=-1,$e.length=0,fo(),ba=null,($e.length||xs.length)&&ho()}}let Je=null,go=null;function _a(e){const t=Je;return Je=e,go=e&&e.type.__scopeId||null,t}function kn(e,t=Je,s){if(!t||e._n)return e;const a=(...n)=>{a._d&&wa(-1);const r=_a(t);let i;try{i=e(...n)}finally{_a(r),a._d&&wa(1)}return i};return a._n=!0,a._c=!0,a._d=!0,a}function vc(e,t){if(Je===null)return e;const s=Ua(Je),a=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[r,i,o,l=ve]=t[n];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(i),a.push({dir:r,instance:s,value:i,oldValue:void 0,arg:o,modifiers:l}))}return e}function as(e,t,s,a){const n=e.dirs,r=t&&t.dirs;for(let i=0;i<n.length;i++){const o=n[i];r&&(o.oldValue=r[i].value);let l=o.dir[a];l&&(It(),ct(l,s,8,[e.el,o,e,t]),Nt())}}const wc=Symbol("_vte"),mo=e=>e.__isTeleport,Ot=Symbol("_leaveCb"),na=Symbol("_enterCb");function xc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $t(()=>{e.isMounted=!0}),Eo(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],bo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},_o=e=>{const t=e.subTree;return t.component?_o(t.component):t},Tc={name:"BaseTransition",props:bo,setup(e,{slots:t}){const s=lr(),a=xc();return()=>{const n=t.default&&wo(t.default(),!0);if(!n||!n.length)return;const r=yo(n),i=ge(e),{mode:o}=i;if(a.isLeaving)return Za(r);const l=xr(r);if(!l)return Za(r);let c=An(l,i,a,s,u=>c=u);l.type!==Ve&&Ys(l,c);let d=s.subTree&&xr(s.subTree);if(d&&d.type!==Ve&&!ls(d,l)&&_o(s).type!==Ve){let u=An(d,i,a,s);if(Ys(d,u),o==="out-in"&&l.type!==Ve)return a.isLeaving=!0,u.afterLeave=()=>{a.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Za(r);o==="in-out"&&l.type!==Ve?u.delayLeave=(p,f,g)=>{const m=vo(a,d);m[String(d.key)]=d,p[Ot]=()=>{f(),p[Ot]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function yo(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==Ve){t=s;break}}return t}const Sc=Tc;function vo(e,t){const{leavingVNodes:s}=e;let a=s.get(t.type);return a||(a=Object.create(null),s.set(t.type,a)),a}function An(e,t,s,a,n){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:A,onAppear:S,onAfterAppear:P,onAppearCancelled:w}=t,v=String(e.key),O=vo(s,e),R=(h,b)=>{h&&ct(h,a,9,b)},T=(h,b)=>{const E=b[1];R(h,b),ue(h)?h.every(y=>y.length<=1)&&E():h.length<=1&&E()},_={mode:i,persisted:o,beforeEnter(h){let b=l;if(!s.isMounted)if(r)b=A||l;else return;h[Ot]&&h[Ot](!0);const E=O[v];E&&ls(e,E)&&E.el[Ot]&&E.el[Ot](),R(b,[h])},enter(h){let b=c,E=d,y=u;if(!s.isMounted)if(r)b=S||c,E=P||d,y=w||u;else return;let M=!1;const F=h[na]=K=>{M||(M=!0,K?R(y,[h]):R(E,[h]),_.delayedLeave&&_.delayedLeave(),h[na]=void 0)};b?T(b,[h,F]):F()},leave(h,b){const E=String(e.key);if(h[na]&&h[na](!0),s.isUnmounting)return b();R(p,[h]);let y=!1;const M=h[Ot]=F=>{y||(y=!0,b(),F?R(m,[h]):R(g,[h]),h[Ot]=void 0,O[E]===e&&delete O[E])};O[E]=e,f?T(f,[h,M]):M()},clone(h){const b=An(h,t,s,a,n);return n&&n(b),b}};return _}function Za(e){if(Na(e))return e=Xt(e),e.children=null,e}function xr(e){if(!Na(e))return mo(e.type)&&e.children?yo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&fe(s.default))return s.default()}}function Ys(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ys(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wo(e,t=!1,s){let a=[],n=0;for(let r=0;r<e.length;r++){let i=e[r];const o=s==null?i.key:String(s)+String(i.key!=null?i.key:r);i.type===bt?(i.patchFlag&128&&n++,a=a.concat(wo(i.children,t,o))):(t||i.type!==Ve)&&a.push(o!=null?Xt(i,{key:o}):i)}if(n>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function xo(e,t){return fe(e)?Ce({name:e.name},t,{setup:e}):e}function To(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ya=new WeakMap;function Is(e,t,s,a,n=!1){if(ue(e)){e.forEach((g,m)=>Is(g,t&&(ue(t)?t[m]:t),s,a,n));return}if(Ns(a)&&!n){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Is(e,t,s,a.component.subTree);return}const r=a.shapeFlag&4?Ua(a.component):a.el,i=n?null:r,{i:o,r:l}=e,c=t&&t.r,d=o.refs===ve?o.refs={}:o.refs,u=o.setupState,p=ge(u),f=u===ve?Di:g=>_e(p,g);if(c!=null&&c!==l){if(Tr(t),Pe(c))d[c]=null,f(c)&&(u[c]=null);else if(ke(c)){c.value=null;const g=t;g.k&&(d[g.k]=null)}}if(fe(l))Qs(l,o,12,[i,d]);else{const g=Pe(l),m=ke(l);if(g||m){const A=()=>{if(e.f){const S=g?f(l)?u[l]:d[l]:l.value;if(n)ue(S)&&Yn(S,r);else if(ue(S))S.includes(r)||S.push(r);else if(g)d[l]=[r],f(l)&&(u[l]=d[l]);else{const P=[r];l.value=P,e.k&&(d[e.k]=P)}}else g?(d[l]=i,f(l)&&(u[l]=i)):m&&(l.value=i,e.k&&(d[e.k]=i))};if(i){const S=()=>{A(),ya.delete(e)};S.id=-1,ya.set(e,S),qe(S,s)}else Tr(e),A()}}}function Tr(e){const t=ya.get(e);t&&(t.flags|=8,ya.delete(e))}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Ns=e=>!!e.type.__asyncLoader,Na=e=>e.type.__isKeepAlive;function Ec(e,t){So(e,"a",t)}function kc(e,t){So(e,"da",t)}function So(e,t,s=Ie){const a=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Ba(t,a,s),s){let n=s.parent;for(;n&&n.parent;)Na(n.parent.vnode)&&Ac(a,t,s,n),n=n.parent}}function Ac(e,t,s,a){const n=Ba(t,e,a,!0);Fa(()=>{Yn(a[t],n)},s)}function Ba(e,t,s=Ie,a=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...i)=>{It();const o=Zs(s),l=ct(t,s,e,i);return o(),Nt(),l});return a?n.unshift(r):n.push(r),r}}const Ft=e=>(t,s=Ie)=>{(!Ks||e==="sp")&&Ba(e,(...a)=>t(...a),s)},Pc=Ft("bm"),$t=Ft("m"),Oc=Ft("bu"),Cc=Ft("u"),Eo=Ft("bum"),Fa=Ft("um"),Lc=Ft("sp"),Rc=Ft("rtg"),Mc=Ft("rtc");function Dc(e,t=Ie){Ba("ec",e,t)}const Ic="components",ko=Symbol.for("v-ndc");function Nc(e){return Pe(e)?Bc(Ic,e,!1)||e:e||ko}function Bc(e,t,s=!0,a=!1){const n=Je||Ie;if(n){const r=n.type;{const o=Ed(r,!1);if(o&&(o===t||o===at(t)||o===Ra(at(t))))return r}const i=Sr(n[e]||r[e],t)||Sr(n.appContext[e],t);return!i&&a?r:i}}function Sr(e,t){return e&&(e[t]||e[at(t)]||e[Ra(at(t))])}const Pn=e=>e?qo(e)?Ua(e):Pn(e.parent):null,Bs=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pn(e.parent),$root:e=>Pn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Po(e),$forceUpdate:e=>e.f||(e.f=()=>{nr(e.update)}),$nextTick:e=>e.n||(e.n=ar.bind(e.proxy)),$watch:e=>rd.bind(e)}),en=(e,t)=>e!==ve&&!e.__isScriptSetup&&_e(e,t),Fc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:a,data:n,props:r,accessCache:i,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const f=i[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(en(a,t))return i[t]=1,a[t];if(n!==ve&&_e(n,t))return i[t]=2,n[t];if((c=e.propsOptions[0])&&_e(c,t))return i[t]=3,r[t];if(s!==ve&&_e(s,t))return i[t]=4,s[t];On&&(i[t]=0)}}const d=Bs[t];let u,p;if(d)return t==="$attrs"&&De(e.attrs,"get",""),d(e);if((u=o.__cssModules)&&(u=u[t]))return u;if(s!==ve&&_e(s,t))return i[t]=4,s[t];if(p=l.config.globalProperties,_e(p,t))return p[t]},set({_:e},t,s){const{data:a,setupState:n,ctx:r}=e;return en(n,t)?(n[t]=s,!0):a!==ve&&_e(a,t)?(a[t]=s,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:n,propsOptions:r,type:i}},o){let l,c;return!!(s[o]||e!==ve&&o[0]!=="$"&&_e(e,o)||en(t,o)||(l=r[0])&&_e(l,o)||_e(a,o)||_e(Bs,o)||_e(n.config.globalProperties,o)||(c=i.__cssModules)&&c[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:_e(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Er(e){return ue(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let On=!0;function $c(e){const t=Po(e),s=e.proxy,a=e.ctx;On=!1,t.beforeCreate&&kr(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:i,watch:o,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:g,activated:m,deactivated:A,beforeDestroy:S,beforeUnmount:P,destroyed:w,unmounted:v,render:O,renderTracked:R,renderTriggered:T,errorCaptured:_,serverPrefetch:h,expose:b,inheritAttrs:E,components:y,directives:M,filters:F}=t;if(c&&zc(c,a,null),i)for(const H in i){const I=i[H];fe(I)&&(a[H]=I.bind(s))}if(n){const H=n.call(s,s);we(H)&&(e.data=Mt(H))}if(On=!0,r)for(const H in r){const I=r[H],X=fe(I)?I.bind(s,s):fe(I.get)?I.get.bind(s,s):yt,te=!fe(I)&&fe(I.set)?I.set.bind(s):yt,Z=We({get:X,set:te});Object.defineProperty(a,H,{enumerable:!0,configurable:!0,get:()=>Z.value,set:oe=>Z.value=oe})}if(o)for(const H in o)Ao(o[H],a,s,H);if(l){const H=fe(l)?l.call(s):l;Reflect.ownKeys(H).forEach(I=>{da(I,H[I])})}d&&kr(d,e,"c");function B(H,I){ue(I)?I.forEach(X=>H(X.bind(s))):I&&H(I.bind(s))}if(B(Pc,u),B($t,p),B(Oc,f),B(Cc,g),B(Ec,m),B(kc,A),B(Dc,_),B(Mc,R),B(Rc,T),B(Eo,P),B(Fa,v),B(Lc,h),ue(b))if(b.length){const H=e.exposed||(e.exposed={});b.forEach(I=>{Object.defineProperty(H,I,{get:()=>s[I],set:X=>s[I]=X,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===yt&&(e.render=O),E!=null&&(e.inheritAttrs=E),y&&(e.components=y),M&&(e.directives=M),h&&To(e)}function zc(e,t,s=yt){ue(e)&&(e=Cn(e));for(const a in e){const n=e[a];let r;we(n)?"default"in n?r=st(n.from||a,n.default,!0):r=st(n.from||a):r=st(n),ke(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[a]=r}}function kr(e,t,s){ct(ue(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function Ao(e,t,s,a){let n=a.includes(".")?Ho(s,a):()=>s[a];if(Pe(e)){const r=t[e];fe(r)&&Fs(n,r)}else if(fe(e))Fs(n,e.bind(s));else if(we(e))if(ue(e))e.forEach(r=>Ao(r,t,s,a));else{const r=fe(e.handler)?e.handler.bind(s):t[e.handler];fe(r)&&Fs(n,r,e)}}function Po(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,o=r.get(t);let l;return o?l=o:!n.length&&!s&&!a?l=t:(l={},n.length&&n.forEach(c=>va(l,c,i,!0)),va(l,t,i)),we(t)&&r.set(t,l),l}function va(e,t,s,a=!1){const{mixins:n,extends:r}=t;r&&va(e,r,s,!0),n&&n.forEach(i=>va(e,i,s,!0));for(const i in t)if(!(a&&i==="expose")){const o=Hc[i]||s&&s[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const Hc={data:Ar,props:Pr,emits:Pr,methods:Cs,computed:Cs,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Cs,directives:Cs,watch:Gc,provide:Ar,inject:Uc};function Ar(e,t){return t?e?function(){return Ce(fe(e)?e.call(this,this):e,fe(t)?t.call(this,this):t)}:t:e}function Uc(e,t){return Cs(Cn(e),Cn(t))}function Cn(e){if(ue(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Cs(e,t){return e?Ce(Object.create(null),e,t):t}function Pr(e,t){return e?ue(e)&&ue(t)?[...new Set([...e,...t])]:Ce(Object.create(null),Er(e),Er(t??{})):t}function Gc(e,t){if(!e)return t;if(!t)return e;const s=Ce(Object.create(null),e);for(const a in t)s[a]=Ne(e[a],t[a]);return s}function Oo(){return{app:null,config:{isNativeTag:Di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jc=0;function Yc(e,t){return function(a,n=null){fe(a)||(a=Ce({},a)),n!=null&&!we(n)&&(n=null);const r=Oo(),i=new WeakSet,o=[];let l=!1;const c=r.app={_uid:jc++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:Ad,get config(){return r.config},set config(d){},use(d,...u){return i.has(d)||(d&&fe(d.install)?(i.add(d),d.install(c,...u)):fe(d)&&(i.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||je(a,n);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,Ua(f.component)}},onUnmount(d){o.push(d)},unmount(){l&&(ct(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=fs;fs=c;try{return d()}finally{fs=u}}};return c}}let fs=null;function da(e,t){if(Ie){let s=Ie.provides;const a=Ie.parent&&Ie.parent.provides;a===s&&(s=Ie.provides=Object.create(a)),s[e]=t}}function st(e,t,s=!1){const a=lr();if(a||fs){let n=fs?fs._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&fe(t)?t.call(a&&a.proxy):t}}function qc(){return!!(lr()||fs)}const Co={},Lo=()=>Object.create(Co),Ro=e=>Object.getPrototypeOf(e)===Co;function Kc(e,t,s,a=!1){const n={},r=Lo();e.propsDefaults=Object.create(null),Mo(e,t,n,r);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);s?e.props=a?n:oo(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function Vc(e,t,s,a){const{props:n,attrs:r,vnode:{patchFlag:i}}=e,o=ge(n),[l]=e.propsOptions;let c=!1;if((a||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if($a(e.emitsOptions,p))continue;const f=t[p];if(l)if(_e(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const g=at(p);n[g]=Ln(l,o,g,f,e,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{Mo(e,t,n,r)&&(c=!0);let d;for(const u in o)(!t||!_e(t,u)&&((d=Zt(u))===u||!_e(t,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(n[u]=Ln(l,o,u,void 0,e,!0)):delete n[u]);if(r!==o)for(const u in r)(!t||!_e(t,u))&&(delete r[u],c=!0)}c&&Lt(e.attrs,"set","")}function Mo(e,t,s,a){const[n,r]=e.propsOptions;let i=!1,o;if(t)for(let l in t){if(Rs(l))continue;const c=t[l];let d;n&&_e(n,d=at(l))?!r||!r.includes(d)?s[d]=c:(o||(o={}))[d]=c:$a(e.emitsOptions,l)||(!(l in a)||c!==a[l])&&(a[l]=c,i=!0)}if(r){const l=ge(s),c=o||ve;for(let d=0;d<r.length;d++){const u=r[d];s[u]=Ln(n,l,u,c[u],e,!_e(c,u))}}return i}function Ln(e,t,s,a,n,r){const i=e[s];if(i!=null){const o=_e(i,"default");if(o&&a===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&fe(l)){const{propsDefaults:c}=n;if(s in c)a=c[s];else{const d=Zs(n);a=c[s]=l.call(null,t),d()}}else a=l;n.ce&&n.ce._setProp(s,a)}i[0]&&(r&&!o?a=!1:i[1]&&(a===""||a===Zt(s))&&(a=!0))}return a}const Wc=new WeakMap;function Do(e,t,s=!1){const a=s?Wc:t.propsCache,n=a.get(e);if(n)return n;const r=e.props,i={},o=[];let l=!1;if(!fe(e)){const d=u=>{l=!0;const[p,f]=Do(u,t,!0);Ce(i,p),f&&o.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return we(e)&&a.set(e,vs),vs;if(ue(r))for(let d=0;d<r.length;d++){const u=at(r[d]);Or(u)&&(i[u]=ve)}else if(r)for(const d in r){const u=at(d);if(Or(u)){const p=r[d],f=i[u]=ue(p)||fe(p)?{type:p}:Ce({},p),g=f.type;let m=!1,A=!0;if(ue(g))for(let S=0;S<g.length;++S){const P=g[S],w=fe(P)&&P.name;if(w==="Boolean"){m=!0;break}else w==="String"&&(A=!1)}else m=fe(g)&&g.name==="Boolean";f[0]=m,f[1]=A,(m||_e(f,"default"))&&o.push(u)}}const c=[i,o];return we(e)&&a.set(e,c),c}function Or(e){return e[0]!=="$"&&!Rs(e)}const rr=e=>e==="_"||e==="_ctx"||e==="$stable",ir=e=>ue(e)?e.map(_t):[_t(e)],Jc=(e,t,s)=>{if(t._n)return t;const a=kn((...n)=>ir(t(...n)),s);return a._c=!1,a},Io=(e,t,s)=>{const a=e._ctx;for(const n in e){if(rr(n))continue;const r=e[n];if(fe(r))t[n]=Jc(n,r,a);else if(r!=null){const i=ir(r);t[n]=()=>i}}},No=(e,t)=>{const s=ir(t);e.slots.default=()=>s},Bo=(e,t,s)=>{for(const a in t)(s||!rr(a))&&(e[a]=t[a])},Xc=(e,t,s)=>{const a=e.slots=Lo();if(e.vnode.shapeFlag&32){const n=t._;n?(Bo(a,t,s),s&&Fi(a,"_",n,!0)):Io(t,a)}else t&&No(e,t)},Qc=(e,t,s)=>{const{vnode:a,slots:n}=e;let r=!0,i=ve;if(a.shapeFlag&32){const o=t._;o?s&&o===1?r=!1:Bo(n,t,s):(r=!t.$stable,Io(t,n)),i=t}else t&&(No(e,t),i={default:1});if(r)for(const o in n)!rr(o)&&i[o]==null&&delete n[o]},qe=fd;function Zc(e){return ed(e)}function ed(e,t){const s=Ma();s.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:i,createText:o,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=yt,insertStaticContent:g}=e,m=(x,k,L,$=null,D=null,C=null,W=void 0,Y=null,j=!!k.dynamicChildren)=>{if(x===k)return;x&&!ls(x,k)&&($=z(x),oe(x,D,C,!0),x=null),k.patchFlag===-2&&(j=!1,k.dynamicChildren=null);const{type:G,ref:ce,shapeFlag:ne}=k;switch(G){case za:A(x,k,L,$);break;case Ve:S(x,k,L,$);break;case ua:x==null&&P(k,L,$,W);break;case bt:y(x,k,L,$,D,C,W,Y,j);break;default:ne&1?O(x,k,L,$,D,C,W,Y,j):ne&6?M(x,k,L,$,D,C,W,Y,j):(ne&64||ne&128)&&G.process(x,k,L,$,D,C,W,Y,j,ee)}ce!=null&&D?Is(ce,x&&x.ref,C,k||x,!k):ce==null&&x&&x.ref!=null&&Is(x.ref,null,C,x,!0)},A=(x,k,L,$)=>{if(x==null)a(k.el=o(k.children),L,$);else{const D=k.el=x.el;k.children!==x.children&&c(D,k.children)}},S=(x,k,L,$)=>{x==null?a(k.el=l(k.children||""),L,$):k.el=x.el},P=(x,k,L,$)=>{[x.el,x.anchor]=g(x.children,k,L,$,x.el,x.anchor)},w=({el:x,anchor:k},L,$)=>{let D;for(;x&&x!==k;)D=p(x),a(x,L,$),x=D;a(k,L,$)},v=({el:x,anchor:k})=>{let L;for(;x&&x!==k;)L=p(x),n(x),x=L;n(k)},O=(x,k,L,$,D,C,W,Y,j)=>{if(k.type==="svg"?W="svg":k.type==="math"&&(W="mathml"),x==null)R(k,L,$,D,C,W,Y,j);else{const G=x.el&&x.el._isVueCE?x.el:null;try{G&&G._beginPatch(),h(x,k,D,C,W,Y,j)}finally{G&&G._endPatch()}}},R=(x,k,L,$,D,C,W,Y)=>{let j,G;const{props:ce,shapeFlag:ne,transition:de,dirs:pe}=x;if(j=x.el=i(x.type,C,ce&&ce.is,ce),ne&8?d(j,x.children):ne&16&&_(x.children,j,null,$,D,tn(x,C),W,Y),pe&&as(x,null,$,"created"),T(j,x,x.scopeId,W,$),ce){for(const xe in ce)xe!=="value"&&!Rs(xe)&&r(j,xe,null,ce[xe],C,$);"value"in ce&&r(j,"value",null,ce.value,C),(G=ce.onVnodeBeforeMount)&&ht(G,$,x)}pe&&as(x,null,$,"beforeMount");const he=td(D,de);he&&de.beforeEnter(j),a(j,k,L),((G=ce&&ce.onVnodeMounted)||he||pe)&&qe(()=>{G&&ht(G,$,x),he&&de.enter(j),pe&&as(x,null,$,"mounted")},D)},T=(x,k,L,$,D)=>{if(L&&f(x,L),$)for(let C=0;C<$.length;C++)f(x,$[C]);if(D){let C=D.subTree;if(k===C||Go(C.type)&&(C.ssContent===k||C.ssFallback===k)){const W=D.vnode;T(x,W,W.scopeId,W.slotScopeIds,D.parent)}}},_=(x,k,L,$,D,C,W,Y,j=0)=>{for(let G=j;G<x.length;G++){const ce=x[G]=Y?jt(x[G]):_t(x[G]);m(null,ce,k,L,$,D,C,W,Y)}},h=(x,k,L,$,D,C,W)=>{const Y=k.el=x.el;let{patchFlag:j,dynamicChildren:G,dirs:ce}=k;j|=x.patchFlag&16;const ne=x.props||ve,de=k.props||ve;let pe;if(L&&ns(L,!1),(pe=de.onVnodeBeforeUpdate)&&ht(pe,L,k,x),ce&&as(k,x,L,"beforeUpdate"),L&&ns(L,!0),(ne.innerHTML&&de.innerHTML==null||ne.textContent&&de.textContent==null)&&d(Y,""),G?b(x.dynamicChildren,G,Y,L,$,tn(k,D),C):W||I(x,k,Y,null,L,$,tn(k,D),C,!1),j>0){if(j&16)E(Y,ne,de,L,D);else if(j&2&&ne.class!==de.class&&r(Y,"class",null,de.class,D),j&4&&r(Y,"style",ne.style,de.style,D),j&8){const he=k.dynamicProps;for(let xe=0;xe<he.length;xe++){const ye=he[xe],He=ne[ye],Ue=de[ye];(Ue!==He||ye==="value")&&r(Y,ye,He,Ue,D,L)}}j&1&&x.children!==k.children&&d(Y,k.children)}else!W&&G==null&&E(Y,ne,de,L,D);((pe=de.onVnodeUpdated)||ce)&&qe(()=>{pe&&ht(pe,L,k,x),ce&&as(k,x,L,"updated")},$)},b=(x,k,L,$,D,C,W)=>{for(let Y=0;Y<k.length;Y++){const j=x[Y],G=k[Y],ce=j.el&&(j.type===bt||!ls(j,G)||j.shapeFlag&198)?u(j.el):L;m(j,G,ce,null,$,D,C,W,!0)}},E=(x,k,L,$,D)=>{if(k!==L){if(k!==ve)for(const C in k)!Rs(C)&&!(C in L)&&r(x,C,k[C],null,D,$);for(const C in L){if(Rs(C))continue;const W=L[C],Y=k[C];W!==Y&&C!=="value"&&r(x,C,Y,W,D,$)}"value"in L&&r(x,"value",k.value,L.value,D)}},y=(x,k,L,$,D,C,W,Y,j)=>{const G=k.el=x?x.el:o(""),ce=k.anchor=x?x.anchor:o("");let{patchFlag:ne,dynamicChildren:de,slotScopeIds:pe}=k;pe&&(Y=Y?Y.concat(pe):pe),x==null?(a(G,L,$),a(ce,L,$),_(k.children||[],L,ce,D,C,W,Y,j)):ne>0&&ne&64&&de&&x.dynamicChildren?(b(x.dynamicChildren,de,L,D,C,W,Y),(k.key!=null||D&&k===D.subTree)&&Fo(x,k,!0)):I(x,k,L,ce,D,C,W,Y,j)},M=(x,k,L,$,D,C,W,Y,j)=>{k.slotScopeIds=Y,x==null?k.shapeFlag&512?D.ctx.activate(k,L,$,W,j):F(k,L,$,D,C,W,j):K(x,k,j)},F=(x,k,L,$,D,C,W)=>{const Y=x.component=vd(x,$,D);if(Na(x)&&(Y.ctx.renderer=ee),wd(Y,!1,W),Y.asyncDep){if(D&&D.registerDep(Y,B,W),!x.el){const j=Y.subTree=je(Ve);S(null,j,k,L),x.placeholder=j.el}}else B(Y,x,k,L,D,C,W)},K=(x,k,L)=>{const $=k.component=x.component;if(ud(x,k,L))if($.asyncDep&&!$.asyncResolved){H($,k,L);return}else $.next=k,$.update();else k.el=x.el,$.vnode=k},B=(x,k,L,$,D,C,W)=>{const Y=()=>{if(x.isMounted){let{next:ne,bu:de,u:pe,parent:he,vnode:xe}=x;{const pt=$o(x);if(pt){ne&&(ne.el=xe.el,H(x,ne,W)),pt.asyncDep.then(()=>{x.isUnmounted||Y()});return}}let ye=ne,He;ns(x,!1),ne?(ne.el=xe.el,H(x,ne,W)):ne=xe,de&&ca(de),(He=ne.props&&ne.props.onVnodeBeforeUpdate)&&ht(He,he,ne,xe),ns(x,!0);const Ue=Lr(x),ut=x.subTree;x.subTree=Ue,m(ut,Ue,u(ut.el),z(ut),x,D,C),ne.el=Ue.el,ye===null&&pd(x,Ue.el),pe&&qe(pe,D),(He=ne.props&&ne.props.onVnodeUpdated)&&qe(()=>ht(He,he,ne,xe),D)}else{let ne;const{el:de,props:pe}=k,{bm:he,m:xe,parent:ye,root:He,type:Ue}=x,ut=Ns(k);ns(x,!1),he&&ca(he),!ut&&(ne=pe&&pe.onVnodeBeforeMount)&&ht(ne,ye,k),ns(x,!0);{He.ce&&He.ce._def.shadowRoot!==!1&&He.ce._injectChildStyle(Ue);const pt=x.subTree=Lr(x);m(null,pt,L,$,x,D,C),k.el=pt.el}if(xe&&qe(xe,D),!ut&&(ne=pe&&pe.onVnodeMounted)){const pt=k;qe(()=>ht(ne,ye,pt),D)}(k.shapeFlag&256||ye&&Ns(ye.vnode)&&ye.vnode.shapeFlag&256)&&x.a&&qe(x.a,D),x.isMounted=!0,k=L=$=null}};x.scope.on();const j=x.effect=new Ki(Y);x.scope.off();const G=x.update=j.run.bind(j),ce=x.job=j.runIfDirty.bind(j);ce.i=x,ce.id=x.uid,j.scheduler=()=>nr(ce),ns(x,!0),G()},H=(x,k,L)=>{k.component=x;const $=x.vnode.props;x.vnode=k,x.next=null,Vc(x,k.props,$,L),Qc(x,k.children,L),It(),wr(x),Nt()},I=(x,k,L,$,D,C,W,Y,j=!1)=>{const G=x&&x.children,ce=x?x.shapeFlag:0,ne=k.children,{patchFlag:de,shapeFlag:pe}=k;if(de>0){if(de&128){te(G,ne,L,$,D,C,W,Y,j);return}else if(de&256){X(G,ne,L,$,D,C,W,Y,j);return}}pe&8?(ce&16&&ae(G,D,C),ne!==G&&d(L,ne)):ce&16?pe&16?te(G,ne,L,$,D,C,W,Y,j):ae(G,D,C,!0):(ce&8&&d(L,""),pe&16&&_(ne,L,$,D,C,W,Y,j))},X=(x,k,L,$,D,C,W,Y,j)=>{x=x||vs,k=k||vs;const G=x.length,ce=k.length,ne=Math.min(G,ce);let de;for(de=0;de<ne;de++){const pe=k[de]=j?jt(k[de]):_t(k[de]);m(x[de],pe,L,null,D,C,W,Y,j)}G>ce?ae(x,D,C,!0,!1,ne):_(k,L,$,D,C,W,Y,j,ne)},te=(x,k,L,$,D,C,W,Y,j)=>{let G=0;const ce=k.length;let ne=x.length-1,de=ce-1;for(;G<=ne&&G<=de;){const pe=x[G],he=k[G]=j?jt(k[G]):_t(k[G]);if(ls(pe,he))m(pe,he,L,null,D,C,W,Y,j);else break;G++}for(;G<=ne&&G<=de;){const pe=x[ne],he=k[de]=j?jt(k[de]):_t(k[de]);if(ls(pe,he))m(pe,he,L,null,D,C,W,Y,j);else break;ne--,de--}if(G>ne){if(G<=de){const pe=de+1,he=pe<ce?k[pe].el:$;for(;G<=de;)m(null,k[G]=j?jt(k[G]):_t(k[G]),L,he,D,C,W,Y,j),G++}}else if(G>de)for(;G<=ne;)oe(x[G],D,C,!0),G++;else{const pe=G,he=G,xe=new Map;for(G=he;G<=de;G++){const Ye=k[G]=j?jt(k[G]):_t(k[G]);Ye.key!=null&&xe.set(Ye.key,G)}let ye,He=0;const Ue=de-he+1;let ut=!1,pt=0;const ks=new Array(Ue);for(G=0;G<Ue;G++)ks[G]=0;for(G=pe;G<=ne;G++){const Ye=x[G];if(He>=Ue){oe(Ye,D,C,!0);continue}let ft;if(Ye.key!=null)ft=xe.get(Ye.key);else for(ye=he;ye<=de;ye++)if(ks[ye-he]===0&&ls(Ye,k[ye])){ft=ye;break}ft===void 0?oe(Ye,D,C,!0):(ks[ft-he]=G+1,ft>=pt?pt=ft:ut=!0,m(Ye,k[ft],L,null,D,C,W,Y,j),He++)}const hr=ut?sd(ks):vs;for(ye=hr.length-1,G=Ue-1;G>=0;G--){const Ye=he+G,ft=k[Ye],gr=k[Ye+1],mr=Ye+1<ce?gr.el||gr.placeholder:$;ks[G]===0?m(null,ft,L,mr,D,C,W,Y,j):ut&&(ye<0||G!==hr[ye]?Z(ft,L,mr,2):ye--)}}},Z=(x,k,L,$,D=null)=>{const{el:C,type:W,transition:Y,children:j,shapeFlag:G}=x;if(G&6){Z(x.component.subTree,k,L,$);return}if(G&128){x.suspense.move(k,L,$);return}if(G&64){W.move(x,k,L,ee);return}if(W===bt){a(C,k,L);for(let ne=0;ne<j.length;ne++)Z(j[ne],k,L,$);a(x.anchor,k,L);return}if(W===ua){w(x,k,L);return}if($!==2&&G&1&&Y)if($===0)Y.beforeEnter(C),a(C,k,L),qe(()=>Y.enter(C),D);else{const{leave:ne,delayLeave:de,afterLeave:pe}=Y,he=()=>{x.ctx.isUnmounted?n(C):a(C,k,L)},xe=()=>{C._isLeaving&&C[Ot](!0),ne(C,()=>{he(),pe&&pe()})};de?de(C,he,xe):xe()}else a(C,k,L)},oe=(x,k,L,$=!1,D=!1)=>{const{type:C,props:W,ref:Y,children:j,dynamicChildren:G,shapeFlag:ce,patchFlag:ne,dirs:de,cacheIndex:pe}=x;if(ne===-2&&(D=!1),Y!=null&&(It(),Is(Y,null,L,x,!0),Nt()),pe!=null&&(k.renderCache[pe]=void 0),ce&256){k.ctx.deactivate(x);return}const he=ce&1&&de,xe=!Ns(x);let ye;if(xe&&(ye=W&&W.onVnodeBeforeUnmount)&&ht(ye,k,x),ce&6)re(x.component,L,$);else{if(ce&128){x.suspense.unmount(L,$);return}he&&as(x,null,k,"beforeUnmount"),ce&64?x.type.remove(x,k,L,ee,$):G&&!G.hasOnce&&(C!==bt||ne>0&&ne&64)?ae(G,k,L,!1,!0):(C===bt&&ne&384||!D&&ce&16)&&ae(j,k,L),$&&ie(x)}(xe&&(ye=W&&W.onVnodeUnmounted)||he)&&qe(()=>{ye&&ht(ye,k,x),he&&as(x,null,k,"unmounted")},L)},ie=x=>{const{type:k,el:L,anchor:$,transition:D}=x;if(k===bt){Q(L,$);return}if(k===ua){v(x);return}const C=()=>{n(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(x.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:Y}=D,j=()=>W(L,C);Y?Y(x.el,C,j):j()}else C()},Q=(x,k)=>{let L;for(;x!==k;)L=p(x),n(x),x=L;n(k)},re=(x,k,L)=>{const{bum:$,scope:D,job:C,subTree:W,um:Y,m:j,a:G}=x;Cr(j),Cr(G),$&&ca($),D.stop(),C&&(C.flags|=8,oe(W,x,k,L)),Y&&qe(Y,k),qe(()=>{x.isUnmounted=!0},k)},ae=(x,k,L,$=!1,D=!1,C=0)=>{for(let W=C;W<x.length;W++)oe(x[W],k,L,$,D)},z=x=>{if(x.shapeFlag&6)return z(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const k=p(x.anchor||x.el),L=k&&k[wc];return L?p(L):k};let J=!1;const q=(x,k,L)=>{x==null?k._vnode&&oe(k._vnode,null,null,!0):m(k._vnode||null,x,k,null,null,null,L),k._vnode=x,J||(J=!0,wr(),fo(),J=!1)},ee={p:m,um:oe,m:Z,r:ie,mt:F,mc:_,pc:I,pbc:b,n:z,o:e};return{render:q,hydrate:void 0,createApp:Yc(q)}}function tn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ns({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function td(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fo(e,t,s=!1){const a=e.children,n=t.children;if(ue(a)&&ue(n))for(let r=0;r<a.length;r++){const i=a[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=jt(n[r]),o.el=i.el),!s&&o.patchFlag!==-2&&Fo(i,o)),o.type===za&&o.patchFlag!==-1&&(o.el=i.el),o.type===Ve&&!o.el&&(o.el=i.el)}}function sd(e){const t=e.slice(),s=[0];let a,n,r,i,o;const l=e.length;for(a=0;a<l;a++){const c=e[a];if(c!==0){if(n=s[s.length-1],e[n]<c){t[a]=n,s.push(a);continue}for(r=0,i=s.length-1;r<i;)o=r+i>>1,e[s[o]]<c?r=o+1:i=o;c<e[s[r]]&&(r>0&&(t[a]=s[r-1]),s[r]=a)}}for(r=s.length,i=s[r-1];r-- >0;)s[r]=i,i=t[i];return s}function $o(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$o(t)}function Cr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ad=Symbol.for("v-scx"),nd=()=>st(ad);function Fs(e,t,s){return zo(e,t,s)}function zo(e,t,s=ve){const{immediate:a,deep:n,flush:r,once:i}=s,o=Ce({},s),l=t&&a||!t&&r!=="post";let c;if(Ks){if(r==="sync"){const f=nd();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=yt,f.resume=yt,f.pause=yt,f}}const d=Ie;o.call=(f,g,m)=>ct(f,d,g,m);let u=!1;r==="post"?o.scheduler=f=>{qe(f,d&&d.suspense)}:r!=="sync"&&(u=!0,o.scheduler=(f,g)=>{g?f():nr(f)}),o.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=mc(e,t,o);return Ks&&(c?c.push(p):l&&p()),p}function rd(e,t,s){const a=this.proxy,n=Pe(e)?e.includes(".")?Ho(a,e):()=>a[e]:e.bind(a,a);let r;fe(t)?r=t:(r=t.handler,s=t);const i=Zs(this),o=zo(n,r.bind(a),s);return i(),o}function Ho(e,t){const s=t.split(".");return()=>{let a=e;for(let n=0;n<s.length&&a;n++)a=a[s[n]];return a}}const id=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${at(t)}Modifiers`]||e[`${Zt(t)}Modifiers`];function od(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||ve;let n=s;const r=t.startsWith("update:"),i=r&&id(a,t.slice(7));i&&(i.trim&&(n=s.map(d=>Pe(d)?d.trim():d)),i.number&&(n=s.map(Rl)));let o,l=a[o=Va(t)]||a[o=Va(at(t))];!l&&r&&(l=a[o=Va(Zt(t))]),l&&ct(l,e,6,n);const c=a[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ct(c,e,6,n)}}const ld=new WeakMap;function Uo(e,t,s=!1){const a=s?ld:t.emitsCache,n=a.get(e);if(n!==void 0)return n;const r=e.emits;let i={},o=!1;if(!fe(e)){const l=c=>{const d=Uo(c,t,!0);d&&(o=!0,Ce(i,d))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!o?(we(e)&&a.set(e,null),null):(ue(r)?r.forEach(l=>i[l]=null):Ce(i,r),we(e)&&a.set(e,i),i)}function $a(e,t){return!e||!Oa(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,Zt(t))||_e(e,t))}function Lr(e){const{type:t,vnode:s,proxy:a,withProxy:n,propsOptions:[r],slots:i,attrs:o,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:g,inheritAttrs:m}=e,A=_a(e);let S,P;try{if(s.shapeFlag&4){const v=n||a,O=v;S=_t(c.call(O,v,d,u,f,p,g)),P=o}else{const v=t;S=_t(v.length>1?v(u,{attrs:o,slots:i,emit:l}):v(u,null)),P=t.props?o:cd(o)}}catch(v){$s.length=0,Ia(v,e,1),S=je(Ve)}let w=S;if(P&&m!==!1){const v=Object.keys(P),{shapeFlag:O}=w;v.length&&O&7&&(r&&v.some(jn)&&(P=dd(P,r)),w=Xt(w,P,!1,!0))}return s.dirs&&(w=Xt(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(s.dirs):s.dirs),s.transition&&Ys(w,s.transition),S=w,_a(A),S}const cd=e=>{let t;for(const s in e)(s==="class"||s==="style"||Oa(s))&&((t||(t={}))[s]=e[s]);return t},dd=(e,t)=>{const s={};for(const a in e)(!jn(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function ud(e,t,s){const{props:a,children:n,component:r}=e,{props:i,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return a?Rr(a,i,c):!!i;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(i[p]!==a[p]&&!$a(c,p))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:a===i?!1:a?i?Rr(a,i,c):!0:!!i;return!1}function Rr(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(t[r]!==e[r]&&!$a(s,r))return!0}return!1}function pd({vnode:e,parent:t},s){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=s,t=t.parent;else break}}const Go=e=>e.__isSuspense;function fd(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):yc(e)}const bt=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),ua=Symbol.for("v-stc"),$s=[];let Xe=null;function nt(e=!1){$s.push(Xe=e?null:[])}function hd(){$s.pop(),Xe=$s[$s.length-1]||null}let qs=1;function wa(e,t=!1){qs+=e,e<0&&Xe&&t&&(Xe.hasOnce=!0)}function jo(e){return e.dynamicChildren=qs>0?Xe||vs:null,hd(),qs>0&&Xe&&Xe.push(e),e}function xt(e,t,s,a,n,r){return jo(U(e,t,s,a,n,r,!0))}function Mr(e,t,s,a,n){return jo(je(e,t,s,a,n,!0))}function xa(e){return e?e.__v_isVNode===!0:!1}function ls(e,t){return e.type===t.type&&e.key===t.key}const Yo=({key:e})=>e??null,pa=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||ke(e)||fe(e)?{i:Je,r:e,k:t,f:!!s}:e:null);function U(e,t=null,s=null,a=0,n=null,r=e===bt?0:1,i=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yo(t),ref:t&&pa(t),scopeId:go,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Je};return o?(or(l,s),r&128&&e.normalize(l)):s&&(l.shapeFlag|=Pe(s)?8:16),qs>0&&!i&&Xe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Xe.push(l),l}const je=gd;function gd(e,t=null,s=null,a=0,n=null,r=!1){if((!e||e===ko)&&(e=Ve),xa(e)){const o=Xt(e,t,!0);return s&&or(o,s),qs>0&&!r&&Xe&&(o.shapeFlag&6?Xe[Xe.indexOf(e)]=o:Xe.push(o)),o.patchFlag=-2,o}if(kd(e)&&(e=e.__vccOpts),t){t=md(t);let{class:o,style:l}=t;o&&!Pe(o)&&(t.class=Jt(o)),we(l)&&(tr(l)&&!ue(l)&&(l=Ce({},l)),t.style=Kn(l))}const i=Pe(e)?1:Go(e)?128:mo(e)?64:we(e)?4:fe(e)?2:0;return U(e,t,s,a,n,i,r,!0)}function md(e){return e?tr(e)||Ro(e)?Ce({},e):e:null}function Xt(e,t,s=!1,a=!1){const{props:n,ref:r,patchFlag:i,children:o,transition:l}=e,c=t?bd(n||{},t):n,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Yo(c),ref:t&&t.ref?s&&r?ue(r)?r.concat(pa(t)):[r,pa(t)]:pa(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==bt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Ys(d,l.clone(d)),d}function Ha(e=" ",t=0){return je(za,null,e,t)}function es(e,t){const s=je(ua,null,e);return s.staticCount=t,s}function _t(e){return e==null||typeof e=="boolean"?je(Ve):ue(e)?je(bt,null,e.slice()):xa(e)?jt(e):je(za,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function or(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ue(t))s=16;else if(typeof t=="object")if(a&65){const n=t.default;n&&(n._c&&(n._d=!1),or(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Ro(t)?t._ctx=Je:n===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:Je},s=32):(t=String(t),a&64?(s=16,t=[Ha(t)]):s=8);e.children=t,e.shapeFlag|=s}function bd(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const n in a)if(n==="class")t.class!==a.class&&(t.class=Jt([t.class,a.class]));else if(n==="style")t.style=Kn([t.style,a.style]);else if(Oa(n)){const r=t[n],i=a[n];i&&r!==i&&!(ue(r)&&r.includes(i))&&(t[n]=r?[].concat(r,i):i)}else n!==""&&(t[n]=a[n])}return t}function ht(e,t,s,a=null){ct(e,t,7,[s,a])}const _d=Oo();let yd=0;function vd(e,t,s){const a=e.type,n=(t?t.appContext:e.appContext)||_d,r={uid:yd++,vnode:e,type:a,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ji(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(a,n),emitsOptions:Uo(a,n),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:a.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=od.bind(null,r),e.ce&&e.ce(r),r}let Ie=null;const lr=()=>Ie||Je;let Ta,Rn;{const e=Ma(),t=(s,a)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(a),r=>{n.length>1?n.forEach(i=>i(r)):n[0](r)}};Ta=t("__VUE_INSTANCE_SETTERS__",s=>Ie=s),Rn=t("__VUE_SSR_SETTERS__",s=>Ks=s)}const Zs=e=>{const t=Ie;return Ta(e),e.scope.on(),()=>{e.scope.off(),Ta(t)}},Dr=()=>{Ie&&Ie.scope.off(),Ta(null)};function qo(e){return e.vnode.shapeFlag&4}let Ks=!1;function wd(e,t=!1,s=!1){t&&Rn(t);const{props:a,children:n}=e.vnode,r=qo(e);Kc(e,a,r,t),Xc(e,n,s||t);const i=r?xd(e,t):void 0;return t&&Rn(!1),i}function xd(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fc);const{setup:a}=s;if(a){It();const n=e.setupContext=a.length>1?Sd(e):null,r=Zs(e),i=Qs(a,e,0,[e.props,n]),o=Ii(i);if(Nt(),r(),(o||e.sp)&&!Ns(e)&&To(e),o){if(i.then(Dr,Dr),t)return i.then(l=>{Ir(e,l)}).catch(l=>{Ia(l,e,0)});e.asyncDep=i}else Ir(e,i)}else Ko(e)}function Ir(e,t,s){fe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:we(t)&&(e.setupState=co(t)),Ko(e)}function Ko(e,t,s){const a=e.type;e.render||(e.render=a.render||yt);{const n=Zs(e);It();try{$c(e)}finally{Nt(),n()}}}const Td={get(e,t){return De(e,"get",""),e[t]}};function Sd(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Td),slots:e.slots,emit:e.emit,expose:t}}function Ua(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(co(sr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Bs)return Bs[s](e)},has(t,s){return s in t||s in Bs}})):e.proxy}function Ed(e,t=!0){return fe(e)?e.displayName||e.name:e.name||t&&e.__name}function kd(e){return fe(e)&&"__vccOpts"in e}const We=(e,t)=>hc(e,t,Ks);function cr(e,t,s){try{wa(-1);const a=arguments.length;return a===2?we(t)&&!ue(t)?xa(t)?je(e,null,[t]):je(e,t):je(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&xa(s)&&(s=[s]),je(e,t,s))}finally{wa(1)}}const Ad="3.5.24";let Mn;const Nr=typeof window<"u"&&window.trustedTypes;if(Nr)try{Mn=Nr.createPolicy("vue",{createHTML:e=>e})}catch{}const Vo=Mn?e=>Mn.createHTML(e):e=>e,Pd="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,Br=At&&At.createElement("template"),Cd={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const n=t==="svg"?At.createElementNS(Pd,e):t==="mathml"?At.createElementNS(Od,e):s?At.createElement(e,{is:s}):At.createElement(e);return e==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,a,n,r){const i=s?s.previousSibling:t.lastChild;if(n&&(n===r||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===r||!(n=n.nextSibling)););else{Br.innerHTML=Vo(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const o=Br.content;if(a==="svg"||a==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},zt="transition",Ps="animation",Vs=Symbol("_vtc"),Wo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ld=Ce({},bo,Wo),Rd=e=>(e.displayName="Transition",e.props=Ld,e),Md=Rd((e,{slots:t})=>cr(Sc,Dd(e),t)),rs=(e,t=[])=>{ue(e)?e.forEach(s=>s(...t)):e&&e(...t)},Fr=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function Dd(e){const t={};for(const y in e)y in Wo||(t[y]=e[y]);if(e.css===!1)return t;const{name:s="v",type:a,duration:n,enterFromClass:r=`${s}-enter-from`,enterActiveClass:i=`${s}-enter-active`,enterToClass:o=`${s}-enter-to`,appearFromClass:l=r,appearActiveClass:c=i,appearToClass:d=o,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,g=Id(n),m=g&&g[0],A=g&&g[1],{onBeforeEnter:S,onEnter:P,onEnterCancelled:w,onLeave:v,onLeaveCancelled:O,onBeforeAppear:R=S,onAppear:T=P,onAppearCancelled:_=w}=t,h=(y,M,F,K)=>{y._enterCancelled=K,is(y,M?d:o),is(y,M?c:i),F&&F()},b=(y,M)=>{y._isLeaving=!1,is(y,u),is(y,f),is(y,p),M&&M()},E=y=>(M,F)=>{const K=y?T:P,B=()=>h(M,y,F);rs(K,[M,B]),$r(()=>{is(M,y?l:r),Et(M,y?d:o),Fr(K)||zr(M,a,m,B)})};return Ce(t,{onBeforeEnter(y){rs(S,[y]),Et(y,r),Et(y,i)},onBeforeAppear(y){rs(R,[y]),Et(y,l),Et(y,c)},onEnter:E(!1),onAppear:E(!0),onLeave(y,M){y._isLeaving=!0;const F=()=>b(y,M);Et(y,u),y._enterCancelled?(Et(y,p),Gr(y)):(Gr(y),Et(y,p)),$r(()=>{y._isLeaving&&(is(y,u),Et(y,f),Fr(v)||zr(y,a,A,F))}),rs(v,[y,F])},onEnterCancelled(y){h(y,!1,void 0,!0),rs(w,[y])},onAppearCancelled(y){h(y,!0,void 0,!0),rs(_,[y])},onLeaveCancelled(y){b(y),rs(O,[y])}})}function Id(e){if(e==null)return null;if(we(e))return[sn(e.enter),sn(e.leave)];{const t=sn(e);return[t,t]}}function sn(e){return Ml(e)}function Et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Vs]||(e[Vs]=new Set)).add(t)}function is(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const s=e[Vs];s&&(s.delete(t),s.size||(e[Vs]=void 0))}function $r(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Nd=0;function zr(e,t,s,a){const n=e._endId=++Nd,r=()=>{n===e._endId&&a()};if(s!=null)return setTimeout(r,s);const{type:i,timeout:o,propCount:l}=Bd(e,t);if(!i)return a();const c=i+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},o+1),e.addEventListener(c,p)}function Bd(e,t){const s=window.getComputedStyle(e),a=g=>(s[g]||"").split(", "),n=a(`${zt}Delay`),r=a(`${zt}Duration`),i=Hr(n,r),o=a(`${Ps}Delay`),l=a(`${Ps}Duration`),c=Hr(o,l);let d=null,u=0,p=0;t===zt?i>0&&(d=zt,u=i,p=r.length):t===Ps?c>0&&(d=Ps,u=c,p=l.length):(u=Math.max(i,c),d=u>0?i>c?zt:Ps:null,p=d?d===zt?r.length:l.length:0);const f=d===zt&&/\b(?:transform|all)(?:,|$)/.test(a(`${zt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Hr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,a)=>Ur(s)+Ur(e[a])))}function Ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Gr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Fd(e,t,s){const a=e[Vs];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const jr=Symbol("_vod"),$d=Symbol("_vsh"),zd=Symbol(""),Hd=/(?:^|;)\s*display\s*:/;function Ud(e,t,s){const a=e.style,n=Pe(s);let r=!1;if(s&&!n){if(t)if(Pe(t))for(const i of t.split(";")){const o=i.slice(0,i.indexOf(":")).trim();s[o]==null&&fa(a,o,"")}else for(const i in t)s[i]==null&&fa(a,i,"");for(const i in s)i==="display"&&(r=!0),fa(a,i,s[i])}else if(n){if(t!==s){const i=a[zd];i&&(s+=";"+i),a.cssText=s,r=Hd.test(s)}}else t&&e.removeAttribute("style");jr in e&&(e[jr]=r?a.display:"",e[$d]&&(a.display="none"))}const Yr=/\s*!important$/;function fa(e,t,s){if(ue(s))s.forEach(a=>fa(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=Gd(e,t);Yr.test(s)?e.setProperty(Zt(a),s.replace(Yr,""),"important"):e[a]=s}}const qr=["Webkit","Moz","ms"],an={};function Gd(e,t){const s=an[t];if(s)return s;let a=at(t);if(a!=="filter"&&a in e)return an[t]=a;a=Ra(a);for(let n=0;n<qr.length;n++){const r=qr[n]+a;if(r in e)return an[t]=r}return t}const Kr="http://www.w3.org/1999/xlink";function Vr(e,t,s,a,n,r=$l(t)){a&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Kr,t.slice(6,t.length)):e.setAttributeNS(Kr,t,s):s==null||r&&!$i(s)?e.removeAttribute(t):e.setAttribute(t,r?"":wt(s)?String(s):s)}function Wr(e,t,s,a,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Vo(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(o!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=$i(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(n||t)}function Jo(e,t,s,a){e.addEventListener(t,s,a)}function jd(e,t,s,a){e.removeEventListener(t,s,a)}const Jr=Symbol("_vei");function Yd(e,t,s,a,n=null){const r=e[Jr]||(e[Jr]={}),i=r[t];if(a&&i)i.value=a;else{const[o,l]=qd(t);if(a){const c=r[t]=Wd(a,n);Jo(e,o,c,l)}else i&&(jd(e,o,i,l),r[t]=void 0)}}const Xr=/(?:Once|Passive|Capture)$/;function qd(e){let t;if(Xr.test(e)){t={};let a;for(;a=e.match(Xr);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let nn=0;const Kd=Promise.resolve(),Vd=()=>nn||(Kd.then(()=>nn=0),nn=Date.now());function Wd(e,t){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;ct(Jd(a,s.value),t,5,[a])};return s.value=e,s.attached=Vd(),s}function Jd(e,t){if(ue(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>n=>!n._stopped&&a&&a(n))}else return t}const Qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xd=(e,t,s,a,n,r)=>{const i=n==="svg";t==="class"?Fd(e,a,i):t==="style"?Ud(e,s,a):Oa(t)?jn(t)||Yd(e,t,s,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qd(e,t,a,i))?(Wr(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vr(e,t,a,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Pe(a))?Wr(e,at(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Vr(e,t,a,i))};function Qd(e,t,s,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Qr(t)&&fe(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Qr(t)&&Pe(s)?!1:t in e}const Zr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ue(t)?s=>ca(t,s):t},rn=Symbol("_assign"),Zd={deep:!0,created(e,t,s){e[rn]=Zr(s),Jo(e,"change",()=>{const a=e._modelValue,n=eu(e),r=e.checked,i=e[rn];if(ue(a)){const o=zi(a,n),l=o!==-1;if(r&&!l)i(a.concat(n));else if(!r&&l){const c=[...a];c.splice(o,1),i(c)}}else if(Ca(a)){const o=new Set(a);r?o.add(n):o.delete(n),i(o)}else i(Xo(e,r))})},mounted:ei,beforeUpdate(e,t,s){e[rn]=Zr(s),ei(e,t,s)}};function ei(e,{value:t,oldValue:s},a){e._modelValue=t;let n;if(ue(t))n=zi(t,a.props.value)>-1;else if(Ca(t))n=t.has(a.props.value);else{if(t===s)return;n=Da(t,Xo(e,!0))}e.checked!==n&&(e.checked=n)}function eu(e){return"_value"in e?e._value:e.value}function Xo(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const tu=["ctrl","shift","alt","meta"],su={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>tu.some(s=>e[`${s}Key`]&&!t.includes(s))},Ga=(e,t)=>{const s=e._withMods||(e._withMods={}),a=t.join(".");return s[a]||(s[a]=((n,...r)=>{for(let i=0;i<t.length;i++){const o=su[t[i]];if(o&&o(n,t))return}return e(n,...r)}))},au={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ct=(e,t)=>{const s=e._withKeys||(e._withKeys={}),a=t.join(".");return s[a]||(s[a]=(n=>{if(!("key"in n))return;const r=Zt(n.key);if(t.some(i=>i===r||au[i]===r))return e(n)}))},nu=Ce({patchProp:Xd},Cd);let ti;function ru(){return ti||(ti=Zc(nu))}const iu=((...e)=>{const t=ru().createApp(...e),{mount:s}=t;return t.mount=a=>{const n=lu(a);if(!n)return;const r=t._component;!fe(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const i=s(n,!1,ou(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},t});function ou(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lu(e){return Pe(e)?document.querySelector(e):e}let Qo;const ja=e=>Qo=e,Zo=Symbol();function Dn(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var zs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(zs||(zs={}));function cu(){const e=Yi(!0),t=e.run(()=>Qe({}));let s=[],a=[];const n=sr({install(r){ja(n),n._a=r,r.provide(Zo,n),r.config.globalProperties.$pinia=n,a.forEach(i=>s.push(i)),a=[]},use(r){return this._a?s.push(r):a.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return n}const el=()=>{};function si(e,t,s,a=el){e.add(t);const n=()=>{e.delete(t)&&a()};return!s&&qi()&&Hl(n),n}function ms(e,...t){e.forEach(s=>{s(...t)})}const du=e=>e(),ai=Symbol(),on=Symbol();function In(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,a)=>e.set(a,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const a=t[s],n=e[s];Dn(n)&&Dn(a)&&e.hasOwnProperty(s)&&!ke(a)&&!ps(a)?e[s]=In(n,a):e[s]=a}return e}const uu=Symbol();function pu(e){return!Dn(e)||!Object.prototype.hasOwnProperty.call(e,uu)}const{assign:Ut}=Object;function fu(e){return!!(ke(e)&&e.effect)}function hu(e,t,s,a){const{state:n,actions:r,getters:i}=t,o=s.state.value[e];let l;function c(){o||(s.state.value[e]=n?n():{});const d=dc(s.state.value[e]);return Ut(d,r,Object.keys(i||{}).reduce((u,p)=>(u[p]=sr(We(()=>{ja(s);const f=s._s.get(e);return i[p].call(f,f)})),u),{}))}return l=tl(e,c,t,s,a,!0),l}function tl(e,t,s={},a,n,r){let i;const o=Ut({actions:{}},s),l={deep:!0};let c,d,u=new Set,p=new Set,f;const g=a.state.value[e];!r&&!g&&(a.state.value[e]={}),Qe({});let m;function A(_){let h;c=d=!1,typeof _=="function"?(_(a.state.value[e]),h={type:zs.patchFunction,storeId:e,events:f}):(In(a.state.value[e],_),h={type:zs.patchObject,payload:_,storeId:e,events:f});const b=m=Symbol();ar().then(()=>{m===b&&(c=!0)}),d=!0,ms(u,h,a.state.value[e])}const S=r?function(){const{state:h}=s,b=h?h():{};this.$patch(E=>{Ut(E,b)})}:el;function P(){i.stop(),u.clear(),p.clear(),a._s.delete(e)}const w=(_,h="")=>{if(ai in _)return _[on]=h,_;const b=function(){ja(a);const E=Array.from(arguments),y=new Set,M=new Set;function F(H){y.add(H)}function K(H){M.add(H)}ms(p,{args:E,name:b[on],store:O,after:F,onError:K});let B;try{B=_.apply(this&&this.$id===e?this:O,E)}catch(H){throw ms(M,H),H}return B instanceof Promise?B.then(H=>(ms(y,H),H)).catch(H=>(ms(M,H),Promise.reject(H))):(ms(y,B),B)};return b[ai]=!0,b[on]=h,b},v={_p:a,$id:e,$onAction:si.bind(null,p),$patch:A,$reset:S,$subscribe(_,h={}){const b=si(u,_,h.detached,()=>E()),E=i.run(()=>Fs(()=>a.state.value[e],y=>{(h.flush==="sync"?d:c)&&_({storeId:e,type:zs.direct,events:f},y)},Ut({},l,h)));return b},$dispose:P},O=Mt(v);a._s.set(e,O);const T=(a._a&&a._a.runWithContext||du)(()=>a._e.run(()=>(i=Yi()).run(()=>t({action:w}))));for(const _ in T){const h=T[_];if(ke(h)&&!fu(h)||ps(h))r||(g&&pu(h)&&(ke(h)?h.value=g[_]:In(h,g[_])),a.state.value[e][_]=h);else if(typeof h=="function"){const b=w(h,_);T[_]=b,o.actions[_]=h}}return Ut(O,T),Ut(ge(O),T),Object.defineProperty(O,"$state",{get:()=>a.state.value[e],set:_=>{A(h=>{Ut(h,_)})}}),a._p.forEach(_=>{Ut(O,i.run(()=>_({store:O,app:a._a,pinia:a,options:o})))}),g&&r&&s.hydrate&&s.hydrate(O.$state,g),c=!0,d=!0,O}function gu(e,t,s){let a;const n=typeof t=="function";a=n?s:t;function r(i,o){const l=qc();return i=i||(l?st(Zo,null):null),i&&ja(i),i=Qo,i._s.has(e)||(n?tl(e,t,a,i):hu(e,a,i)),i._s.get(e)}return r.$id=e,r}const ys=typeof document<"u";function sl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&sl(e.default)}const be=Object.assign;function ln(e,t){const s={};for(const a in t){const n=t[a];s[a]=dt(n)?n.map(e):e(n)}return s}const Hs=()=>{},dt=Array.isArray;function ni(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}const al=/#/g,bu=/&/g,_u=/\//g,yu=/=/g,vu=/\?/g,nl=/\+/g,wu=/%5B/g,xu=/%5D/g,rl=/%5E/g,Tu=/%60/g,il=/%7B/g,Su=/%7C/g,ol=/%7D/g,Eu=/%20/g;function dr(e){return e==null?"":encodeURI(""+e).replace(Su,"|").replace(wu,"[").replace(xu,"]")}function ku(e){return dr(e).replace(il,"{").replace(ol,"}").replace(rl,"^")}function Nn(e){return dr(e).replace(nl,"%2B").replace(Eu,"+").replace(al,"%23").replace(bu,"%26").replace(Tu,"`").replace(il,"{").replace(ol,"}").replace(rl,"^")}function Au(e){return Nn(e).replace(yu,"%3D")}function Pu(e){return dr(e).replace(al,"%23").replace(vu,"%3F")}function Ou(e){return Pu(e).replace(_u,"%2F")}function Ws(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Cu=/\/$/,Lu=e=>e.replace(Cu,"");function cn(e,t,s="/"){let a,n={},r="",i="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(a=t.slice(0,l),r=t.slice(l,o>0?o:t.length),n=e(r.slice(1))),o>=0&&(a=a||t.slice(0,o),i=t.slice(o,t.length)),a=Iu(a??t,s),{fullPath:a+r+i,path:a,query:n,hash:Ws(i)}}function Ru(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Mu(e,t,s){const a=t.matched.length-1,n=s.matched.length-1;return a>-1&&a===n&&Ts(t.matched[a],s.matched[n])&&ll(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Ts(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ll(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Du(e[s],t[s]))return!1;return!0}function Du(e,t){return dt(e)?ii(e,t):dt(t)?ii(t,e):e===t}function ii(e,t){return dt(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function Iu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=s.length-1,i,o;for(i=0;i<a.length;i++)if(o=a[i],o!==".")if(o==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(i).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Bn=(function(e){return e.pop="pop",e.push="push",e})({}),dn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Nu(e){if(!e)if(ys){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lu(e)}const Bu=/^[^#]+#/;function Fu(e,t){return e.replace(Bu,"#")+t}function $u(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const Ya=()=>({left:window.scrollX,top:window.scrollY});function zu(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;t=$u(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function oi(e,t){return(history.state?history.state.position-t:-1)+e}const Fn=new Map;function Hu(e,t){Fn.set(e,t)}function Uu(e){const t=Fn.get(e);return Fn.delete(e),t}function Gu(e){return typeof e=="string"||e&&typeof e=="object"}function cl(e){return typeof e=="string"||typeof e=="symbol"}let Ee=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const dl=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function Ss(e,t){return be(new Error,{type:e,[dl]:!0},t)}function kt(e,t){return e instanceof Error&&dl in e&&(t==null||!!(e.type&t))}const ju=["params","query","hash"];function Yu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of ju)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function qu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const n=s[a].replace(nl," "),r=n.indexOf("="),i=Ws(r<0?n:n.slice(0,r)),o=r<0?null:Ws(n.slice(r+1));if(i in t){let l=t[i];dt(l)||(l=t[i]=[l]),l.push(o)}else t[i]=o}return t}function li(e){let t="";for(let s in e){const a=e[s];if(s=Au(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(dt(a)?a.map(n=>n&&Nn(n)):[a&&Nn(a)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+s,n!=null&&(t+="="+n))})}return t}function Ku(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=dt(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return t}const Vu=Symbol(""),ci=Symbol(""),qa=Symbol(""),ur=Symbol(""),$n=Symbol("");function Os(){let e=[];function t(a){return e.push(a),()=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Yt(e,t,s,a,n,r=i=>i()){const i=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((o,l)=>{const c=p=>{p===!1?l(Ss(Ee.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?l(p):Gu(p)?l(Ss(Ee.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&a.enterCallbacks[n]===i&&typeof p=="function"&&i.push(p),o())},d=r(()=>e.call(a&&a.instances[n],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function un(e,t,s,a,n=r=>r()){const r=[];for(const i of e)for(const o in i.components){let l=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(sl(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Yt(c,s,a,i,o,n))}else{let c=l();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${o}" at "${i.path}"`);const u=mu(d)?d.default:d;i.mods[o]=d,i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Yt(p,s,a,i,o,n)()}))}}return r}function Wu(e,t){const s=[],a=[],n=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const o=t.matched[i];o&&(e.matched.find(c=>Ts(c,o))?a.push(o):s.push(o));const l=e.matched[i];l&&(t.matched.find(c=>Ts(c,l))||n.push(l))}return[s,a,n]}let Ju=()=>location.protocol+"//"+location.host;function ul(e,t){const{pathname:s,search:a,hash:n}=t,r=e.indexOf("#");if(r>-1){let i=n.includes(e.slice(r))?e.slice(r).length:1,o=n.slice(i);return o[0]!=="/"&&(o="/"+o),ri(o,"")}return ri(s,e)+a+n}function Xu(e,t,s,a){let n=[],r=[],i=null;const o=({state:p})=>{const f=ul(e,location),g=s.value,m=t.value;let A=0;if(p){if(s.value=f,t.value=p,i&&i===g){i=null;return}A=m?p.position-m.position:0}else a(f);n.forEach(S=>{S(s.value,g,{delta:A,type:Bn.pop,direction:A?A>0?dn.forward:dn.back:dn.unknown})})};function l(){i=s.value}function c(p){n.push(p);const f=()=>{const g=n.indexOf(p);g>-1&&n.splice(g,1)};return r.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(be({},p.state,{scroll:Ya()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function di(e,t,s,a=!1,n=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:n?Ya():null}}function Qu(e){const{history:t,location:s}=window,a={value:ul(e,s)},n={value:t.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:Ju()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),s[d?"replace":"assign"](p)}}function i(l,c){r(l,be({},t.state,di(n.value.back,l,n.value.forward,!0),c,{position:n.value.position}),!0),a.value=l}function o(l,c){const d=be({},n.value,t.state,{forward:l,scroll:Ya()});r(d.current,d,!0),r(l,be({},di(a.value,l,null),{position:d.position+1},c),!1),a.value=l}return{location:a,state:n,push:o,replace:i}}function Zu(e){e=Nu(e);const t=Qu(e),s=Xu(e,t.state,t.location,t.replace);function a(r,i=!0){i||s.pauseListeners(),history.go(r)}const n=be({location:"",base:e,go:a,createHref:Fu.bind(null,e)},t,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function ep(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Zu(e)}let ds=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Oe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Oe||{});const tp={type:ds.Static,value:""},sp=/[a-zA-Z0-9_]/;function ap(e){if(!e)return[[]];if(e==="/")return[[tp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=Oe.Static,a=s;const n=[];let r;function i(){r&&n.push(r),r=[]}let o=0,l,c="",d="";function u(){c&&(s===Oe.Static?r.push({type:ds.Static,value:c}):s===Oe.Param||s===Oe.ParamRegExp||s===Oe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ds.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&s!==Oe.ParamRegExp){a=s,s=Oe.EscapeNext;continue}switch(s){case Oe.Static:l==="/"?(c&&u(),i()):l===":"?(u(),s=Oe.Param):p();break;case Oe.EscapeNext:p(),s=a;break;case Oe.Param:l==="("?s=Oe.ParamRegExp:sp.test(l)?p():(u(),s=Oe.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Oe.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=Oe.ParamRegExpEnd:d+=l;break;case Oe.ParamRegExpEnd:u(),s=Oe.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,d="";break;default:t("Unknown state");break}}return s===Oe.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),i(),n}const ui="[^/]+?",np={sensitive:!1,strict:!1,start:!0,end:!0};var Be=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Be||{});const rp=/[.+*?^${}()[\]/\\]/g;function ip(e,t){const s=be({},np,t),a=[];let n=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[Be.Root];s.strict&&!c.length&&(n+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Be.Segment+(s.sensitive?Be.BonusCaseSensitive:0);if(p.type===ds.Static)u||(n+="/"),n+=p.value.replace(rp,"\\$&"),f+=Be.Static;else if(p.type===ds.Param){const{value:g,repeatable:m,optional:A,regexp:S}=p;r.push({name:g,repeatable:m,optional:A});const P=S||ui;if(P!==ui){f+=Be.BonusCustomRegExp;try{`${P}`}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+v.message)}}let w=m?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||(w=A&&c.length<2?`(?:/${w})`:"/"+w),A&&(w+="?"),n+=w,f+=Be.Dynamic,A&&(f+=Be.BonusOptional),m&&(f+=Be.BonusRepeatable),P===".*"&&(f+=Be.BonusWildcard)}d.push(f)}a.push(d)}if(s.strict&&s.end){const c=a.length-1;a[c][a[c].length-1]+=Be.BonusStrict}s.strict||(n+="/?"),s.end?n+="$":s.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const i=new RegExp(n,s.sensitive?"":"i");function o(c){const d=c.match(i),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",g=r[p-1];u[g.name]=f&&g.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===ds.Static)d+=f.value;else if(f.type===ds.Param){const{value:g,repeatable:m,optional:A}=f,S=g in c?c[g]:"";if(dt(S)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=dt(S)?S.join("/"):S;if(!P)if(A)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);d+=P}}return d||"/"}return{re:i,score:a,keys:r,parse:o,stringify:l}}function op(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===Be.Static+Be.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Be.Static+Be.Segment?1:-1:0}function pl(e,t){let s=0;const a=e.score,n=t.score;for(;s<a.length&&s<n.length;){const r=op(a[s],n[s]);if(r)return r;s++}if(Math.abs(n.length-a.length)===1){if(pi(a))return 1;if(pi(n))return-1}return n.length-a.length}function pi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lp={strict:!1,end:!0,sensitive:!1};function cp(e,t,s){const a=ip(ap(e.path),s),n=be(a,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function dp(e,t){const s=[],a=new Map;t=ni(lp,t);function n(u){return a.get(u)}function r(u,p,f){const g=!f,m=hi(u);m.aliasOf=f&&f.record;const A=ni(t,u),S=[m];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of v)S.push(hi(be({},m,{components:f?f.record.components:m.components,path:O,aliasOf:f?f.record:m})))}let P,w;for(const v of S){const{path:O}=v;if(p&&O[0]!=="/"){const R=p.record.path,T=R[R.length-1]==="/"?"":"/";v.path=p.record.path+(O&&T+O)}if(P=cp(v,p,A),f?f.alias.push(P):(w=w||P,w!==P&&w.alias.push(P),g&&u.name&&!gi(P)&&i(u.name)),fl(P)&&l(P),m.children){const R=m.children;for(let T=0;T<R.length;T++)r(R[T],P,f&&f.children[T])}f=f||P}return w?()=>{i(w)}:Hs}function i(u){if(cl(u)){const p=a.get(u);p&&(a.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&a.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function o(){return s}function l(u){const p=fp(u,s);s.splice(p,0,u),u.record.name&&!gi(u)&&a.set(u.record.name,u)}function c(u,p){let f,g={},m,A;if("name"in u&&u.name){if(f=a.get(u.name),!f)throw Ss(Ee.MATCHER_NOT_FOUND,{location:u});A=f.record.name,g=be(fi(p.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&fi(u.params,f.keys.map(w=>w.name))),m=f.stringify(g)}else if(u.path!=null)m=u.path,f=s.find(w=>w.re.test(m)),f&&(g=f.parse(m),A=f.record.name);else{if(f=p.name?a.get(p.name):s.find(w=>w.re.test(p.path)),!f)throw Ss(Ee.MATCHER_NOT_FOUND,{location:u,currentLocation:p});A=f.record.name,g=be({},p.params,u.params),m=f.stringify(g)}const S=[];let P=f;for(;P;)S.unshift(P.record),P=P.parent;return{name:A,path:m,params:g,matched:S,meta:pp(S)}}e.forEach(u=>r(u));function d(){s.length=0,a.clear()}return{addRoute:r,resolve:c,removeRoute:i,clearRoutes:d,getRoutes:o,getRecordMatcher:n}}function fi(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function hi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:up(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function up(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="object"?s[a]:s;return t}function gi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pp(e){return e.reduce((t,s)=>be(t,s.meta),{})}function fp(e,t){let s=0,a=t.length;for(;s!==a;){const r=s+a>>1;pl(e,t[r])<0?a=r:s=r+1}const n=hp(e);return n&&(a=t.lastIndexOf(n,a-1)),a}function hp(e){let t=e;for(;t=t.parent;)if(fl(t)&&pl(e,t)===0)return t}function fl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function mi(e){const t=st(qa),s=st(ur),a=We(()=>{const l=Wt(e.to);return t.resolve(l)}),n=We(()=>{const{matched:l}=a.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(Ts.bind(null,d));if(p>-1)return p;const f=bi(l[c-2]);return c>1&&bi(d)===f&&u[u.length-1].path!==f?u.findIndex(Ts.bind(null,l[c-2])):p}),r=We(()=>n.value>-1&&yp(s.params,a.value.params)),i=We(()=>n.value>-1&&n.value===s.matched.length-1&&ll(s.params,a.value.params));function o(l={}){if(_p(l)){const c=t[Wt(e.replace)?"replace":"push"](Wt(e.to)).catch(Hs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:a,href:We(()=>a.value.href),isActive:r,isExactActive:i,navigate:o}}function gp(e){return e.length===1?e[0]:e}const mp=xo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mi,setup(e,{slots:t}){const s=Mt(mi(e)),{options:a}=st(qa),n=We(()=>({[_i(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[_i(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&gp(t.default(s));return e.custom?r:cr("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},r)}}}),bp=mp;function _p(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yp(e,t){for(const s in t){const a=t[s],n=e[s];if(typeof a=="string"){if(a!==n)return!1}else if(!dt(n)||n.length!==a.length||a.some((r,i)=>r!==n[i]))return!1}return!0}function bi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _i=(e,t,s)=>e??t??s,vp=xo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=st($n),n=We(()=>e.route||a.value),r=st(ci,0),i=We(()=>{let c=Wt(r);const{matched:d}=n.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),o=We(()=>n.value.matched[i.value]);da(ci,We(()=>i.value+1)),da(Vu,o),da($n,n);const l=Qe();return Fs(()=>[l.value,o.value,e.name],([c,d,u],[p,f,g])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Ts(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=n.value,d=e.name,u=o.value,p=u&&u.components[d];if(!p)return yi(s.default,{Component:p,route:c});const f=u.props[d],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,A=cr(p,be({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return yi(s.default,{Component:A,route:c})||A}}});function yi(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const hl=vp;function wp(e){const t=dp(e.routes,e),s=e.parseQuery||qu,a=e.stringifyQuery||li,n=e.history,r=Os(),i=Os(),o=Os(),l=oc(Ht);let c=Ht;ys&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ln.bind(null,z=>""+z),u=ln.bind(null,Ou),p=ln.bind(null,Ws);function f(z,J){let q,ee;return cl(z)?(q=t.getRecordMatcher(z),ee=J):ee=z,t.addRoute(ee,q)}function g(z){const J=t.getRecordMatcher(z);J&&t.removeRoute(J)}function m(){return t.getRoutes().map(z=>z.record)}function A(z){return!!t.getRecordMatcher(z)}function S(z,J){if(J=be({},J||l.value),typeof z=="string"){const L=cn(s,z,J.path),$=t.resolve({path:L.path},J),D=n.createHref(L.fullPath);return be(L,$,{params:p($.params),hash:Ws(L.hash),redirectedFrom:void 0,href:D})}let q;if(z.path!=null)q=be({},z,{path:cn(s,z.path,J.path).path});else{const L=be({},z.params);for(const $ in L)L[$]==null&&delete L[$];q=be({},z,{params:u(L)}),J.params=u(J.params)}const ee=t.resolve(q,J),le=z.hash||"";ee.params=d(p(ee.params));const x=Ru(a,be({},z,{hash:ku(le),path:ee.path})),k=n.createHref(x);return be({fullPath:x,hash:le,query:a===li?Ku(z.query):z.query||{}},ee,{redirectedFrom:void 0,href:k})}function P(z){return typeof z=="string"?cn(s,z,l.value.path):be({},z)}function w(z,J){if(c!==z)return Ss(Ee.NAVIGATION_CANCELLED,{from:J,to:z})}function v(z){return T(z)}function O(z){return v(be(P(z),{replace:!0}))}function R(z,J){const q=z.matched[z.matched.length-1];if(q&&q.redirect){const{redirect:ee}=q;let le=typeof ee=="function"?ee(z,J):ee;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=P(le):{path:le},le.params={}),be({query:z.query,hash:z.hash,params:le.path!=null?{}:z.params},le)}}function T(z,J){const q=c=S(z),ee=l.value,le=z.state,x=z.force,k=z.replace===!0,L=R(q,ee);if(L)return T(be(P(L),{state:typeof L=="object"?be({},le,L.state):le,force:x,replace:k}),J||q);const $=q;$.redirectedFrom=J;let D;return!x&&Mu(a,ee,q)&&(D=Ss(Ee.NAVIGATION_DUPLICATED,{to:$,from:ee}),Z(ee,ee,!0,!1)),(D?Promise.resolve(D):b($,ee)).catch(C=>kt(C)?kt(C,Ee.NAVIGATION_GUARD_REDIRECT)?C:te(C):I(C,$,ee)).then(C=>{if(C){if(kt(C,Ee.NAVIGATION_GUARD_REDIRECT))return T(be({replace:k},P(C.to),{state:typeof C.to=="object"?be({},le,C.to.state):le,force:x}),J||$)}else C=y($,ee,!0,k,le);return E($,ee,C),C})}function _(z,J){const q=w(z,J);return q?Promise.reject(q):Promise.resolve()}function h(z){const J=Q.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(z):z()}function b(z,J){let q;const[ee,le,x]=Wu(z,J);q=un(ee.reverse(),"beforeRouteLeave",z,J);for(const L of ee)L.leaveGuards.forEach($=>{q.push(Yt($,z,J))});const k=_.bind(null,z,J);return q.push(k),ae(q).then(()=>{q=[];for(const L of r.list())q.push(Yt(L,z,J));return q.push(k),ae(q)}).then(()=>{q=un(le,"beforeRouteUpdate",z,J);for(const L of le)L.updateGuards.forEach($=>{q.push(Yt($,z,J))});return q.push(k),ae(q)}).then(()=>{q=[];for(const L of x)if(L.beforeEnter)if(dt(L.beforeEnter))for(const $ of L.beforeEnter)q.push(Yt($,z,J));else q.push(Yt(L.beforeEnter,z,J));return q.push(k),ae(q)}).then(()=>(z.matched.forEach(L=>L.enterCallbacks={}),q=un(x,"beforeRouteEnter",z,J,h),q.push(k),ae(q))).then(()=>{q=[];for(const L of i.list())q.push(Yt(L,z,J));return q.push(k),ae(q)}).catch(L=>kt(L,Ee.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function E(z,J,q){o.list().forEach(ee=>h(()=>ee(z,J,q)))}function y(z,J,q,ee,le){const x=w(z,J);if(x)return x;const k=J===Ht,L=ys?history.state:{};q&&(ee||k?n.replace(z.fullPath,be({scroll:k&&L&&L.scroll},le)):n.push(z.fullPath,le)),l.value=z,Z(z,J,q,k),te()}let M;function F(){M||(M=n.listen((z,J,q)=>{if(!re.listening)return;const ee=S(z),le=R(ee,re.currentRoute.value);if(le){T(be(le,{replace:!0,force:!0}),ee).catch(Hs);return}c=ee;const x=l.value;ys&&Hu(oi(x.fullPath,q.delta),Ya()),b(ee,x).catch(k=>kt(k,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?k:kt(k,Ee.NAVIGATION_GUARD_REDIRECT)?(T(be(P(k.to),{force:!0}),ee).then(L=>{kt(L,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!q.delta&&q.type===Bn.pop&&n.go(-1,!1)}).catch(Hs),Promise.reject()):(q.delta&&n.go(-q.delta,!1),I(k,ee,x))).then(k=>{k=k||y(ee,x,!1),k&&(q.delta&&!kt(k,Ee.NAVIGATION_CANCELLED)?n.go(-q.delta,!1):q.type===Bn.pop&&kt(k,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),E(ee,x,k)}).catch(Hs)}))}let K=Os(),B=Os(),H;function I(z,J,q){te(z);const ee=B.list();return ee.length?ee.forEach(le=>le(z,J,q)):console.error(z),Promise.reject(z)}function X(){return H&&l.value!==Ht?Promise.resolve():new Promise((z,J)=>{K.add([z,J])})}function te(z){return H||(H=!z,F(),K.list().forEach(([J,q])=>z?q(z):J()),K.reset()),z}function Z(z,J,q,ee){const{scrollBehavior:le}=e;if(!ys||!le)return Promise.resolve();const x=!q&&Uu(oi(z.fullPath,0))||(ee||!q)&&history.state&&history.state.scroll||null;return ar().then(()=>le(z,J,x)).then(k=>k&&zu(k)).catch(k=>I(k,z,J))}const oe=z=>n.go(z);let ie;const Q=new Set,re={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:m,resolve:S,options:e,push:v,replace:O,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:o.add,onError:B.add,isReady:X,install(z){z.component("RouterLink",bp),z.component("RouterView",hl),z.config.globalProperties.$router=re,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(l)}),ys&&!ie&&l.value===Ht&&(ie=!0,v(n.location).catch(ee=>{}));const J={};for(const ee in Ht)Object.defineProperty(J,ee,{get:()=>l.value[ee],enumerable:!0});z.provide(qa,re),z.provide(ur,oo(J)),z.provide($n,l);const q=z.unmount;Q.add(z),z.unmount=function(){Q.delete(z),Q.size<1&&(c=Ht,M&&M(),M=null,l.value=Ht,ie=!1,H=!1),q()}}};function ae(z){return z.reduce((J,q)=>J.then(()=>h(q)),Promise.resolve())}return re}function Tt(){return st(qa)}function gl(e){return st(ur)}var xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ls={exports:{}},Sp=Ls.exports,vi;function Ep(){return vi||(vi=1,(function(e,t){(function(s,a){var n={};s.PubSub?(n=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=n,a(n)),e!==void 0&&e.exports&&(t=e.exports=n),t.PubSub=n,e.exports=t=n})(typeof window=="object"&&window||Sp||xp,function(s){var a={},n=-1,r="*";function i(m){var A;for(A in m)if(Object.prototype.hasOwnProperty.call(m,A))return!0;return!1}function o(m){return function(){throw m}}function l(m,A,S){try{m(A,S)}catch(P){setTimeout(o(P),0)}}function c(m,A,S){m(A,S)}function d(m,A,S,P){var w=a[A],v=P?c:l,O;if(Object.prototype.hasOwnProperty.call(a,A))for(O in w)Object.prototype.hasOwnProperty.call(w,O)&&v(w[O],m,S)}function u(m,A,S){return function(){var w=String(m),v=w.lastIndexOf(".");for(d(m,m,A,S);v!==-1;)w=w.substr(0,v),v=w.lastIndexOf("."),d(m,w,A,S);d(m,r,A,S)}}function p(m){var A=String(m),S=!!(Object.prototype.hasOwnProperty.call(a,A)&&i(a[A]));return S}function f(m){for(var A=String(m),S=p(A)||p(r),P=A.lastIndexOf(".");!S&&P!==-1;)A=A.substr(0,P),P=A.lastIndexOf("."),S=p(A);return S}function g(m,A,S,P){m=typeof m=="symbol"?m.toString():m;var w=u(m,A,P),v=f(m);return v?(S===!0?w():setTimeout(w,0),!0):!1}s.publish=function(m,A){return g(m,A,!1,s.immediateExceptions)},s.publishSync=function(m,A){return g(m,A,!0,s.immediateExceptions)},s.subscribe=function(m,A){if(typeof A!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(a,m)||(a[m]={});var S="uid_"+String(++n);return a[m][S]=A,S},s.subscribeAll=function(m){return s.subscribe(r,m)},s.subscribeOnce=function(m,A){var S=s.subscribe(m,function(){s.unsubscribe(S),A.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){a={}},s.clearSubscriptions=function(A){var S;for(S in a)Object.prototype.hasOwnProperty.call(a,S)&&S.indexOf(A)===0&&delete a[S]},s.countSubscriptions=function(A){var S,P,w=0;for(S in a)if(Object.prototype.hasOwnProperty.call(a,S)&&S.indexOf(A)===0){for(P in a[S])w++;break}return w},s.getSubscriptions=function(A){var S,P=[];for(S in a)Object.prototype.hasOwnProperty.call(a,S)&&S.indexOf(A)===0&&P.push(S);return P},s.unsubscribe=function(m){var A=function(_){var h;for(h in a)if(Object.prototype.hasOwnProperty.call(a,h)&&h.indexOf(_)===0)return!0;return!1},S=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(a,m)||A(m)),P=!S&&typeof m=="string",w=typeof m=="function",v=!1,O,R,T;if(S){s.clearSubscriptions(m);return}for(O in a)if(Object.prototype.hasOwnProperty.call(a,O)){if(R=a[O],P&&R[m]){delete R[m],v=m;break}if(w)for(T in R)Object.prototype.hasOwnProperty.call(R,T)&&R[T]===m&&(delete R[T],v=!0)}return v}})})(Ls,Ls.exports)),Ls.exports}var kp=Ep();const se=Tp(kp);let it=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Ap={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Qt(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Pp(e,t){let s;const a=()=>{if(s)return s;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),s=Qt(n),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(n,r)=>a().then(i=>r(i.transaction(t,n).objectStore(t)))}let pn;function ea(){return pn||(pn=Pp("keyval-store","keyval")),pn}function Op(e,t=ea()){return t("readonly",s=>Qt(s.get(e)))}function wi(e,t,s=ea()){return s("readwrite",a=>(a.put(t,e),Qt(a.transaction)))}function fn(e,t=ea()){return t("readwrite",s=>(s.delete(e),Qt(s.transaction)))}function ml(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Qt(e.transaction)}function bs(e=ea()){return e("readonly",t=>{if(t.getAllKeys)return Qt(t.getAllKeys());const s=[];return ml(t,a=>s.push(a.key)).then(()=>s)})}function Cp(e=ea()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Qt(t.getAllKeys()),Qt(t.getAll())]).then(([a,n])=>a.map((r,i)=>[r,n[i]]));const s=[];return e("readonly",a=>ml(a,n=>s.push([n.key,n.value])).then(()=>s))})}const Es=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Sa=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!Sa(e[s],t[s]))return!1;return!0}if(Es(e)&&Es(t)){const s=Object.entries(e),a=new Set(Object.keys(t));if(s.length!==a.size)return!1;for(const[n,r]of s){if(!Sa(r,t[n]))return!1;a.delete(n)}return a.size===0}return!1},ra=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Es(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Lp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",xi=e=>e>="0"&&e<="9"||e==="-",Rp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var N;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(N||(N={}));const Ti={"(":N.TOK_LPAREN,")":N.TOK_RPAREN,"*":N.TOK_STAR,",":N.TOK_COMMA,".":N.TOK_DOT,":":N.TOK_COLON,"@":N.TOK_CURRENT,$:N.TOK_ROOT,"]":N.TOK_RBRACKET,"{":N.TOK_LBRACE,"}":N.TOK_RBRACE},Mp={"!":!0,"<":!0,"=":!0,">":!0},Dp={"	":!0,"\n":!0,"\r":!0," ":!0};class Ip{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let a,n,r;for(;this._current<t.length;)if(Lp(t[this._current]))a=this._current,n=this.consumeUnquotedIdentifier(t),s.push({start:a,type:N.TOK_UNQUOTEDIDENTIFIER,value:n});else if(Ti[t[this._current]]!==void 0)s.push({start:this._current,type:Ti[t[this._current]],value:t[this._current]}),this._current+=1;else if(xi(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')a=this._current,n=this.consumeQuotedIdentifier(t),s.push({start:a,type:N.TOK_QUOTEDIDENTIFIER,value:n});else if(t[this._current]==="'")a=this._current,n=this.consumeRawStringLiteral(t),s.push({start:a,type:N.TOK_LITERAL,value:n});else if(t[this._current]==="`"){a=this._current;const i=this.consumeLiteral(t);s.push({start:a,type:N.TOK_LITERAL,value:i})}else if(Mp[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(Dp[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:a,type:N.TOK_AND,value:"&&"})):s.push({start:a,type:N.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:a,type:N.TOK_OR,value:"||"})):s.push({start:a,type:N.TOK_PIPE,value:"|"});else{const i=new Error(`Unknown character: ${t[this._current]}`);throw i.name="LexerError",i}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&Rp(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const a=t.length;for(;xi(t[this._current])&&this._current<a;)this._current+=1;const n=parseInt(t.slice(s,this._current),10);return{start:s,value:n,type:N.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:N.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:N.TOK_FLATTEN,value:"[]"}):{start:s,type:N.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,a=t[s];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:N.TOK_NE,value:"!="}):{start:s,type:N.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:N.TOK_LTE,value:"<="}):{start:s,type:N.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:s,type:N.TOK_GTE,value:">="}):{start:s,type:N.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:N.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let i=this._current;t[i]==="\\"&&(t[i+1]==="\\"||t[i+1]==="`")?i+=2:i+=1,this._current=i}let n=t.slice(s,this._current).trimLeft();n=n.replace("\\`","`");const r=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],n="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(n.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const bl=new Ip,Re={[N.TOK_EOF]:0,[N.TOK_UNQUOTEDIDENTIFIER]:0,[N.TOK_QUOTEDIDENTIFIER]:0,[N.TOK_RBRACKET]:0,[N.TOK_RPAREN]:0,[N.TOK_COMMA]:0,[N.TOK_RBRACE]:0,[N.TOK_NUMBER]:0,[N.TOK_CURRENT]:0,[N.TOK_EXPREF]:0,[N.TOK_ROOT]:0,[N.TOK_PIPE]:1,[N.TOK_OR]:2,[N.TOK_AND]:3,[N.TOK_EQ]:5,[N.TOK_GT]:5,[N.TOK_LT]:5,[N.TOK_GTE]:5,[N.TOK_LTE]:5,[N.TOK_NE]:5,[N.TOK_FLATTEN]:9,[N.TOK_STAR]:20,[N.TOK_FILTER]:21,[N.TOK_DOT]:40,[N.TOK_NOT]:45,[N.TOK_LBRACE]:50,[N.TOK_LBRACKET]:55,[N.TOK_LPAREN]:60};class Np{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==N.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return s}loadTokens(t){this.tokens=[...bl.tokenize(t),{type:N.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let a=this.nud(s),n=this.lookahead(0);for(;t<Re[n];)this.advance(),a=this.led(n,a),n=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,a,n;switch(t.type){case N.TOK_LITERAL:return{type:"Literal",value:t.value};case N.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case N.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===N.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case N.TOK_NOT:return a=this.expression(Re.Not),{type:"NotExpression",children:[a]};case N.TOK_STAR:return s={type:"Identity"},a=this.lookahead(0)===N.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Re.Star),{type:"ValueProjection",children:[s,a]};case N.TOK_FILTER:return this.led(t.type,{type:"Identity"});case N.TOK_LBRACE:return this.parseMultiselectHash();case N.TOK_FLATTEN:return s={type:N.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(Re.Flatten),{type:"Projection",children:[s,a]};case N.TOK_LBRACKET:return this.lookahead(0)===N.TOK_NUMBER||this.lookahead(0)===N.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===N.TOK_STAR&&this.lookahead(1)===N.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(Re.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case N.TOK_CURRENT:return{type:N.TOK_CURRENT};case N.TOK_ROOT:return{type:N.TOK_ROOT};case N.TOK_EXPREF:return n=this.expression(Re.Expref),{type:"ExpressionReference",children:[n]};case N.TOK_LPAREN:const i=[];for(;this.lookahead(0)!==N.TOK_RPAREN;)this.lookahead(0)===N.TOK_CURRENT?(n={type:N.TOK_CURRENT},this.advance()):n=this.expression(0),i.push(n);return this.match(N.TOK_RPAREN),i[0];default:this.errorToken(t)}}led(t,s){let a;switch(t){case N.TOK_DOT:const n=Re.Dot;return this.lookahead(0)!==N.TOK_STAR?(a=this.parseDotRHS(n),{type:"Subexpression",children:[s,a]}):(this.advance(),a=this.parseProjectionRHS(n),{type:"ValueProjection",children:[s,a]});case N.TOK_PIPE:return a=this.expression(Re.Pipe),{type:N.TOK_PIPE,children:[s,a]};case N.TOK_OR:return a=this.expression(Re.Or),{type:"OrExpression",children:[s,a]};case N.TOK_AND:return a=this.expression(Re.And),{type:"AndExpression",children:[s,a]};case N.TOK_LPAREN:const r=s.name,i=[];let o;for(;this.lookahead(0)!==N.TOK_RPAREN;)this.lookahead(0)===N.TOK_CURRENT?(o={type:N.TOK_CURRENT},this.advance()):o=this.expression(0),this.lookahead(0)===N.TOK_COMMA&&this.match(N.TOK_COMMA),i.push(o);return this.match(N.TOK_RPAREN),{name:r,type:"Function",children:i};case N.TOK_FILTER:const c=this.expression(0);return this.match(N.TOK_RBRACKET),a=this.lookahead(0)===N.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Re.Filter),{type:"FilterProjection",children:[s,a,c]};case N.TOK_FLATTEN:const d={type:N.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(Re.Flatten);return{type:"Projection",children:[d,u]};case N.TOK_EQ:case N.TOK_NE:case N.TOK_GT:case N.TOK_GTE:case N.TOK_LT:case N.TOK_LTE:return this.parseComparator(s,t);case N.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===N.TOK_NUMBER||p.type===N.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(s,a)):(this.match(N.TOK_STAR),this.match(N.TOK_RBRACKET),a=this.parseProjectionRHS(Re.Star),{type:"Projection",children:[s,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const a=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===N.TOK_COLON||this.lookahead(1)===N.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(N.TOK_RBRACKET),t}projectIfSlice(t,s){const a={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[a,this.parseProjectionRHS(Re.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let s=0,a=this.lookahead(0);for(;a!==N.TOK_RBRACKET&&s<3;){if(a===N.TOK_COLON)s+=1,this.advance();else if(a===N.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}a=this.lookahead(0)}return this.match(N.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const a=this.expression(Re[s]);return{type:"Comparator",name:s,children:[t,a]}}parseDotRHS(t){const s=this.lookahead(0);if([N.TOK_UNQUOTEDIDENTIFIER,N.TOK_QUOTEDIDENTIFIER,N.TOK_STAR].includes(s))return this.expression(t);if(s===N.TOK_LBRACKET)return this.match(N.TOK_LBRACKET),this.parseMultiselectList();if(s===N.TOK_LBRACE)return this.match(N.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(t){if(Re[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===N.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===N.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===N.TOK_DOT)return this.match(N.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==N.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===N.TOK_COMMA&&(this.match(N.TOK_COMMA),this.lookahead(0)===N.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(N.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[N.TOK_UNQUOTEDIDENTIFIER,N.TOK_QUOTEDIDENTIFIER];let a,n,r;for(;;){if(a=this.lookaheadToken(0),!s.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(n=a.value,this.advance(),this.match(N.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:n}),this.lookahead(0)===N.TOK_COMMA)this.match(N.TOK_COMMA);else if(this.lookahead(0)===N.TOK_RBRACE){this.match(N.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const _l=new Np;var V;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(V||(V={}));class Bp{constructor(t){this.TYPE_NAME_TABLE={[V.TYPE_NUMBER]:"number",[V.TYPE_ANY]:"any",[V.TYPE_STRING]:"string",[V.TYPE_ARRAY]:"array",[V.TYPE_OBJECT]:"object",[V.TYPE_BOOLEAN]:"boolean",[V.TYPE_EXPREF]:"expression",[V.TYPE_NULL]:"null",[V.TYPE_ARRAY_NUMBER]:"Array<number>",[V.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let a=0;for(let n=0;n<s.length;n+=1)a+=s[n];return a/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[a,n]=s;return a.includes(n)},this.functionEndsWith=s=>{const[a,n]=s;return a.includes(n,a.length-n.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[a,n]=s;return n.join(a)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>Es(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const a=[],n=this._interpreter,r=s[0],i=s[1];for(let o=0;o<i.length;o+=1)a.push(n.visit(r,i[o]));return a},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===V.TYPE_NUMBER)return Math.max(...s);const n=s;let r=n[0];for(let i=1;i<n.length;i+=1)r.localeCompare(n[i])<0&&(r=n[i]);return r},this.functionMaxBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[V.TYPE_NUMBER,V.TYPE_STRING]);let i=-1/0,o,l;for(let c=0;c<n.length;c+=1)l=r&&r(n[c]),l!==void 0&&l>i&&(i=l,o=n[c]);return o},this.functionMerge=s=>{let a={};for(let n=0;n<s.length;n+=1){const r=s[n];a=Object.assign(a,r)}return a},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===V.TYPE_NUMBER)return Math.min(...s);const n=s;let r=n[0];for(let i=1;i<n.length;i+=1)n[i].localeCompare(r)<0&&(r=n[i]);return r},this.functionMinBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[V.TYPE_NUMBER,V.TYPE_STRING]);let i=1/0,o,l;for(let c=0;c<n.length;c+=1)l=r&&r(n[c]),l!==void 0&&l<i&&(i=l,o=n[c]);return o},this.functionNotNull=s=>{for(let a=0;a<s.length;a+=1)if(this.getTypeName(s[a])!==V.TYPE_NULL)return s[a];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===V.TYPE_STRING){const r=s;let i="";for(let o=r.length-1;o>=0;o-=1)i+=r[o];return i}const n=s.slice(0);return n.reverse(),n},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const a=s[0].slice(0);if(a.length===0)return a;const n=this._interpreter,r=s[1],i=this.getTypeName(n.visit(r,a[0]));if(i!==void 0&&![V.TYPE_NUMBER,V.TYPE_STRING].includes(i))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[i]})`);const o=[];for(let l=0;l<a.length;l+=1)o.push([l,a[l]]);o.sort((l,c)=>{const d=n.visit(r,l[1]),u=n.visit(r,c[1]);if(this.getTypeName(d)!==i)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[i]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==i)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[i]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<o.length;l+=1)a[l]=o[l][1];return a},this.functionStartsWith=([s,a])=>s.startsWith(a),this.functionSum=([s])=>s.reduce((a,n)=>a+n,0),this.functionToArray=([s])=>this.getTypeName(s)===V.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const a=this.getTypeName(s);let n;return a===V.TYPE_NUMBER?s:a===V.TYPE_STRING&&(n=+s,!isNaN(n))?n:null},this.functionToString=([s])=>this.getTypeName(s)===V.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case V.TYPE_NUMBER:return"number";case V.TYPE_STRING:return"string";case V.TYPE_ARRAY:return"array";case V.TYPE_OBJECT:return"object";case V.TYPE_BOOLEAN:return"boolean";case V.TYPE_EXPREF:return"expref";case V.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[V.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[V.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[V.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[V.TYPE_STRING,V.TYPE_ARRAY]},{types:[V.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[V.TYPE_STRING]},{types:[V.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[V.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[V.TYPE_STRING]},{types:[V.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[V.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[V.TYPE_STRING,V.TYPE_ARRAY,V.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[V.TYPE_EXPREF]},{types:[V.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[V.TYPE_ARRAY_NUMBER,V.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[V.TYPE_ARRAY]},{types:[V.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[V.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[V.TYPE_ARRAY_NUMBER,V.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[V.TYPE_ARRAY]},{types:[V.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[V.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[V.TYPE_STRING,V.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[V.TYPE_ARRAY_STRING,V.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[V.TYPE_ARRAY]},{types:[V.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[V.TYPE_STRING]},{types:[V.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[V.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[V.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[V.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[V.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[V.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[V.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:a}}callFunction(t,s){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,a._signature),a._func.call(this,s)}validateInputSignatures(t,s){for(let a=0;a<s.length;a+=1)if("variadic"in s[a]&&a!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,s,a){var n,r;let i;this.validateInputSignatures(t,a);const o=a.filter(m=>{var A;return(A=!m.optional)!==null&&A!==void 0?A:!1}).length,l=(r=(n=a[a.length-1])===null||n===void 0?void 0:n.variadic)!==null&&r!==void 0?r:!1,c=s.length<o,d=s.length>a.length,u=c&&(!l&&o>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw i=a.length>1,new Error(`ArgumentError: ${t}() takes ${u}${o} argument${i&&"s"||""} but received ${s.length}`);let p,f,g;for(let m=0;m<a.length;m+=1){g=!1,p=a[m].types,f=this.getTypeName(s[m]);let A;for(A=0;A<p.length;A+=1)if(f!==void 0&&this.typeMatches(f,p[A],s[m])){g=!0;break}if(!g&&f!==void 0){const S=p.map(P=>this.TYPE_NAME_TABLE[P]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${m+1} to be type (${S}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,a){if(s===V.TYPE_ANY)return!0;if(s===V.TYPE_ARRAY_STRING||s===V.TYPE_ARRAY_NUMBER||s===V.TYPE_ARRAY){if(s===V.TYPE_ARRAY)return t===V.TYPE_ARRAY;if(t===V.TYPE_ARRAY){let n;s===V.TYPE_ARRAY_NUMBER?n=V.TYPE_NUMBER:s===V.TYPE_ARRAY_STRING&&(n=V.TYPE_STRING);for(let r=0;r<a.length;r+=1){const i=this.getTypeName(a[r]);if(i!==void 0&&n!==void 0&&!this.typeMatches(i,n,a[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return V.TYPE_STRING;case"[object Number]":return V.TYPE_NUMBER;case"[object Array]":return V.TYPE_ARRAY;case"[object Boolean]":return V.TYPE_BOOLEAN;case"[object Null]":return V.TYPE_NULL;case"[object Object]":return t.jmespathType===N.TOK_EXPREF?V.TYPE_EXPREF:V.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const a=this._interpreter;return r=>{const i=a.visit(t,r);if(!s.includes(this.getTypeName(i))){const o=`TypeError: expected one of (${s.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(i)]}`;throw new Error(o)}return i}}}class Fp{constructor(){this._rootValue=null,this.runtime=new Bp(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let a,n,r,i,o,l,c,d,u,p,f;switch(t.type){case"Field":return s===null?null:Es(s)?(l=s[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let g=t.value;return g<0&&(g=s.length+g),r=s[g],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const m=[...t.children],A=this.computeSliceParams(s.length,m),[S,P,w]=A;if(r=[],w>0)for(p=S;p<P;p+=w)r.push(s[p]);else for(p=S;p>P;p+=w)r.push(s[p]);return r;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)n=this.visit(t.children[1],f[p]),n!==null&&u.push(n);return u;case"ValueProjection":if(f=this.visit(t.children[0],s),!Es(f))return null;u=[];const v=Object.values(f);for(p=0;p<v.length;p+=1)n=this.visit(t.children[1],v[p]),n!==null&&u.push(n);return u;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const O=[],R=[];for(p=0;p<f.length;p+=1)a=this.visit(t.children[2],f[p]),ra(a)||O.push(f[p]);for(let y=0;y<O.length;y+=1)n=this.visit(t.children[1],O[y]),n!==null&&R.push(n);return R;case"Comparator":switch(i=this.visit(t.children[0],s),o=this.visit(t.children[1],s),t.name){case N.TOK_EQ:r=Sa(i,o);break;case N.TOK_NE:r=!Sa(i,o);break;case N.TOK_GT:r=i>o;break;case N.TOK_GTE:r=i>=o;break;case N.TOK_LT:r=i<o;break;case N.TOK_LTE:r=i<=o;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case N.TOK_FLATTEN:const T=this.visit(t.children[0],s);if(!Array.isArray(T))return null;let _=[];for(p=0;p<T.length;p+=1)n=T[p],Array.isArray(n)?_=[..._,...n]:_.push(n);return _;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let h;for(p=0;p<t.children.length;p+=1)h=t.children[p],u[h.name]=this.visit(h.value,s);return u;case"OrExpression":return a=this.visit(t.children[0],s),ra(a)&&(a=this.visit(t.children[1],s)),a;case"AndExpression":return i=this.visit(t.children[0],s),ra(i)?i:this.visit(t.children[1],s);case"NotExpression":return i=this.visit(t.children[0],s),ra(i);case"Literal":return t.value;case N.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case N.TOK_CURRENT:return s;case N.TOK_ROOT:return this._rootValue;case"Function":const b=[];for(let y=0;y<t.children.length;y+=1)b.push(this.visit(t.children[y],s));return this.runtime.callFunction(t.name,b);case"ExpressionReference":const E=t.children[0];return E.jmespathType=N.TOK_EXPREF,E;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[a,n,r]=s;if(r===null)r=1;else if(r===0){const o=new Error("Invalid slice, step cannot be 0");throw o.name="RuntimeError",o}const i=r<0;return a=a===null?i?t-1:0:this.capSliceRange(t,a,r),n=n===null?i?-1:t:this.capSliceRange(t,n,r),[a,n,r]}capSliceRange(t,s,a){let n=s;return n<0?(n+=t,n<0&&(n=a<0?-1:0)):n>=t&&(n=a<0?t-1:t),n}}const pr=new Fp,$p=V.TYPE_ANY,zp=V.TYPE_ARRAY,Hp=V.TYPE_ARRAY_NUMBER,Up=V.TYPE_ARRAY_STRING,Gp=V.TYPE_BOOLEAN,jp=V.TYPE_EXPREF,Yp=V.TYPE_NULL,qp=V.TYPE_NUMBER,Kp=V.TYPE_OBJECT,Vp=V.TYPE_STRING;function Wp(e){return _l.parse(e)}function Jp(e){return bl.tokenize(e)}const Xp=(e,t,s)=>{pr.runtime.registerFunction(e,t,s)};function Qp(e,t){const s=_l.parse(t);return pr.search(s,e)}const Zp=pr,et={compile:Wp,registerFunction:Xp,search:Qp,tokenize:Jp,TreeInterpreter:Zp,TYPE_ANY:$p,TYPE_ARRAY_NUMBER:Hp,TYPE_ARRAY_STRING:Up,TYPE_ARRAY:zp,TYPE_BOOLEAN:Gp,TYPE_EXPREF:jp,TYPE_NULL:Yp,TYPE_NUMBER:qp,TYPE_OBJECT:Kp,TYPE_STRING:Vp},mt=class mt{static async appendPrompt(t,s){wi(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{bs().then(a=>{a=a.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),a.length>mt.MAX_PROMPTS_VALS&&fn(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(s=>{let a=JSON.stringify({ts:Date.now(),name:s[1]});wi(s[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(t,s){bs().then(a=>{a=a.filter(n=>n.indexOf(t)!=-1),s&&s(a)})}static async get(t,s){Op(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{s&&s(a)}})}static async entries(t,s){Cp().then(a=>{a=a.filter(n=>n[0].indexOf(t)!=-1),a=a.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),s&&s(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,a){let n="";switch(t){case"PROMPTS_COUNT":bs().then(i=>{i=i.filter(o=>o.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${i.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&a&&a(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":bs().then(i=>{i.forEach(o=>{o.indexOf(this.DELIM_PROMPTS)!=-1&&o.split(mt.DELIM_PROMPTS)[0]==s&&fn(o)})}),n="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":bs().then(i=>{i=i.filter(o=>o.indexOf(this.DELIM_VIR)!=-1),n=`There are ${i.length} VNR names in local IDB storage.`,n&&a&&a(n)});break;case"VIR_CLEAR":let r=0;await bs().then(i=>{i.forEach(o=>{o.indexOf(this.DELIM_VIR)!=-1&&o.split(mt.DELIM_VIR)[0]==s&&(r++,fn(o))})}),n=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&a&&a(n)}};mt.MAX_TYPEAHEAD_ROWS=14,mt.MAX_PROMPTS_VALS=50,mt.DELIM_PROMPTS="_",mt.DELIM_VIR="-",mt.DELIM_SNDX="|";let cs=mt;const me=gu("AppState",()=>{const e=Tt(),t="DEV",s="BMA Tourney v0.0.5 ",a="#app",n=Mt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=Mt([]),i=Mt([]);const o=h=>{r.push(h),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=h=>{i.push(h),i.length>10&&(i.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${i.length}`)},c=()=>{const h=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",h),h)try{const b=JSON.parse(h);return console.log("[appState] Parsed session_user:",b),b}catch(b){console.error("Failed to parse session_user from localStorage:",b)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Qe({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Qe({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",cs.compr(JSON.stringify(u.value.features)));else{let h=cs.decompr(localStorage.getItem("feature_flags"));h=Object.assign(u.value.features,JSON.parse(h));for(let b in h)typeof u.value?.env_override[t][b]<"u"&&(h[b]=u.value.env_override[t][b]);localStorage.setItem("feature_flags",cs.compr(JSON.stringify(u.value.features=h)))}},f=()=>{const h=document.querySelector(a);if(h){const b=h.dataset;for(let E in b){const y=E.replace(/^sync/,""),M=Object.keys(u.value.features).find(F=>F.toLowerCase()===y.toLowerCase());if(M){const F=u.value.features[M]?.state;F&&(b[E]=F)}}}},g=(h="Theme",b={state:"dark"})=>{const E=document.querySelector(a);E&&(E.dataset["sync"+h]=b.state)},m=(h="Theme",b={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&b){let y=JSON.parse(cs.decompr(localStorage.getItem("feature_flags")));y[h]={state:b.state},localStorage.setItem("feature_flags",cs.compr(JSON.stringify(u.value.features=y))),g(h,b),se.publish("APP.ROUTE_SYNC",`{ "${h}": ${JSON.stringify(b)}}`)}},A=h=>{const b=u.value?.features?.Lang?.state;let E=w.value.microcopy.language.filter(y=>y.code==b)[0]?.copy;if(E=E.filter(y=>y[0]==h)[0],E)return E[1]},S=(h=":version")=>{let[b,E,y]=h.split(" ");switch(b=b.toLocaleLowerCase(),y=="true"&&(y=!0),y=="false"&&(y=!1),b){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":m(E,{state:y});break;case":route":neodigmToast.q(`route ${E}`,"brand"),e.push({name:E});break}};p(),f();const P=Mt({designer:"guided_tour",notifications:{unread:0}}),w=Qe({sports:it,microcopy:Ap.getMeta()}),v=We(()=>d.value.session_user.fname+" "+d.value.session_user.lname),O=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},R=()=>{localStorage.removeItem("session_user")};function T(h){return d.value.session_user.authenticated=!0,d.value.session_user.token=h,O(),d.value.session_app.route="chat"}function _(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",R(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:P,appMeta:w,appSession:d,clearSessionUser:R,concatFirstLast:v,coreBetSlip:i,coreTourn:r,doCLI:S,doLogin:T,doLogout:_,hierTopics:n,i18n:A,pushCoreTourn:o,pushcoreBetSlip:l,saveSessionUser:O,setFeaturePersistPub:m}}),Ge=class Ge{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Ge.setTJO(null),location.reload()}static async doSignin(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const i=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(i,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return s&&s(r),r}static async resetHash(t,s,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:n}),headers:Ge.genHeaders()},o=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(o)}static genHeaders(t={}){let s={};return s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company),s}static async fetchTournaments(t=null){const s={method:"GET",headers:Ge.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(n),n}static async fetchBetSlips(t,s="",a="",n=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&a&&(r+=`/${a}`);const i={method:"GET",headers:Ge.genHeaders()},l=await(await fetch(this.API_baseURI+r,i)).json();return n&&n(l),l}static async fetchLeaderboard(t,s="",a=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(n+=`&user=${s}`);const r={method:"GET",headers:Ge.genHeaders()},o=await(await fetch(this.API_baseURI+n,r)).json();return a&&a(o),o}static async fetchGlobalLeaderboard(t=null){const s=`/m5t/${this.API_ver}/coreLeaderboard`,a={method:"GET",headers:Ge.genHeaders()},r=await(await fetch(this.API_baseURI+s,a)).json();return t&&t(r),r}static async postBetSlips(t,s=null){const a=t.map(r=>{const i={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",i).then(o=>o.json())}),n=await Promise.all(a);return s&&s(n),n}static async fetchPromotions(t=null){const s={method:"GET",headers:Ge.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(n),n}};Ge.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Ge.API_ver="v5",Ge.jsState={},Ge.jsMeta={},Ge.jsTJO=null;let Se=Ge;const Js={shootConfetti(){if(typeof confetti=="function"){let a=function(n,r){confetti({...t,...r,particleCount:Math.floor(e*n)})};var s=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const a in t)e[a]&&t[a]!=e[a]&&(s[a]=e[a]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){}},ts=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},ef={class:"auth-page"},tf={__name:"splash_route",setup(e){const t=Tt(),s=gl();return me(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,n)=>(nt(),xt("div",ef,[...n[0]||(n[0]=[es('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),U("div",{class:"auth-page-right"},[U("div",{class:"auth-card splash-content"},[U("p",{class:"splash-message"},"Loading Tournaments..."),U("br"),U("br"),U("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[U("div")])])],-1)])]))}},Si=ts(tf,[["__scopeId","data-v-910ecc85"]]);class sf{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(s=>{let a=!1;for(const n of s){if(n.attributeName==="data-sync-theme"){const r=t.getAttribute("data-sync-theme")||"dark";r!==this._theme&&(this._theme=r,a=!0)}if(n.attributeName==="data-sync-motif"){const r=t.getAttribute("data-sync-motif")||"brand";r!==this._motif&&(this._motif=r,a=!0)}if(n.attributeName==="data-sync-lang"){const r=t.getAttribute("data-sync-lang")||"en";r!==this._lang&&(this._lang=r,a=!0)}}a&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(s){console.warn("[BMAThemeResolver] Listener error:",s)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Ae=new sf().init(),Ea={mobile:"(orientation: portrait), (max-width: 768px)",tablet:"(min-width: 769px) and (max-width: 1024px)",wide:"(min-width: 1280px)"};function rt(){return`
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
  `}function ss(){return`
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
        ${rt()}

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
    `}}customElements.define("bma-sport-icon",af);class nf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Ae.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),n=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const i=r.getAttribute("sport"),o=this.getSportInfo(i);this.dispatchCardEvent("SPORT_ICON",{sportKey:i,sportTitle:o.title,sportDescription:o.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,a){s!==a&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,a=this.getAttribute("data-compact")==="true";!a&&s>2?this.setAttribute("data-compact","true"):a&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return Ae.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const a=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const n=JSON.parse(a);if(!Array.isArray(n))return null;const r=n.find(i=>!!(typeof i=="object"&&i!==null&&(i.entity_guid===s&&i.badge&&i.badge.startsWith("--badge__ribbon--")||i[s]&&i[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=it.find(a=>a.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(a=>{const n=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${n} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let a="";for(let n=0;n<s;n++){const r=t[n].key,i=it.find(l=>l.key===r),o=i?i.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${o}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),s=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
        ${ss()}
        neodigm-marquee pre { color: var( --app-core-color--yellow-1__dark--brand ) !important; }
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
    height: 34px;
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

neodigm-marquee {
    display: inline-block;
    width: 100%;
    user-select: none;
    overflow: hidden;
    background-color: var(--app-core-color--gray-4__dark--brand, #282828);
        height: 38px;
}
[data-sync-theme="light"] neodigm-marquee[data-n55-theme='ghost'] { background-color: #fff; }
[data-sync-theme="dark"]  neodigm-marquee[data-n55-theme='ghost'] { background-color: var(--app-core-color--gray-4__dark--brand, #282828); }

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
        <div class="badge-ribbon ${this.getUserBadge()?"visible":""} ${this.getBadgeClass()}"></div>
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
          data-n55-marquee-size="small"
          style="padding: 7px 0 4px 0; height: 34px;">
          <pre data-n55-theme="warning"></pre>
          </neodigm-marquee>
        </output>
        <div class="card-body">
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
              <p class="info-value">${this.matches}${(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(r=>r.override_last_match_close===!0)?"+":""}catch{return""}})()}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">TD$</p>
              <p class="info-value">${this.tournament_dollars}</p>
            </section>
          </div>
        </div>
      </div>
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",nf);class rf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,a){if(s!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Js.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{se.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",a=>{const n=a.target.value;this.setAttribute("data-stake",n)})}render(){this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",rf);class of extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Ae.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=it.find(a=>a.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(i=>i.match_inprogress_lock===!0))return!1;const a=this.scoreboard;if(!a||!a.time_remaining)return!1;const n=a.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,a){s!==a&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const a=s-t;if(a<=0)return"";const n=Math.floor(a/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const a=s.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const n=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(n||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let a=this.scheduledAt;if(!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z"),new Date(a)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,a,n,r){t.stopPropagation();const i=t.currentTarget;if(i.classList.contains("btn--disabled")||i.dataset.disabled==="true")return;const o=i.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:a,price:n,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:o,button:i}}))}renderButton(t,s,a,n,r=!1){if(!a)return'<button class="btn btn--empty" disabled></button>';const i=a.price,o=a.point;let l="";return t==="spread"?l=`${o>0?`+${o}`:o}<br><span class="btn-odds" data-price-value="${i}">${i}</span>`:t==="money"?l=i:t==="total"&&(l=`${n}${o}<br><span class="btn-odds" data-price-value="${i}">${i}</span>`),`<button class="btn ${r?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${i}"
                    ${o?`data-point="${o}"`:""}
                    ${r?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){this.theme;const t=this.oddsMarkets,s=t&&(t.h2h||t.totals||t.spreads),a=this.isMatchInProgressLocked(),n=this.isDisabled||a,r=s,i=this.getGameStatus(),o=this.scoreboard,l=o?.home_score||0,c=o?.away_score||0,d=i?.type==="live"||i?.type==="final",u=parseInt(l),p=parseInt(c),f=i?.type==="final",g=i?.type==="live",m=d&&f&&u>p,A=d&&f&&p>u,S=d&&g&&u>p,P=d&&g&&p>u,w=t?.spreads?.outcomes?.find(h=>h.name===this.homeTeam),v=t?.spreads?.outcomes?.find(h=>h.name===this.awayTeam),O=t?.h2h?.outcomes?.find(h=>h.name===this.homeTeam),R=t?.h2h?.outcomes?.find(h=>h.name===this.awayTeam),T=t?.totals?.outcomes?.find(h=>h.name==="Over"),_=t?.totals?.outcomes?.find(h=>h.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${rt()}
                ${ss()}

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
                ${r?`
                    <div class="labels-row">
                        <span>SPREAD</span>
                        <span>MONEY</span>
                        <span>TOTAL</span>
                    </div>
                `:""}

                <!-- Team rows -->
                <div class="rows-container">
                    <div class="row row--home">
                        <div class="team team--home ${m?"team--winner":""} ${A?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${d?`<span class="team-score ${S?"score--leading":""} ${P?"score--trailing":""}">${l}</span>`:""}
                        </div>
                        ${r?`
                            <div class="buttons">
                                ${this.renderButton("spread","home",w,null,n)}
                                ${this.renderButton("money","home",O,null,n)}
                                ${this.renderButton("total","under",_,"U",n)}
                            </div>
                        `:""}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${A?"team--winner":""} ${m?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${d?`<span class="team-score ${P?"score--leading":""} ${S?"score--trailing":""}">${c}</span>`:""}
                        </div>
                        ${r?`
                            <div class="buttons">
                                ${this.renderButton("spread","away",v,null,n)}
                                ${this.renderButton("money","away",R,null,n)}
                                ${this.renderButton("total","over",T,"O",n)}
                            </div>
                        `:""}
                    </div>
                </div>
            </div>
        `,r&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(h=>{const b=h.dataset.betType,E=h.dataset.team,y=h.dataset.price,M=h.dataset.point||null;h.addEventListener("click",F=>this.handleButtonClick(F,b,E,y,M))})}}customElements.define("bma-bet-match-card",of);class lf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=it.find(s=>s.key===this.sportId);return t?t.group:""}get theme(){return Ae.theme}get isDark(){return Ae.isDark}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let s=this.scheduledAt;!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z");const n=new Date(s)-t;if(n<=0)return"";const r=Math.floor(n/(1e3*60*60)),i=Math.floor(n%(1e3*60*60)/(1e3*60));return r>24?`${Math.floor(r/24)}d ${r%24}h`:r>0?`${r}h ${i}m`:i>5?`${i} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const l=new Date(o),c=new Date(Date.now()-300*1e3);a=l<c}let n="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(n="FINAL",r="Final"):o==="In Progress"?(n="IN_PROGRESS",r="In Progress"):(n="IN_PROGRESS",r=o)}else s&&a?(n="FINAL",r="Final"):(n="UPCOMING",r="Upcoming");const i=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:r,countdown:i}}render(){const{status:t,timeRemaining:s,countdown:a}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,r=this.scheduledAt?Js.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",i=parseInt(this.homeScore),o=parseInt(this.awayScore),l=n&&t==="FINAL"&&i>o,c=n&&t==="FINAL"&&o>i;this.shadowRoot.innerHTML=`
      <style>
        ${rt()}

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
        <div class="detail-row">Scheduled: ${r}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",lf);class qt extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Ae.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){qt.currentlyExpanded&&qt.currentlyExpanded!==this&&qt.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),qt.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),qt.currentlyExpanded===this&&(qt.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,a=0,n=0,r=0,i=0;return t.forEach(o=>{const l=o.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:a++:(n++,r+=parseFloat(p.stake||p.wager||0),i+=parseFloat(p.payout||0)))})}),{wins:s,losses:a,pending:n,total:s+a+n,pendingStakes:r,pendingMaxPayout:i}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,a=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(a)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';const r={};s.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(r[c]=l)});const i={};n.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";i[c]||(i[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=r[c];if(d){i[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=it.find(f=>f.key===u);i[c].sportKey=p?.group||"default"}i[c].bets.push(l)});let o="";return Object.keys(i).forEach(l=>{const c=i[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;o+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const m=g[0];Object.keys(m).filter(S=>S!=="short_title").forEach(S=>{const P=m[S];if(!P||typeof P!="object")return;const w=(P.type||"").toUpperCase(),v=parseFloat(P.stake||P.wager||0).toFixed(2),O=P.odds||"-",R=O>0?`+${O}`:`${O}`,T=parseFloat(P.payout||0).toFixed(2),_=P.reconciled===!0;let h="pending",b="Pending";_&&Number(T)>0?(h="won",b="Won"):_&&Number(T)===0?(h="lost",b="Lost"):_&&(h="reconciled",b="Settled"),o+=`<div class="bet-item bet-item--${h}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${S}</span>
                            <span class="bet-status-badge ${h}">${b}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${w}</span>
                            <span>Stake: $${v}</span>
                            <span>Odds: ${R}</span>
                            <span class="${h==="won"?"payout-win":h==="lost"?"payout-loss":""}">Payout: $${T}</span>
                        </div>
                    </div>`})})}),o}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",a=parseFloat(this.tournamentDollars||0),n=parseFloat(this.startingDollars||0),r=a-n,i=r>=0?"+":"",o=r>0?"profit-up":r<0?"profit-down":"profit-even",l=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${rt()}
                ${ss()}

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
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                }

                .badge-trophy--gold {
                    background: radial-gradient(circle, #FFD700, #FFA500);
                    border-radius: var(--badge-radius, 6px);
                    box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
                }

                .badge-trophy--silver {
                    background: radial-gradient(circle, #C0C0C0, #A8A8A8);
                    border-radius: var(--badge-radius, 6px);
                    box-shadow: 0 0 12px rgba(192, 192, 192, 0.6);
                }

                .badge-trophy--bronze {
                    background: radial-gradient(circle, #CD7F32, #B8732D);
                    border-radius: var(--badge-radius, 6px);
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
                        <div class="kpi-card__value ${o}">${i}TD$ ${Math.abs(r).toFixed(2)}</div>
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
        `}}customElements.define("bma-leaderboard-card",qt);class yl{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:a}=t.Bet,{home_team_id:n,home_team_score:r,away_team_id:i,away_team_score:o}=t.Match,l=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(o)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${n} (${c})`,away:`${i} (${d})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,n,i,c,d);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,n,i,c,d);case"TOTAL":return this._evaluateTotal(a.over,a.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,s,a,n,r){const i=t===s,o=t===a;if(!i&&!o)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=n>r,c=r>n;if(n===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=i&&l||o&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,a,n,r,i){const o=t===a,l=t===n;if(!o&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=i;o?d=r+c:u=i+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const m=o&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${m?"WON":"LOST"}`),m}static _evaluateTotal(t,s,a,n){const r=a+n,i=t&&t!=="";if(!i&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(i?t:s);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return i?(c=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:a,stake:n}=t.Bet,r=s?.toUpperCase()||"",i=parseFloat(a)||0,o=parseFloat(n)||0;if(o<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",o),0;if(i===0)return console.warn("[CoreBetSlip] Invalid odds value:",i),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(i,o),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:i,stake:o,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(i,o),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:i,stake:o,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(i,o),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:i,stake:o,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(i,o),console.log("[CoreBetSlip] PROP payout calculated:",{odds:i,stake:o,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(i,o),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:i,stake:o,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,s){let a=0;return t>0?a=s*(t/100):t<0?a=s/(Math.abs(t)/100):a=0,s+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function Ei(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function fr(e,t){e===void 0&&(e={}),t===void 0&&(t={});const s=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>s.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Ei(t[a])&&Ei(e[a])&&Object.keys(t[a]).length>0&&fr(e[a],t[a])})}const vl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function vt(){const e=typeof document<"u"?document:{};return fr(e,vl),e}const cf={document:vl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ze(){const e=typeof window<"u"?window:{};return fr(e,cf),e}function df(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function uf(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function wl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function ka(){return Date.now()}function pf(e){const t=ze();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function ff(e,t){t===void 0&&(t="x");const s=ze();let a,n,r;const i=pf(e);return s.WebKitCSSMatrix?(n=i.transform||i.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(n==="none"?"":n)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?n=r.m41:a.length===16?n=parseFloat(a[12]):n=parseFloat(a[4])),t==="y"&&(s.WebKitCSSMatrix?n=r.m42:a.length===16?n=parseFloat(a[13]):n=parseFloat(a[5])),n||0}function ia(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function hf(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ke(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(a!=null&&!hf(a)){const n=Object.keys(Object(a)).filter(r=>t.indexOf(r)<0);for(let r=0,i=n.length;r<i;r+=1){const o=n[r],l=Object.getOwnPropertyDescriptor(a,o);l!==void 0&&l.enumerable&&(ia(e[o])&&ia(a[o])?a[o].__swiper__?e[o]=a[o]:Ke(e[o],a[o]):!ia(e[o])&&ia(a[o])?(e[o]={},a[o].__swiper__?e[o]=a[o]:Ke(e[o],a[o])):e[o]=a[o])}}}return e}function oa(e,t,s){e.style.setProperty(t,s)}function xl(e){let{swiper:t,targetPosition:s,side:a}=e;const n=ze(),r=-t.translate;let i=null,o;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(t.cssModeFrameID);const c=s>r?"next":"prev",d=(p,f)=>c==="next"&&p>=f||c==="prev"&&p<=f,u=()=>{o=new Date().getTime(),i===null&&(i=o);const p=Math.max(Math.min((o-i)/l,1),0),f=.5-Math.cos(p*Math.PI)/2;let g=r+f*(s-r);if(d(g,s)&&(g=s),t.wrapperEl.scrollTo({[a]:g}),d(g,s)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:g})}),n.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=n.requestAnimationFrame(u)};u()}function Dt(e,t){t===void 0&&(t="");const s=ze(),a=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(n=>n.matches(t)):a}function gf(e,t){const s=[t];for(;s.length>0;){const a=s.shift();if(e===a)return!0;s.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function mf(e,t){const s=ze();let a=t.contains(e);return!a&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=gf(e,t))),a}function Aa(e){try{console.warn(e);return}catch{}}function zn(e,t){t===void 0&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:df(t)),s}function bf(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function _f(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function Kt(e,t){return ze().getComputedStyle(e,null).getPropertyValue(t)}function ki(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function yf(e,t){const s=[];let a=e.parentElement;for(;a;)s.push(a),a=a.parentElement;return s}function Ai(e,t,s){const a=ze();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let hn;function vf(){const e=ze(),t=vt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Tl(){return hn||(hn=vf()),hn}let gn;function wf(e){let{userAgent:t}=e===void 0?{}:e;const s=Tl(),a=ze(),n=a.navigator.platform,r=t||a.navigator.userAgent,i={ios:!1,android:!1},o=a.screen.width,l=a.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=n==="Win32";let g=n==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&g&&s.touch&&m.indexOf(`${o}x${l}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),g=!1),c&&!f&&(i.os="android",i.android=!0),(d||p||u)&&(i.os="ios",i.ios=!0),i}function Sl(e){return e===void 0&&(e={}),gn||(gn=wf(e)),gn}let mn;function xf(){const e=ze(),t=Sl();let s=!1;function a(){const o=e.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(a()){const o=String(e.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=l<16||l===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=a(),i=r||n&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:i,isWebView:n}}function El(){return mn||(mn=xf()),mn}function Tf(e){let{swiper:t,on:s,emit:a}=e;const n=ze();let r=null,i=null;const o=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(r=new ResizeObserver(u=>{i=n.requestAnimationFrame(()=>{const{width:p,height:f}=t;let g=p,m=f;u.forEach(A=>{let{contentBoxSize:S,contentRect:P,target:w}=A;w&&w!==t.el||(g=P?P.width:(S[0]||S).inlineSize,m=P?P.height:(S[0]||S).blockSize)}),(g!==p||m!==f)&&o()})}),r.observe(t.el))},c=()=>{i&&n.cancelAnimationFrame(i),r&&r.unobserve&&t.el&&(r.unobserve(t.el),r=null)},d=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};s("init",()=>{if(t.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",d)}),s("destroy",()=>{c(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",d)})}function Sf(e){let{swiper:t,extendParams:s,on:a,emit:n}=e;const r=[],i=ze(),o=function(d,u){u===void 0&&(u={});const p=i.MutationObserver||i.WebkitMutationObserver,f=new p(g=>{if(t.__preventObserver__)return;if(g.length===1){n("observerUpdate",g[0]);return}const m=function(){n("observerUpdate",g[0])};i.requestAnimationFrame?i.requestAnimationFrame(m):i.setTimeout(m,0)});f.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:t.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(f)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=yf(t.hostEl);for(let u=0;u<d.length;u+=1)o(d[u])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",l),a("destroy",c)}var Ef={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const n=s?"unshift":"push";return e.split(" ").forEach(r=>{a.eventsListeners[r]||(a.eventsListeners[r]=[]),a.eventsListeners[r][n](t)}),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function n(){a.off(e,n),n.__emitterProxy&&delete n.__emitterProxy;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t.apply(a,i)}return n.__emitterProxy=t,a.on(e,n,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].forEach((n,r)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&s.eventsListeners[a].splice(r,1)})}),s},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,s,a;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(a,[l,...s])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(a,s)})}),e}};function kf(){const e=this;let t,s;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=a.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(Kt(a,"padding-left")||0,10)-parseInt(Kt(a,"padding-right")||0,10),s=s-parseInt(Kt(a,"padding-top")||0,10)-parseInt(Kt(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function Af(){const e=this;function t(b,E){return parseFloat(b.getPropertyValue(e.getDirectionLabel(E))||0)}const s=e.params,{wrapperEl:a,slidesEl:n,size:r,rtlTranslate:i,wrongRTL:o}=e,l=e.virtual&&s.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=Dt(n,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:d.length;let p=[];const f=[],g=[];let m=s.slidesOffsetBefore;typeof m=="function"&&(m=s.slidesOffsetBefore.call(e));let A=s.slidesOffsetAfter;typeof A=="function"&&(A=s.slidesOffsetAfter.call(e));const S=e.snapGrid.length,P=e.slidesGrid.length;let w=s.spaceBetween,v=-m,O=0,R=0;if(typeof r>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*r:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w,d.forEach(b=>{i?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(oa(a,"--swiper-centered-offset-before",""),oa(a,"--swiper-centered-offset-after",""));const T=s.grid&&s.grid.rows>1&&e.grid;T?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let _;const h=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(b=>typeof s.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<u;b+=1){_=0;let E;if(d[b]&&(E=d[b]),T&&e.grid.updateSlide(b,E,d),!(d[b]&&Kt(E,"display")==="none")){if(s.slidesPerView==="auto"){h&&(d[b].style[e.getDirectionLabel("width")]="");const y=getComputedStyle(E),M=E.style.transform,F=E.style.webkitTransform;if(M&&(E.style.transform="none"),F&&(E.style.webkitTransform="none"),s.roundLengths)_=e.isHorizontal()?Ai(E,"width"):Ai(E,"height");else{const K=t(y,"width"),B=t(y,"padding-left"),H=t(y,"padding-right"),I=t(y,"margin-left"),X=t(y,"margin-right"),te=y.getPropertyValue("box-sizing");if(te&&te==="border-box")_=K+I+X;else{const{clientWidth:Z,offsetWidth:oe}=E;_=K+B+H+I+X+(oe-Z)}}M&&(E.style.transform=M),F&&(E.style.webkitTransform=F),s.roundLengths&&(_=Math.floor(_))}else _=(r-(s.slidesPerView-1)*w)/s.slidesPerView,s.roundLengths&&(_=Math.floor(_)),d[b]&&(d[b].style[e.getDirectionLabel("width")]=`${_}px`);d[b]&&(d[b].swiperSlideSize=_),g.push(_),s.centeredSlides?(v=v+_/2+O/2+w,O===0&&b!==0&&(v=v-r/2-w),b===0&&(v=v-r/2-w),Math.abs(v)<1/1e3&&(v=0),s.roundLengths&&(v=Math.floor(v)),R%s.slidesPerGroup===0&&p.push(v),f.push(v)):(s.roundLengths&&(v=Math.floor(v)),(R-Math.min(e.params.slidesPerGroupSkip,R))%e.params.slidesPerGroup===0&&p.push(v),f.push(v),v=v+_+w),e.virtualSize+=_+w,O=_,R+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+A,i&&o&&(s.effect==="slide"||s.effect==="coverflow")&&(a.style.width=`${e.virtualSize+w}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+w}px`),T&&e.grid.updateWrapperSize(_,p),!s.centeredSlides){const b=[];for(let E=0;E<p.length;E+=1){let y=p[E];s.roundLengths&&(y=Math.floor(y)),p[E]<=e.virtualSize-r&&b.push(y)}p=b,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(l&&s.loop){const b=g[0]+w;if(s.slidesPerGroup>1){const E=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),y=b*s.slidesPerGroup;for(let M=0;M<E;M+=1)p.push(p[p.length-1]+y)}for(let E=0;E<e.virtual.slidesBefore+e.virtual.slidesAfter;E+=1)s.slidesPerGroup===1&&p.push(p[p.length-1]+b),f.push(f[f.length-1]+b),e.virtualSize+=b}if(p.length===0&&(p=[0]),w!==0){const b=e.isHorizontal()&&i?"marginLeft":e.getDirectionLabel("marginRight");d.filter((E,y)=>!s.cssMode||s.loop?!0:y!==d.length-1).forEach(E=>{E.style[b]=`${w}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let b=0;g.forEach(y=>{b+=y+(w||0)}),b-=w;const E=b>r?b-r:0;p=p.map(y=>y<=0?-m:y>E?E+A:y)}if(s.centerInsufficientSlides){let b=0;g.forEach(y=>{b+=y+(w||0)}),b-=w;const E=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(b+E<r){const y=(r-b-E)/2;p.forEach((M,F)=>{p[F]=M-y}),f.forEach((M,F)=>{f[F]=M+y})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:f,slidesSizesGrid:g}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){oa(a,"--swiper-centered-offset-before",`${-p[0]}px`),oa(a,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const b=-e.snapGrid[0],E=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(y=>y+b),e.slidesGrid=e.slidesGrid.map(y=>y+E)}if(u!==c&&e.emit("slidesLengthChange"),p.length!==S&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==P&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const b=`${s.containerModifierClass}backface-hidden`,E=e.el.classList.contains(b);u<=s.maxBackfaceHiddenSlides?E||e.el.classList.add(b):E&&e.el.classList.remove(b)}}function Pf(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let n=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const i=o=>a?t.slides[t.getSlideIndexByData(o)]:t.slides[o];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(o=>{s.push(o)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const o=t.activeIndex+r;if(o>t.slides.length&&!a)break;s.push(i(o))}else s.push(i(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const o=s[r].offsetHeight;n=o>n?o:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function Of(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()}const Pi=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Cf(e){e===void 0&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:n,snapGrid:r}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let i=-e;n&&(i=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=s.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<a.length;l+=1){const c=a[l];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const u=(i+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+o),p=(i-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+o),f=-(i-d),g=f+t.slidesSizesGrid[l],m=f>=0&&f<=t.size-t.slidesSizesGrid[l],A=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;A&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),Pi(c,A,s.slideVisibleClass),Pi(c,m,s.slideFullyVisibleClass),c.progress=n?-u:u,c.originalProgress=n?-p:p}}function Lf(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:r,isEnd:i,progressLoop:o}=t;const l=r,c=i;if(a===0)n=0,r=!0,i=!0;else{n=(e-t.minTranslate())/a;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||n<=0,i=u||n>=1,d&&(n=0),u&&(n=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],g=t.slidesGrid[t.slidesGrid.length-1],m=Math.abs(e);m>=p?o=(m-p)/g:o=(m+g-f)/g,o>1&&(o-=1)}Object.assign(t,{progress:n,progressLoop:o,isBeginning:r,isEnd:i}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),i&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!i)&&t.emit("fromEdge"),t.emit("progress",n)}const bn=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Rf(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:n}=e,r=e.virtual&&s.virtual.enabled,i=e.grid&&s.grid&&s.grid.rows>1,o=u=>Dt(a,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(r)if(s.loop){let u=n-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${n}"]`);else i?(l=t.find(u=>u.column===n),d=t.find(u=>u.column===n+1),c=t.find(u=>u.column===n-1)):l=t[n];l&&(i||(d=_f(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=bf(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{bn(u,u===l,s.slideActiveClass),bn(u,u===d,s.slideNextClass),bn(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const ha=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(s());if(a){let n=a.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(a.shadowRoot?n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},_n=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Hn=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const i=n,o=[i-t];o.push(...Array.from({length:t}).map((l,c)=>i+a+c)),e.slides.forEach((l,c)=>{o.includes(l.column)&&_n(e,c)});return}const r=n+a-1;if(e.params.rewind||e.params.loop)for(let i=n-t;i<=r+t;i+=1){const o=(i%s+s)%s;(o<n||o>r)&&_n(e,o)}else for(let i=Math.max(n-t,0);i<=Math.min(r+t,s-1);i+=1)i!==n&&(i>r||i<n)&&_n(e,i)};function Mf(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let n;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?a>=t[r]&&a<t[r+1]-(t[r+1]-t[r])/2?n=r:a>=t[r]&&a<t[r+1]&&(n=r+1):a>=t[r]&&(n=r);return s.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Df(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:n,activeIndex:r,realIndex:i,snapIndex:o}=t;let l=e,c;const d=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=Mf(t)),a.indexOf(s)>=0)c=a.indexOf(s);else{const f=Math.min(n.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/n.slidesPerGroup)}if(c>=a.length&&(c=a.length-1),l===r&&!t.params.loop){c!==o&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&n.grid&&n.grid.rows>1;let p;if(t.virtual&&n.virtual.enabled&&n.loop)p=d(l);else if(u){const f=t.slides.find(m=>m.column===l);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/n.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:o,snapIndex:c,previousRealIndex:i,realIndex:p,previousIndex:r,activeIndex:l}),t.initialized&&Hn(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(i!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function If(e,t){const s=this,a=s.params;let n=e.closest(`.${a.slideClass}, swiper-slide`);!n&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${a.slideClass}, swiper-slide`)&&(n=o)});let r=!1,i;if(n){for(let o=0;o<s.slides.length;o+=1)if(s.slides[o]===n){r=!0,i=o;break}}if(n&&r)s.clickedSlide=n,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=i;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}a.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var Nf={updateSize:kf,updateSlides:Af,updateAutoHeight:Pf,updateSlidesOffset:Of,updateSlidesProgress:Cf,updateProgress:Lf,updateSlidesClasses:Rf,updateActiveIndex:Df,updateClickedSlide:If};function Bf(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:s,rtlTranslate:a,translate:n,wrapperEl:r}=t;if(s.virtualTranslate)return a?-n:n;if(s.cssMode)return n;let i=ff(r,e);return i+=t.cssOverflowAdjustment(),a&&(i=-i),i||0}function Ff(e,t){const s=this,{rtlTranslate:a,params:n,wrapperEl:r,progress:i}=s;let o=0,l=0;const c=0;s.isHorizontal()?o=a?-e:e:l=e,n.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:l,n.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-l:n.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():l-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==i&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function $f(){return-this.snapGrid[0]}function zf(){return-this.snapGrid[this.snapGrid.length-1]}function Hf(e,t,s,a,n){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),s===void 0&&(s=!0),a===void 0&&(a=!0);const r=this,{params:i,wrapperEl:o}=r;if(r.animating&&i.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(a&&e>l?d=l:a&&e<c?d=c:d=e,r.updateProgress(d),i.cssMode){const u=r.isHorizontal();if(t===0)o[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return xl({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Uf={getTranslate:Bf,setTranslate:Ff,minTranslate:$f,maxTranslate:zf,translateTo:Hf};function Gf(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function kl(e){let{swiper:t,runCallbacks:s,direction:a,step:n}=e;const{activeIndex:r,previousIndex:i}=t;let o=a;o||(r>i?o="next":r<i?o="prev":o="reset"),t.emit(`transition${n}`),s&&o==="reset"?t.emit(`slideResetTransition${n}`):s&&r!==i&&(t.emit(`slideChangeTransition${n}`),o==="next"?t.emit(`slideNextTransition${n}`):t.emit(`slidePrevTransition${n}`))}function jf(e,t){e===void 0&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),kl({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Yf(e,t){e===void 0&&(e=!0);const s=this,{params:a}=s;s.animating=!1,!a.cssMode&&(s.setTransition(0),kl({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var qf={setTransition:Gf,transitionStart:jf,transitionEnd:Yf};function Kf(e,t,s,a,n){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const r=this;let i=e;i<0&&(i=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:g}=r;if(!g&&!a&&!n||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const m=Math.min(r.params.slidesPerGroupSkip,i);let A=m+Math.floor((i-m)/r.params.slidesPerGroup);A>=l.length&&(A=l.length-1);const S=-l[A];if(o.normalizeSlideIndex)for(let T=0;T<c.length;T+=1){const _=-Math.floor(S*100),h=Math.floor(c[T]*100),b=Math.floor(c[T+1]*100);typeof c[T+1]<"u"?_>=h&&_<b-(b-h)/2?i=T:_>=h&&_<b&&(i=T+1):_>=h&&(i=T)}if(r.initialized&&i!==u&&(!r.allowSlideNext&&(p?S>r.translate&&S>r.minTranslate():S<r.translate&&S<r.minTranslate())||!r.allowSlidePrev&&S>r.translate&&S>r.maxTranslate()&&(u||0)!==i))return!1;i!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(S);let P;i>u?P="next":i<u?P="prev":P="reset";const w=r.virtual&&r.params.virtual.enabled;if(!(w&&n)&&(p&&-S===r.translate||!p&&S===r.translate))return r.updateActiveIndex(i),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(S),P!=="reset"&&(r.transitionStart(s,P),r.transitionEnd(s,P)),!1;if(o.cssMode){const T=r.isHorizontal(),_=p?S:-S;if(t===0)w&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),w&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[T?"scrollLeft":"scrollTop"]=_})):f[T?"scrollLeft":"scrollTop"]=_,w&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return xl({swiper:r,targetPosition:_,side:T?"left":"top"}),!0;f.scrollTo({[T?"left":"top"]:_,behavior:"smooth"})}return!0}const R=El().isSafari;return w&&!n&&R&&r.isElement&&r.virtual.update(!1,!1,i),r.setTransition(t),r.setTranslate(S),r.updateActiveIndex(i),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,P),t===0?r.transitionEnd(s,P):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(_){!r||r.destroyed||_.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,P))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Vf(e,t,s,a){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let i=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)i=i+n.virtual.slidesBefore;else{let o;if(r){const p=i*n.params.grid.rows;o=n.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===p).column}else o=n.getSlideIndexByData(i);const l=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params;let d=n.params.slidesPerView;d==="auto"?d=n.slidesPerViewDynamic():(d=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-o<d;if(c&&(u=u||o<Math.ceil(d/2)),a&&c&&n.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const p=c?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?o+1:o-l+1,slideRealIndex:p==="next"?n.realIndex:void 0})}if(r){const p=i*n.params.grid.rows;i=n.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===p).column}else i=n.getSlideIndexByData(i)}return requestAnimationFrame(()=>{n.slideTo(i,t,s,a)}),n}function Wf(e,t,s){t===void 0&&(t=!0);const a=this,{enabled:n,params:r,animating:i}=a;if(!n||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(a.slidesPerViewDynamic("current",!0),1));const l=a.activeIndex<r.slidesPerGroupSkip?1:o,c=a.virtual&&r.virtual.enabled;if(r.loop){if(i&&!c&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+l,e,t,s)}),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+l,e,t,s)}function Jf(e,t,s){t===void 0&&(t=!0);const a=this,{params:n,snapGrid:r,slidesGrid:i,rtlTranslate:o,enabled:l,animating:c}=a;if(!l||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const d=a.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=o?a.translate:-a.translate;function p(P){return P<0?-Math.floor(Math.abs(P)):Math.floor(P)}const f=p(u),g=r.map(P=>p(P)),m=n.freeMode&&n.freeMode.enabled;let A=r[g.indexOf(f)-1];if(typeof A>"u"&&(n.cssMode||m)){let P;r.forEach((w,v)=>{f>=w&&(P=v)}),typeof P<"u"&&(A=m?r[P]:r[P>0?P-1:P])}let S=0;if(typeof A<"u"&&(S=i.indexOf(A),S<0&&(S=a.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(S=S-a.slidesPerViewDynamic("previous",!0)+1,S=Math.max(S,0))),n.rewind&&a.isBeginning){const P=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(P,e,t,s)}else if(n.loop&&a.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(S,e,t,s)}),!0;return a.slideTo(S,e,t,s)}function Xf(e,t,s){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,s)}function Qf(e,t,s,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.activeIndex;const i=Math.min(n.params.slidesPerGroupSkip,r),o=i+Math.floor((r-i)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[o]){const c=n.snapGrid[o],d=n.snapGrid[o+1];l-c>(d-c)*a&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[o-1],d=n.snapGrid[o];l-c<=(d-c)*a&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,t,s)}function Zf(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),r;const i=e.isElement?"swiper-slide":`.${t.slideClass}`,o=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):n>(o?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),n=e.getSlideIndex(Dt(s,`${i}[data-swiper-slide-index="${r}"]`)[0]),wl(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var eh={slideTo:Kf,slideToLoop:Vf,slideNext:Wf,slidePrev:Jf,slideReset:Xf,slideToClosest:Qf,slideToClickedSlide:Zf};function th(e,t){const s=this,{params:a,slidesEl:n}=s;if(!a.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Dt(n,`.${a.slideClass}, swiper-slide`).forEach((f,g)=>{f.setAttribute("data-swiper-slide-index",g)})},i=()=>{const p=Dt(n,`.${a.slideBlankClass}`);p.forEach(f=>{f.remove()}),p.length>0&&(s.recalcSlides(),s.updateSlides())},o=s.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||o)&&i();const l=a.slidesPerGroup*(o?a.grid.rows:1),c=s.slides.length%l!==0,d=o&&s.slides.length%a.grid.rows!==0,u=p=>{for(let f=0;f<p;f+=1){const g=s.isElement?zn("swiper-slide",[a.slideBlankClass]):zn("div",[a.slideClass,a.slideBlankClass]);s.slidesEl.append(g)}};if(c){if(a.loopAddBlankSlides){const p=l-s.slides.length%l;u(p),s.recalcSlides(),s.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(a.loopAddBlankSlides){const p=a.grid.rows-s.slides.length%a.grid.rows;u(p),s.recalcSlides(),s.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();s.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function sh(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:n,activeSlideIndex:r,initial:i,byController:o,byMousewheel:l}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:p,slidesEl:f,params:g}=c,{centeredSlides:m,initialSlide:A}=g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&g.virtual.enabled){s&&(!g.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):g.centeredSlides&&c.snapIndex<g.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=p,c.emit("loopFix");return}let S=g.slidesPerView;S==="auto"?S=c.slidesPerViewDynamic():(S=Math.ceil(parseFloat(g.slidesPerView,10)),m&&S%2===0&&(S=S+1));const P=g.slidesPerGroupAuto?S:g.slidesPerGroup;let w=m?Math.max(P,Math.ceil(S/2)):P;w%P!==0&&(w+=P-w%P),w+=g.loopAdditionalSlides,c.loopedSlides=w;const v=c.grid&&g.grid&&g.grid.rows>1;d.length<S+w||c.params.effect==="cards"&&d.length<S+w*2?Aa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):v&&g.grid.fill==="row"&&Aa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const O=[],R=[],T=v?Math.ceil(d.length/g.grid.rows):d.length,_=i&&T-A<S&&!m;let h=_?A:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(d.find(B=>B.classList.contains(g.slideActiveClass))):h=r;const b=a==="next"||!a,E=a==="prev"||!a;let y=0,M=0;const K=(v?d[r].column:r)+(m&&typeof n>"u"?-S/2+.5:0);if(K<w){y=Math.max(w-K,P);for(let B=0;B<w-K;B+=1){const H=B-Math.floor(B/T)*T;if(v){const I=T-H-1;for(let X=d.length-1;X>=0;X-=1)d[X].column===I&&O.push(X)}else O.push(T-H-1)}}else if(K+S>T-w){M=Math.max(K-(T-w*2),P),_&&(M=Math.max(M,S-T+A+1));for(let B=0;B<M;B+=1){const H=B-Math.floor(B/T)*T;v?d.forEach((I,X)=>{I.column===H&&R.push(X)}):R.push(H)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<S+w*2&&(R.includes(r)&&R.splice(R.indexOf(r),1),O.includes(r)&&O.splice(O.indexOf(r),1)),E&&O.forEach(B=>{d[B].swiperLoopMoveDOM=!0,f.prepend(d[B]),d[B].swiperLoopMoveDOM=!1}),b&&R.forEach(B=>{d[B].swiperLoopMoveDOM=!0,f.append(d[B]),d[B].swiperLoopMoveDOM=!1}),c.recalcSlides(),g.slidesPerView==="auto"?c.updateSlides():v&&(O.length>0&&E||R.length>0&&b)&&c.slides.forEach((B,H)=>{c.grid.updateSlide(H,B,c.slides)}),g.watchSlidesProgress&&c.updateSlidesOffset(),s){if(O.length>0&&E){if(typeof t>"u"){const B=c.slidesGrid[h],I=c.slidesGrid[h+y]-B;l?c.setTranslate(c.translate-I):(c.slideTo(h+Math.ceil(y),0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-I,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-I))}else if(n){const B=v?O.length/g.grid.rows:O.length;c.slideTo(c.activeIndex+B,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(R.length>0&&b)if(typeof t>"u"){const B=c.slidesGrid[h],I=c.slidesGrid[h-M]-B;l?c.setTranslate(c.translate-I):(c.slideTo(h-M,0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-I,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-I))}else{const B=v?R.length/g.grid.rows:R.length;c.slideTo(c.activeIndex-B,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=p,c.controller&&c.controller.control&&!o){const B={slideRealIndex:t,direction:a,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(H=>{!H.destroyed&&H.params.loop&&H.loopFix({...B,slideTo:H.params.slidesPerView===g.slidesPerView?s:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...B,slideTo:c.controller.control.params.slidesPerView===g.slidesPerView?s:!1})}c.emit("loopFix")}function ah(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;a[r]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),a.forEach(n=>{s.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var nh={loopCreate:th,loopFix:sh,loopDestroy:ah};function rh(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ih(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var oh={setGrabCursor:rh,unsetGrabCursor:ih};function lh(e,t){t===void 0&&(t=this);function s(a){if(!a||a===vt()||a===ze())return null;a.assignedSlot&&(a=a.assignedSlot);const n=a.closest(e);return!n&&!a.getRootNode?null:n||s(a.getRootNode().host)}return s(t)}function Oi(e,t,s){const a=ze(),{params:n}=e,r=n.edgeSwipeDetection,i=n.edgeSwipeThreshold;return r&&(s<=i||s>=a.innerWidth-i)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function ch(e){const t=this,s=vt();let a=e;a.originalEvent&&(a=a.originalEvent);const n=t.touchEventsData;if(a.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==a.pointerId)return;n.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(n.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){Oi(t,a,a.targetTouches[0].pageX);return}const{params:r,touches:i,enabled:o}=t;if(!o||!r.simulateTouch&&a.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=a.target;if(r.touchEventsTarget==="wrapper"&&!mf(l,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=a.composedPath?a.composedPath():a.path;c&&a.target&&a.target.shadowRoot&&d&&(l=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(a.target&&a.target.shadowRoot);if(r.noSwiping&&(p?lh(u,l):l.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;i.currentX=a.pageX,i.currentY=a.pageY;const f=i.currentX,g=i.currentY;if(!Oi(t,a,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),i.startX=f,i.startY=g,n.touchStartTime=ka(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let m=!0;l.matches(n.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==l&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&s.activeElement.blur();const A=m&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||A)&&!l.isContentEditable&&a.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function dh(e){const t=vt(),s=this,a=s.touchEventsData,{params:n,touches:r,rtlTranslate:i,enabled:o}=s;if(!o||!n.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(a.touchId!==null||l.pointerId!==a.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(O=>O.identifier===a.touchId),!c||c.identifier!==a.touchId)return}else c=l;if(!a.isTouched){a.startMoving&&a.isScrolling&&s.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){l.target.matches(a.focusableElements)||(s.allowClick=!1),a.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),a.touchStartTime=ka());return}if(n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(i&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!i&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(a.focusableElements)){a.isMoved=!0,s.allowClick=!1;return}a.allowTouchCallbacks&&s.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof a.isScrolling>"u"){let O;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?a.isScrolling=!1:p*p+f*f>=25&&(O=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,a.isScrolling=s.isHorizontal()?O>n.touchAngle:90-O>n.touchAngle)}if(a.isScrolling&&s.emit("touchMoveOpposite",l),typeof a.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(a.startMoving=!0),a.isScrolling||l.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;s.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let g=s.isHorizontal()?p:f,m=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(g=Math.abs(g)*(i?1:-1),m=Math.abs(m)*(i?1:-1)),r.diff=g,g*=n.touchRatio,i&&(g=-g,m=-m);const A=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=m>0?"prev":"next";const S=s.params.loop&&!n.cssMode,P=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!a.isMoved){if(S&&P&&s.loopFix({direction:s.swipeDirection}),a.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const O=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(O)}a.allowMomentumBounce=!1,n.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",l)}if(new Date().getTime(),n._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&A!==s.touchesDirection&&S&&P&&Math.abs(g)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}s.emit("sliderMove",l),a.isMoved=!0,a.currentTranslate=g+a.startTranslate;let w=!0,v=n.resistanceRatio;if(n.touchReleaseOnEdges&&(v=0),g>0?(S&&P&&a.allowThresholdMove&&a.currentTranslate>(n.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>s.minTranslate()&&(w=!1,n.resistance&&(a.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+a.startTranslate+g)**v))):g<0&&(S&&P&&a.allowThresholdMove&&a.currentTranslate<(n.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(n.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),a.currentTranslate<s.maxTranslate()&&(w=!1,n.resistance&&(a.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-a.startTranslate-g)**v))),w&&(l.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(a.currentTranslate=a.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,a.currentTranslate=a.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{a.currentTranslate=a.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&s.freeMode||n.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(a.currentTranslate),s.setTranslate(a.currentTranslate))}function uh(e){const t=this,s=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let n;if(a.type==="touchend"||a.type==="touchcancel"){if(n=[...a.changedTouches].find(O=>O.identifier===s.touchId),!n||n.identifier!==s.touchId)return}else{if(s.touchId!==null||a.pointerId!==s.pointerId)return;n=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:i,touches:o,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!i.simulateTouch&&a.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",a),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&i.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}i.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=ka(),p=u-s.touchStartTime;if(t.allowClick){const O=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(O&&O[0]||a.target,O),t.emit("tap click",a),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(s.lastClickTime=ka(),wl(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||o.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(i.followFinger?f=l?t.translate:-t.translate:f=-s.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let m=0,A=t.slidesSizesGrid[0];for(let O=0;O<c.length;O+=O<i.slidesPerGroupSkip?1:i.slidesPerGroup){const R=O<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof c[O+R]<"u"?(g||f>=c[O]&&f<c[O+R])&&(m=O,A=c[O+R]-c[O]):(g||f>=c[O])&&(m=O,A=c[c.length-1]-c[c.length-2])}let S=null,P=null;i.rewind&&(t.isBeginning?P=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(S=0));const w=(f-c[m])/A,v=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(p>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(w>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?S:m+v):t.slideTo(m)),t.swipeDirection==="prev"&&(w>1-i.longSwipesRatio?t.slideTo(m+v):P!==null&&w<0&&Math.abs(w)>i.longSwipesRatio?t.slideTo(P):t.slideTo(m))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(m+v):t.slideTo(m):(t.swipeDirection==="next"&&t.slideTo(S!==null?S:m+v),t.swipeDirection==="prev"&&t.slideTo(P!==null?P:m))}}function Ci(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:n,snapGrid:r}=e,i=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=i&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!i?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ph(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function fh(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const r=e.maxTranslate()-e.minTranslate();r===0?n=0:n=(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function hh(e){const t=this;ha(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function gh(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Al=(e,t)=>{const s=vt(),{params:a,el:n,wrapperEl:r,device:i}=e,o=!!a.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(s[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),n[l]("touchstart",e.onTouchStart,{passive:!1}),n[l]("pointerdown",e.onTouchStart,{passive:!1}),s[l]("touchmove",e.onTouchMove,{passive:!1,capture:o}),s[l]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[l]("touchend",e.onTouchEnd,{passive:!0}),s[l]("pointerup",e.onTouchEnd,{passive:!0}),s[l]("pointercancel",e.onTouchEnd,{passive:!0}),s[l]("touchcancel",e.onTouchEnd,{passive:!0}),s[l]("pointerout",e.onTouchEnd,{passive:!0}),s[l]("pointerleave",e.onTouchEnd,{passive:!0}),s[l]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&n[l]("click",e.onClick,!0),a.cssMode&&r[l]("scroll",e.onScroll),a.updateOnWindowResize?e[c](i.ios||i.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ci,!0):e[c]("observerUpdate",Ci,!0),n[l]("load",e.onLoad,{capture:!0}))};function mh(){const e=this,{params:t}=e;e.onTouchStart=ch.bind(e),e.onTouchMove=dh.bind(e),e.onTouchEnd=uh.bind(e),e.onDocumentTouchStart=gh.bind(e),t.cssMode&&(e.onScroll=fh.bind(e)),e.onClick=ph.bind(e),e.onLoad=hh.bind(e),Al(e,"on")}function bh(){Al(this,"off")}var _h={attachEvents:mh,detachEvents:bh};const Li=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function yh(){const e=this,{realIndex:t,initialized:s,params:a,el:n}=e,r=a.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const i=vt(),o=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",l=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:i.querySelector(a.breakpointsBase),c=e.getBreakpoint(r,o,l);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=Li(e,a),f=Li(e,u),g=e.params.grabCursor,m=u.grabCursor,A=a.enabled;p&&!f?(n.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(n.classList.add(`${a.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&a.grid.fill==="column")&&n.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!m?e.unsetGrabCursor():!g&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(R=>{if(typeof u[R]>"u")return;const T=a[R]&&a[R].enabled,_=u[R]&&u[R].enabled;T&&!_&&e[R].disable(),!T&&_&&e[R].enable()});const S=u.direction&&u.direction!==a.direction,P=a.loop&&(u.slidesPerView!==a.slidesPerView||S),w=a.loop;S&&s&&e.changeDirection(),Ke(e.params,u);const v=e.params.enabled,O=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),A&&!v?e.disable():!A&&v&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(P?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&O?(e.loopCreate(t),e.updateSlides()):w&&!O&&e.loopDestroy()),e.emit("breakpoint",u)}function vh(e,t,s){if(t===void 0&&(t="window"),!e||t==="container"&&!s)return;let a=!1;const n=ze(),r=t==="window"?n.innerHeight:s.clientHeight,i=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});i.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<i.length;o+=1){const{point:l,value:c}=i[o];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(a=l):c<=s.clientWidth&&(a=l)}return a||"max"}var wh={setBreakpoint:yh,getBreakpoint:vh};function xh(e,t){const s=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(n=>{a[n]&&s.push(t+n)}):typeof a=="string"&&s.push(t+a)}),s}function Th(){const e=this,{classNames:t,params:s,rtl:a,el:n,device:r}=e,i=xh(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...i),n.classList.add(...t),e.emitContainerClasses()}function Sh(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var Eh={addClasses:Th,removeClasses:Sh};function kh(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const n=e.slides.length-1,r=e.slidesGrid[n]+e.slidesSizesGrid[n]+a*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Ah={checkOverflow:kh},Ri={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ph(e,t){return function(a){a===void 0&&(a={});const n=Object.keys(a)[0],r=a[n];if(typeof r!="object"||r===null){Ke(t,a);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in r)){Ke(t,a);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),Ke(t,a)}}const yn={eventsEmitter:Ef,update:Nf,translate:Uf,transition:qf,slide:eh,loop:nh,grabCursor:oh,events:_h,breakpoints:wh,checkOverflow:Ah,classes:Eh},vn={};class tt{constructor(){let t,s;for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?s=n[0]:[t,s]=n,s||(s={}),s=Ke({},s),t&&!s.el&&(s.el=t);const i=vt();if(s.el&&typeof s.el=="string"&&i.querySelectorAll(s.el).length>1){const d=[];return i.querySelectorAll(s.el).forEach(u=>{const p=Ke({},s,{el:u});d.push(new tt(p))}),d}const o=this;o.__swiper__=!0,o.support=Tl(),o.device=Sl({userAgent:s.userAgent}),o.browser=El(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],s.modules&&Array.isArray(s.modules)&&o.modules.push(...s.modules);const l={};o.modules.forEach(d=>{d({params:s,swiper:o,extendParams:Ph(s,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=Ke({},Ri,l);return o.params=Ke({},c,vn,s),o.originalParams=Ke({},o.params),o.passedParams=Ke({},s),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:a}=this,n=Dt(s,`.${a.slideClass}, swiper-slide`),r=ki(n[0]);return ki(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:a}=t;t.slides=Dt(s,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const a=this;t=Math.min(Math.max(t,0),1);const n=a.minTranslate(),i=(a.maxTranslate()-n)*t+n;a.translateTo(i,typeof s>"u"?0:s),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(a=>{const n=t.getSlideClasses(a);s.push({slideEl:a,classNames:n}),t.emit("_slideClass",a,n)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t,s){t===void 0&&(t="current"),s===void 0&&(s=!1);const a=this,{params:n,slides:r,slidesGrid:i,slidesSizesGrid:o,size:l,activeIndex:c}=a;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(u+=Math.ceil(r[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(u+=r[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?i[u]+o[u]-i[c]<l:i[u]-i[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)i[c]-i[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete&&ha(t,i)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const i=t.rtlTranslate?t.translate*-1:t.translate,o=Math.min(Math.max(i,t.maxTranslate()),t.minTranslate());t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)n(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const i=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(i.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||n()}a.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s){s===void 0&&(s=!0);const a=this,n=a.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${n}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),a.emit("changeDirection"),s&&a.update()),a}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let a=t||s.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=s,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const n=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(n()):Dt(a,n())[0];return!i&&s.params.createElements&&(i=zn("div",s.params.wrapperClass),a.append(i),Dt(a,`.${s.params.slideClass}`).forEach(o=>{i.append(o)})),Object.assign(s,{el:a,wrapperEl:i,slidesEl:s.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:i,hostEl:s.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Kt(a,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Kt(a,"direction")==="rtl"),wrongRTL:Kt(i,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const n=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?ha(s,r):r.addEventListener("load",i=>{ha(s,i.target)})}),Hn(s),s.initialized=!0,Hn(s),s.emit("init"),s.emit("afterInit"),s}destroy(t,s){t===void 0&&(t=!0),s===void 0&&(s=!0);const a=this,{params:n,el:r,wrapperEl:i,slides:o}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),n.loop&&a.loopDestroy(),s&&(a.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),i&&i.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(l=>{a.off(l)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),uf(a)),a.destroyed=!0),null}static extendDefaults(t){Ke(vn,t)}static get extendedDefaults(){return vn}static get defaults(){return Ri}static installModule(t){tt.prototype.__modules__||(tt.prototype.__modules__=[]);const s=tt.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>tt.installModule(s)),tt):(tt.installModule(t),tt)}}Object.keys(yn).forEach(e=>{Object.keys(yn[e]).forEach(t=>{tt.prototype[t]=yn[e][t]})});tt.use([Tf,Sf]);function Oh(e){let{swiper:t,extendParams:s,on:a,emit:n,params:r}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let i,o,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),p,f,g,m,A,S,P;function w(I){!t||t.destroyed||!t.wrapperEl||I.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",w),!(P||I.detail&&I.detail.bySwiperTouchMove)&&b())}const v=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(c=d,p=!1);const I=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=I,n("autoplayTimeLeft",I,I/l),o=requestAnimationFrame(()=>{v()})},O=()=>{let I;return t.virtual&&t.params.virtual.enabled?I=t.slides.find(te=>te.classList.contains("swiper-slide-active")):I=t.slides[t.activeIndex],I?parseInt(I.getAttribute("data-swiper-autoplay"),10):void 0},R=I=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),v();let X=typeof I>"u"?t.params.autoplay.delay:I;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const te=O();!Number.isNaN(te)&&te>0&&typeof I>"u"&&(X=te,l=te,c=te),d=X;const Z=t.params.speed,oe=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Z,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Z,!0,!0),n("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Z,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Z,!0,!0),n("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{R()})))};return X>0?(clearTimeout(i),i=setTimeout(()=>{oe()},X)):requestAnimationFrame(()=>{oe()}),X},T=()=>{u=new Date().getTime(),t.autoplay.running=!0,R(),n("autoplayStart")},_=()=>{t.autoplay.running=!1,clearTimeout(i),cancelAnimationFrame(o),n("autoplayStop")},h=(I,X)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(i),I||(S=!0);const te=()=>{n("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",w):b()};if(t.autoplay.paused=!0,X){A&&(d=t.params.autoplay.delay),A=!1,te();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),te())},b=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),S?(S=!1,R(d)):R(),t.autoplay.paused=!1,n("autoplayResume"))},E=()=>{if(t.destroyed||!t.autoplay.running)return;const I=vt();I.visibilityState==="hidden"&&(S=!0,h(!0)),I.visibilityState==="visible"&&b()},y=I=>{I.pointerType==="mouse"&&(S=!0,P=!0,!(t.animating||t.autoplay.paused)&&h(!0))},M=I=>{I.pointerType==="mouse"&&(P=!1,t.autoplay.paused&&b())},F=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",y),t.el.addEventListener("pointerleave",M))},K=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",y),t.el.removeEventListener("pointerleave",M))},B=()=>{vt().addEventListener("visibilitychange",E)},H=()=>{vt().removeEventListener("visibilitychange",E)};a("init",()=>{t.params.autoplay.enabled&&(F(),B(),T())}),a("destroy",()=>{K(),H(),t.autoplay.running&&_()}),a("_freeModeStaticRelease",()=>{(g||S)&&b()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?_():h(!0,!0)}),a("beforeTransitionStart",(I,X,te)=>{t.destroyed||!t.autoplay.running||(te||!t.params.autoplay.disableOnInteraction?h(!0,!0):_())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){_();return}f=!0,g=!1,S=!1,m=setTimeout(()=>{S=!0,g=!0,h(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(i),t.params.autoplay.disableOnInteraction){g=!1,f=!1;return}g&&t.params.cssMode&&b(),g=!1,f=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(A=!0)}),Object.assign(t.autoplay,{start:T,stop:_,pause:h,resume:b})}const Ch={class:"home-layout"},Lh={class:"sticky-header-group"},Rh=["data-user-name"],Mh={__name:"home_route",setup(e){const t=Tt(),s=me();window.CoreBetSlip=yl;const a=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u}),l&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,f=window.matchMedia("(max-width: 768px)").matches;(p||f)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),l.addEventListener("click",g=>{console.log("[Bet Grid Toggle] Button clicked!"),g.preventDefault(),g.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",l=>{const c=l.target;if(c&&c.dataset?.promotionTopic){const d={timestamp:Date.now(),heroImg:c.dataset.promotionHeroImg||"",caption:c.dataset.promotionCaption||"",tagline:c.dataset.promotionTagline||"",toast:c.dataset.promotionToast||"",topic:c.dataset.promotionTopic||"",topicToken:c.dataset.promotionTopicToken||"",marquee:c.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",d),se.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(d))}c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),se.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(l,c=!1,d="cards",u={})=>{const p=document.querySelector(".tournaments-grid");if(!p)return;p.innerHTML="",p.classList.toggle("tournaments-grid--list",d==="list");const f=document.getElementById("app"),g=f?.getAttribute("data-sync-theme")||"dark",m=f?.getAttribute("data-sync-lang")||"en",A=f?.getAttribute("data-sync-motif")||"brand",S=w=>{const v=document.createElement("bma-tournament-list-card");return v.setAttribute("data-bma-tourn-guid",w.guid||""),v.setAttribute("data-bma-tourn-caption",w.caption||""),v.setAttribute("data-bma-tourn-tagline",w.tagline||""),v.setAttribute("data-bma-tourn-status",w.status||""),v.setAttribute("data-bma-tourn-class",w.status||""),v.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(w.sports_allowed)?JSON.stringify(w.sports_allowed):""),v.setAttribute("data-bma-tourn-entities",w.entities?JSON.stringify(w.entities):""),v.setAttribute("data-bma-tourn-entry_fee",w.entry_fee||"0"),v.setAttribute("data-bma-tourn-tournament_dollars",w.tournament_dollars||"0"),v.setAttribute("data-bma-tourn-matches",w.matches_expanded?.length||"0"),v.setAttribute("data-bma-tourn-tags",Array.isArray(w.tags)?JSON.stringify(w.tags):"[]"),v.setAttribute("data-bma-tourn-window_start_time",w.window_start_time||""),v.setAttribute("data-bma-tourn-window_end_time",w.window_end_time||""),v.setAttribute("data-sync-theme",g),v},P=w=>{const v=document.createElement("article"),O=w.status||"DRAFT";v.className=`tournament-item tournament-status-${O.toLowerCase()}`;const R=document.createElement("bma-tournament-card");return R.setAttribute("data-bma-tourn-id",w.id||""),R.setAttribute("data-bma-tourn-guid",w.guid||""),R.setAttribute("data-bma-tourn-caption",w.caption||""),R.setAttribute("data-bma-tourn-tagline",w.tagline||""),R.setAttribute("data-bma-tourn-window_start_time",w.window_start_time||""),R.setAttribute("data-bma-tourn-window_end_time",w.window_end_time||""),R.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(w.sports_allowed)?JSON.stringify(w.sports_allowed):w.sports_allowed||""),R.setAttribute("data-bma-tourn-entities",w.entities?JSON.stringify(w.entities):""),R.setAttribute("data-bma-tourn-tournament_dollars",w.tournament_dollars||""),R.setAttribute("data-bma-tourn-prize_distro",Array.isArray(w.prize_distro)?JSON.stringify(w.prize_distro):w.prize_distro||""),R.setAttribute("data-bma-tourn-matches",Array.isArray(w.matches_guids)?JSON.stringify(w.matches_guids):w.matches_guids||""),R.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(w.matches_expanded)?JSON.stringify(w.matches_expanded):w.matches_expanded||""),R.setAttribute("data-bma-tourn-entry_fee",w.entry_fee||""),R.setAttribute("data-bma-tourn-rake",w.rake||""),R.setAttribute("data-bma-tourn-tags",Array.isArray(w.tags)?JSON.stringify(w.tags):w.tags||""),R.setAttribute("data-bma-tourn-comments",w.comments||""),R.setAttribute("data-bma-tourn-class",w.status||""),R.setAttribute("data-bma-tourn-status",w.status||""),R.setAttribute("data-sync-theme",g),R.setAttribute("data-sync-lang",m),R.setAttribute("data-sync-motif",A),R.setAttribute("data-n55-size","medium"),R.setAttribute("data-n55-enchanted-cta-ambient","none"),R.setAttribute("data-tourn-custom-css",""),R.setAttribute("data-tourn-trophy","0"),R.setAttribute("data-bma-tourn-focus",""),R.setAttribute("data-bma-tourn-wait","false"),v.appendChild(R),v};if(c){if(l.forEach(w=>{const v=document.createElement("div");v.className="tournament-category";const O=document.createElement("header");O.className="tournament-category-header";const R=document.createElement("div");R.className="category-title-line";const T=document.createElement("h2");if(T.className="category-title",T.textContent=w.title,R.appendChild(T),w.tournaments){const I=document.createElement("span");I.className="category-subtext",I.textContent=w.tournaments.length,R.appendChild(I)}const{tab:_="lobby",subStatus:h="all",sort:b="default",result:E="all",odds:y="all"}=u,F=w.title.toLowerCase().includes("completed"),K=!F&&_==="my",B=(I,X,te)=>`<option value="${I}"${te?" selected":""}>${X}</option>`;let H="";if(_==="lobby"?H=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${B("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${B("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${B("default","Starting TD$: Default",b==="default")}
              ${B("td_high","Starting TD$: High to Low",b==="td_high")}
              ${B("td_low","Starting TD$: Low to High",b==="td_low")}
            </select>
          `:_==="my"&&K?H=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${B("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${B("all","Status: All",h==="all")}
              ${B("active","Status: Active",h==="active")}
              ${B("upcoming","Status: Upcoming",h==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${B("all","Odds: All",y==="all")}
              ${B("available","Odds: Available",y==="available")}
              ${B("none","Odds: Not Available",y==="none")}
            </select>
          `:(_==="my"&&F||_==="completed")&&(H=`
            <select class="category-dropdown" data-filter-type="result">
              ${B("all","Result: All",E==="all")}
              ${B("trophy","Result: Won Trophy",E==="trophy")}
              ${B("no_trophy","Result: No Trophy",E==="no_trophy")}
            </select>
          `),O.appendChild(R),H){const I=document.createElement("button");I.className="category-filter-toggle",I.setAttribute("aria-label","Toggle filters"),I.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Sort & Filter <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>',O.appendChild(I)}if(H){const I=document.createElement("div");I.className="category-filter-row",I.style.display="none",I.innerHTML=H,O.appendChild(I)}v.appendChild(O),p.appendChild(v),w.tournaments.forEach((I,X)=>{const te=d==="list"?S(I):P(I);te.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",te.style.animationDelay=`${Math.min(X*50,300)}ms`,p.appendChild(te)})}),p.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let w="No tournaments available",v="Check back later for new tournaments";const O=p.dataset.filterContext;O==="my"?(w="You haven't joined any tournaments yet",v="Head to the lobby to find tournaments"):O==="completed"&&(w="No completed tournaments yet",v="Tournaments will appear here once they finish");const R=document.createElement("div");R.className="tournaments-empty",R.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",R.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 8px;">${w}</p>
          <p style="font-size: 0.8rem; color: rgba(255,255,255,0.2); margin: 0;">${v}</p>
        `,p.appendChild(R)}}else l.forEach((w,v)=>{const O=d==="list"?S(w):P(w);O.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",O.style.animationDelay=`${Math.min(v*50,300)}ms`,p.appendChild(O)})},r=l=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",l)})},i=l=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===l){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},o=l=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}=l.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}),i(l.target),se.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f,timestamp:Date.now()}))};return $t(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const l=document.getElementById("app");if(l){const f=s.appCLIFeatures.features.theme?.state,g=s.appCLIFeatures.features.lang?.state,m=s.appCLIFeatures.features.motif?.state,A=s.appSession.session_user.guid;f&&(l.setAttribute("data-sync-theme",f),document.body.setAttribute("data-sync-theme",f)),g&&l.setAttribute("data-sync-lang",g),m&&l.setAttribute("data-sync-motif",m),A&&l.setAttribute("data-user-guid",A)}window._homeRouteRenderCards=n;const c=localStorage.getItem("bma_view_mode")||"cards";if(c!=="cards"){const f=document.getElementById("view-toggle--id");f&&(f.querySelectorAll("[data-view-mode]").forEach(g=>g.classList.remove("view-toggle__btn--active")),f.querySelector(`[data-view-mode="${c}"]`)?.classList.add("view-toggle__btn--active"))}window.initBetGridToggle=a;const d=se.subscribe("APP.ROUTE_SYNC",(f,g)=>{try{const m=JSON.parse(g);m.theme&&r(m.theme.state)}catch(m){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",m)}});window._homeRoutePubSubToken=d,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),se.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",o);const u=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,p=new tt(".featured-swiper",{modules:[Oh],slidesPerView:1,spaceBetween:16,loop:u>3,centeredSlides:u===1,autoplay:u>3?{delay:3e3,disableOnInteraction:!1}:!1,breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,u),spaceBetween:16},1024:{slidesPerView:Math.min(3,u),spaceBetween:20},1280:{slidesPerView:Math.min(3,u),spaceBetween:24}}});window.featuredSwiper=p,se.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Fa(()=>{document.removeEventListener("bma-tournament-action",o),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&se.unsubscribe(window._homeRoutePubSubToken)}),(l,c)=>(nt(),xt("main",Ch,[U("div",Lh,[U("bma-app-head-top",{"data-user-name":Wt(s).appSession.session_user.name||"Guest"},null,8,Rh),c[0]||(c[0]=U("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),c[1]||(c[1]=es('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div></div></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><div class="view-toggle-bar"><div class="view-toggle" id="view-toggle--id"><button class="view-toggle__btn view-toggle__btn--active" data-view-mode="cards" aria-label="Card view"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></svg><span>Cards</span></button><button class="view-toggle__btn" data-view-mode="list" aria-label="List view"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg><span>List</span></button></div></div><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',5))]))}},Dh={};function Ih(e,t){return nt(),xt("main",null,[...t[0]||(t[0]=[U("h1",null,"App FAQ",-1)])])}const la=ts(Dh,[["render",Ih]]),Nh={};function Bh(e,t){return nt(),xt("main",null,[...t[0]||(t[0]=[U("h1",null,"App Help",-1)])])}const Fh=ts(Nh,[["render",Bh]]),Pt=class Pt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,a,n=!0){this.strChat=a,this.isDebug=n;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const i=t.includes("?")?"&":"?";t=`${t}${i}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(o){Pt.onSSEOpen(o)},this.sseEvent.onmessage=function(o){Pt.onSSEMessage(o)},this.sseEvent.onerror=function(o){Pt.onSSEError(o)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),se.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Pt.sseEvent=null,Pt.strChat=null,Pt.isDebug=!0,Pt.sessionId=null;let Pa=Pt;class Bt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,a){return new Promise((n,r)=>{const i=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});i.onload=n,i.onerror=r,s.getElementsByTagName("head")[0].appendChild(i)})},fAsyncJS:function(s,a,n){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});n&&(r.onload=function(){n()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,a){let n=s.createElement("link");n.rel="stylesheet",n.href=a,s.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let a=s.split(""),n=[],r=!1;return a.forEach(i=>{i=="-"?r=!0:(n.push(r?i.toUpperCase():i),r=!1)}),n.join("")},doDataLayer:function(s,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+a),window.dataLayer&&window.dataLayer.push({event:s,msg:a})},isJSON:function(s){let a=!1;try{a=typeof JSON.parse(s)}catch{}return a=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:s=>{let a=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(a=""),a},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((a,n)=>(a<<5)-a+n.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;a.forEach((i,o)=>{i.dataset.n55Theme!="disabled"&&(i.n55Theme||(i.n55Theme=i.dataset.n55Theme),setTimeout(function(){i.dataset.n55Theme=s},o*n),setTimeout(function(){i.dataset.n55Theme=i.n55Theme},o*(n+n)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((i,o)=>{i.n55ThemePulse||(i.n55ThemePulse=i.dataset.n55ThemePulse),setTimeout(function(){i.dataset.n55ThemePulse=s},o*r),setTimeout(function(){i.dataset.n55ThemePulse=i.n55ThemePulse},o*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,a,n=neodigmOpt.neodigmMetronome.countTo){const r=[16,n];return[...document.querySelectorAll(s)].forEach(function(i,o){let l=Math.abs(Number(i.textContent)-a);neodigmMetronome.unsubscribe(r[1]+o).subscribe(function(c){let d=Number(i.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&a!=d){let u=l/r[0];u=Math.round(u),c!=0?i.textContent=d<a?d+u:d-u:i.textContent=a}},r[1]+o,r[0])}),neodigmUtils},typeOff:async function(s){let a=document.querySelector(s?.q1st);if(a){let n=a.textContent.length,r=window.getComputedStyle(a),i=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-i+"px");n;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},s.uniqueDelay*n--)}},typeOn:async function(s){let a=document.querySelector(s?.q1st);if(a){a.dataset.n55Typeon=0;let n=s.msg.replaceAll("|","   |   ")+"   ",r=n.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let i=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);n=r[i]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(i=>{let o=n[n.length-(i+1)];o=="|"&&(o="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=o,s?.mode=="LOOP"&&i==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(s,a){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+a+'": "'+s+'" }')}},walkDOM3:function(s,a,n=!1){let r=null;if(!r&&s?.dataset[a]&&(r=s),!r&&s?.parentNode?.dataset[a]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[a]&&(r=s.parentNode.parentNode),r)return n?r:r.dataset[a]},doSetT:function(s,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,a):setTimeout(s,a)},shake:function(s,a=!0){return[...document.querySelectorAll(s)].forEach(function(n,r){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),Bt.neodigmUtils},hardReload:function(s="n55reset"){const a=new URLSearchParams(window.location.search);a.set(s,new Date().getTime());const n=a.toString();window.location.search=n}}))}const $h={class:"auth-page"},zh={class:"auth-page-right"},Hh={class:"auth-card"},Uh={class:"form-group"},Gh={class:"form-group"},jh={class:"password-input-wrapper"},Yh=["type"],qh={style:{"text-align":"right"}},Kh={class:"auth-link-center"},Vh={__name:"signin_route",setup(e){const t=Tt(),s=me(),a=(p="signin")=>{t.push({name:p})};let n=null;const r=Qe(!1),i=()=>{r.value=!r.value},o=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${g}`)),n||(n=se.subscribe("APP__ROUTE_SYNC",(A,S)=>{const P=JSON.parse(S);switch(Object.keys(P)[0]){case"Motif":o();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(m=>m.code==f)[0]?.copy;g=g.filter(m=>m[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(m=>m.code==f)[0]?.copy;g=g.filter(m=>m[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{Bt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,m=null;if(!p?.value)g="Please enter your email",m="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",m="#inp__text--email";else if(!f?.value)g="Please enter your password",m="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",m="#inp__text--password";else{const A={email:p.value,hash:Bt.neodigmUtils().genHash(f.value)};Se.doSignin(A,S=>{const v=(S?.entity?.tags||[]).find(O=>O.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=A.email,s.appSession.session_user.fname=S?.entity?.first,s.appSession.session_user.lname=S?.entity?.last,s.appSession.session_user.userName=v,s.appSession.session_user.name=v,s.appSession.session_user.guid=S?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const O=S?.entity?.guid||s.appSession.session_user.guid;Pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",O,s,!0)}})}g&&(c(m),neodigmToast.q(g,"danger"))};return $t(()=>{o(),l()}),(p,f)=>(nt(),xt("div",$h,[f[10]||(f[10]=es('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),U("div",zh,[U("div",Hh,[f[9]||(f[9]=U("div",{class:"auth-header"},[U("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),U("form",{class:"auth-form",onSubmit:Ga(u,["prevent"])},[U("div",Uh,[f[4]||(f[4]=U("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),U("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>d())},null,32)]),U("div",Gh,[f[5]||(f[5]=U("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),U("div",jh,[U("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Yh),U("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>i()),tabindex:"-1"},[U("span",{class:Jt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),U("div",qh,[U("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=U("div",{class:"auth-actions"},[U("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),U("p",Kh,[f[6]||(f[6]=U("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Ha()),U("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Wh=ts(Vh,[["__scopeId","data-v-bdc22b93"]]),Jh={class:"auth-page"},Xh={__name:"signout_route",setup(e){const t=Tt();me();const s=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(n,r)=>(nt(),xt("div",Jh,[r[1]||(r[1]=es('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),U("div",{class:"auth-page-right"},[U("div",{class:"auth-card"},[r[0]||(r[0]=U("div",{class:"auth-header"},[U("h1",{class:"auth-title"},"Sign Out"),U("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),U("div",{class:"auth-actions"},[U("button",{onClick:s,class:"btn btn-red"}," Sign Out "),U("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},Qh=ts(Xh,[["__scopeId","data-v-119b5d43"]]),Zh={class:"auth-page"},eg={class:"auth-page-right",style:{display:"block"}},tg={class:"auth-card auth-card-wide"},sg={class:"form-group"},ag={class:"form-group"},ng={class:"form-group"},rg={class:"form-group"},ig={class:"form-group"},og={class:"password-input-wrapper"},lg=["type"],cg={class:"form-group"},dg={class:"password-input-wrapper"},ug=["type"],pg={class:"form-group form-group-checkbox"},fg={class:"checkbox-label"},hg={class:"auth-link-center"},gg={__name:"signup_route",setup(e){const t=Tt(),s=me(),a=(w="signin")=>{t.push({name:w})};let n=null,r=null;const i=Qe(!1),o=Qe(!1),l=Qe(!1),c=()=>{i.value=!i.value},d=()=>{o.value=!o.value},u=w=>{w.preventDefault(),se.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(w=3,v=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":w=3,v=1;break;case"white_label":w=3,v=4;break}const O=Math.floor(Math.random()*w)+v,R=document.querySelector(".img__bg")?.classList;R&&(R.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),R.add(`img__bg--${O}`)),n||(n=se.subscribe("APP__ROUTE_SYNC",(T,_)=>{const h=JSON.parse(_);switch(Object.keys(h)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(w=>{const v=s.appCLIFeatures?.features?.lang?.state;let O=s.appMeta.microcopy.language.filter(R=>R.code==v)[0]?.copy;O=O.filter(R=>R[0]==w.dataset.syncMicrocopyText)[0],O&&(w.textContent=O[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(w=>{const v=s.appCLIFeatures?.features?.lang?.state;let O=s.appMeta.microcopy.language.filter(R=>R.code==v)[0]?.copy;O=O.filter(R=>R[0]==w.dataset.syncMicrocopyPlaceholder)[0],O&&(w.placeholder=O[1])})},g=w=>{Bt.neodigmUtils().shake(w||"#inp__text--email")},m=()=>{let w=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(w)},A=w=>{const v=[];return w.length<10&&v.push("at least 10 characters"),/[a-z]/.test(w)||v.push("1 lowercase"),/[A-Z]/.test(w)||v.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(w)||v.push("1 special character"),/[^\x00-\x7F]/.test(w)&&v.push("ASCII characters only"),v},S=async()=>{const w=document.querySelector("#inp__text--username"),v=w?.value?.trim();if(v)try{(await Se.checkUserName(v)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),w.value="",w.focus())}catch(O){console.error("Error checking username:",O)}},P=()=>{const w=document.querySelector("#inp__text--first-name"),v=document.querySelector("#inp__text--last-name"),O=document.querySelector("#inp__text--email"),R=document.querySelector("#inp__text--username"),T=document.querySelector("#inp__text--password"),_=document.querySelector("#inp__text--verify-password");let h=null,b=null;if(!w?.value)h="Please enter your first name",b="#inp__text--first-name";else if(!v?.value)h="Please enter your last name",b="#inp__text--last-name";else if(!O?.value)h="Please enter your email",b="#inp__text--email";else if(O.value.indexOf("@")===-1||O.value.indexOf(".")===-1)h="Please enter a valid email address",b="#inp__text--email";else if(!R?.value)h="Please enter a user name",b="#inp__text--username";else if(!T?.value)h="Please enter a password",b="#inp__text--password";else{const E=A(T.value);if(E.length>0)h="Password must have:|"+E.join(", "),b="#inp__text--password";else if(!_?.value)h="Please verify your password",b="#inp__text--verify-password";else if(T.value!==_.value)h="Passwords do not match",b="#inp__text--verify-password";else{const y=w.value.trim(),M=v.value.trim(),F=[{userName:R.value.trim(),ts:Date.now()}],K={email:O.value,hash:Bt.neodigmUtils().genHash(T.value),first:y,last:M,company:"",phone:"",tags:F};Se.doSignup(K,B=>{B.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}h&&(g(b),neodigmToast.q(h,"danger"))};return $t(()=>{p(),f(),r||(r=se.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(w,v)=>{JSON.parse(v).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(w,v)=>(nt(),xt("div",Zh,[v[23]||(v[23]=es('<div class="auth-page-left" data-v-3a55bbf1><div class="auth-bg" data-v-3a55bbf1><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div></div><div class="auth-overlay" data-v-3a55bbf1></div><div class="auth-branding-content" data-v-3a55bbf1><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-3a55bbf1><p class="auth-branding-tagline" data-v-3a55bbf1>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3a55bbf1>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3a55bbf1> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),U("div",eg,[U("div",tg,[U("form",{class:"auth-form",onSubmit:Ga(P,["prevent"])},[U("div",sg,[v[12]||(v[12]=U("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),U("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:v[0]||(v[0]=Ct(O=>P(),["enter"]))},null,32)]),U("div",ag,[v[13]||(v[13]=U("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),U("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:v[1]||(v[1]=Ct(O=>P(),["enter"]))},null,32)]),U("div",ng,[v[14]||(v[14]=U("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),U("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:v[2]||(v[2]=O=>m()),onKeyup:v[3]||(v[3]=Ct(O=>P(),["enter"]))},null,32)]),U("div",rg,[v[15]||(v[15]=U("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),U("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:v[4]||(v[4]=O=>S()),onKeyup:v[5]||(v[5]=Ct(O=>P(),["enter"]))},null,32)]),U("div",ig,[v[16]||(v[16]=U("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),U("div",og,[U("input",{id:"inp__text--password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:v[6]||(v[6]=Ct(O=>P(),["enter"]))},null,40,lg),U("button",{type:"button",class:"password-toggle-btn",onClick:v[7]||(v[7]=O=>c()),tabindex:"-1"},[U("span",{class:Jt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),v[17]||(v[17]=U("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),U("div",cg,[v[18]||(v[18]=U("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),U("div",dg,[U("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:v[8]||(v[8]=Ct(O=>P(),["enter"]))},null,40,ug),U("button",{type:"button",class:"password-toggle-btn",onClick:v[9]||(v[9]=O=>d()),tabindex:"-1"},[U("span",{class:Jt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),U("div",pg,[U("label",fg,[vc(U("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":v[10]||(v[10]=O=>l.value=O),class:"terms-checkbox"},null,512),[[Zd,l.value]]),v[19]||(v[19]=U("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),U("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),v[22]||(v[22]=U("div",{class:"auth-actions"},[U("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),U("p",hg,[v[20]||(v[20]=U("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),v[21]||(v[21]=Ha()),U("a",{class:"auth-link",onClick:v[11]||(v[11]=O=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},mg=ts(gg,[["__scopeId","data-v-3a55bbf1"]]),bg={class:"auth-page"},_g={class:"auth-page-right"},yg={class:"auth-card"},vg={class:"form-group"},wg={class:"auth-link-center"},xg={__name:"forgot_route",setup(e){const t=Tt(),s=me(),a=(c="signin_route")=>{t.push({name:c})};let n=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),n||(n=se.subscribe("APP__ROUTE_SYNC",(f,g)=>{const m=JSON.parse(g);switch(Object.keys(m)[0]){case"Motif":r();break;case"Lang":i();break}}))},i=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},o=c=>{Bt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(o(u),neodigmToast.q(d,"danger"))};return $t(()=>{r(),i()}),(c,d)=>(nt(),xt("div",bg,[d[7]||(d[7]=es('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),U("div",_g,[U("div",yg,[d[6]||(d[6]=U("div",{class:"auth-header"},[U("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),U("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),U("form",{class:"auth-form",onSubmit:Ga(l,["prevent"])},[U("div",vg,[d[2]||(d[2]=U("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),U("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Ct(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=U("div",{class:"auth-actions"},[U("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),U("p",wg,[d[3]||(d[3]=U("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Ha()),U("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Tg={class:"auth-page"},Sg={class:"auth-page-right"},Eg={class:"auth-card"},kg={class:"form-group"},Ag={class:"password-input-wrapper"},Pg=["type"],Og={class:"form-group"},Cg={class:"password-input-wrapper"},Lg=["type"],Rg={__name:"resethash_route",setup(e){const t=Tt(),s=me(),a=()=>{t.push({name:"home_route"})};let n=null;const r=Qe(!1),i=Qe(!1),o=()=>{r.value=!r.value},l=()=>{i.value=!i.value},c=(g=3,m=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":g=3,m=1;break;case"white_label":g=3,m=4;break}const A=Math.floor(Math.random()*g)+m,S=document.querySelector(".img__bg")?.classList;S&&(S.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),S.add(`img__bg--${A}`)),n||(n=se.subscribe("APP__ROUTE_SYNC",(P,w)=>{const v=JSON.parse(w);switch(Object.keys(v)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const m=s.appCLIFeatures?.features?.lang?.state;let A=s.appMeta.microcopy.language.filter(S=>S.code==m)[0]?.copy;A=A.filter(S=>S[0]==g.dataset.syncMicrocopyText)[0],A&&(g.textContent=A[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const m=s.appCLIFeatures?.features?.lang?.state;let A=s.appMeta.microcopy.language.filter(S=>S.code==m)[0]?.copy;A=A.filter(S=>S[0]==g.dataset.syncMicrocopyPlaceholder)[0],A&&(g.placeholder=A[1])})},u=g=>{Bt.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const m=[];return g.length<10&&m.push("at least 10 characters"),/[a-z]/.test(g)||m.push("1 lowercase"),/[A-Z]/.test(g)||m.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||m.push("1 special character"),/[^\x00-\x7F]/.test(g)&&m.push("ASCII characters only"),m},f=()=>{const g=document.querySelector("#inp__text--password"),m=document.querySelector("#inp__text--verify-password");let A=null,S=null;if(!g?.value)A="Please enter a password",S="#inp__text--password";else{const P=p(g.value);if(P.length>0)A="Password must have:|"+P.join(", "),S="#inp__text--password";else if(!m?.value)A="Please verify your password",S="#inp__text--verify-password";else if(g.value!==m.value)A="Passwords do not match",S="#inp__text--verify-password";else{const w=s.appSession.session_user.email||"",v={email:w,hash:Bt.neodigmUtils().genHash(g.value),modified_by:w},O={method:"POST",body:JSON.stringify(v),headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/resetHash",O).then(R=>R.json()).then(R=>{R.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(R=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}A&&(u(S),neodigmToast.q(A,"danger"))};return $t(()=>{c(),d()}),(g,m)=>(nt(),xt("div",Tg,[m[9]||(m[9]=es('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),U("div",Sg,[U("div",Eg,[m[8]||(m[8]=U("div",{class:"auth-header"},[U("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),U("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),U("form",{class:"auth-form",onSubmit:Ga(f,["prevent"])},[U("div",kg,[m[4]||(m[4]=U("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),U("div",Ag,[U("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:m[0]||(m[0]=Ct(A=>f(),["enter"]))},null,40,Pg),U("button",{type:"button",class:"password-toggle-btn",onClick:m[1]||(m[1]=A=>o()),tabindex:"-1"},[U("span",{class:Jt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),m[5]||(m[5]=U("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),U("div",Og,[m[6]||(m[6]=U("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),U("div",Cg,[U("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:m[2]||(m[2]=Ct(A=>f(),["enter"]))},null,40,Lg),U("button",{type:"button",class:"password-toggle-btn",onClick:m[3]||(m[3]=A=>l()),tabindex:"-1"},[U("span",{class:Jt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),U("div",{class:"auth-actions"},[m[7]||(m[7]=U("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),U("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Mg=ts(Rg,[["__scopeId","data-v-cef3f735"]]),Dg={class:"auth-page"},Ig={class:"auth-page-right"},Ng={class:"auth-card"},Bg={class:"verification-content"},Fg={class:"timer-display"},$g={__name:"verf_link_route",setup(e){const t=Tt();gl(),me();const s=Qe(7200);let a=null;const n=i=>{const o=Math.floor(i/3600),l=Math.floor(i%3600/60),c=i%60;return`${o.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return $t(()=>{r()}),Fa(()=>{a&&clearInterval(a)}),(i,o)=>(nt(),xt("div",Dg,[o[4]||(o[4]=es('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),U("div",Ig,[U("div",Ng,[o[3]||(o[3]=U("div",{class:"auth-header"},[U("h1",{class:"auth-title"},"Check Your Email"),U("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),U("div",Bg,[o[0]||(o[0]=U("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),o[1]||(o[1]=U("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),o[2]||(o[2]=U("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),U("div",Fg,Ui(n(s.value)),1)])])])]))}},zg=ts($g,[["__scopeId","data-v-f5b4a3c8"]]),Un=wp({history:ep(),routes:[{path:"/",name:"splash_route",component:Si},{path:"/splash_route",name:"splash_route",component:Si},{path:"/error_route",name:"error_route",component:la},{path:"/forgot_route",name:"forgot_route",component:xg},{path:"/resetforgot_route",name:"resetforgot_route",component:la},{path:"/resethash_route",name:"resethash_route",component:Mg},{path:"/signin_route",name:"signin_route",component:Wh},{path:"/signout_route",name:"signout_route",component:Qh},{path:"/signup_route",name:"signup_route",component:mg},{path:"/verf_link_route",name:"verf_link_route",component:zg},{path:"/offline_route",name:"offline_route",component:la},{path:"/home_route",name:"home_route",component:Mh},{path:"/appFAQ",name:"appFAQ",component:la},{path:"/appHelp",name:"appHelp",component:Fh}]});class Hg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Ae.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),s=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(s)?s[1]?.length||0:s.guids?.length||0,max:Array.isArray(s)?parseInt(s[0]?.max||0):s.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Ae.theme}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return!1;try{const a=this.getAttribute("data-bma-tourn-entities"),n=a?JSON.parse(a):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(s)}catch{return!1}}getUserTrophy(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;try{const a=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of a){if(typeof n!="object"||!n)continue;let r=null;if(n.entity_guid===s&&n.badge?r=n.badge:n[s]&&(r=n[s]),r?.includes("gold"))return"gold";if(r?.includes("silver"))return"silver";if(r?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let s=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z"));const a=Date.now(),n=s.getTime()-a;if(n<=0)return null;const r=Math.floor(n/864e5),i=Math.floor(n%864e5/36e5),o=Math.floor(n%36e5/6e4);return r>0?`${r}d ${i}h`:i>0?`${i}h ${o}m`:`${o}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const s=this.getCountdown();t.textContent=s||"",s||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},s=this.sportsAllowed;if(!Array.isArray(s)||s.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const a=Math.min(s.length,3);let n="";for(let r=0;r<a;r++){const i=s[r].key||s[r],o=it.find(d=>d.key===i),l=o?o.group:"default",c=t[i]||i.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${i}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return s.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${s.length-3}</span>`),n}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(s=>{const a=s.key||s;return t[a]||a.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,s,a,n){const r=(t-s)/2,i=2*Math.PI*r,o=i-a/100*i,l=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${l}" cy="${l}" r="${r}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${s}" />
            <circle cx="${l}" cy="${l}" r="${r}"
                fill="none" stroke="${n}" stroke-width="${s}"
                stroke-linecap="round"
                stroke-dasharray="${i}"
                stroke-dashoffset="${o}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation(),this.dispatchAction(s.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",s=>{s.stopPropagation();const a=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(a,"info")})}render(){const t=this.isUserParticipating(),s=this.getUserTrophy(),a=this.status.toLowerCase(),n=t&&this.status!=="COMPLETED",r=!t&&this.status==="UPCOMING";this.userRank;const i=(this.entities.current/(this.entities.max||1)*100).toFixed(1);this.getCountdown();const l={upcoming:"#00E676",locked:"#F7C60D",completed:"#CD5659"}[a]||"#969696",c=52,d=3,u=S=>S.length>7?"sm":S.length>5?"md":"lg",p=`${this.entities.current}/${this.entities.max}`,f=u(p);let g="";s?g=`<span class="ring__trophy ring__trophy--${s}"></span>`:g=`<span class="ring__entrants ring__entrants--${f}">${this.entities.current}<span class="ring__entrants-sep">/</span>${this.entities.max}</span>`;const m=parseFloat(this.tournamentDollars),A=m>=1e3?`${(m/1e3).toFixed(m%1e3===0?0:1)}K`:m.toLocaleString();this.shadowRoot.innerHTML=`
            <style>
                ${rt()}
                ${ss()}

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
                .ring__trophy--gold { background-image: var(--badge__ribbon--gold); }
                .ring__trophy--silver { background-image: var(--badge__ribbon--silver); }
                .ring__trophy--bronze { background-image: var(--badge__ribbon--bronze); }
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
                            ${this.buildRing(c,d,parseFloat(i),l)}
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
                        <div class="lc__stat-val">${this.matches}${(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(P=>P.override_last_match_close===!0)?"+":""}catch{return""}})()}</div>
                        <div class="lc__stat-label">Games</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val">${this.entities.current}/${this.entities.max}</div>
                        <div class="lc__progress-bar">
                            <div class="lc__progress-fill" style="width: ${i}%; background: ${l};"></div>
                        </div>
                        <div class="lc__stat-label">Entrants</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val lc__stat-val--accent">${A}</div>
                        <div class="lc__stat-label">TD$</div>
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
        `}}customElements.define("bma-tournament-list-card",Hg);const Le={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,a=null,n=0){const r=document.querySelector("#summary-balance"),i=document.querySelector("#summary-stake"),o=document.querySelector("#summary-payout");r&&(this.updateTDBalance("#summary-balance",e),e<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red")),i&&(i.textContent=t.toFixed(2)),o&&(o.textContent=s.toFixed(2),s<0?o.classList.add("summary-cell__red"):o.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let d="";if(a){const p=a.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=n||s||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(a&&a.tournament_dollars){const d=a.tournament_dollars,u=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}},categorizeTournaments(e,t,s,a,n={}){const r=[],{subStatus:i="all",sort:o="default",result:l="all",odds:c="all"}=n,d=T=>(T.entities?.guids||[]).includes(a),u=T=>T.status==="UPCOMING"||T.class==="UPCOMING",p=T=>T.status==="LOCKED"||T.class==="LOCKED",f=T=>u(T)||p(T),g=T=>T.status==="COMPLETED"||T.class==="COMPLETED",m=T=>Array.isArray(T.matches_expanded)&&T.matches_expanded.length>0,A=(T,_)=>(T.sports_allowed||[]).some(h=>h.key===_),S=T=>it.find(_=>_.key===T)?.title||T,P=T=>{const _=T.tags||[];for(const h of _)if(!(typeof h!="object"||!h)&&(h.entity_guid===a&&h.badge||h[a]))return!0;return!1},w=T=>{if(o==="default")return T;const _=[...T];switch(o){case"starting_soon":_.sort((h,b)=>new Date(h.window_start_time||0)-new Date(b.window_start_time||0));break;case"most_entrants":_.sort((h,b)=>(b.entities?.guids?.length||0)-(h.entities?.guids?.length||0));break;case"fewest_spots":_.sort((h,b)=>{const E=(h.entities?.max||0)-(h.entities?.guids?.length||0),y=(b.entities?.max||0)-(b.entities?.guids?.length||0);return E-y});break;case"recently_active":_.sort((h,b)=>new Date(b.status_time||0)-new Date(h.status_time||0));break;case"newest":_.sort((h,b)=>new Date(b.status_time||0)-new Date(h.status_time||0));break;case"td_high":_.sort((h,b)=>parseFloat(b.tournament_dollars||0)-parseFloat(h.tournament_dollars||0));break;case"td_low":_.sort((h,b)=>parseFloat(h.tournament_dollars||0)-parseFloat(b.tournament_dollars||0));break}return _},v=T=>l==="all"?T:l==="trophy"?T.filter(_=>P(_)):l==="no_trophy"?T.filter(_=>!P(_)):T;let O=e,R="";if(s==="multi"?(O=e.filter(T=>(T.sports_allowed?.length||0)>1),R="Multi-Sport "):s!=="all"&&(O=e.filter(T=>A(T,s)),R=S(s)+" "),t==="lobby"){let T=O;if(i==="open"?T=O.filter(_=>u(_)):i==="locked"?T=O.filter(_=>p(_)):i==="completed"&&(T=O.filter(_=>g(_))),i==="all"){const _=w(T.filter(E=>u(E)&&!d(E)));_.length>0&&r.push({title:`Open Entry ${R}Tournaments`,tournaments:_});const h=w(T.filter(E=>p(E)&&!d(E)));h.length>0&&r.push({title:`In Progress - Entry Closed ${R}Tournaments`,tournaments:h});const b=w(T.filter(E=>g(E))).slice(0,20);b.length>0&&r.push({title:`Recently Completed ${R}Tournaments`,tournaments:b})}else{const _=w(T),h={open:"Open",locked:"In Progress",completed:"Completed"};_.length>0&&r.push({title:`${h[i]} ${R}Tournaments`,tournaments:_})}}else if(t==="my"){const T=O.filter(y=>d(y));let _=T.filter(y=>f(y));i==="active"?_=_.filter(y=>p(y)):i==="upcoming"&&(_=_.filter(y=>u(y))),c==="available"?_=_.filter(y=>m(y)):c==="none"&&(_=_.filter(y=>!m(y)));const h=w(_);h.length>0&&r.push({title:`Your Active ${R}Tournaments`,tournaments:h});const b=v(T.filter(y=>g(y))),E=w(b);E.length>0&&r.push({title:`Your Completed ${R}Tournaments`,tournaments:E})}else if(t==="completed"){const T=w(v(O.filter(h=>d(h)&&g(h))));T.length>0&&r.push({title:`Your Completed ${R}Tournaments`,tournaments:T});const _=w(O.filter(h=>!d(h)&&g(h)));_.length>0&&r.push({title:`Other Completed ${R}Tournaments`,tournaments:_})}else r.push({title:"Tournaments",tournaments:e});return r},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=me();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let a=0,n=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const m=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(A=>A.tournament_guid===e.guid);console.log("[Dashboard Update] Found",m.length,"existing bets for this tournament"),m.forEach(A=>{(A.bet||[]).forEach(P=>{Object.keys(P).filter(v=>v!=="short_title").forEach(v=>{const O=P[v];O&&(O.stake&&(a+=parseFloat(O.stake)),O.reconciled===!0&&O.payout>0&&(n+=parseFloat(O.payout)))})})})}const i=document.querySelector("#summary-stake");if(i){const g=parseFloat(i.textContent)||0;r=Math.max(0,g-a),console.log("[Dashboard Update] Summary total stakes:",g,"Pending:",r)}const o=a+r,l=s-a-r+n;console.log("[Dashboard Update] TD$:",s,"Committed:",a,"Pending:",r,"Payouts:",n,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const g=l-s;let m="";g>0?m=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${g.toLocaleString()})</span>`:g<0&&(m=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${g.toLocaleString()})</span>`);const A=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${A};">TD$ ${l.toLocaleString()}</span>${m}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const g=r>0?r:o,m=n||0;let A="";if(m>0&&(A=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${m.toLocaleString()})</span>`),d.innerHTML=`TD$ ${g.toLocaleString()}${A}`,u){const S=Math.min(g/s*100,100);u.style.width=`${S}%`}}const p=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(p){const g=Math.max(l/s*100,0);p.style.width=`${g}%`}const f=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(f&&e){const g=e.entities?.guids?.length||0,m=e.entities?.max||100,A=g/m*100;f.style.width=`${A}%`}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const s=new Date,a=[...e.matches_expanded].sort((r,i)=>{const o=new Date(r.scheduled_at),l=new Date(i.scheduled_at),c=o<s,d=l<s;return c&&!d?1:!c&&d?-1:o-l}),n=()=>{const i=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let o=0;i&&me().coreTourn.length>0&&(o=me().coreTourn[me().coreTourn.length-1].data.find(g=>g.guid===i)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=me();se.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:o,bets:d,timestamp:Date.now()}))};a.forEach(r=>{const o=new Date(r.scheduled_at)<s;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",o||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(g){const m=g.querySelectorAll("bma-bet-entry");let A=!1;m.forEach(S=>{if(A)return;const P=S.getAttribute("data-content-type"),w=S.getAttribute("data-content-odds");P===u.type&&w===u.price&&(S.remove(),A=!0)}),g.children.length===0&&(g.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{n()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(A=>{A.shadowRoot.querySelectorAll(".btn--selected").forEach(S=>{S.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const g=me(),m=u.type;m==="spread"?se.publish(g.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?se.publish(g.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&se.publish(g.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),se.publish(g.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const a=document.querySelector(".bet-grid__slip-BETSLIP-content");a&&(a.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const n=me();if(n.coreTourn.length>0){const o=n.coreTourn[n.coreTourn.length-1].data.find(l=>l.guid===e);o&&Le.renderMatchCards(o)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{se.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const n=a.getAttribute("data-match-guid"),r=a.getAttribute("data-home-team"),i=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?r:i;t.some(g=>{if(g.coreMatches__guid!==n)return!1;const m=g.bet||[];if(m.length===0)return!1;const A=m[0],P=Object.keys(A).filter(O=>O!=="short_title")[0],v=A[P]?.type;return c==="total"?v===c:v===c&&P===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},updatePlayButton(){const e=me(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,a=t?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!s||e.coreTourn.length===0)return;const i=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===s);if(!i)return;const o=e.appSession?.session_user?.guid,l=i.entities?.guids?.includes(o),c=i.status;n.style.display="none",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(n.style.display="",c==="UPCOMING"&&!l?a==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):a==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const e=me(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===s);if(!n)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const i=y=>{if(!y)return"N/A";let M=new Date(y);return!y.includes("Z")&&!y.match(/[+-]\d{2}:\d{2}$/)&&(M=new Date(y+"Z")),isNaN(M.getTime())?"Invalid Date":M.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})},o=n.status?`info-row__value--${n.status.toLowerCase()}`:"",l={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},c=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(y=>{const M=y.key||y,F=it.find(H=>H.key===M),K=F?F.group:"default",B=l[M]||F?.title||M;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${M}" data-sport-group="${K}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${B}</span>
                </span>`}).join(""):"N/A",d=e.appSession?.session_user?.guid,u=n.entities?.guids?.includes(d),p=n.entities?.guids?.length||0,f=n.entities?.max||0,g=(p/(f||1)*100).toFixed(1),m=(()=>{const y=new Date(n.window_start_time),M=new Date(n.window_end_time),F=new Date;if(isNaN(y.getTime())||isNaN(M.getTime()))return"";const K=M-y,B=F-y;let H=0,I="";if(F<y){H=0;const X=y-F,te=Math.floor(X/864e5),Z=Math.floor(X%864e5/36e5);I=te>0?`First match in ${te}d ${Z}h`:`First match in ${Z}h`}else if(F>M){const X=new Date(M.getFullYear(),M.getMonth(),M.getDate()),te=new Date(F.getFullYear(),F.getMonth(),F.getDate());H=X.getTime()===te.getTime()?95:100,I=H===100?"Tournament Complete":"Last Day"}else{H=Math.min(100,B/K*100);const X=Math.ceil(K/864e5),te=Math.ceil(B/864e5);I=te>=X?"Last Day":`Day ${te} of ${X}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${I}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${H.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),A=n.tags||[],P=A.some(y=>y.override_last_match_close===!0)?"+":"",w=(()=>{const y=A,M=y.some(ie=>ie.match_inprogress_lock===!0),F=M?"#F7C60D":"#00E676",K=M?"Locked Odds":"Live Odds",B=M?"Odds lock at game start":"Odds stay live during games",H=M?`<svg width="18" height="18" viewBox="0 0 24 24" fill="${F}"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>`:`<svg width="18" height="18" viewBox="0 0 24 24" fill="${F}"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`,I=y.some(ie=>ie.override_last_match_close===!0),X=I?"#00E676":"rgba(255,255,255,0.5)",te=I?"On-going Format":"Fixed Format",Z=I?"New matches added as odds become available":"Match slate is fixed at tournament start",oe=I?`<svg width="18" height="18" viewBox="0 0 24 24" fill="${X}"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`:`<svg width="18" height="18" viewBox="0 0 24 24" fill="${X}"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`;return`<div class="info-row" style="align-items: center;">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                    ${H}
                    <span style="color: ${F}; font-weight: 700; font-size: 0.85rem;">${K}</span>
                </span>
                <span class="info-row__value" style="color: rgba(255,255,255,0.4); font-size: 0.78rem;">${B}</span>
            </div>
            <div class="info-row" style="align-items: center;">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                    ${oe}
                    <span style="color: ${X}; font-weight: 700; font-size: 0.85rem;">${te}</span>
                </span>
                <span class="info-row__value" style="color: rgba(255,255,255,0.4); font-size: 0.78rem;">${Z}</span>
            </div>`})(),v=(()=>{const M=(n.tags||[]).find(H=>H.badge_gold!==void 0||H.badge_silver!==void 0||H.badge_bronze!==void 0);if(!M)return null;const F=M.badge_gold||0,K=M.badge_silver||0,B=M.badge_bronze||0;return F===0&&K===0&&B===0?null:{gold:F,silver:K,bronze:B}})(),O=u?`<div class="info-status-banner info-status-banner--entered">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Entered</span>
                </div>`:n.status==="UPCOMING"?`<div class="info-status-banner info-status-banner--open">
                    <span>Open for Entry</span>
                </div>`:n.status==="LOCKED"?`<div class="info-status-banner info-status-banner--locked">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#969696"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    <span>In Progress</span>
                </div>`:"",R=`
            <div class="info-section" style="margin-top: 12px;">
                ${m}
                <div class="info-row">
                    <span class="info-row__label">Status</span>
                    <span class="info-row__value ${o}">${n.status==="LOCKED"?"IN PROGRESS":n.status||"Unknown"}</span>
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
                    <span class="info-row__value">${n.matches_expanded?.length||0}${P}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Sports</span>
                    <span class="info-row__value">${c}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Start</span>
                    <span class="info-row__value">${i(n.window_start_time)}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">End <span style="font-size: x-small; opacity: 0.5;">(estimated)</span></span>
                    <span class="info-row__value">${i(n.window_end_time)}</span>
                </div>
                <div class="info-row info-row--entrants">
                    <span class="info-row__label">Entrants</span>
                    <div class="info-row__value-with-bar">
                        <span class="info-row__value">${p} / ${f}</span>
                        <div class="info-progress-bar">
                            <div class="info-progress-fill" style="width: ${g}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,T=v?`
            <div class="info-section">
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${v.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--badge__silver); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${v.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${v.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--badge__gold); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${v.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${v.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--badge__bronze); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${v.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            </div>
            <div class="info-section" style="margin-top: 24px;">
                <div class="info-section__title">Trophy Breakdown</div>
                ${v.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--badge__gold); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${v.gold}</span>
                </div>`:""}
                ${v.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--badge__silver); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${v.silver}</span>
                </div>`:""}
                ${v.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--badge__bronze); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${v.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,_=(()=>{if(!n.matches_expanded||!Array.isArray(n.matches_expanded)||n.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let y=0,M=0,F=0;const K=new Date;n.matches_expanded.forEach(Z=>{let oe=null;try{oe=typeof Z.scoreboard_data=="string"?JSON.parse(Z.scoreboard_data):Z.scoreboard_data}catch{}oe?.time_remaining?oe.time_remaining.toLowerCase()==="final"?y++:M++:new Date(Z.scheduled_at)<K?y++:F++});const B=M>0?"live":"upcoming",H=[];y>0&&H.push(`<span class="match-filter-btn${B==="final"?" match-filter--active":""}" data-filter="final">${y} Final</span>`),M>0&&H.push(`<span class="match-filter-btn match-filter-btn--live${B==="live"?" match-filter--active":""}" data-filter="live">${M} Live</span>`),F>0&&H.push(`<span class="match-filter-btn match-filter-btn--upcoming${B==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${F} Upcoming</span>`);const I=H.length>0?`<div class="match-filter-bar">${H.join("")}</div>`:"",X=new Date,te=n.matches_expanded.map(Z=>{const oe=Z.scoreboard_data?typeof Z.scoreboard_data=="string"?Z.scoreboard_data:JSON.stringify(Z.scoreboard_data):"";let ie="upcoming",Q=null;try{Q=typeof Z.scoreboard_data=="string"?JSON.parse(Z.scoreboard_data):Z.scoreboard_data}catch{}Q?.time_remaining?ie=Q.time_remaining.toLowerCase()==="final"?"final":"live":ie=new Date(Z.scheduled_at)<X?"final":"upcoming";const re=ie!==B;return`<bma-match-status
                    data-match-guid="${Z.guid||Z.odds_id||Z.id||""}"
                    data-match-title="${Z.short_title||Z.title||"Match"}"
                    data-match-scheduled-at="${Z.scheduled_at||""}"
                    data-match-home-team="${Z.home_team_id||"Home"}"
                    data-match-away-team="${Z.away_team_id||"Away"}"
                    data-match-home-score="${Z.home_team_score!==null&&Z.home_team_score!==void 0?Z.home_team_score:""}"
                    data-match-away-score="${Z.away_team_score!==null&&Z.away_team_score!==void 0?Z.away_team_score:""}"
                    data-match-scoreboard="${oe.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${Z.sport_id||""}"
                    data-match-status="${ie}"
                    data-sync-theme="dark"
                    style="${re?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${I}
                </div>
                <div class="matches-scroll-container" id="info-matches-scroll" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${te}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `})();r.innerHTML=`
            ${O}
            <div class="info-section" style="margin-bottom: 16px;">
                <div class="info-section__title">Tournament Details</div>
                ${w}
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
            <div class="info-tab-panel" data-info-panel="summary">${R}</div>
            <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${T}</div>
            <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${_}</div>
        `,r.querySelectorAll(".info-sub-tab").forEach(y=>{y.addEventListener("click",()=>{r.querySelectorAll(".info-sub-tab").forEach(F=>F.classList.remove("info-sub-tab--active")),y.classList.add("info-sub-tab--active");const M=y.dataset.infoTab;r.querySelectorAll(".info-tab-panel").forEach(F=>{F.style.display=F.dataset.infoPanel===M?"":"none"})})});const h=r.querySelector('[data-info-panel="matches"]');if(h){h.addEventListener("click",F=>{const K=F.target.closest(".match-filter-btn");K&&(h.querySelectorAll(".match-filter-btn").forEach(B=>B.classList.remove("match-filter--active")),K.classList.add("match-filter--active"),h.querySelectorAll("bma-match-status").forEach(B=>{B.style.display=B.dataset.matchStatus===K.dataset.filter?"":"none"}))});const y=h.querySelector(".matches-scroll-container"),M=h.querySelector(".matches-scroll-fade");if(y&&M){const F=()=>{M.style.opacity=y.scrollHeight-y.scrollTop-y.clientHeight<8?"0":"1"};y.addEventListener("scroll",F),setTimeout(F,100)}}const b=document.getElementById("pop-play__caro-info-summary2--id");b&&(b.innerHTML="");const E=document.getElementById("pop-play__caro-info-list--id");E&&(E.innerHTML="")},async populateLeaderboard(){const e=me(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,a=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(r,n)),r.style.visibility="visible";try{const i=await Se.fetchLeaderboard(s),o=i?.data||i?.rows;if(o&&o.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(g=>g.guid===s);n.innerHTML=o.map((g,m)=>{let A="";if(c?.tags&&Array.isArray(c.tags)){const w=c.tags.find(v=>!!(typeof v=="object"&&v!==null&&(v.entity_guid===g.user_guid&&v.badge&&v.badge.startsWith("--badge__ribbon--")||v[g.user_guid]&&v[g.user_guid].startsWith("--badge__ribbon--"))));if(w){const v=w.badge||w[g.user_guid];v==="--badge__ribbon--gold"?A="badge-trophy--gold":v==="--badge__ribbon--silver"?A="badge-trophy--silver":v==="--badge__ribbon--bronze"&&(A="badge-trophy--bronze")}}const S=g.combined_betslips?typeof g.combined_betslips=="string"?g.combined_betslips:JSON.stringify(g.combined_betslips):"[]";let P="[]";if(g.combined_betslips&&c?.matches_expanded){const w=typeof g.combined_betslips=="string"?JSON.parse(g.combined_betslips):g.combined_betslips,v=[...new Set(w.map(R=>R.coreMatches__guid||R.match_guid||R.odds_id).filter(Boolean))],O=c.matches_expanded.filter(R=>{const T=R.guid||R.id||R.odds_id;return v.includes(T)});P=JSON.stringify(O)}return`
                        <bma-leaderboard-card
                            data-rank="${m+1}"
                            data-username="${g.username||"Unknown"}"
                            data-user-guid="${g.user_guid||""}"
                            data-tournament-dollars="${g.calculated_tournament_dollars||0}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${g.total_betslips||0}"
                            data-total-payout="${g.total_payout||0}"
                            data-combined-betslips="${S.replace(/"/g,"&quot;")}"
                            data-user-matches="${P.replace(/"/g,"&quot;")}"
                            data-badge-class="${A}"
                            data-is-current-user="${g.user_guid===a}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `}).join(""),requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((g,m)=>{g.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",g.style.animationDelay=`${Math.min(m*60,400)}ms`})});const d=o.findIndex(g=>g.user_guid===a),u=d>=0?d+1:o.length,p=c?.entities?.guids?.length||o.length,f=document.getElementById("dashboard-rank");f&&(f.innerHTML=`<span class="tourn-dashboard__rank-text">${u}/${p}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`)}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(i){console.error("[appEvents] Error fetching leaderboard:",i),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=me(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(r=>r.guid===s);n&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:s,subStatus:a,sort:n,result:r}=e,i=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let o="";s==="lobby"?o+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${i("subStatus","all","All",a==="all")}
                        ${i("subStatus","open","Open",a==="open")}
                        ${i("subStatus","locked","Locked",a==="locked")}
                        ${i("subStatus","completed","Recently Completed",a==="completed")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${i("sort","default","Default",n==="default")}
                        ${i("sort","starting_soon","Starting Soon",n==="starting_soon")}
                        ${i("sort","most_entrants","Most Entrants",n==="most_entrants")}
                        ${i("sort","fewest_spots","Fewest Spots Left",n==="fewest_spots")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Entry Fee</div>
                    <div class="filter-chips">
                        ${i("fee","free","Free",!0,!0)}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Game Mode</div>
                    <div class="filter-chips">
                        ${i("mode","default","Default",!0,!0)}
                    </div>
                </div>`:s==="my"?o+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${i("subStatus","all","All",a==="all")}
                        ${i("subStatus","active","Active",a==="active")}
                        ${i("subStatus","upcoming","Upcoming",a==="upcoming")}
                        ${i("subStatus","completed","Completed",a==="completed")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${i("result","all","All",r==="all")}
                        ${i("result","trophy","Won Trophy",r==="trophy")}
                        ${i("result","no_trophy","No Trophy",r==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${i("sort","default","Default",n==="default")}
                        ${i("sort","recently_active","Recently Active",n==="recently_active")}
                        ${i("sort","starting_soon","Starting Soon",n==="starting_soon")}
                    </div>
                </div>`:s==="completed"&&(o+=`
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${i("result","all","All",r==="all")}
                        ${i("result","trophy","Won Trophy",r==="trophy")}
                        ${i("result","no_trophy","No Trophy",r==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${i("sort","default","Default",n==="default")}
                        ${i("sort","newest","Newest First",n==="newest")}
                    </div>
                </div>`);const l={lobby:{subStatus:"all",sort:"default",result:"all"},my:{subStatus:"all",sort:"default",result:"all"},completed:{subStatus:"all",sort:"default",result:"all"}};neodigmSodaPop.setOnAfterOpen(()=>{const c=document.getElementById("filter-popup__content--id");if(!c)return;c.innerHTML=`
                ${o}
                <div class="filter-actions">
                    <button class="filter-btn filter-btn--reset" id="filter-reset-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        Reset
                    </button>
                    <button class="filter-btn filter-btn--apply" id="filter-apply-btn">Apply</button>
                </div>
            `;let d={subStatus:a,sort:n,result:r};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;d[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(m=>m.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=l[s]||l.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){se.subscribe("APP",(T,_)=>{console.warn("~~ sub all APP | "+T+"|"+_)}),se.subscribe("WC",(T,_)=>{console.warn("~~ sub all WC  | "+T+"|"+_)}),se.subscribe("ROUTE",(T,_)=>{console.warn("~~ sub all ROUTE  | "+T+"|"+_)});let t="lobby",s="all",a="all",n="default",r="all",i="all",o=localStorage.getItem("bma_view_mode")||"cards";const l=()=>{const T=document.getElementById("filter-bar__count--id");if(!T)return;let _=0;a!=="all"&&_++,n!=="default"&&_++,r!=="all"&&_++,T.textContent=_,T.style.display=_>0?"":"none"},c=()=>{a="all",n="default",r="all",i="all"};document.addEventListener("click",T=>{const _=T.target.closest(".category-filter-toggle");if(_){const E=_.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(E){const y=E.style.display!=="none";E.style.display=y?"none":"",_.classList.toggle("category-filter-toggle--open",!y)}return}const h=T.target.closest("[data-view-mode]");if(h){const b=h.dataset.viewMode;if(b===o)return;o=b,localStorage.setItem("bma_view_mode",b),document.querySelectorAll("[data-view-mode]").forEach(E=>E.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${b}"]`).forEach(E=>E.classList.add("view-toggle__btn--active")),se.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("change",T=>{const _=T.target.closest(".category-dropdown");if(!_)return;const h=_.dataset.filterType,b=_.value;h==="subStatus"?a=b:h==="sort"?n=b:h==="result"?r=b:h==="odds"&&(i=b),l(),se.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))});const d=()=>{if(e.coreTourn.length===0)return;const _=e.coreTourn[e.coreTourn.length-1].data,h=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let E=0;_.forEach(y=>{const M=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!M)return;const F=M.parentElement;let K=!0;if(t==="my"?(y.entities?.guids||[]).includes(h)||(K=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(K=!1),s!=="all"&&K){const B=y.sports_allowed||[];s==="multi"?B.length<=1&&(K=!1):B.some(I=>I.key===s)||(K=!1)}K?E++:F&&F.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${s} - showing ${E} of ${_.length} tournaments`)};se.subscribe(e.hierTopics.COREBETSLIP,(T,_)=>{JSON.parse(_);let h=16;switch(T){case e.hierTopics.COREBETSLIP__BET:h=5,Js.shootConfetti(),console.log("~~~  |  "+T+" | ",_);const b=document.querySelector("[data-bets-valid]");b&&(b.dataset.betsValid="false");const E=document.querySelector("neodigm-sodapop");E&&E.setAttribute("data-wait","true");const y=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(y.length===0){console.warn("[app_events] No bets to submit"),E&&E.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const F=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,K=e.appSession?.session_user?.guid;if(!F||!K){console.error("[app_events] Missing tournament or user GUID"),E&&E.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const B=Array.from(y).map(Q=>{const re=Q.getAttribute("data-content-team-points"),ae=Q.getAttribute("data-content-odds"),z=Q.getAttribute("data-stake")||"0",J=Q.getAttribute("data-content-type"),q=Q.getAttribute("data-payout")||"0",ee=Q.getAttribute("data-match-guid")||"",le={};return le[re]={type:J,stake:parseFloat(z),odds:parseFloat(ae),payout:parseFloat(q),reconciled:!1},{acctEntity__guid:K,coreTournaments__guid:F,coreMatches__guid:ee,bet:[le],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",B),Se.postBetSlips(B).then(Q=>{console.log("[app_events] Bet slips posted successfully:",Q);const re=B.reduce((ae,z)=>{const J=z.bet[0],q=Object.keys(J)[0];return ae+(J[q]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${re.toFixed(2)}`,"success"),Se.fetchBetSlips(K,F).then(ae=>{if(ae?.rows){const z={timestamp:Date.now(),source:"API",data:ae.rows};e.pushcoreBetSlip(z),console.log("[app_events] Refreshed bet slips in store:",ae.rows.length,"items")}Le.refreshPlayPopupUI(F,ae),E&&E.setAttribute("data-wait","false")}).catch(ae=>{console.error("[app_events] Error fetching fresh bet slips:",ae);const z=document.querySelector("[data-publish-betslip]");z&&delete z.dataset.processing,b&&(b.dataset.betsValid="true"),E&&E.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(Q=>{console.error("[app_events] Error posting bet slips:",Q);const re=document.querySelector("[data-publish-betslip]");re&&delete re.dataset.processing,b&&(b.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),E&&E.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:h=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&_){_=JSON.parse(_);const re=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&re){const ae=e.coreBetSlip[0].data.filter($=>$.coreTournaments__guid===re),z=[],J=[],q=[];ae.forEach($=>{const D=$.bet||[];if(D.length===0)return;const C=D[0];Object.keys(C).filter(Y=>Y!=="short_title").forEach(Y=>{const j=C[Y],G=j?.reconciled!==!1,ce=parseFloat(j?.payout||0);G?ce===0?J.push($):q.push($):z.push($)})});const ee=et.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,le=et.search(J,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,x=ee+le,k=et.search(q,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,L=_.tournament_dollars-x+k;Le.updateTDBalance("#summary-balance",L)}else Le.updateTDBalance("#summary-balance",_.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let I=0,X=0,te=0;if(e.coreBetSlip.length>0){const re=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(re){const z=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(k=>k.coreTournaments__guid===re),J=[],q=[],ee=[];z.forEach(k=>{const L=k.bet||[];if(L.length===0)return;const $=L[0];Object.keys($).filter(C=>C!=="short_title").forEach(C=>{const W=$[C],Y=W?.reconciled!==!1,j=parseFloat(W?.payout||0);Y?j===0?q.push(k):ee.push(k):J.push(k)})}),I=et.search(J,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,X=et.search(ee,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const le=et.search(q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,x=et.search(ee,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;te=le+x}}let Z=!0,oe=0;const ie=document.querySelector("[data-bets-valid]");if(ie&&_){_=JSON.parse(_),_.pending_stake_sum=0,_.pending_payout_sum=0,_.bets.length||(Z=!1),_.bets.forEach(ee=>{ee.stake=Number(ee.stake),ee.stake>0?_.pending_stake_sum+=ee.stake:Z=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(ee=>{const le=parseFloat(ee.getAttribute("data-payout")||"0");_.pending_payout_sum+=le});const re=I+_.pending_stake_sum,ae=X+_.pending_payout_sum;oe=parseFloat((_.tournament_dollars-re-te+X).toFixed(2));const J=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let q=null;J&&e.coreTourn.length>0&&(q=e.coreTourn[e.coreTourn.length-1]?.data?.find(le=>le.guid===J)),Le.updateSummaryAndDashboard(oe,re,ae,q,_.pending_payout_sum||0),(_.tournament_dollars<0||oe<0)&&(Z=!1),ie.dataset.betsValid=Z}break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h,"QUITE").vibrate()});const u=()=>{const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;_&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===_)?.tournament_dollars||0),se.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:h,timestamp:Date.now()}))},p=()=>{const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;_&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(I=>I.guid===_)?.tournament_dollars||0);let b=0,E=0,y=0,M=0;if(e.coreBetSlip.length>0&&_){const H=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(Q=>Q.coreTournaments__guid===_);console.log("[app_events] Filtered bets for tournament:",_,"found:",H.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",H[0]);const I=[],X=[],te=[];H.forEach(Q=>{const re=Q.bet||[];if(re.length===0)return;const ae=re[0];Object.keys(ae).filter(J=>J!=="short_title").forEach(J=>{const q=ae[J],ee=q?.reconciled!==!1,le=parseFloat(q?.payout||0);ee?le===0?X.push(Q):te.push(Q):I.push(Q)})}),console.log("[app_events] Bet categories:",{unreconciled:I.length,reconciledZero:X.length,reconciledNonZero:te.length});const Z=et.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,oe=et.search(X,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ie=et.search(te,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;y=oe+ie,E=et.search(te,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,M=et.search(I,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,b=Z,console.log("[app_events] Balance calculation:",{unreconciledStakes:Z,lostBetStakes:oe,wonBetStakes:ie,allReconciledStakes:y,displayedStake:b,reconciledPayouts:E,tournamentDollars:h,calculatedBalance:h-b-y+E})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const F=h-b-y+E;let K=null;_&&e.coreTourn.length>0&&(K=e.coreTourn[e.coreTourn.length-1].data.find(H=>H.guid===_)),Le.updateSummaryAndDashboard(F,b,E,K,M)};se.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(T,_)=>{const b=JSON.parse(_)?.rows||[],E=document.querySelector(".bet-grid__slip-MYBETS");if(!E)return;if(E.innerHTML="",b.length===0){E.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const K=document.querySelector(".bet-grid__slip");K&&K.setAttribute("data-active-bet-tab","BETSLIP"),u();return}b.forEach(K=>{if((K.bet||[]).length===0)return;const H=document.createElement("bma-bet-existing");H.setAttribute("data-corebetslip",JSON.stringify(K)),E.appendChild(H)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),me().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Le.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",b.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),p()},200)}),document.addEventListener("click",T=>{const _=T.target;if(_&&_.classList.contains("bet-slip-tab")){const h=_.dataset.betTab,b=document.querySelector(".bet-grid__slip");h&&b&&(b.setAttribute("data-active-bet-tab",h),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",h))}if(_&&_.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(_.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}_.dataset.processing="true";const b=_.dataset.publishBetslip;se.publish(b,JSON.stringify({timestamp:Date.now()}))}});const f=()=>{const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;_&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(F=>F.guid===_)?.tournament_dollars||0);const b=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),E=Array.from(b).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));se.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:h,bets:E,timestamp:Date.now()}))},g=(T,_)=>{const h=JSON.parse(_),b=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!b){console.error("[app_events] Bet slip container not found");return}const E=b.querySelector(".bet-slip__empty");E&&E.remove();let y="";h.type==="total"?y=h.team==="over"?"Over":"Under":h.team==="home"?y=h.homeTeam:h.team==="away"&&(y=h.awayTeam);let M=y;if(h.point)if(h.type==="spread"){const X=parseFloat(h.point)>0?`+${h.point}`:h.point;M=`${y} ${X}`}else h.type==="total"&&(M=`${y} ${h.point}`);const F=document.createElement("bma-bet-entry");F.setAttribute("data-content-team-points",M),F.setAttribute("data-content-odds",h.price||"0"),F.setAttribute("data-content-stake-text","0"),F.setAttribute("data-content-type",h.type||""),F.setAttribute("data-abbreviated-title",h.abbreviatedTitle||`${h.homeTeam} vs ${h.awayTeam}`),F.setAttribute("data-scheduled-at",h.scheduledAt||""),F.setAttribute("data-match-guid",h.matchGuid||""),F.setAttribute("data-home-team",h.homeTeam||""),F.setAttribute("data-away-team",h.awayTeam||""),F.setAttribute("data-bet-team",y||"");const B=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(B&&e.coreTourn.length>0){const te=e.coreTourn[e.coreTourn.length-1].data.find(Z=>Z.guid===B);if(te?.sports_allowed&&te.sports_allowed.length>0){const Z=te.sports_allowed[0];F.setAttribute("data-sport-key",Z.key||"");const oe=it.find(ie=>ie.key===Z.key);F.setAttribute("data-sport-group",oe?.group||"")}}b.appendChild(F),console.log("[app_events] Bet entry appended to container:",F,"Container children:",b.children.length),setTimeout(()=>{A(F)},0);const H=document.querySelector(".bet-grid__slip");H&&(H.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const I=b.querySelectorAll("bma-bet-entry").length;I>=3?requestAnimationFrame(()=>{setTimeout(()=>{const X=document.querySelector(".bet-grid__slip");X&&(console.log("[app_events] Scrolling parent to bottom - bet count:",I,"scrollHeight:",X.scrollHeight,"current scrollTop:",X.scrollTop),X.scrollTo({top:X.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",X.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",I,"bet cards (need 3+)"),setTimeout(()=>{f()},200),console.log("[app_events] Created bet entry:",{teamPoints:M,odds:h.price,type:h.type})};se.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(T,_)=>{g(T,_),m()}),se.subscribe(e.hierTopics.COREBETSLIP__MONEY,(T,_)=>{g(T,_),m()}),se.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(T,_)=>{g(T,_),m()});function m(){const T=window.matchMedia("(orientation: portrait)").matches,_=window.matchMedia("(max-width: 768px)").matches;if(T||_){const h=document.querySelector(".bet-grid__select"),b=document.querySelector(".bet-grid__slip"),E=document.querySelector(".bet-grid__toggle-text");h&&b&&E&&(h.classList.add("collapsed"),b.classList.remove("collapsed"),E.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const A=T=>{const _={sport:{key:T.getAttribute("data-sport-key")||"",group:T.getAttribute("data-sport-group")||""},Match:{scheduled_at:T.getAttribute("data-scheduled-at")||"",home_team_id:T.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:T.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:T.getAttribute("data-bet-team")||"",over:"",under:""},type:T.getAttribute("data-content-type")||"",odds:T.getAttribute("data-content-odds")||"0",stake:T.getAttribute("data-stake")||"0"}},h=yl.calcPayout(_);T.setAttribute("data-payout",h.toString()),console.log("[app_events] Payout calculated:",{stake:_.Bet.stake,odds:_.Bet.odds,payout:h})};new MutationObserver(T=>{T.forEach(_=>{_.type==="attributes"&&_.attributeName==="data-stake"&&_.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",_.target.getAttribute("data-stake")),A(_.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{f()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",T=>{console.log("[app_events] Removing bet entry:",T.detail);const _=T.target,h=T.detail;_.remove(),setTimeout(()=>{const M=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(M){const F=me(),K=F.coreTourn[F.coreTourn.length-1];if(K&&K.data){const B=K.data.find(H=>H.guid===M);B&&Le.updateTournamentDashboard(B)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(y=>{(y.shadowRoot?.querySelectorAll(".btn")||[]).forEach(F=>{const K=F.dataset.betType,B=F.dataset.price,H=K===h.type,I=B===h.odds;H&&I&&F.classList.contains("btn--active")&&(F.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:K,btnPrice:B}))})});const E=document.querySelector(".bet-grid__slip-BETSLIP-content");E&&E.children.length,setTimeout(()=>{f()},100)}),se.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(T,_)=>{const h=JSON.parse(_);h&&h.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${h.guid}"]`)}),se.subscribe(e.hierTopics.WC__APP__FOOT,(T,_)=>{JSON.parse(_);let h=16;switch(T){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:se.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:se.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:se.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:se.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),se.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(T,_)=>{const h=JSON.parse(_);let b=16;T=="WC.APP.HEAD_SPORTS.PREV"||T=="WC.APP.HEAD_SPORTS.NEXT"||T=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?b=3:(s=h.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${h.group})`),l(),se.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),b&&neodigmWired4Sound&&neodigmWired4Sound.sound(b).vibrate()}),se.subscribe(e.hierTopics.WC__APP__HEAD_MID,(T,_)=>{JSON.parse(_);let h=16;const b=()=>{s="all";const E=document.querySelector("bma-app-head-sports");E&&E.setAttribute("data-selected-chip","all")};switch(T){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",b(),c(),l(),se.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",b(),c(),l(),se.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",b(),c(),l(),se.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":h=16,typeof neodigmSodaPop<"u"&&neodigmSodaPop.autoOpen("sodapop_leaderboard");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",b(),d(),h=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night",2e3);break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),se.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(T,_)=>{JSON.parse(_);let h=16;switch(T){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const b=window.deferredPWAPrompt;if(!b){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{b.prompt();const{outcome:y}=await b.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),h=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const M=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:M});const F=document.getElementById("app");F&&F.setAttribute("data-sync-theme",M),document.body.setAttribute("data-sync-theme",M)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Un.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Un.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});const P=T=>{document.querySelectorAll(".play-section").forEach(h=>{h.style.display="none",h.classList.remove("play-section--active")});const _=document.getElementById(`play-section-${T}`);_&&(_.style.display="",_.classList.add("play-section--active"))},w=(T,_)=>{const h=T.split(".").pop(),b=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");P(h),b.forEach(M=>{(M.dataset.publishRouteHome?.split(".").pop()||"")===h?(M.classList.add("btn-info-sm--active"),M.classList.remove("btn-info-sm--inactive")):(M.classList.add("btn-info-sm--inactive"),M.classList.remove("btn-info-sm--active"))}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),y&&(y.style.overflow=h==="PLAY"?"hidden":"auto")};se.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",w);let v=null;se.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(T,_)=>{if(w(T),v){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}v=setTimeout(()=>{v=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Le.populateLeaderboard()}),se.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(T,_)=>{JSON.parse(_);const h=document.getElementById("btn-join__play--id");if(!h){console.warn("[app_events] PLAY button not found");return}const b=h.dataset.requiresJoin==="true",E=h.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",E,"requiresJoin:",b),b&&E==="join"){const M=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,F=me();if(!M){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",M),se.publish(F.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:M,timestamp:Date.now()})),h.textContent="Play",h.dataset.requiresJoin="false",setTimeout(()=>{w(T),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else w(T),console.log("[app_events] Advancing carousel to PLAY page")}),se.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(T,_)=>{JSON.parse(_);let h=10;switch(T){case"WC.APP.HEAD_TOP.USER_PROFILE":h=0,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const b=e.appSession.session_app.version,E=new Date().getFullYear();b&&neodigmToast&&neodigmToast.q(`${b} 4/2/2026, 7:34:06 PM|© ${E} Bet Max Action`,"night");break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});let O=null,R=null;se.subscribe(e.hierTopics.WC__TOURN_ACTION,(T,_)=>{const h=JSON.parse(_);let b=0;switch(h?.action){case"JOIN":b=512;break;case"PLAY":b=8;break;case"INFO":b=8;break}if(b){O=h?.tournamentGuid,R=h?.action,console.log("[app_events] Storing pending tourn data:",O,R);const E=e.appSession?.session_user?.guid,y=h?.tournamentGuid;E&&y?Se.fetchBetSlips(E,y).then(M=>{if(M?.rows){const F={timestamp:Date.now(),source:"API",data:M.rows};e.pushcoreBetSlip(F),console.log("[app_events] Bet slips fetched:",M.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{se.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(M))},3e3)},b)}).catch(M=>{console.error("[app_events] Error fetching bet slips:",M),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},b)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},b)}}),se.subscribe(e.hierTopics.WC__TOURN_ACTION,(T,_)=>{const h=JSON.parse(_);let b=16;switch(h?.action){case"FOCUS":b=3;break;case"SPORT_ICON":b=10;break;case"JOIN":b=5;break;case"PLAY":b=16;break}b&&neodigmWired4Sound&&neodigmWired4Sound.sound(b).vibrate()}),se.subscribe(e.hierTopics.WC__TOURN_ACTION,(T,_)=>{const h=JSON.parse(_);let b=0,E="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),h?.tournamentStatus){case"UPCOMING":E="success";break;case"LOCKED":E="warning";break;case"COMPLETED":E="danger";break}switch(h?.action){case"SPORT_ICON":h?.sportTitle==h?.sportDescription?b=h?.sportTitle:b=h?.sportTitle+"|"+h?.sportDescription;break}b&&neodigmToast&&neodigmToast.q(b,E)}),se.subscribe(e.hierTopics.WC__TOURN_ACTION,async(T,_)=>{const h=JSON.parse(_);if(h?.action==="JOIN"){const E=me().appSession?.session_user?.guid;if(!E){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),Js.shootConfetti());const M={acctEntityGuid:E,tournamentGuid:h.tournamentGuid};try{const F={method:"POST",body:JSON.stringify(M),headers:Se.genHeaders()};console.log("Posting to:",Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",M);const B=await(await fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",F)).json();if(console.log("Join response:",B),B.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const H=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);if(H){H.setAttribute("data-bma-tourn-wait","false");const I=H.getAttribute("data-bma-tourn-entities");if(I)try{const X=JSON.parse(I);X.guids.includes(E)||(X.guids.push(E),H.setAttribute("data-bma-tourn-entities",JSON.stringify(X)))}catch(X){console.error("Failed to parse entities:",X)}}},3e3);else{const H=B?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(H,"danger");const I=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);I&&I.setAttribute("data-bma-tourn-wait","false")}}catch(F){console.error("Join tournament error:",F),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),se.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(T,_)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const h=me();try{const b=await Se.fetchTournaments();console.log("[app_events] Tournaments fetched:",b),b?.rows&&Array.isArray(b.rows)?(h.pushCoreTourn({timestamp:Date.now(),source:"API",data:b.rows}),console.log("[app_events] Pushed to coreTourn, length:",h.coreTourn.length),se.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",b)}catch(b){console.error("[app_events] Error fetching tournaments:",b),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),se.subscribe(e.hierTopics.PROMOTION__LOAD,async(T,_)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const h=await Se.fetchPromotions();if(console.log("[app_events] Promotions fetched:",h),h?.ok&&h?.data&&Array.isArray(h.data)){const b=h.data.filter(y=>y.class==="banner"&&y.status==="LIVE");console.log("[app_events] Banner promotions:",b);const E=document.querySelector(".featured-swiper .swiper-wrapper");if(!E){console.warn("[app_events] Swiper wrapper not found");return}if(E.innerHTML="",b.forEach((y,M)=>{const F=document.createElement("div");F.className="swiper-slide";const K=document.createElement("div");K.className=`featured-card featured-card--${M+1}`;const B=y.hero_img?encodeURI(y.hero_img):"";K.style.backgroundImage=`url("${B}")`,K.setAttribute("data-promotion-hero-img",y.hero_img||""),K.setAttribute("data-promotion-caption",y.caption||""),K.setAttribute("data-promotion-tagline",y.tagline||""),K.setAttribute("data-promotion-toast",y.toast||""),K.setAttribute("data-promotion-topic",y.topic?.topic||""),K.setAttribute("data-promotion-topic-token",y.topic?.token||""),K.setAttribute("data-promotion-marquee",y.maquee||""),F.appendChild(K),E.appendChild(F)}),console.log("[app_events] Created",b.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),b.length===1){const y=document.querySelector(".featured-swiper .swiper-wrapper");y&&(y.style.justifyContent="center")}}}catch(h){console.error("[app_events] Error fetching promotions:",h)}}),se.subscribe(e.hierTopics.PROMOTION__CLICK,(T,_)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const h=JSON.parse(_);console.log("[app_events] Promotion clicked:",h),h.toast&&typeof neodigmToast<"u"&&neodigmToast.q(h.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const b=document.querySelector(".l-promotion #promoHero");b&&h.heroImg&&(b.src=h.heroImg);const E=document.querySelector(".l-promotion #promCaption");E&&h.caption&&(E.textContent=h.caption);const y=document.querySelector(".l-promotion #promoTagline");return y&&h.tagline&&(/<[^>]+>/.test(h.tagline)?y.innerHTML=h.tagline:y.textContent=h.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(h){console.error("[app_events] Error handling promotion click:",h)}}),se.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(T,_)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const h=me();if(h.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const b=h.coreTourn[h.coreTourn.length-1],E=h.coreTourn.length>1?h.coreTourn[h.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",b);const y=[];if(E){const B=b.data,H=E.data;B.forEach(I=>{const X=H.find(te=>te.guid===I.guid);X&&X.status!==I.status&&(console.log(`[app_events] Status changed for tournament ${I.guid}: ${X.status} -> ${I.status}`),y.push(I.guid))})}const M=h.appSession?.session_user?.guid,F=[...b.data].sort((B,H)=>{const I=B.status||B.class,X=H.status||H.class,te=B.entities?.guids||[],Z=H.entities?.guids||[],oe=te.includes(M),ie=Z.includes(M),Q=(k,L)=>{const $=new Date(k.status_time||0).getTime();return new Date(L.status_time||0).getTime()-$},re=I==="LOCKED"&&oe,ae=X==="LOCKED"&&ie;if(re&&!ae)return-1;if(!re&&ae)return 1;if(re&&ae)return Q(B,H);const z=I==="UPCOMING",J=X==="UPCOMING";if(z&&!J)return-1;if(!z&&J)return 1;if(z&&J)return Q(B,H);const q=I==="COMPLETED"&&oe,ee=X==="COMPLETED"&&ie;if(q&&!ee)return-1;if(!q&&ee)return 1;if(q&&ee)return Q(B,H);const le=I==="COMPLETED"&&!oe,x=X==="COMPLETED"&&!ie;return le&&!x?1:!le&&x?-1:Q(B,H)}),K=Le.categorizeTournaments(F,t,s,M,{subStatus:a,sort:n,result:r});if(console.log(`[app_events] Categorized into ${K.length} categories for filter: ${t}/${s} sub:${a} sort:${n} result:${r}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const B=document.querySelector(".tournaments-grid");B&&(B.dataset.filterContext=t),window._homeRouteRenderCards(K,!0,o,{tab:t,subStatus:a,sort:n,result:r,odds:i});const H=F.filter(X=>{const te=X.status||X.class,Z=X.entities?.guids||[];return(te==="LOCKED"||te==="UPCOMING")&&Z.includes(M)}).length,I=document.querySelector("bma-app-foot");if(I&&I.setAttribute("data-active-count",String(H)),y.length>0){const X=b.data;y.forEach(te=>{const Z=X.find(oe=>oe.guid===te);if(Z){const oe=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{se.publish(h.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:te,status:Z.status,timestamp:Date.now()}))},oe)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),se.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(T,_)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",_);const h=me();try{const b=JSON.parse(_);console.log("[app_events] SSE tournament sync data:",b);const E=JSON.parse(b.msg);if(console.log("[app_events] Parsed tournaments array:",E),!Array.isArray(E)){console.warn("[app_events] SSE msg is not an array:",E);return}h.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:E}),console.log("[app_events] Pushed SSE data to coreTourn, length:",h.coreTourn.length),se.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),Le.hydratePlayPopup())}catch(b){console.error("[app_events] Error processing SSE tournament sync:",b)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const T=document.querySelector("#caption__my-profile");T&&(T.textContent="My Profile");const _=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",_),console.log("[app_events] coreTourn length:",e.coreTourn.length),!_||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const b=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",b.length);let E=0,y=0,M=0;b.forEach((F,K)=>{if(!F.tags||!Array.isArray(F.tags)){console.log(`[app_events] Tournament ${K} has no tags or tags not an array`);return}F.tags.forEach((B,H)=>{if(typeof B=="object"&&B!==null){let I=null;B.entity_guid===_&&B.badge?I=B.badge:B[_]&&(I=B[_]),I==="--badge__ribbon--gold"?E++:I==="--badge__ribbon--silver"?y++:I==="--badge__ribbon--bronze"&&M++}})}),setTimeout(()=>{let F=document.querySelectorAll(".badge-counter");if(F.length===0){const K=document.querySelector("neodigm-sodapop");K&&(F=K.querySelectorAll(".badge-counter"))}F.length>=3?(F[0].textContent=y,F[1].textContent=E,F[2].textContent=M,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const F=document.querySelector("#profile-tournaments-list");if(!F||!_||e.coreTourn.length===0)return;const H=e.coreTourn[e.coreTourn.length-1].data.filter(Z=>{try{return(typeof Z.entities=="string"?JSON.parse(Z.entities):Z.entities)?.guids?.includes(_)}catch{return!1}}),I={LOCKED:0,UPCOMING:1,COMPLETED:2};H.sort((Z,oe)=>{const ie=I[Z.status]??3,Q=I[oe.status]??3;return ie!==Q?ie-Q:new Date(oe.status_time||0)-new Date(Z.status_time||0)});const X=Z=>{let oe=H;if(Z==="active"?oe=H.filter(ie=>ie.status==="LOCKED"||ie.status==="UPCOMING"):Z==="completed"&&(oe=H.filter(ie=>ie.status==="COMPLETED")),oe.length===0){F.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}F.innerHTML=oe.map(ie=>{const Q=ie.entities?JSON.stringify(ie.entities).replace(/"/g,"&quot;"):"",re=ie.tags?JSON.stringify(ie.tags).replace(/"/g,"&quot;"):"[]",ae=ie.sports_allowed?JSON.stringify(ie.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${ie.guid||""}"
                                        data-bma-tourn-caption="${ie.caption||""}"
                                        data-bma-tourn-tagline="${ie.tagline||""}"
                                        data-bma-tourn-status="${ie.status||""}"
                                        data-bma-tourn-class="${ie.status||""}"
                                        data-bma-tourn-sports_allowed="${ae}"
                                        data-bma-tourn-entities="${Q}"
                                        data-bma-tourn-entry_fee="${ie.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${ie.tournament_dollars||0}"
                                        data-bma-tourn-matches="${ie.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${re}"
                                        data-bma-tourn-window_start_time="${ie.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${ie.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{F.querySelectorAll("bma-tournament-list-card").forEach((ie,Q)=>{ie.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",ie.style.animationDelay=`${Math.min(Q*60,400)}ms`})})};X("all");const te=document.querySelector(".profile-tournaments__filters");te&&te.addEventListener("click",Z=>{const oe=Z.target.closest(".profile-tourn-filter");oe&&(te.querySelectorAll(".profile-tourn-filter").forEach(ie=>ie.classList.remove("profile-tourn-filter--active")),oe.classList.add("profile-tourn-filter--active"),X(oe.dataset.filter))})},600)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const T=me(),_=document.querySelector(".play-cntr");O&&(_.dataset.currentTournGuid=O),R&&(_.dataset.currentTournAction=R);const h=_?.dataset?.currentTournGuid,b=_?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",h,"action:",b),window.initBetGridToggle&&window.initBetGridToggle(),Le.updatePlayButton(),Le.populateInfoPage(),setTimeout(()=>{Le.populateLeaderboard()},600);let E=b==="PLAY"||b==="JOIN"?"PLAY":b;if(!h||T.coreTourn.length===0||T.coreTourn[T.coreTourn.length-1].data.find(te=>te.guid===h)?.status==="COMPLETED"&&(E="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),E){const I=`ROUTE.HOME.SODAPOP_PLAY.${E}`;console.log("[app_events] Publishing initial topic:",I),se.publish(I,JSON.stringify({tournamentGuid:h,timestamp:Date.now()}))}if(!h||T.coreTourn.length===0)return;const M=T.coreTourn[T.coreTourn.length-1].data.find(I=>I.guid===h);Le.renderMatchCards(M);const F=document.querySelector("#pop-play__tourn-caption--id"),K=document.querySelector("#pop-play__tourn-tagline--id");F&&(F.textContent=M.caption),K&&(K.textContent=M.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",M?.caption);const B=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!B),B&&console.log("[Modal Debug] Modal classes:",B.className),Le.updateTournamentDashboard(M);const H=document.getElementById("dashboard-rank");if(H){const I=M.entities?.guids?.length||0;H.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${I}</span>                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){const T=me(),_=document.getElementById("global-leaderboard-container");if(_){_.innerHTML='<div class="leaderboard-empty"><p>Loading...</p></div>';try{const h=await Se.fetchGlobalLeaderboard(),b=h?.data||h?.rows||[];if(!b.length){_.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data available yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const E=_,y=T.appSession?.session_user?.guid,M={},F=T.coreTourn.length>0?T.coreTourn[T.coreTourn.length-1].data:[];b.forEach(Q=>{const re=Q.user_guid;M[re]||(M[re]={username:Q.username||"Unknown",user_guid:re,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const ae=M[re],z=parseFloat(Q.starting_dollars||Q.tournament_dollars||0),q=parseFloat(Q.calculated_tournament_dollars||0)-z;q>0&&(ae.totalTDWon+=q),ae.totalPayout+=parseFloat(Q.total_payout||0),ae.totalBets+=parseInt(Q.total_betslips||0),ae.tournamentsPlayed++;const ee=F.find(le=>le.guid===Q.tournament_guid);ee&&(ee.sports_allowed||[]).forEach(x=>ae.sports.add(x.key||x))}),F.forEach(Q=>{!Q.tags||!Array.isArray(Q.tags)||Q.tags.forEach(re=>{if(typeof re!="object"||!re||!re.entity_guid||!re.badge||re.entity_guid==="SYSTEM")return;const ae=re.entity_guid;if(!M[ae]){const J=b.find(q=>q.user_guid===ae);M[ae]={username:J?.username||"Unknown",user_guid:ae,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set}}const z=M[ae];re.badge==="--badge__ribbon--gold"?(z.gold++,z.tournamentsWon++):re.badge==="--badge__ribbon--silver"?z.silver++:re.badge==="--badge__ribbon--bronze"&&z.bronze++})});const K=Object.values(M).filter(Q=>Q.username!=="Unknown"),B=K.filter(Q=>Q.gold+Q.silver+Q.bronze>0),H=new Set;K.forEach(Q=>Q.sports.forEach(re=>H.add(re)));const I={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},X=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let te="all";const Z=(Q,re)=>{let ae=[...K],z;Q==="bysport"&&re&&re!=="all"&&(ae=ae.filter($=>$.sports.has(re)));const J=E.querySelector(".glb__note");switch(J&&J.remove(),Q){case"overall":if(ae.sort((D,C)=>C.gold*100+C.silver*10+C.bronze-(D.gold*100+D.silver*10+D.bronze)||C.totalPayout-D.totalPayout||C.totalBets-D.totalBets),!E.querySelector(".glb__note")){const D=document.createElement("div");D.className="glb__note",D.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",D.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze';const C=E.querySelector(".glb__list");C&&C.parentNode.insertBefore(D,C)}z=(D,C,W,Y,j)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${C<3?"glb__rank--top3":""}">#${C+1}</span>
                                                <span class="glb__avatar" style="background: ${Y};">${W}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${D.username}</span>
                                                ${j?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="display: flex; align-items: center; gap: 4px;">
                                                ${D.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--badge__gold);"></div><span style="color: var(--status-locked-text, #FFD700);">${D.gold}</span></div>`:""}
                                                ${D.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--badge__silver);"></div><span style="color: #C0C0C0;">${D.silver}</span></div>`:""}
                                                ${D.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--badge__bronze);"></div><span style="color: #DA954B;">${D.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":ae.sort((D,C)=>C.totalPayout-D.totalPayout),z=(D,C,W,Y,j)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${C<3?"glb__rank--top3":""}">#${C+1}</span>
                                                <span class="glb__avatar" style="background: ${Y};">${W}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${D.username}</span>
                                                ${j?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="font-weight: 800; color: var(--status-upcoming-text, #00E676); font-size: 0.95rem; font-family: 'Roboto', sans-serif;">TD$ ${D.totalPayout.toFixed(0)}</span>
                                        </div>`;break;case"bysport":ae.sort((D,C)=>C.totalPayout-D.totalPayout||C.totalBets-D.totalBets),z=(D,C,W,Y,j)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${C<3?"glb__rank--top3":""}">#${C+1}</span>
                                                <span class="glb__avatar" style="background: ${Y};">${W}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${D.username}</span>
                                                ${j?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="display: flex; align-items: center; gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${D.totalBets} bets</span>
                                                <span style="font-weight: 800; color: var(--status-upcoming-text, #00E676); font-size: 0.95rem; font-family: 'Roboto', sans-serif;">TD$ ${D.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const q=E.querySelector(".glb__list");if(!q)return;if(ae.length===0){q.innerHTML='<div class="leaderboard-empty"><p>No players found for this sport.</p></div>';return}const ee=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],le=$=>ee[$.charCodeAt(0)%ee.length];let x="";if(Q==="overall"&&ae.length>=3){const $=(D,C,W,Y,j)=>{const G=ae[D],ce=G.user_guid===y;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${C===1?80:C===2?64:56}px; height: ${C===1?80:C===2?64:56}px; background-image: var(${Y}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${ce?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${G.username}${ce?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${G.gold+G.silver+G.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${W}px; background: linear-gradient(180deg, ${j}33 0%, ${j}0D 100%); border-top: 3px solid ${j}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${j};">${C===1?"1st":C===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};x=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${$(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${$(0,1,90,"--badge__gold","#FFD700")}
                                        ${$(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const k='<div class="info-section__title">Rankings</div>';if(Q==="earnings"&&!E.querySelector(".glb__note")){const D=document.createElement("div");D.className="glb__note",D.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);",D.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets';const C=E.querySelector(".glb__list");C&&C.parentNode.insertBefore(D,C)}if(Q==="bysport"&&!E.querySelector(".glb__note")){const D=document.createElement("div");D.className="glb__note",D.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",D.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const C=E.querySelector(".glb__sport-filters");C&&C.parentNode.insertBefore(D,C)}let L="";if(Q==="earnings"&&ae.length>=3){const $=(D,C,W,Y)=>{const j=ae[D],G=j.user_guid===y;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${C===1?80:C===2?64:56}px; height: ${C===1?80:C===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${G?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${j.username}${G?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${j.totalPayout.toFixed(0)}</span>
                                        <div style="width: 100%; height: ${W}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${C===1?"1st":C===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};L=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${$(1,2,70,"#00E676")}
                                        ${$(0,1,90,"#00E676")}
                                        ${$(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(Q==="overall")q.innerHTML=x+k+ae.map(($,D)=>{const C=($.username||"?")[0].toUpperCase(),W=le($.username),Y=$.user_guid===y;return z($,D,C,W,Y)}).join("");else if(Q==="earnings"){const $='<div class="info-section__title">TD$ Won</div>';q.innerHTML=L+$+ae.map((D,C)=>{const W=(D.username||"?")[0].toUpperCase(),Y=le(D.username),j=D.user_guid===y;return z(D,C,W,Y,j)}).join("")}else if(Q==="bysport"){let $="";if(ae.length>=3){const C=(W,Y,j)=>{const G=ae[W],ce=G.user_guid===y,ne=le(G.username),de=(G.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${ne}; width: ${Y===1?48:38}px; height: ${Y===1?48:38}px; font-size: ${Y===1?"1rem":"0.8rem"};">${de}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${ce?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${G.username}${ce?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${G.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${j}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${Y===1?"1st":Y===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};$=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${C(1,2,70)}
                                            ${C(0,1,90)}
                                            ${C(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const D='<div class="info-section__title">Rankings</div>';q.innerHTML=$+D+ae.map((C,W)=>{const Y=(C.username||"?")[0].toUpperCase(),j=le(C.username),G=C.user_guid===y;return z(C,W,Y,j,G)}).join("")}requestAnimationFrame(()=>{q.querySelectorAll(".glb__card, .info-row").forEach(($,D)=>{$.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",$.style.animationDelay=`${Math.min(D*50,400)}ms`})})},oe=[...H].map(Q=>{const re=I[Q]||Q.replace(/^[a-z]+_/,"").toUpperCase(),ae=it.find(J=>J.key===Q),z=ae?ae.group:"default";return`<button class="glb__sport-chip" data-sport="${Q}">
                                <bma-sport-icon sport="${Q}" data-sport-group="${z}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${re}</span>
                            </button>`}).join("");E.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${X.map((Q,re)=>`
                                    <button class="glb__tab ${re===0?"glb__tab--active":""}" data-tab="${Q.id}">${Q.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${oe}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const ie=document.createElement("style");ie.textContent=`
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
                        `,E.prepend(ie),Z("overall"),E.querySelectorAll(".glb__tab").forEach(Q=>{Q.addEventListener("click",()=>{E.querySelectorAll(".glb__tab").forEach(z=>z.classList.remove("glb__tab--active")),Q.classList.add("glb__tab--active");const re=Q.dataset.tab,ae=E.querySelector(".glb__sport-filters");ae&&(ae.style.display=re==="bysport"?"flex":"none"),Z(re,re==="bysport"?te:void 0)})}),E.querySelectorAll(".glb__sport-chip").forEach(Q=>{Q.addEventListener("click",()=>{E.querySelectorAll(".glb__sport-chip").forEach(re=>re.classList.remove("glb__sport-chip--active")),Q.classList.add("glb__sport-chip--active"),te=Q.dataset.sport,Z("bysport",te)})})}catch(h){console.error("[appEvents] Error fetching global leaderboard:",h),container.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>'}}},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Ug={__name:"App",setup(e){const t=Tt(),s=me();return $t(()=>{setTimeout(()=>{const a=s.appSession?.session_user?.guid,n=s.appSession?.session_user?.authenticated;a&&n&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",a),Pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",a,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:Se.API_baseURI})},2e3),setTimeout(()=>{Le.bindAppListeners(s)},3e3),t.beforeEach((a,n,r)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?r():r(!1)}),(a,n)=>(nt(),Mr(Wt(hl),null,{default:kn(({Component:r})=>[je(Md,{name:"slide-left"},{default:kn(()=>[(nt(),Mr(Nc(r)))]),_:2},1024)]),_:1}))}};class Gg extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval),this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const s=new Date,a=s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),n=s.toLocaleDateString("en-US",{month:"short",day:"numeric"});t.textContent=`${n} • ${a}`}}handleLogoClick(t){t.preventDefault(),se.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),se.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const t=Ae.isDark,s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
        ${ss()}

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

        @media ${Ea.wide} {
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
    `;const a=this.shadowRoot.querySelector("#logoLink"),n=this.shadowRoot.querySelector("#profileIcon");a&&a.addEventListener("click",r=>this.handleLogoClick(r)),n&&(n.addEventListener("click",r=>this.handleProfileClick(r)),n.addEventListener("keypress",r=>{(r.key==="Enter"||r.key===" ")&&this.handleProfileClick(r)})),this.updateTime()}}customElements.define("bma-app-head-top",Gg);class jg extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),se.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){Ae.isDark;const t=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboards",mobileCaption:"Leaderboards",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],s=a=>`
        <div
          class="tab-item ${this.selectedTab===a.name?"tab-selected":"tab-unselected"}"
          data-tab="${a.name}"
          role="button"
          tabindex="0"
          aria-label="${a.caption}"
        >
          <span class="tab-caption-desktop">${a.caption}</span>
          <span class="tab-caption-mobile">${a.mobileCaption}</span>
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
        ${ss()}

        :host {
          display: block;
          width: 100%;
          background: var(--surface-overlay, #242424);
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          box-shadow:
            var(--shadow-inset-depth, inset 0 1px 2px rgba(0, 0, 0, 0.2)),
            0 2px 6px rgba(0, 0, 0, 0.1);
        }

        /* Hide on mobile */
        @media ${Ea.mobile} {
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
          transition: all var(--transition-slow, 600ms ease);
          border-bottom: 3px solid transparent;
          font-size: 0.9rem;
          font-weight: var(--weight-semibold, 600);
          text-align: center;
          user-select: none;
        }

        .tab-item[data-tab="head_mid_lobby"] { grid-area: head_mid_lobby; }
        .tab-item[data-tab="head_mid_my"] { grid-area: head_mid_my; }
        .tab-item[data-tab="head_mid_completed"] { grid-area: head_mid_completed; }
        .tab-item[data-tab="head_mid_leaderboard"] { grid-area: head_mid_leaderboard; }
        .tab-item[data-tab="head_mid_squad"] { grid-area: head_mid_squad; }

        /* Unselected state */
        .tab-unselected {
          color: var(--app-core-color--gray-6__dark--brand, rgba(255, 255, 255, 0.5));
          border-bottom-color: transparent;
          position: relative;
        }

        /* Unselected hover */
        .tab-unselected:hover {
          color: var(--app-core-color--gray-7__dark--brand, rgba(255, 255, 255, 0.8));
          background: linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.05) 100%);
          transform: translateY(-1px);
          transition: all var(--transition-normal, 300ms ease);
        }

        /* Selected state — gold accent */
        .tab-selected {
          color: var(--status-locked-text, #FFD700);
          background: linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%);
          font-weight: var(--weight-bold, 700);
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
          background: var(--status-locked-text, #FFD700);
          border-radius: var(--progress-radius, 2px);
          opacity: 0.8;
          animation: slideIn 0.3s var(--ease-default, ease) forwards;
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
        @media ${Ea.tablet} {
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
        ${t.map(a=>s(a)).join("")}
      </div>
    `,t.forEach(a=>{const n=this.shadowRoot.querySelector(`[data-tab="${a.name}"]`);n&&(n.addEventListener("click",()=>this.handleTabClick(a.name,a.topic)),n.addEventListener("keypress",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this.handleTabClick(a.name,a.topic))}))})}}customElements.define("bma-app-head-mid",jg);class Yg extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,a){if(this.shadowRoot&&s!==a){if(t==="data-selected-chip"){if(this.selectedChip=a||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),se.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const a=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",a),s.classList.toggle("chip-unselected",!a)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!a||!n||!r)return;const i=Math.max(0,t.scrollWidth-t.clientWidth),o=i>8,l=t.scrollLeft<=4,c=t.scrollLeft>=i-4;a.classList.toggle("rail-has-overflow",o),s.classList.toggle("has-overflow",o),s.classList.toggle("has-left-overflow",o&&!l),s.classList.toggle("has-right-overflow",o&&!c),n.classList.toggle("nav-disabled",!o||l),r.classList.toggle("nav-disabled",!o||c),n.setAttribute("aria-disabled",String(!o||l)),r.setAttribute("aria-disabled",String(!o||c)),n.tabIndex=!o||l?-1:0,r.tabIndex=!o||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!a)return;const n=s.getBoundingClientRect(),r=t.scrollWidth-t.clientWidth,i=a.getBoundingClientRect(),o=n.width,c=window.matchMedia("(min-width: 769px)").matches?Math.round(o*.32):18,d=Math.max(18,o-c-i.width),u=n.left+c,p=n.right-d;let f=i.left-u;if(f<0?f=i.left-u:i.right>p?f=i.right-p:f=0,Math.abs(f)<6)return;const g=Math.max(0,Math.min(t.scrollLeft+f,r));Math.abs(t.scrollLeft-g)<6||(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:g,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const a=Math.max(0,t.scrollWidth-t.clientWidth);if(a<=8)return;const n=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,r=t.scrollLeft;let i=r,o=Number.POSITIVE_INFINITY;s.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-n,a)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+n,a));[c,d].forEach(u=>{const p=Math.abs(u-r);p<o&&(o=p,i=u)})}),!(o<8)&&(this.isSnapping=!0,t.scrollTo({left:i,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",a=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=a.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),se.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const a=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&a>180;this.isPointerDown=!1,t.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",a=>{if(!this.isPointerDown)return;a.preventDefault();const r=(a.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),t.scrollLeft=this.dragStartScrollLeft-r}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Ae.isDark,n=(me().appMeta?.sports||[]).filter(u=>u.active===!0),r=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],i=[...n].sort((u,p)=>{const f=u.title||u.description||"",g=p.title||p.description||"",m=r.indexOf(f),A=r.indexOf(g);return m!==-1&&A!==-1?m-A:m!==-1?-1:A!==-1?1:f.toLowerCase().localeCompare(g.toLowerCase())}),o=[{key:"all",group:"All",title:"HOME",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...i],l=u=>{const p=this.selectedChip===u.key,f=u.key==="all";let g="";return f||(g=`<bma-sport-icon sport="${u.key}" data-sport-group="${u.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${p?"chip-selected":"chip-unselected"}"
          data-chip="${u.key}"
          role="button"
          tabindex="0"
          aria-label="${u.description||u.title}"
        >
          ${g}
          <span class="chip-title">${u.title||u.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
        ${ss()}

        :host {
          display: block;
          width: 100%;
          background: transparent;
          border-top: none;
          border-bottom: none;
        }

        .head-sports-container {
          width: min(100%, 2200px);
          max-width: none;
          margin: 0 auto;
          display: grid;
          grid-template-areas: "head_sports_prev head_sports_chips head_sports_next";
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
        }

        .head-sports-container:not(.rail-has-overflow) {
          grid-template-areas: "head_sports_chips";
          grid-template-columns: minmax(0, 1fr);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--chip-radius, var(--radius-md, 8px));
          background-color: var(--surface-sunken, rgba(8, 8, 8, 0.92));
          background-size: 88% 88%;
          background-position: center;
          background-repeat: no-repeat;
          border: none;
          box-shadow: inset 0 0 0 1px var(--card-border, rgba(255, 255, 255, 0.08));
          cursor: pointer;
          transition: transform var(--transition-normal, 0.2s ease),
                      opacity var(--transition-normal, 0.2s ease),
                      box-shadow var(--transition-normal, 0.2s ease),
                      background-color var(--transition-normal, 0.2s ease);
          opacity: 0.82;
        }

        .nav-icon.nav-disabled {
          opacity: 0.28;
          cursor: default;
          pointer-events: none;
          transform: none;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
        }

        .nav-icon:hover {
          opacity: 1;
          background-color: var(--surface-default, rgba(18, 18, 18, 0.98));
          box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.35));
          transform: translateY(-1px);
        }

        .nav-icon:active {
          transform: translateY(0);
        }

        .nav-icon.nav-icon__prev { background-image: var(--nav-icon__chevron_prev--${t?"dark":"light"}); }
        .nav-icon.nav-icon__next { background-image: var(--nav-icon__chevron_next--${t?"dark":"light"}); }

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
          background: transparent;
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
          transition: opacity var(--transition-normal, 0.2s ease);
        }

        .chips-wrapper.has-left-overflow::before,
        .chips-wrapper.has-right-overflow::after {
          opacity: 1;
        }

        .chips-wrapper::before {
          left: 0;
          background: linear-gradient(90deg, var(--surface-base, #0e0e0e) 0%, transparent 100%);
        }

        .chips-wrapper::after {
          right: 0;
          background: linear-gradient(270deg, var(--surface-base, #0e0e0e) 0%, transparent 100%);
        }

        .chips-container {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding: 2px 0;
          margin: 0;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
          align-items: center;
        }

        .chips-container::-webkit-scrollbar {
          display: none;
        }

        /* --- Sport Chips --- */
        .sport-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 36px;
          padding: 0 14px;
          border-radius: var(--chip-radius, var(--radius-md, 8px));
          border: none;
          cursor: pointer;
          transition: all var(--transition-normal, 0.2s ease);
          white-space: nowrap;
          user-select: none;
          font-size: 0.84rem;
          font-weight: var(--weight-semibold, 600);
        }

        .chip-unselected {
          color: var(--app-core-color--gray-6__dark--brand, rgba(255, 255, 255, 0.62));
          background: var(--chip-bg, rgba(30, 30, 30, 0.72));
          border: none;
          box-shadow: inset 0 0 0 1px var(--chip-border, rgba(255, 255, 255, 0.08));
        }

        .chip-unselected:hover {
          color: var(--app-core-color--gray-7__dark--brand, rgba(255, 255, 255, 0.85));
          background: var(--surface-brand-muted, rgba(46, 139, 87, 0.12));
          box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.18));
          transform: translateY(-1px);
        }

        .chip-selected {
          color: #3cb371;
          background: rgba(60, 179, 113, 0.12);
          border: none;
          box-shadow: inset 0 0 0 1px rgba(60, 179, 113, 0.35);
          font-weight: var(--weight-bold, 700);
        }

        .chip-title {
          font-size: 0.84rem;
          font-weight: inherit;
          letter-spacing: 0.02em;
        }

        bma-sport-icon {
          flex-shrink: 0;
          opacity: 0.82;
          transition: opacity var(--transition-normal, 0.2s ease),
                      filter var(--transition-normal, 0.2s ease);
        }

        .chip-selected bma-sport-icon {
          opacity: 1;
          filter: drop-shadow(0 0 5px rgba(60, 179, 113, 0.3));
        }

        /* Mobile */
        @media (max-width: 768px) {
          .head-sports-container {
            gap: 4px;
            padding: 6px 8px;
          }

          .nav-icon {
            width: 30px;
            height: 30px;
            background-size: 76% 76%;
          }

          .chips-wrapper::before,
          .chips-wrapper::after {
            width: 10px;
          }

          .chips-container {
            gap: 6px;
          }

          .sport-chip {
            height: 30px;
            padding: 0 10px;
            font-size: 0.76rem;
          }

          .chip-title {
            font-size: 0.76rem;
          }
        }

        /* Desktop */
        @media (min-width: 769px) {
          .head-sports-container {
            gap: 8px;
            padding: 8px 14px;
          }

          .sport-chip {
            height: 38px;
            padding: 0 16px;
          }
        }
      </style>

      <div class="head-sports-container">
        <aside class="nav-icon nav-prev nav-icon__prev" id="navPrev" role="button" tabindex="0" aria-label="Scroll left"></aside>

        <div class="chips-wrapper">
          <div class="chips-container">
            ${o.map(u=>l(u)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,o.forEach(u=>{const p=this.shadowRoot.querySelector(`[data-chip="${u.key}"]`);p&&p.addEventListener("click",()=>this.handleChipClick(u.key,u.group))});const c=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");c&&c.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll(),requestAnimationFrame(()=>{this.alignSelectedChip(),this.updateRailState()})}}customElements.define("bma-app-head-sports",Yg);class qg extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),se.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Ae.theme;const t=Ae.isDark,s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboards",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],a=parseInt(this.getAttribute("data-active-count"))||0,n=r=>{const i=this.selectedItem===r.name,o=r.name==="foot_my_tourneys"&&a>0;return`
        <div
          class="nav-item ${i?"nav-selected":"nav-unselected"}"
          data-item="${r.name}"
          role="button"
          tabindex="0"
          aria-label="${r.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${r.iconVar}"></div>
            ${o?`<span class="nav-badge">${a}</span>`:""}
          </div>
          <span class="nav-caption">${r.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
        ${ss()}

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
        @media ${Ea.mobile} {
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
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-item="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(r.name,r.topic)),i.addEventListener("keypress",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.handleItemClick(r.name,r.topic))}))})}}customElements.define("bma-app-foot",qg);class Kg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=s[0],n=a.short_title||"Match Info N/A",i=Object.keys(a).filter(P=>P!=="short_title")[0]||"Unknown Team",o=a[i],l=o.odds||"N/A",c=o.type||"N/A",d=parseFloat(o.stake||0).toFixed(2),u=parseFloat(o.payout||0).toFixed(2),p=o.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),g=p&&parseFloat(u)<=parseFloat(d);let m="";p?f?m="win":g&&(m="loss"):m="unreconciled";const A=t.status_time?Js.formatDateLocal(t.status_time):"";let S=i;if(c==="spread"&&o.point){const P=parseFloat(o.point)>0?`+${o.point}`:o.point;S=`${i} ${P}`}else c==="total"&&o.point&&(S=`${o.team==="over"?"Over":"Under"} ${o.point}`);this.shadowRoot.innerHTML=`
      <style>
        ${rt()}
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
          <div class="match_date">${A}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${S}</div>
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
    `}}customElements.define("bma-bet-existing",Kg);const Mi=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Mi)}):document.body.insertAdjacentHTML("beforeend",Mi);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Ka=iu(Ug);Ka.config.devtools=!1;Ka.use(cu());Ka.use(Un);Ka.mount("#app");document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
