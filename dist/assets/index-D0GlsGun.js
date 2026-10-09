(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))J(S);new MutationObserver(S=>{for(const D of S)if(D.type==="childList")for(const V of D.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&J(V)}).observe(document,{childList:!0,subtree:!0});function h(S){const D={};return S.integrity&&(D.integrity=S.integrity),S.referrerPolicy&&(D.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?D.credentials="include":S.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function J(S){if(S.ep)return;S.ep=!0;const D=h(S);fetch(S.href,D)}})();function Vu(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var _o={exports:{}},xr={},bo={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Wd(){if(Mu)return F;Mu=1;var w=Symbol.for("react.element"),j=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),V=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),re=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),B=Symbol.iterator;function $(d){return d===null||typeof d!="object"?null:(d=B&&d[B]||d["@@iterator"],typeof d=="function"?d:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,le={};function q(d,v,A){this.props=d,this.context=v,this.refs=le,this.updater=A||ke}q.prototype.isReactComponent={},q.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},q.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=q.prototype;function ct(d,v,A){this.props=d,this.context=v,this.refs=le,this.updater=A||ke}var et=ct.prototype=new yt;et.constructor=ct,Le(et,q.prototype),et.isPureReactComponent=!0;var Se=Array.isArray,tt=Object.prototype.hasOwnProperty,Pe={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function Qe(d,v,A){var O,G={},W=null,Z=null;if(v!=null)for(O in v.ref!==void 0&&(Z=v.ref),v.key!==void 0&&(W=""+v.key),v)tt.call(v,O)&&!Te.hasOwnProperty(O)&&(G[O]=v[O]);var Y=arguments.length-2;if(Y===1)G.children=A;else if(1<Y){for(var ie=Array(Y),He=0;He<Y;He++)ie[He]=arguments[He+2];G.children=ie}if(d&&d.defaultProps)for(O in Y=d.defaultProps,Y)G[O]===void 0&&(G[O]=Y[O]);return{$$typeof:w,type:d,key:W,ref:Z,props:G,_owner:Pe.current}}function Pt(d,v){return{$$typeof:w,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function xt(d){return typeof d=="object"&&d!==null&&d.$$typeof===w}function Jt(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(A){return v[A]})}var dt=/\/+/g;function Ve(d,v){return typeof d=="object"&&d!==null&&d.key!=null?Jt(""+d.key):v.toString(36)}function nt(d,v,A,O,G){var W=typeof d;(W==="undefined"||W==="boolean")&&(d=null);var Z=!1;if(d===null)Z=!0;else switch(W){case"string":case"number":Z=!0;break;case"object":switch(d.$$typeof){case w:case j:Z=!0}}if(Z)return Z=d,G=G(Z),d=O===""?"."+Ve(Z,0):O,Se(G)?(A="",d!=null&&(A=d.replace(dt,"$&/")+"/"),nt(G,v,A,"",function(He){return He})):G!=null&&(xt(G)&&(G=Pt(G,A+(!G.key||Z&&Z.key===G.key?"":(""+G.key).replace(dt,"$&/")+"/")+d)),v.push(G)),1;if(Z=0,O=O===""?".":O+":",Se(d))for(var Y=0;Y<d.length;Y++){W=d[Y];var ie=O+Ve(W,Y);Z+=nt(W,v,A,ie,G)}else if(ie=$(d),typeof ie=="function")for(d=ie.call(d),Y=0;!(W=d.next()).done;)W=W.value,ie=O+Ve(W,Y++),Z+=nt(W,v,A,ie,G);else if(W==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return Z}function ft(d,v,A){if(d==null)return d;var O=[],G=0;return nt(d,O,"","",function(W){return v.call(A,W,G++)}),O}function Re(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(A){(d._status===0||d._status===-1)&&(d._status=1,d._result=A)},function(A){(d._status===0||d._status===-1)&&(d._status=2,d._result=A)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var ce={current:null},N={transition:null},T={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:N,ReactCurrentOwner:Pe};function z(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:ft,forEach:function(d,v,A){ft(d,function(){v.apply(this,arguments)},A)},count:function(d){var v=0;return ft(d,function(){v++}),v},toArray:function(d){return ft(d,function(v){return v})||[]},only:function(d){if(!xt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},F.Component=q,F.Fragment=h,F.Profiler=S,F.PureComponent=ct,F.StrictMode=J,F.Suspense=I,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,F.act=z,F.cloneElement=function(d,v,A){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var O=Le({},d.props),G=d.key,W=d.ref,Z=d._owner;if(v!=null){if(v.ref!==void 0&&(W=v.ref,Z=Pe.current),v.key!==void 0&&(G=""+v.key),d.type&&d.type.defaultProps)var Y=d.type.defaultProps;for(ie in v)tt.call(v,ie)&&!Te.hasOwnProperty(ie)&&(O[ie]=v[ie]===void 0&&Y!==void 0?Y[ie]:v[ie])}var ie=arguments.length-2;if(ie===1)O.children=A;else if(1<ie){Y=Array(ie);for(var He=0;He<ie;He++)Y[He]=arguments[He+2];O.children=Y}return{$$typeof:w,type:d.type,key:G,ref:W,props:O,_owner:Z}},F.createContext=function(d){return d={$$typeof:V,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:D,_context:d},d.Consumer=d},F.createElement=Qe,F.createFactory=function(d){var v=Qe.bind(null,d);return v.type=d,v},F.createRef=function(){return{current:null}},F.forwardRef=function(d){return{$$typeof:K,render:d}},F.isValidElement=xt,F.lazy=function(d){return{$$typeof:ae,_payload:{_status:-1,_result:d},_init:Re}},F.memo=function(d,v){return{$$typeof:re,type:d,compare:v===void 0?null:v}},F.startTransition=function(d){var v=N.transition;N.transition={};try{d()}finally{N.transition=v}},F.unstable_act=z,F.useCallback=function(d,v){return ce.current.useCallback(d,v)},F.useContext=function(d){return ce.current.useContext(d)},F.useDebugValue=function(){},F.useDeferredValue=function(d){return ce.current.useDeferredValue(d)},F.useEffect=function(d,v){return ce.current.useEffect(d,v)},F.useId=function(){return ce.current.useId()},F.useImperativeHandle=function(d,v,A){return ce.current.useImperativeHandle(d,v,A)},F.useInsertionEffect=function(d,v){return ce.current.useInsertionEffect(d,v)},F.useLayoutEffect=function(d,v){return ce.current.useLayoutEffect(d,v)},F.useMemo=function(d,v){return ce.current.useMemo(d,v)},F.useReducer=function(d,v,A){return ce.current.useReducer(d,v,A)},F.useRef=function(d){return ce.current.useRef(d)},F.useState=function(d){return ce.current.useState(d)},F.useSyncExternalStore=function(d,v,A){return ce.current.useSyncExternalStore(d,v,A)},F.useTransition=function(){return ce.current.useTransition()},F.version="18.3.1",F}var Lu;function Ro(){return Lu||(Lu=1,bo.exports=Wd()),bo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Qd(){if(Tu)return xr;Tu=1;var w=Ro(),j=Symbol.for("react.element"),h=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,S=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function V(K,I,re){var ae,B={},$=null,ke=null;re!==void 0&&($=""+re),I.key!==void 0&&($=""+I.key),I.ref!==void 0&&(ke=I.ref);for(ae in I)J.call(I,ae)&&!D.hasOwnProperty(ae)&&(B[ae]=I[ae]);if(K&&K.defaultProps)for(ae in I=K.defaultProps,I)B[ae]===void 0&&(B[ae]=I[ae]);return{$$typeof:j,type:K,key:$,ref:ke,props:B,_owner:S.current}}return xr.Fragment=h,xr.jsx=V,xr.jsxs=V,xr}var Ru;function Jd(){return Ru||(Ru=1,_o.exports=Qd()),_o.exports}var o=Jd(),Me=Ro();const Kd=Vu(Me);var bl={},Mo={exports:{}},Ue={},Lo={exports:{}},To={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Yd(){return Iu||(Iu=1,(function(w){function j(N,T){var z=N.length;N.push(T);e:for(;0<z;){var d=z-1>>>1,v=N[d];if(0<S(v,T))N[d]=T,N[z]=v,z=d;else break e}}function h(N){return N.length===0?null:N[0]}function J(N){if(N.length===0)return null;var T=N[0],z=N.pop();if(z!==T){N[0]=z;e:for(var d=0,v=N.length,A=v>>>1;d<A;){var O=2*(d+1)-1,G=N[O],W=O+1,Z=N[W];if(0>S(G,z))W<v&&0>S(Z,G)?(N[d]=Z,N[W]=z,d=W):(N[d]=G,N[O]=z,d=O);else if(W<v&&0>S(Z,z))N[d]=Z,N[W]=z,d=W;else break e}}return T}function S(N,T){var z=N.sortIndex-T.sortIndex;return z!==0?z:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var D=performance;w.unstable_now=function(){return D.now()}}else{var V=Date,K=V.now();w.unstable_now=function(){return V.now()-K}}var I=[],re=[],ae=1,B=null,$=3,ke=!1,Le=!1,le=!1,q=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(N){for(var T=h(re);T!==null;){if(T.callback===null)J(re);else if(T.startTime<=N)J(re),T.sortIndex=T.expirationTime,j(I,T);else break;T=h(re)}}function Se(N){if(le=!1,et(N),!Le)if(h(I)!==null)Le=!0,Re(tt);else{var T=h(re);T!==null&&ce(Se,T.startTime-N)}}function tt(N,T){Le=!1,le&&(le=!1,yt(Qe),Qe=-1),ke=!0;var z=$;try{for(et(T),B=h(I);B!==null&&(!(B.expirationTime>T)||N&&!Jt());){var d=B.callback;if(typeof d=="function"){B.callback=null,$=B.priorityLevel;var v=d(B.expirationTime<=T);T=w.unstable_now(),typeof v=="function"?B.callback=v:B===h(I)&&J(I),et(T)}else J(I);B=h(I)}if(B!==null)var A=!0;else{var O=h(re);O!==null&&ce(Se,O.startTime-T),A=!1}return A}finally{B=null,$=z,ke=!1}}var Pe=!1,Te=null,Qe=-1,Pt=5,xt=-1;function Jt(){return!(w.unstable_now()-xt<Pt)}function dt(){if(Te!==null){var N=w.unstable_now();xt=N;var T=!0;try{T=Te(!0,N)}finally{T?Ve():(Pe=!1,Te=null)}}else Pe=!1}var Ve;if(typeof ct=="function")Ve=function(){ct(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,Ve=function(){ft.postMessage(null)}}else Ve=function(){q(dt,0)};function Re(N){Te=N,Pe||(Pe=!0,Ve())}function ce(N,T){Qe=q(function(){N(w.unstable_now())},T)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(N){N.callback=null},w.unstable_continueExecution=function(){Le||ke||(Le=!0,Re(tt))},w.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<N?Math.floor(1e3/N):5},w.unstable_getCurrentPriorityLevel=function(){return $},w.unstable_getFirstCallbackNode=function(){return h(I)},w.unstable_next=function(N){switch($){case 1:case 2:case 3:var T=3;break;default:T=$}var z=$;$=T;try{return N()}finally{$=z}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=$;$=N;try{return T()}finally{$=z}},w.unstable_scheduleCallback=function(N,T,z){var d=w.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?d+z:d):z=d,N){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=z+v,N={id:ae++,callback:T,priorityLevel:N,startTime:z,expirationTime:v,sortIndex:-1},z>d?(N.sortIndex=z,j(re,N),h(I)===null&&N===h(re)&&(le?(yt(Qe),Qe=-1):le=!0,ce(Se,z-d))):(N.sortIndex=v,j(I,N),Le||ke||(Le=!0,Re(tt))),N},w.unstable_shouldYield=Jt,w.unstable_wrapCallback=function(N){var T=$;return function(){var z=$;$=T;try{return N.apply(this,arguments)}finally{$=z}}}})(To)),To}var Du;function Xd(){return Du||(Du=1,Lo.exports=Yd()),Lo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function qd(){if(Au)return Ue;Au=1;var w=Ro(),j=Xd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J=new Set,S={};function D(e,t){V(e,t),V(e+"Capture",t)}function V(e,t){for(S[e]=t,e=0;e<t.length;e++)J.add(t[e])}var K=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I=Object.prototype.hasOwnProperty,re=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ae={},B={};function $(e){return I.call(B,e)?!0:I.call(ae,e)?!1:re.test(e)?B[e]=!0:(ae[e]=!0,!1)}function ke(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Le(e,t,n,r){if(t===null||typeof t>"u"||ke(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function ct(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,ct);q[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,ct);q[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,ct);q[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function et(e,t,n,r){var l=q.hasOwnProperty(t)?q[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Le(t,n,l,r)&&(n=null),r||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Jt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),N=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var A=!1;function O(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function G(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case Pe:return"Portal";case Pt:return"Profiler";case Qe:return"StrictMode";case Ve:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jt:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}function Z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===Qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function He(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=He(e))}function Ao(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Y(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oo(e,t){t=t.checked,t!=null&&et(e,"checked",t,!1)}function Dl(e,t){Oo(e,t);var n=Y(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,Y(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Rn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Y(n)}}function Ho(e,t){var n=Y(t.value),r=Y(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $o(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$o(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Go=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Yu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Wo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Qo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Wo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Xu=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(e,t){if(t){if(Xu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function Bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,cn=null,dn=null;function Jo(e){if(e=lr(e)){if(typeof $l!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Gr(t),$l(e.stateNode,e.type,t))}}function Ko(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Yo(){if(cn){var e=cn,t=dn;if(dn=cn=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function Xo(e,t){return e(t)}function qo(){}var Gl=!1;function Zo(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return Xo(e,t,n)}finally{Gl=!1,(cn!==null||dn!==null)&&(qo(),Yo())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=Gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Wl=!1;if(K)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Wl=!1}function qu(e,t,n,r,l,i,a,s,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var On=!1,Sr=null,Nr=!1,Ql=null,Zu={onError:function(e){On=!0,Sr=e}};function ec(e,t,n,r,l,i,a,s,u){On=!1,Sr=null,qu.apply(Zu,arguments)}function tc(e,t,n,r,l,i,a,s,u){if(ec.apply(this,arguments),On){if(On){var m=Sr;On=!1,Sr=null}else throw Error(h(198));Nr||(Nr=!0,Ql=m)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ea(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ta(e){if(Kt(e)!==e)throw Error(h(188))}function nc(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ta(l),e;if(i===r)return ta(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function na(e){return e=nc(e),e!==null?ra(e):null}function ra(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ra(e);if(t!==null)return t;e=e.sibling}return null}var la=j.unstable_scheduleCallback,ia=j.unstable_cancelCallback,rc=j.unstable_shouldYield,lc=j.unstable_requestPaint,fe=j.unstable_now,ic=j.unstable_getCurrentPriorityLevel,Jl=j.unstable_ImmediatePriority,oa=j.unstable_UserBlockingPriority,Cr=j.unstable_NormalPriority,oc=j.unstable_LowPriority,aa=j.unstable_IdlePriority,Er=null,pt=null;function ac(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:cc,sc=Math.log,uc=Math.LN2;function cc(e){return e>>>=0,e===0?32:31-(sc(e)/uc|0)|0}var zr=64,Pr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Un(s):(i&=a,i!==0&&(r=Un(i)))}else a=n&~l,a!==0?r=Un(a):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function dc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-rt(i),s=1<<a,u=l[a];u===-1?((s&n)===0||(s&r)!==0)&&(l[a]=dc(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sa(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function pc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var X=0;function ua(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ca,ql,da,fa,pa,Zl=!1,br=[],_t=null,bt=null,Mt=null,Hn=new Map,Bn=new Map,Lt=[],mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function $n(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=lr(t),t!==null&&ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hc(e,t,n,r,l){switch(t){case"focusin":return _t=$n(_t,e,t,n,r,l),!0;case"dragenter":return bt=$n(bt,e,t,n,r,l),!0;case"mouseover":return Mt=$n(Mt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,$n(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Bn.set(i,$n(Bn.get(i)||null,e,t,n,r,l)),!0}return!1}function ha(e){var t=Yt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=ea(n),t!==null){e.blockedOn=t,pa(e.priority,function(){da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hl=r,n.target.dispatchEvent(r),Hl=null}else return t=lr(n),t!==null&&ql(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){Mr(e)&&n.delete(t)}function gc(){Zl=!1,_t!==null&&Mr(_t)&&(_t=null),bt!==null&&Mr(bt)&&(bt=null),Mt!==null&&Mr(Mt)&&(Mt=null),Hn.forEach(ga),Bn.forEach(ga)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,gc)))}function Wn(e){function t(l){return Gn(l,e)}if(0<br.length){Gn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Gn(_t,e),bt!==null&&Gn(bt,e),Mt!==null&&Gn(Mt,e),Hn.forEach(t),Bn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)ha(n),n.blockedOn===null&&Lt.shift()}var fn=Se.ReactCurrentBatchConfig,Lr=!0;function vc(e,t,n,r){var l=X,i=fn.transition;fn.transition=null;try{X=1,ei(e,t,n,r)}finally{X=l,fn.transition=i}}function yc(e,t,n,r){var l=X,i=fn.transition;fn.transition=null;try{X=4,ei(e,t,n,r)}finally{X=l,fn.transition=i}}function ei(e,t,n,r){if(Lr){var l=ti(e,t,n,r);if(l===null)yi(e,t,r,Tr,n),ma(e,r);else if(hc(l,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<mc.indexOf(e)){for(;l!==null;){var i=lr(l);if(i!==null&&ca(i),i=ti(e,t,n,r),i===null&&yi(e,t,r,Tr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else yi(e,t,r,null,n)}}var Tr=null;function ti(e,t,n,r){if(Tr=null,e=Bl(r),e=Yt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ea(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tr=e,null}function va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ic()){case Jl:return 1;case oa:return 4;case Cr:case oc:return 16;case aa:return 536870912;default:return 16}default:return 16}}var Tt=null,ni=null,Rr=null;function ya(){if(Rr)return Rr;var e,t=ni,n=t.length,r,l="value"in Tt?Tt.value:Tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function xa(){return!1}function Be(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dr:xa,this.isPropagationStopped=xa,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Be(pn),Qn=z({},pn,{view:0,detail:0}),xc=Be(Qn),li,ii,Jn,Ar=z({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(li=e.screenX-Jn.screenX,ii=e.screenY-Jn.screenY):ii=li=0,Jn=e),li)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),ka=Be(Ar),kc=z({},Ar,{dataTransfer:0}),wc=Be(kc),jc=z({},Qn,{relatedTarget:0}),oi=Be(jc),Sc=z({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nc=Be(Sc),Cc=z({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ec=Be(Cc),zc=z({},pn,{data:0}),wa=Be(zc),Pc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_c={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bc[e])?!!t[e]:!1}function ai(){return Mc}var Lc=z({},Qn,{key:function(e){if(e.key){var t=Pc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_c[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tc=Be(Lc),Rc=z({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=Be(Rc),Ic=z({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),Dc=Be(Ic),Ac=z({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fc=Be(Ac),Oc=z({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uc=Be(Oc),Vc=[9,13,27,32],si=K&&"CompositionEvent"in window,Kn=null;K&&"documentMode"in document&&(Kn=document.documentMode);var Hc=K&&"TextEvent"in window&&!Kn,Sa=K&&(!si||Kn&&8<Kn&&11>=Kn),Na=" ",Ca=!1;function Ea(e,t){switch(e){case"keyup":return Vc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Bc(e,t){switch(e){case"compositionend":return za(t);case"keypress":return t.which!==32?null:(Ca=!0,Na);case"textInput":return e=t.data,e===Na&&Ca?null:e;default:return null}}function $c(e,t){if(mn)return e==="compositionend"||!si&&Ea(e,t)?(e=ya(),Rr=ni=Tt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sa&&t.locale!=="ko"?null:t.data;default:return null}}var Gc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gc[e.type]:t==="textarea"}function _a(e,t,n,r){Ko(r),t=Hr(t,"onChange"),0<t.length&&(n=new ri("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Xn=null;function Wc(e){Qa(e,0)}function Fr(e){var t=xn(e);if(Ao(t))return e}function Qc(e,t){if(e==="change")return t}var ba=!1;if(K){var ui;if(K){var ci="oninput"in document;if(!ci){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),ci=typeof Ma.oninput=="function"}ui=ci}else ui=!1;ba=ui&&(!document.documentMode||9<document.documentMode)}function La(){Yn&&(Yn.detachEvent("onpropertychange",Ta),Xn=Yn=null)}function Ta(e){if(e.propertyName==="value"&&Fr(Xn)){var t=[];_a(t,Xn,e,Bl(e)),Zo(Wc,t)}}function Jc(e,t,n){e==="focusin"?(La(),Yn=t,Xn=n,Yn.attachEvent("onpropertychange",Ta)):e==="focusout"&&La()}function Kc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(Xn)}function Yc(e,t){if(e==="click")return Fr(t)}function Xc(e,t){if(e==="input"||e==="change")return Fr(t)}function qc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:qc;function qn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!I.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function Ra(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Ra(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ra(n)}}function Da(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Da(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Aa(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zc(e){var t=Aa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Da(n.ownerDocument.documentElement,n)){if(r!==null&&di(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ia(n,i);var a=Ia(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ed=K&&"documentMode"in document&&11>=document.documentMode,hn=null,fi=null,Zn=null,pi=!1;function Fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||hn==null||hn!==wr(r)||(r=hn,"selectionStart"in r&&di(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&qn(Zn,r)||(Zn=r,r=Hr(fi,"onSelect"),0<r.length&&(t=new ri("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},mi={},Oa={};K&&(Oa=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Ur(e){if(mi[e])return mi[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oa)return mi[e]=t[n];return e}var Ua=Ur("animationend"),Va=Ur("animationiteration"),Ha=Ur("animationstart"),Ba=Ur("transitionend"),$a=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){$a.set(e,t),D(t,[e])}for(var hi=0;hi<Ga.length;hi++){var gi=Ga[hi],td=gi.toLowerCase(),nd=gi[0].toUpperCase()+gi.slice(1);Rt(td,"on"+nd)}Rt(Ua,"onAnimationEnd"),Rt(Va,"onAnimationIteration"),Rt(Ha,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ba,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tc(r,t,void 0,e),e.currentTarget=null}function Qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Wa(l,s,m),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,m=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Wa(l,s,m),i=u}}}if(Nr)throw e=Ql,Nr=!1,Ql=null,e}function te(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(Ja(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),Ja(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Vr]){e[Vr]=!0,J.forEach(function(n){n!=="selectionchange"&&(rd.has(n)||vi(n,!1,e),vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,vi("selectionchange",!1,t))}}function Ja(e,t,n,r){switch(va(t)){case 1:var l=vc;break;case 4:l=yc;break;default:l=ei}n=l.bind(null,t,n,e),l=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function yi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Yt(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Zo(function(){var m=i,y=Bl(n),x=[];e:{var g=$a.get(e);if(g!==void 0){var C=ri,P=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":C=Tc;break;case"focusin":P="focus",C=oi;break;case"focusout":P="blur",C=oi;break;case"beforeblur":case"afterblur":C=oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=wc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Dc;break;case Ua:case Va:case Ha:C=Nc;break;case Ba:C=Fc;break;case"scroll":C=xc;break;case"wheel":C=Uc;break;case"copy":case"cut":case"paste":C=Ec;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ja}var _=(t&4)!==0,pe=!_&&e==="scroll",f=_?g!==null?g+"Capture":null:g;_=[];for(var c=m,p;c!==null;){p=c;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,f!==null&&(k=An(c,f),k!=null&&_.push(nr(c,k,p)))),pe)break;c=c.return}0<_.length&&(g=new C(g,P,null,n,y),x.push({event:g,listeners:_}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&n!==Hl&&(P=n.relatedTarget||n.fromElement)&&(Yt(P)||P[kt]))break e;if((C||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=m,P=P?Yt(P):null,P!==null&&(pe=Kt(P),P!==pe||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=m),C!==P)){if(_=ka,k="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=ja,k="onPointerLeave",f="onPointerEnter",c="pointer"),pe=C==null?g:xn(C),p=P==null?g:xn(P),g=new _(k,c+"leave",C,n,y),g.target=pe,g.relatedTarget=p,k=null,Yt(y)===m&&(_=new _(f,c+"enter",P,n,y),_.target=p,_.relatedTarget=pe,k=_),pe=k,C&&P)t:{for(_=C,f=P,c=0,p=_;p;p=vn(p))c++;for(p=0,k=f;k;k=vn(k))p++;for(;0<c-p;)_=vn(_),c--;for(;0<p-c;)f=vn(f),p--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=vn(_),f=vn(f)}_=null}else _=null;C!==null&&Ka(x,g,C,_,!1),P!==null&&pe!==null&&Ka(x,pe,P,_,!0)}}e:{if(g=m?xn(m):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var b=Qc;else if(Pa(g))if(ba)b=Xc;else{b=Kc;var M=Jc}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Yc);if(b&&(b=b(e,m))){_a(x,b,n,y);break e}M&&M(e,g,m),e==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Al(g,"number",g.value)}switch(M=m?xn(m):window,e){case"focusin":(Pa(M)||M.contentEditable==="true")&&(hn=M,fi=m,Zn=null);break;case"focusout":Zn=fi=hn=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,Fa(x,n,y);break;case"selectionchange":if(ed)break;case"keydown":case"keyup":Fa(x,n,y)}var L;if(si)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else mn?Ea(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Sa&&n.locale!=="ko"&&(mn||R!=="onCompositionStart"?R==="onCompositionEnd"&&mn&&(L=ya()):(Tt=y,ni="value"in Tt?Tt.value:Tt.textContent,mn=!0)),M=Hr(m,R),0<M.length&&(R=new wa(R,e,null,n,y),x.push({event:R,listeners:M}),L?R.data=L:(L=za(n),L!==null&&(R.data=L)))),(L=Hc?Bc(e,n):$c(e,n))&&(m=Hr(m,"onBeforeInput"),0<m.length&&(y=new wa("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=L))}Qa(x,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=An(e,n),i!=null&&r.unshift(nr(e,i,l)),i=An(e,t),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ka(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,m=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&m!==null&&(s=m,l?(u=An(n,i),u!=null&&a.unshift(nr(n,u,s))):l||(u=An(n,i),u!=null&&a.push(nr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ld=/\r\n?/g,id=/\u0000|\uFFFD/g;function Ya(e){return(typeof e=="string"?e:""+e).replace(ld,`
`).replace(id,"")}function Br(e,t,n){if(t=Ya(t),Ya(e)!==t&&n)throw Error(h(425))}function $r(){}var xi=null,ki=null;function wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,od=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,ad=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(sd)}:ji;function sd(e){setTimeout(function(){throw e})}function Si(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Wn(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+yn,rr="__reactProps$"+yn,kt="__reactContainer$"+yn,Ni="__reactEvents$"+yn,ud="__reactListeners$"+yn,cd="__reactHandles$"+yn;function Yt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qa(e);e!==null;){if(n=e[mt])return n;e=qa(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[mt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Gr(e){return e[rr]||null}var Ci=[],kn=-1;function Dt(e){return{current:e}}function ne(e){0>kn||(e.current=Ci[kn],Ci[kn]=null,kn--)}function ee(e,t){kn++,Ci[kn]=e.current,e.current=t}var At={},Ne=Dt(At),Ie=Dt(!1),Xt=At;function wn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function De(e){return e=e.childContextTypes,e!=null}function Wr(){ne(Ie),ne(Ne)}function Za(e,t,n){if(Ne.current!==At)throw Error(h(168));ee(Ne,t),ee(Ie,n)}function es(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,Z(e)||"Unknown",l));return z({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Xt=Ne.current,ee(Ne,e),ee(Ie,Ie.current),!0}function ts(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=es(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,ne(Ie),ne(Ne),ee(Ne,e)):ne(Ie),ee(Ie,n)}var wt=null,Jr=!1,Ei=!1;function ns(e){wt===null?wt=[e]:wt.push(e)}function dd(e){Jr=!0,ns(e)}function Ft(){if(!Ei&&wt!==null){Ei=!0;var e=0,t=X;try{var n=wt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Jr=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),la(Jl,Ft),l}finally{X=t,Ei=!1}}return null}var jn=[],Sn=0,Kr=null,Yr=0,Je=[],Ke=0,qt=null,jt=1,St="";function Zt(e,t){jn[Sn++]=Yr,jn[Sn++]=Kr,Kr=e,Yr=t}function rs(e,t,n){Je[Ke++]=jt,Je[Ke++]=St,Je[Ke++]=qt,qt=e;var r=jt;e=St;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,jt=1<<32-rt(t)+l|n<<l|r,St=i+e}else jt=1<<i|n<<l|r,St=e}function zi(e){e.return!==null&&(Zt(e,1),rs(e,1,0))}function Pi(e){for(;e===Kr;)Kr=jn[--Sn],jn[Sn]=null,Yr=jn[--Sn],jn[Sn]=null;for(;e===qt;)qt=Je[--Ke],Je[Ke]=null,St=Je[--Ke],Je[Ke]=null,jt=Je[--Ke],Je[Ke]=null}var $e=null,Ge=null,oe=!1,it=null;function ls(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function is(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ge=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:jt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ge=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(oe){var t=Ge;if(t){var n=t;if(!is(e,t)){if(_i(e))throw Error(h(418));t=It(n.nextSibling);var r=$e;t&&is(e,t)?ls(r,n):(e.flags=e.flags&-4097|2,oe=!1,$e=e)}}else{if(_i(e))throw Error(h(418));e.flags=e.flags&-4097|2,oe=!1,$e=e}}}function os(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Xr(e){if(e!==$e)return!1;if(!oe)return os(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wi(e.type,e.memoizedProps)),t&&(t=Ge)){if(_i(e))throw as(),Error(h(418));for(;t;)ls(e,t),t=It(t.nextSibling)}if(os(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=$e?It(e.stateNode.nextSibling):null;return!0}function as(){for(var e=Ge;e;)e=It(e.nextSibling)}function Nn(){Ge=$e=null,oe=!1}function Mi(e){it===null?it=[e]:it.push(e)}var fd=Se.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ss(e){var t=e._init;return t(e._payload)}function us(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,k){return c===null||c.tag!==6?(c=So(p,f.mode,k),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,k){var b=p.type;return b===Te?y(f,c,p.props.children,k,p.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Re&&ss(b)===c.type)?(k=l(c,p.props),k.ref=ir(f,c,p),k.return=f,k):(k=jl(p.type,p.key,p.props,null,f.mode,k),k.ref=ir(f,c,p),k.return=f,k)}function m(f,c,p,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=No(p,f.mode,k),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,k,b){return c===null||c.tag!==7?(c=sn(p,f.mode,k,b),c.return=f,c):(c=l(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=So(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case tt:return p=jl(c.type,c.key,c.props,null,f.mode,p),p.ref=ir(f,null,c),p.return=f,p;case Pe:return c=No(c,f.mode,p),c.return=f,c;case Re:var k=c._init;return x(f,k(c._payload),p)}if(Rn(c)||T(c))return c=sn(c,f.mode,p,null),c.return=f,c;qr(f,c)}return null}function g(f,c,p,k){var b=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:s(f,c,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:return p.key===b?u(f,c,p,k):null;case Pe:return p.key===b?m(f,c,p,k):null;case Re:return b=p._init,g(f,c,b(p._payload),k)}if(Rn(p)||T(p))return b!==null?null:y(f,c,p,k,null);qr(f,p)}return null}function C(f,c,p,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(p)||null,s(c,f,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case tt:return f=f.get(k.key===null?p:k.key)||null,u(c,f,k,b);case Pe:return f=f.get(k.key===null?p:k.key)||null,m(c,f,k,b);case Re:var M=k._init;return C(f,c,p,M(k._payload),b)}if(Rn(k)||T(k))return f=f.get(p)||null,y(c,f,k,b,null);qr(c,k)}return null}function P(f,c,p,k){for(var b=null,M=null,L=c,R=c=0,xe=null;L!==null&&R<p.length;R++){L.index>R?(xe=L,L=null):xe=L.sibling;var Q=g(f,L,p[R],k);if(Q===null){L===null&&(L=xe);break}e&&L&&Q.alternate===null&&t(f,L),c=i(Q,c,R),M===null?b=Q:M.sibling=Q,M=Q,L=xe}if(R===p.length)return n(f,L),oe&&Zt(f,R),b;if(L===null){for(;R<p.length;R++)L=x(f,p[R],k),L!==null&&(c=i(L,c,R),M===null?b=L:M.sibling=L,M=L);return oe&&Zt(f,R),b}for(L=r(f,L);R<p.length;R++)xe=C(L,f,R,p[R],k),xe!==null&&(e&&xe.alternate!==null&&L.delete(xe.key===null?R:xe.key),c=i(xe,c,R),M===null?b=xe:M.sibling=xe,M=xe);return e&&L.forEach(function(Qt){return t(f,Qt)}),oe&&Zt(f,R),b}function _(f,c,p,k){var b=T(p);if(typeof b!="function")throw Error(h(150));if(p=b.call(p),p==null)throw Error(h(151));for(var M=b=null,L=c,R=c=0,xe=null,Q=p.next();L!==null&&!Q.done;R++,Q=p.next()){L.index>R?(xe=L,L=null):xe=L.sibling;var Qt=g(f,L,Q.value,k);if(Qt===null){L===null&&(L=xe);break}e&&L&&Qt.alternate===null&&t(f,L),c=i(Qt,c,R),M===null?b=Qt:M.sibling=Qt,M=Qt,L=xe}if(Q.done)return n(f,L),oe&&Zt(f,R),b;if(L===null){for(;!Q.done;R++,Q=p.next())Q=x(f,Q.value,k),Q!==null&&(c=i(Q,c,R),M===null?b=Q:M.sibling=Q,M=Q);return oe&&Zt(f,R),b}for(L=r(f,L);!Q.done;R++,Q=p.next())Q=C(L,f,R,Q.value,k),Q!==null&&(e&&Q.alternate!==null&&L.delete(Q.key===null?R:Q.key),c=i(Q,c,R),M===null?b=Q:M.sibling=Q,M=Q);return e&&L.forEach(function(Gd){return t(f,Gd)}),oe&&Zt(f,R),b}function pe(f,c,p,k){if(typeof p=="object"&&p!==null&&p.type===Te&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:e:{for(var b=p.key,M=c;M!==null;){if(M.key===b){if(b=p.type,b===Te){if(M.tag===7){n(f,M.sibling),c=l(M,p.props.children),c.return=f,f=c;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Re&&ss(b)===M.type){n(f,M.sibling),c=l(M,p.props),c.ref=ir(f,M,p),c.return=f,f=c;break e}n(f,M);break}else t(f,M);M=M.sibling}p.type===Te?(c=sn(p.props.children,f.mode,k,p.key),c.return=f,f=c):(k=jl(p.type,p.key,p.props,null,f.mode,k),k.ref=ir(f,c,p),k.return=f,f=k)}return a(f);case Pe:e:{for(M=p.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=No(p,f.mode,k),c.return=f,f=c}return a(f);case Re:return M=p._init,pe(f,c,M(p._payload),k)}if(Rn(p))return P(f,c,p,k);if(T(p))return _(f,c,p,k);qr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=So(p,f.mode,k),c.return=f,f=c),a(f)):n(f,c)}return pe}var Cn=us(!0),cs=us(!1),Zr=Dt(null),el=null,En=null,Li=null;function Ti(){Li=En=el=null}function Ri(e){var t=Zr.current;ne(Zr),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){el=e,Li=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ae=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(el===null)throw Error(h(308));En=e,el.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var en=null;function Di(e){en===null?en=[e]:en.push(e)}function ds(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Di(t)):(n.next=l.next,l.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Ai(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Di(r)):(t.next=l.next,l.next=t),r.interleaved=t,Nt(e,n)}function tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function ps(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var l=e.updateQueue;Ot=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,m=u.next;u.next=null,a===null?i=m:a.next=m,a=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==a&&(s===null?y.firstBaseUpdate=m:s.next=m,y.lastBaseUpdate=u))}if(i!==null){var x=l.baseState;a=0,y=m=u=null,s=i;do{var g=s.lane,C=s.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var P=e,_=s;switch(g=t,C=n,_.tag){case 1:if(P=_.payload,typeof P=="function"){x=P.call(C,x,g);break e}x=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=_.payload,g=typeof P=="function"?P.call(C,x,g):P,g==null)break e;x=z({},x,g);break e;case 2:Ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else C={eventTime:C,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(m=y=C,u=x):y=y.next=C,a|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(y===null&&(u=x),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);rn|=a,e.lanes=a,e.memoizedState=x}}function ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var or={},ht=Dt(or),ar=Dt(or),sr=Dt(or);function tn(e){if(e===or)throw Error(h(174));return e}function Fi(e,t){switch(ee(sr,t),ee(ar,e),ee(ht,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}ne(ht),ee(ht,t)}function Pn(){ne(ht),ne(ar),ne(sr)}function hs(e){tn(sr.current);var t=tn(ht.current),n=Ol(t,e.type);t!==n&&(ee(ar,e),ee(ht,n))}function Oi(e){ar.current===e&&(ne(ht),ne(ar))}var se=Dt(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function Vi(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var ll=Se.ReactCurrentDispatcher,Hi=Se.ReactCurrentBatchConfig,nn=0,ue=null,he=null,ve=null,il=!1,ur=!1,cr=0,pd=0;function Ce(){throw Error(h(321))}function Bi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function $i(e,t,n,r,l,i){if(nn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ll.current=e===null||e.memoizedState===null?vd:yd,e=n(r,l),ur){i=0;do{if(ur=!1,cr=0,25<=i)throw Error(h(301));i+=1,ve=he=null,t.updateQueue=null,ll.current=xd,e=n(r,l)}while(ur)}if(ll.current=sl,t=he!==null&&he.next!==null,nn=0,ve=he=ue=null,il=!1,t)throw Error(h(300));return e}function Gi(){var e=cr!==0;return cr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ue.memoizedState=ve=e:ve=ve.next=e,ve}function Xe(){if(he===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ue.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(h(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ue.memoizedState=ve=e:ve=ve.next=e}return ve}function dr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Xe(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=he,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,m=i;do{var y=m.lane;if((nn&y)===y)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(s=u=x,a=r):u=u.next=x,ue.lanes|=y,rn|=y}m=m.next}while(m!==null&&m!==i);u===null?a=r:u.next=s,lt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ue.lanes|=i,rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Xe(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);lt(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gs(){}function vs(e,t){var n=ue,r=Xe(),l=t(),i=!lt(r.memoizedState,l);if(i&&(r.memoizedState=l,Ae=!0),r=r.queue,Ji(ks.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,fr(9,xs.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(h(349));(nn&30)!==0||ys(n,t,l)}return l}function ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xs(e,t,n,r){t.value=n,t.getSnapshot=r,ws(t)&&js(e)}function ks(e,t,n){return n(function(){ws(t)&&js(e)})}function ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function js(e){var t=Nt(e,1);t!==null&&ut(t,e,1,-1)}function Ss(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=gd.bind(null,ue,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ns(){return Xe().memoizedState}function ol(e,t,n,r){var l=gt();ue.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Xe();r=r===void 0?null:r;var i=void 0;if(he!==null){var a=he.memoizedState;if(i=a.destroy,r!==null&&Bi(r,a.deps)){l.memoizedState=fr(t,n,i,r);return}}ue.flags|=e,l.memoizedState=fr(1|t,n,i,r)}function Cs(e,t){return ol(8390656,8,e,t)}function Ji(e,t){return al(2048,8,e,t)}function Es(e,t){return al(4,2,e,t)}function zs(e,t){return al(4,4,e,t)}function Ps(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Ps.bind(null,t,e),n)}function Ki(){}function bs(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ms(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ls(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n):(lt(n,t)||(n=sa(),ue.lanes|=n,rn|=n,e.baseState=!0),t)}function md(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{X=n,Hi.transition=r}}function Ts(){return Xe().memoizedState}function hd(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e))Is(t,n);else if(n=ds(e,t,n,r),n!==null){var l=be();ut(n,e,r,l),Ds(n,t,r)}}function gd(e,t,n){var r=$t(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))Is(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,lt(s,a)){var u=t.interleaved;u===null?(l.next=l,Di(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ds(e,t,l,r),n!==null&&(l=be(),ut(n,e,r,l),Ds(n,t,r))}}function Rs(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Is(e,t){ur=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ds(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var sl={readContext:Ye,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},vd={readContext:Ye,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Cs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ol(4194308,4,Ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return ol(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hd.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:Ki,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=md.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,l=gt();if(oe){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ye===null)throw Error(h(349));(nn&30)!==0||ys(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Cs(ks.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,xs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=ye.identifierPrefix;if(oe){var n=St,r=jt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yd={readContext:Ye,useCallback:bs,useContext:Ye,useEffect:Ji,useImperativeHandle:_s,useInsertionEffect:Es,useLayoutEffect:zs,useMemo:Ms,useReducer:Wi,useRef:Ns,useState:function(){return Wi(dr)},useDebugValue:Ki,useDeferredValue:function(e){var t=Xe();return Ls(t,he.memoizedState,e)},useTransition:function(){var e=Wi(dr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:gs,useSyncExternalStore:vs,useId:Ts,unstable_isNewReconciler:!1},xd={readContext:Ye,useCallback:bs,useContext:Ye,useEffect:Ji,useImperativeHandle:_s,useInsertionEffect:Es,useLayoutEffect:zs,useMemo:Ms,useReducer:Qi,useRef:Ns,useState:function(){return Qi(dr)},useDebugValue:Ki,useDeferredValue:function(e){var t=Xe();return he===null?t.memoizedState=e:Ls(t,he.memoizedState,e)},useTransition:function(){var e=Qi(dr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:gs,useSyncExternalStore:vs,useId:Ts,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),l=$t(e),i=Ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ut(t,e,l,r),tl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),l=$t(e),i=Ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ut(t,e,l,r),tl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=$t(e),l=Ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ut(e,l,r),t!==null&&(ut(t,e,r,n),tl(t,e,r))}};function As(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,i):!0}function Fs(e,t,n){var r=!1,l=At,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(l=De(t)?Xt:Ne.current,r=t.contextTypes,i=(r=r!=null)?wn(e,l):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ai(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ye(i):(i=De(t)?Xt:Ne.current,l.context=wn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),nl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=G(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kd=typeof WeakMap=="function"?WeakMap:Map;function Us(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,ho=r),Zi(e,t)},n}function Vs(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Zi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rd.bind(null,e,t,n),t.then(e,e))}function Bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $s(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var wd=Se.ReactCurrentOwner,Ae=!1;function _e(e,t,n,r){t.child=e===null?cs(t,null,n,r):Cn(t,e.child,n,r)}function Gs(e,t,n,r,l){n=n.render;var i=t.ref;return zn(t,l),r=$i(e,t,n,r,i,l),n=Gi(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(oe&&n&&zi(t),t.flags|=1,_e(e,t,r,l),t.child)}function Ws(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!jo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qs(e,t,i,r,l)):(e=jl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(a,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,Et(e,t,l)}return eo(e,t,n,r,l)}function Js(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Mn,We),We|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Mn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Mn,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(Mn,We),We|=r;return _e(e,t,l,n),t.child}function Ks(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,n,r,l){var i=De(n)?Xt:Ne.current;return i=wn(t,i),zn(t,l),n=$i(e,t,n,r,i,l),r=Gi(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(oe&&r&&zi(t),t.flags|=1,_e(e,t,n,l),t.child)}function Ys(e,t,n,r,l){if(De(n)){var i=!0;Qr(t)}else i=!1;if(zn(t,l),t.stateNode===null)dl(e,t),Fs(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ye(m):(m=De(n)?Xt:Ne.current,m=wn(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==m)&&Os(t,a,r,m),Ot=!1;var g=t.memoizedState;a.state=g,nl(t,r,a,l),u=t.memoizedState,s!==r||g!==u||Ie.current||Ot?(typeof y=="function"&&(Yi(t,n,y,r),u=t.memoizedState),(s=Ot||As(t,n,s,r,g,u,m))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=m,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fs(e,t),s=t.memoizedProps,m=t.type===t.elementType?s:ot(t.type,s),a.props=m,x=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ye(u):(u=De(n)?Xt:Ne.current,u=wn(t,u));var C=n.getDerivedStateFromProps;(y=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==x||g!==u)&&Os(t,a,r,u),Ot=!1,g=t.memoizedState,a.state=g,nl(t,r,a,l);var P=t.memoizedState;s!==x||g!==P||Ie.current||Ot?(typeof C=="function"&&(Yi(t,n,C,r),P=t.memoizedState),(m=Ot||As(t,n,m,r,g,P,u)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=P),a.props=r,a.state=P,a.context=u,r=m):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return to(e,t,n,r,i,l)}function to(e,t,n,r,l,i){Ks(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ts(t,n,!1),Et(e,t,i);r=t.stateNode,wd.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,s,i)):_e(e,t,s,i),t.memoizedState=r.state,l&&ts(t,n,!0),t.child}function Xs(e){var t=e.stateNode;t.pendingContext?Za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Za(e,t.context,!1),Fi(e,t.containerInfo)}function qs(e,t,n,r,l){return Nn(),Mi(l),t.flags|=256,_e(e,t,n,r),t.child}var no={dehydrated:null,treeContext:null,retryLane:0};function ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zs(e,t,n){var r=t.pendingProps,l=se.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ee(se,l&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Sl(a,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ro(n),t.memoizedState=no,e):lo(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return jd(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Wt(s,i):(i=sn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ro(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=no,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lo(e,t){return t=Sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cl(e,t,n,r){return r!==null&&Mi(r),Cn(t,e.child,null,n),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jd(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(h(422))),cl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Sl({mode:"visible",children:r.children},l,0,null),i=sn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,a),t.child.memoizedState=ro(a),t.memoizedState=no,i);if((t.mode&1)===0)return cl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(h(419)),r=qi(i,r,void 0),cl(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ae||s){if(r=ye,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Nt(e,l),ut(r,e,l,-1))}return wo(),r=qi(Error(h(421))),cl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Id.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ge=It(l.nextSibling),$e=t,oe=!0,it=null,e!==null&&(Je[Ke++]=jt,Je[Ke++]=St,Je[Ke++]=qt,jt=e.id,St=e.overflow,qt=t),t=lo(t,r.children),t.flags|=4096,t)}function eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function io(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function tu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,n,t);else if(e.tag===19)eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),io(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}io(t,!0,n,null,i);break;case"together":io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function dl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sd(e,t,n){switch(t.tag){case 3:Xs(t),Nn();break;case 5:hs(t);break;case 1:De(t.type)&&Qr(t);break;case 4:Fi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ee(Zr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Zs(e,t,n):(ee(se,se.current&1),e=Et(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return tu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Js(e,t,n)}return Et(e,t,n)}var nu,oo,ru,lu;nu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oo=function(){},ru=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(ht.current);var i=null;switch(n){case"input":l=Il(e,l),r=Il(e,r),i=[];break;case"select":l=z({},l,{value:void 0}),r=z({},r,{value:void 0}),i=[];break;case"textarea":l=Fl(e,l),r=Fl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Ul(n,r);var a;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var s=l[m];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(S.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(s=l!=null?l[m]:void 0,r.hasOwnProperty(m)&&u!==s&&(u!=null||s!=null))if(m==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(S.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&te("scroll",e),i||s===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nd(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return De(t.type)&&Wr(),Ee(t),null;case 3:return r=t.stateNode,Pn(),ne(Ie),ne(Ne),Vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(yo(it),it=null))),oo(e,t),Ee(t),null;case 5:Oi(t);var l=tn(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)ru(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(e=tn(ht.current),Xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(l=0;l<er.length;l++)te(er[l],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Fo(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Vo(r,i),te("invalid",r)}Ul(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),l=["children",""+s]):S.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":kr(r),Uo(r,i,!0);break;case"textarea":kr(r),Bo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$o(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mt]=t,e[rr]=r,nu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Vl(n,r),n){case"dialog":te("cancel",e),te("close",e),l=r;break;case"iframe":case"object":case"embed":te("load",e),l=r;break;case"video":case"audio":for(l=0;l<er.length;l++)te(er[l],e);l=r;break;case"source":te("error",e),l=r;break;case"img":case"image":case"link":te("error",e),te("load",e),l=r;break;case"details":te("toggle",e),l=r;break;case"input":Fo(e,r),l=Il(e,r),te("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=z({},r,{value:void 0}),te("invalid",e);break;case"textarea":Vo(e,r),l=Fl(e,r),te("invalid",e);break;default:l=r}Ul(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Qo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Go(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(S.hasOwnProperty(i)?u!=null&&i==="onScroll"&&te("scroll",e):u!=null&&et(e,i,u,a))}switch(n){case"input":kr(e),Uo(e,r,!1);break;case"textarea":kr(e),Bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Y(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(sr.current),tn(ht.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ee(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)as(),Nn(),t.flags|=98560,i=!1;else if(i=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[mt]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else it!==null&&(yo(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ge===0&&(ge=3):wo())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Pn(),oo(e,t),e===null&&tr(t.stateNode.containerInfo),Ee(t),null;case 10:return Ri(t.type._context),Ee(t),null;case 17:return De(t.type)&&Wr(),Ee(t),null;case 19:if(ne(se),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)pr(i,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=rl(e),a!==null){for(t.flags|=128,pr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>Ln&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=rl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!oe)return Ee(t),null}else 2*fe()-i.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function Cd(e,t){switch(Pi(t),t.tag){case 1:return De(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),ne(Ie),ne(Ne),Vi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Pn(),null;case 10:return Ri(t.type._context),null;case 22:case 23:return ko(),null;case 24:return null;default:return null}}var fl=!1,ze=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,E=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function ao(e,t,n){try{n()}catch(r){de(e,t,r)}}var iu=!1;function zd(e,t){if(xi=Lr,e=Aa(),di(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,m=0,y=0,x=e,g=null;t:for(;;){for(var C;x!==n||l!==0&&x.nodeType!==3||(s=a+l),x!==i||r!==0&&x.nodeType!==3||(u=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(C=x.firstChild)!==null;)g=x,x=C;for(;;){if(x===e)break t;if(g===n&&++m===l&&(s=a),g===i&&++y===r&&(u=a),(C=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=C}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},Lr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var P=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var _=P.memoizedProps,pe=P.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:ot(t.type,_),pe);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(k){de(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return P=iu,iu=!1,P}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ao(t,n,i)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function so(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ou(e){var t=e.alternate;t!==null&&(e.alternate=null,ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[rr],delete t[Ni],delete t[ud],delete t[cd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function au(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}function co(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(co(e,t,n),e=e.sibling;e!==null;)co(e,t,n),e=e.sibling}var we=null,at=!1;function Vt(e,t,n){for(n=n.child;n!==null;)uu(e,t,n),n=n.sibling}function uu(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Er,n)}catch{}switch(n.tag){case 5:ze||bn(n,t);case 6:var r=we,l=at;we=null,Vt(e,t,n),we=r,at=l,we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?Si(e.parentNode,n):e.nodeType===1&&Si(e,n),Wn(e)):Si(we,n.stateNode));break;case 4:r=we,l=at,we=n.stateNode.containerInfo,at=!0,Vt(e,t,n),we=r,at=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&ao(n,t,a),l=l.next}while(l!==r)}Vt(e,t,n);break;case 1:if(!ze&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Vt(e,t,n),ze=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ed),t.forEach(function(r){var l=Dd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,at=!1;break e;case 3:we=s.stateNode.containerInfo,at=!0;break e;case 4:we=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(we===null)throw Error(h(160));uu(i,a,l),we=null,at=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(m){de(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)du(t,e),t=t.sibling}function du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{mr(3,e,e.return),pl(3,e)}catch(_){de(e,e.return,_)}try{mr(5,e,e.return)}catch(_){de(e,e.return,_)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(_){de(e,e.return,_)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Oo(l,i),Vl(s,a);var m=Vl(s,i);for(a=0;a<u.length;a+=2){var y=u[a],x=u[a+1];y==="style"?Qo(l,x):y==="dangerouslySetInnerHTML"?Go(l,x):y==="children"?In(l,x):et(l,y,x,m)}switch(s){case"input":Dl(l,i);break;case"textarea":Ho(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?un(l,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?un(l,!!i.multiple,i.defaultValue,!0):un(l,!!i.multiple,i.multiple?[]:"",!1))}l[rr]=i}catch(_){de(e,e.return,_)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(_){de(e,e.return,_)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(_){de(e,e.return,_)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(mo=fe())),r&4&&cu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(m=ze)||y,st(t,e),ze=m):st(t,e),vt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(E=e,y=e.child;y!==null;){for(x=E=y;E!==null;){switch(g=E,C=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:bn(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,P.props=t.memoizedProps,P.state=t.memoizedState,P.componentWillUnmount()}catch(_){de(r,n,_)}}break;case 5:bn(g,g.return);break;case 22:if(g.memoizedState!==null){mu(x);continue}}C!==null?(C.return=g,E=C):mu(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{l=x.stateNode,m?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,u=x.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Wo("display",a))}catch(_){de(e,e.return,_)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(_){de(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:st(t,e),vt(e),r&4&&cu(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(au(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=su(e);co(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=su(e);uo(e,s,a);break;default:throw Error(h(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pd(e,t,n){E=e,fu(e)}function fu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||fl;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ze;s=fl;var m=ze;if(fl=a,(ze=u)&&!m)for(E=l;E!==null;)a=E,u=a.child,a.tag===22&&a.memoizedState!==null?hu(l):u!==null?(u.return=a,E=u):hu(l);for(;i!==null;)E=i,fu(i),i=i.sibling;E=l,fl=s,ze=m}pu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,E=i):pu(e)}}function pu(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ms(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ms(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Wn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ze||t.flags&512&&so(t)}catch(g){de(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function mu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function hu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){de(t,l,u)}}var i=t.return;try{so(t)}catch(u){de(t,i,u)}break;case 5:var a=t.return;try{so(t)}catch(u){de(t,a,u)}}}catch(u){de(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var _d=Math.ceil,ml=Se.ReactCurrentDispatcher,fo=Se.ReactCurrentOwner,qe=Se.ReactCurrentBatchConfig,H=0,ye=null,me=null,je=0,We=0,Mn=Dt(0),ge=0,hr=null,rn=0,hl=0,po=0,gr=null,Fe=null,mo=0,Ln=1/0,zt=null,gl=!1,ho=null,Ht=null,vl=!1,Bt=null,yl=0,vr=0,go=null,xl=-1,kl=0;function be(){return(H&6)!==0?fe():xl!==-1?xl:xl=fe()}function $t(e){return(e.mode&1)===0?1:(H&2)!==0&&je!==0?je&-je:fd.transition!==null?(kl===0&&(kl=sa()),kl):(e=X,e!==0||(e=window.event,e=e===void 0?16:va(e.type)),e)}function ut(e,t,n,r){if(50<vr)throw vr=0,go=null,Error(h(185));Vn(e,n,r),((H&2)===0||e!==ye)&&(e===ye&&((H&2)===0&&(hl|=n),ge===4&&Gt(e,je)),Oe(e,r),n===1&&H===0&&(t.mode&1)===0&&(Ln=fe()+500,Jr&&Ft()))}function Oe(e,t){var n=e.callbackNode;fc(e,t);var r=_r(e,e===ye?je:0);if(r===0)n!==null&&ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ia(n),t===1)e.tag===0?dd(vu.bind(null,e)):ns(vu.bind(null,e)),ad(function(){(H&6)===0&&Ft()}),n=null;else{switch(ua(r)){case 1:n=Jl;break;case 4:n=oa;break;case 16:n=Cr;break;case 536870912:n=aa;break;default:n=Cr}n=Cu(n,gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gu(e,t){if(xl=-1,kl=0,(H&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=_r(e,e===ye?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wl(e,r);else{t=r;var l=H;H|=2;var i=xu();(ye!==e||je!==t)&&(zt=null,Ln=fe()+500,on(e,t));do try{Ld();break}catch(s){yu(e,s)}while(!0);Ti(),ml.current=i,H=l,me!==null?t=0:(ye=null,je=0,t=ge)}if(t!==0){if(t===2&&(l=Kl(e),l!==0&&(r=l,t=vo(e,l))),t===1)throw n=hr,on(e,0),Gt(e,r),Oe(e,fe()),n;if(t===6)Gt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!bd(l)&&(t=wl(e,r),t===2&&(i=Kl(e),i!==0&&(r=i,t=vo(e,i))),t===1))throw n=hr,on(e,0),Gt(e,r),Oe(e,fe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:an(e,Fe,zt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=mo+500-fe(),10<t)){if(_r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(an.bind(null,e,Fe,zt),t);break}an(e,Fe,zt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-rt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_d(r/1960))-r,10<r){e.timeoutHandle=ji(an.bind(null,e,Fe,zt),r);break}an(e,Fe,zt);break;case 5:an(e,Fe,zt);break;default:throw Error(h(329))}}}return Oe(e,fe()),e.callbackNode===n?gu.bind(null,e):null}function vo(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=wl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&yo(t)),e}function yo(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function bd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!lt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~po,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function vu(e){if((H&6)!==0)throw Error(h(327));Tn();var t=_r(e,0);if((t&1)===0)return Oe(e,fe()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=vo(e,r))}if(n===1)throw n=hr,on(e,0),Gt(e,t),Oe(e,fe()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Fe,zt),Oe(e,fe()),null}function xo(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Ln=fe()+500,Jr&&Ft())}}function ln(e){Bt!==null&&Bt.tag===0&&(H&6)===0&&Tn();var t=H;H|=1;var n=qe.transition,r=X;try{if(qe.transition=null,X=1,e)return e()}finally{X=r,qe.transition=n,H=t,(H&6)===0&&Ft()}}function ko(){We=Mn.current,ne(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,od(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Pi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:Pn(),ne(Ie),ne(Ne),Vi();break;case 5:Oi(r);break;case 4:Pn();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Ri(r.type._context);break;case 22:case 23:ko()}n=n.return}if(ye=e,me=e=Wt(e.current,null),je=We=t,ge=0,hr=null,po=hl=rn=0,Fe=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}en=null}return e}function yu(e,t){do{var n=me;try{if(Ti(),ll.current=sl,il){for(var r=ue.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(nn=0,ve=he=ue=null,ur=!1,cr=0,fo.current=null,n===null||n.return===null){ge=1,hr=t,me=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=je,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,y=s,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var C=Bs(a);if(C!==null){C.flags&=-257,$s(C,a,s,i,t),C.mode&1&&Hs(i,m,t),t=C,u=m;var P=t.updateQueue;if(P===null){var _=new Set;_.add(u),t.updateQueue=_}else P.add(u);break e}else{if((t&1)===0){Hs(i,m,t),wo();break e}u=Error(h(426))}}else if(oe&&s.mode&1){var pe=Bs(a);if(pe!==null){(pe.flags&65536)===0&&(pe.flags|=256),$s(pe,a,s,i,t),Mi(_n(u,s));break e}}i=u=_n(u,s),ge!==4&&(ge=2),gr===null?gr=[i]:gr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Us(i,u,t);ps(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ht===null||!Ht.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Vs(i,s,t);ps(i,k);break e}}i=i.return}while(i!==null)}wu(n)}catch(b){t=b,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function xu(){var e=ml.current;return ml.current=sl,e===null?sl:e}function wo(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||(rn&268435455)===0&&(hl&268435455)===0||Gt(ye,je)}function wl(e,t){var n=H;H|=2;var r=xu();(ye!==e||je!==t)&&(zt=null,on(e,t));do try{Md();break}catch(l){yu(e,l)}while(!0);if(Ti(),H=n,ml.current=r,me!==null)throw Error(h(261));return ye=null,je=0,ge}function Md(){for(;me!==null;)ku(me)}function Ld(){for(;me!==null&&!rc();)ku(me)}function ku(e){var t=Nu(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?wu(e):me=t,fo.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Nd(n,t,We),n!==null){me=n;return}}else{if(n=Cd(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ge===0&&(ge=5)}function an(e,t,n){var r=X,l=qe.transition;try{qe.transition=null,X=1,Td(e,t,n,r)}finally{qe.transition=l,X=r}return null}function Td(e,t,n,r){do Tn();while(Bt!==null);if((H&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(pc(e,i),e===ye&&(me=ye=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vl||(vl=!0,Cu(Cr,function(){return Tn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=qe.transition,qe.transition=null;var a=X;X=1;var s=H;H|=4,fo.current=null,zd(e,n),du(n,e),Zc(ki),Lr=!!xi,ki=xi=null,e.current=n,Pd(n),lc(),H=s,X=a,qe.transition=i}else e.current=n;if(vl&&(vl=!1,Bt=e,yl=l),i=e.pendingLanes,i===0&&(Ht=null),ac(n.stateNode),Oe(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=ho,ho=null,e;return(yl&1)!==0&&e.tag!==0&&Tn(),i=e.pendingLanes,(i&1)!==0?e===go?vr++:(vr=0,go=e):vr=0,Ft(),null}function Tn(){if(Bt!==null){var e=ua(yl),t=qe.transition,n=X;try{if(qe.transition=null,X=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,yl=0,(H&6)!==0)throw Error(h(331));var l=H;for(H|=4,E=e.current;E!==null;){var i=E,a=i.child;if((E.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var m=s[u];for(E=m;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:mr(8,y,i)}var x=y.child;if(x!==null)x.return=y,E=x;else for(;E!==null;){y=E;var g=y.sibling,C=y.return;if(ou(y),y===m){E=null;break}if(g!==null){g.return=C,E=g;break}E=C}}}var P=i.alternate;if(P!==null){var _=P.child;if(_!==null){P.child=null;do{var pe=_.sibling;_.sibling=null,_=pe}while(_!==null)}}E=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,E=a;else e:for(;E!==null;){if(i=E,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var c=e.current;for(E=c;E!==null;){a=E;var p=a.child;if((a.subtreeFlags&2064)!==0&&p!==null)p.return=a,E=p;else e:for(a=c;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(b){de(s,s.return,b)}if(s===a){E=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,E=k;break e}E=s.return}}if(H=l,Ft(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{X=n,qe.transition=t}}return!1}function ju(e,t,n){t=_n(n,t),t=Us(e,t,1),e=Ut(e,t,1),t=be(),e!==null&&(Vn(e,1,t),Oe(e,t))}function de(e,t,n){if(e.tag===3)ju(e,e,n);else for(;t!==null;){if(t.tag===3){ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=_n(n,e),e=Vs(t,e,1),t=Ut(t,e,1),e=be(),t!==null&&(Vn(t,1,e),Oe(t,e));break}}t=t.return}}function Rd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(je&n)===n&&(ge===4||ge===3&&(je&130023424)===je&&500>fe()-mo?on(e,0):po|=n),Oe(e,t)}function Su(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=be();e=Nt(e,t),e!==null&&(Vn(e,t,n),Oe(e,n))}function Id(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Su(e,n)}function Dd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),Su(e,n)}var Nu;Nu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Ae=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ae=!1,Sd(e,t,n);Ae=(e.flags&131072)!==0}else Ae=!1,oe&&(t.flags&1048576)!==0&&rs(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;dl(e,t),e=t.pendingProps;var l=wn(t,Ne.current);zn(t,n),l=$i(null,t,r,e,l,n);var i=Gi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,Qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ai(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=to(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&zi(t),_e(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(dl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Fd(r),e=ot(r,e),l){case 0:t=eo(null,t,r,e,n);break e;case 1:t=Ys(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=Ws(null,t,r,ot(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),eo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ys(e,t,r,l,n);case 3:e:{if(Xs(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,fs(e,t),nl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=_n(Error(h(423)),t),t=qs(e,t,r,n,l);break e}else if(r!==l){l=_n(Error(h(424)),t),t=qs(e,t,r,n,l);break e}else for(Ge=It(t.stateNode.containerInfo.firstChild),$e=t,oe=!0,it=null,n=cs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===l){t=Et(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return hs(t),e===null&&bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,wi(r,l)?a=null:i!==null&&wi(r,i)&&(t.flags|=32),Ks(e,t),_e(e,t,a,n),t.child;case 6:return e===null&&bi(t),null;case 13:return Zs(e,t,n);case 4:return Fi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Gs(e,t,r,l,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,ee(Zr,r._currentValue),r._currentValue=a,i!==null)if(lt(i.value,a)){if(i.children===l.children&&!Ie.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ct(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ii(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(h(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ii(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}_e(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zn(t,n),l=Ye(l),r=r(l),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Ws(e,t,r,l,n);case 15:return Qs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),dl(e,t),t.tag=1,De(r)?(e=!0,Qr(t)):e=!1,zn(t,n),Fs(t,r,l),Xi(t,r,l,n),to(null,t,r,!0,e,n);case 19:return tu(e,t,n);case 22:return Js(e,t,n)}throw Error(h(156,t.tag))};function Cu(e,t){return la(e,t)}function Ad(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Ad(e,t,n,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fd(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jl(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")jo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Te:return sn(n.children,l,i,t);case Qe:a=8,l|=8;break;case Pt:return e=Ze(12,n,t,l|2),e.elementType=Pt,e.lanes=i,e;case Ve:return e=Ze(13,n,t,l),e.elementType=Ve,e.lanes=i,e;case nt:return e=Ze(19,n,t,l),e.elementType=nt,e.lanes=i,e;case ce:return Sl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:a=10;break e;case Jt:a=9;break e;case dt:a=11;break e;case ft:a=14;break e;case Re:a=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Ze(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Sl(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function So(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Od(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Co(e,t,n,r,l,i,a,s,u){return e=new Od(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ai(i),e}function Ud(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Eu(e){if(!e)return At;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(De(n))return es(e,n,t)}return t}function zu(e,t,n,r,l,i,a,s,u){return e=Co(n,r,!0,e,l,i,a,s,u),e.context=Eu(null),n=e.current,r=be(),l=$t(n),i=Ct(r,l),i.callback=t??null,Ut(n,i,l),e.current.lanes=l,Vn(e,l,r),Oe(e,r),e}function Nl(e,t,n,r){var l=t.current,i=be(),a=$t(l);return n=Eu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(l,t,a),e!==null&&(ut(e,l,a,i),tl(e,l,a)),a}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function Vd(){return null}var _u=typeof reportError=="function"?reportError:function(e){console.error(e)};function zo(e){this._internalRoot=e}El.prototype.render=zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Nl(e,t,null,null)},El.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Nl(null,e,null,null)}),t[kt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=fa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&ha(e)}};function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function Hd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var m=Cl(a);i.call(m)}}var a=zu(t,r,e,0,null,!1,!1,"",bu);return e._reactRootContainer=a,e[kt]=a.current,tr(e.nodeType===8?e.parentNode:e),ln(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var m=Cl(u);s.call(m)}}var u=Co(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=u,e[kt]=u.current,tr(e.nodeType===8?e.parentNode:e),ln(function(){Nl(t,u,n,r)}),u}function Pl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=Cl(a);s.call(u)}}Nl(t,a,e,l)}else a=Hd(n,t,e,l,r);return Cl(a)}ca=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Xl(t,n|1),Oe(t,fe()),(H&6)===0&&(Ln=fe()+500,Ft()))}break;case 13:ln(function(){var r=Nt(e,1);if(r!==null){var l=be();ut(r,e,1,l)}}),Eo(e,1)}},ql=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=be();ut(t,e,134217728,n)}Eo(e,134217728)}},da=function(e){if(e.tag===13){var t=$t(e),n=Nt(e,t);if(n!==null){var r=be();ut(n,e,t,r)}Eo(e,t)}},fa=function(){return X},pa=function(e,t){var n=X;try{return X=e,t()}finally{X=n}},$l=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Gr(r);if(!l)throw Error(h(90));Ao(r),Dl(r,l)}}}break;case"textarea":Ho(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Xo=xo,qo=ln;var Bd={usingClientEntryPoint:!1,Events:[lr,xn,Gr,Ko,Yo,xo]},yr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$d={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=na(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Vd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Er=_l.inject($d),pt=_l}catch{}}return Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd,Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Po(t))throw Error(h(200));return Ud(e,t,null,n)},Ue.createRoot=function(e,t){if(!Po(e))throw Error(h(299));var n=!1,r="",l=_u;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Co(e,1,!1,null,null,n,!1,r,l),e[kt]=t.current,tr(e.nodeType===8?e.parentNode:e),new zo(t)},Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=na(t),e=e===null?null:e.stateNode,e},Ue.flushSync=function(e){return ln(e)},Ue.hydrate=function(e,t,n){if(!zl(t))throw Error(h(200));return Pl(null,e,t,!0,n)},Ue.hydrateRoot=function(e,t,n){if(!Po(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=_u;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zu(t,null,e,1,n??null,l,!1,i,a),e[kt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)},Ue.render=function(e,t,n){if(!zl(t))throw Error(h(200));return Pl(null,e,t,!1,n)},Ue.unmountComponentAtNode=function(e){if(!zl(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Ue.unstable_batchedUpdates=xo,Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Pl(e,t,n,!1,r)},Ue.version="18.3.1-next-f1338f8080-20240426",Ue}var Fu;function Zd(){if(Fu)return Mo.exports;Fu=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(j){console.error(j)}}return w(),Mo.exports=qd(),Mo.exports}var Ou;function ef(){if(Ou)return bl;Ou=1;var w=Zd();return bl.createRoot=w.createRoot,bl.hydrateRoot=w.hydrateRoot,bl}var tf=ef();const nf=Vu(tf);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hu=(...w)=>w.filter((j,h,J)=>!!j&&j.trim()!==""&&J.indexOf(j)===h).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=Me.forwardRef(({color:w="currentColor",size:j=24,strokeWidth:h=2,absoluteStrokeWidth:J,className:S="",children:D,iconNode:V,...K},I)=>Me.createElement("svg",{ref:I,...lf,width:j,height:j,stroke:w,strokeWidth:J?Number(h)*24/Number(j):h,className:Hu("lucide",S),...K},[...V.map(([re,ae])=>Me.createElement(re,ae)),...Array.isArray(D)?D:[D]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(w,j)=>{const h=Me.forwardRef(({className:J,...S},D)=>Me.createElement(of,{ref:D,iconNode:j,className:Hu(`lucide-${rf(w)}`,J),...S}));return h.displayName=`${w}`,h};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=U("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=U("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=U("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=U("BookMarked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=U("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=U("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=U("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=U("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=U("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=U("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=U("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=U("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=U("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=U("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=U("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=U("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=U("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=U("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=U("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=U("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=U("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=U("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=U("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=U("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=U("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=U("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=U("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=U("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=U("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=U("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=U("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=U("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function _f(){const[w,j]=Me.useState(!1),[h,J]=Me.useState(!1),[S,D]=Me.useState("home");Me.useEffect(()=>{const I=()=>{J(window.scrollY>30);const re=["home","about","education","skills","projects","certifications","profiles","contact"],ae=window.scrollY+120;for(const B of re){const $=document.getElementById(B);if($){const ke=$.offsetTop,Le=$.offsetHeight;if(ae>=ke&&ae<ke+Le){D(B);break}}}};return window.addEventListener("scroll",I,{passive:!0}),()=>window.removeEventListener("scroll",I)},[]);const V=[{label:"Home",href:"#home",id:"home"},{label:"About",href:"#about",id:"about"},{label:"Education",href:"#education",id:"education"},{label:"Skills",href:"#skills",id:"skills"},{label:"Projects",href:"#projects",id:"projects"},{label:"Certifications",href:"#certifications",id:"certifications"},{label:"Profiles",href:"#profiles",id:"profiles"},{label:"Contact",href:"#contact",id:"contact"}],K=()=>{j(!1)};return o.jsxs("header",{className:`navbar-header ${h?"navbar-scrolled":""}`,role:"banner",children:[o.jsxs("div",{className:"container navbar-container",children:[o.jsxs("a",{href:"#home",className:"navbar-brand","aria-label":"Gayathri J Home",children:[o.jsx("span",{className:"brand-badge",children:"GJ"}),o.jsxs("span",{className:"brand-name",children:["Gayathri ",o.jsx("span",{className:"brand-accent",children:"J"})]})]}),o.jsx("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:o.jsx("ul",{className:"nav-list",children:V.map(I=>o.jsx("li",{children:o.jsx("a",{href:I.href,className:`nav-link ${S===I.id?"active":""}`,children:I.label})},I.id))})}),o.jsxs("div",{className:"navbar-actions",children:[o.jsxs("a",{href:"./assets/resume.pdf",download:"Gayathri_J_Resume.pdf",className:"btn btn-sm btn-outline nav-resume-btn",title:"Download Official Resume PDF",children:[o.jsx(Ml,{size:15}),o.jsx("span",{children:"Resume"})]}),o.jsx("button",{type:"button",className:"mobile-toggle",onClick:()=>j(!w),"aria-label":w?"Close menu":"Open menu","aria-expanded":w,children:w?o.jsx(Pf,{size:22}):o.jsx(wf,{size:22})})]})]}),o.jsx("div",{className:`mobile-drawer ${w?"open":""}`,"aria-hidden":!w,children:o.jsx("div",{className:"mobile-drawer-inner",children:o.jsxs("ul",{className:"mobile-nav-list",children:[V.map(I=>o.jsx("li",{children:o.jsx("a",{href:I.href,className:`mobile-nav-link ${S===I.id?"active":""}`,onClick:K,children:I.label})},I.id)),o.jsx("li",{className:"mobile-drawer-cta",children:o.jsxs("a",{href:"./assets/resume.pdf",download:"Gayathri_J_Resume.pdf",className:"btn btn-primary",onClick:K,children:[o.jsx(Ml,{size:16}),o.jsx("span",{children:"Download Resume"})]})})]})})}),o.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all var(--transition-normal);
          background: rgba(9, 13, 22, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          padding: 0.65rem 0;
          background: rgba(9, 13, 22, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-md);
          background: var(--gradient-blue);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
        }

        .brand-accent {
          color: var(--accent-cyan);
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          list-style: none;
        }

        .nav-link {
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.12);
          font-weight: 600;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-resume-btn {
          display: none;
        }

        @media (min-width: 640px) {
          .nav-resume-btn {
            display: inline-flex;
          }
        }

        .mobile-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer {
          display: block;
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(9, 13, 22, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal);
        }

        .mobile-drawer.open {
          max-height: 480px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .mobile-drawer-inner {
          padding: 1.25rem 1.5rem 2rem 1.5rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.15);
        }

        .mobile-drawer-cta {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-drawer-cta .btn {
          width: 100%;
        }
      `})]})}function bf(){return o.jsxs("section",{id:"home",className:"hero-section","aria-label":"Hero Section",children:[o.jsxs("div",{className:"container hero-container",children:[o.jsxs("div",{className:"hero-content",children:[o.jsx("div",{className:"hero-badge-wrapper",children:o.jsxs("span",{className:"hero-status-pill",children:[o.jsx("span",{className:"status-dot"}),"Available for Internships & Software Roles"]})}),o.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",o.jsx("span",{className:"text-gradient",children:"Gayathri J"})]}),o.jsxs("p",{className:"hero-headline",children:["Computer Science Engineering Student ",o.jsx("span",{className:"divider",children:"|"})," AI/ML ",o.jsx("span",{className:"divider",children:"|"})," Full-Stack Development"]}),o.jsxs("p",{className:"hero-intro",children:["I am a Computer Science and Engineering student at ",o.jsx("strong",{children:"VIT-AP University"})," interested in Artificial Intelligence, Machine Learning, and Full-Stack Development. I enjoy building practical applications that combine intelligent systems, data-driven recommendations, and user-friendly web interfaces."]}),o.jsxs("div",{className:"hero-meta-strip",children:[o.jsxs("div",{className:"meta-item",children:[o.jsx(Ju,{size:16,className:"meta-icon"}),o.jsx("span",{children:"B.Tech CSE • VIT-AP (CGPA: 8.96)"})]}),o.jsxs("div",{className:"meta-item",children:[o.jsx(Do,{size:16,className:"meta-icon"}),o.jsx("span",{children:"Andhra Pradesh, India"})]})]}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("a",{href:"#projects",className:"btn btn-primary",children:[o.jsx("span",{children:"View Projects"}),o.jsx(af,{size:17})]}),o.jsxs("a",{href:"#contact",className:"btn btn-secondary",children:[o.jsx(Ll,{size:17}),o.jsx("span",{children:"Contact Me"})]}),o.jsxs("a",{href:"./assets/resume.pdf",download:"Gayathri_J_Resume.pdf",className:"btn btn-outline",title:"Download Gayathri J's Official Resume",children:[o.jsx(Ml,{size:17}),o.jsx("span",{children:"Download Resume"})]})]}),o.jsxs("div",{className:"hero-socials",children:[o.jsx("span",{className:"social-label",children:"Connect:"}),o.jsxs("div",{className:"social-links",children:[o.jsx("a",{href:"https://www.linkedin.com/in/gayathri-j-08604032a",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"Gayathri J on LinkedIn",children:o.jsx(Io,{size:18})}),o.jsx("a",{href:"https://github.com/Gayathrijinka",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"Gayathri J on GitHub",children:o.jsx(Rl,{size:18})}),o.jsx("a",{href:"https://leetcode.com/u/Gayathri_jinka/",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"Gayathri J on LeetCode",children:o.jsx(Tl,{size:18})}),o.jsx("a",{href:"mailto:gayathrijinka2005@gmail.com",className:"social-icon-btn","aria-label":"Email Gayathri J",children:o.jsx(Ll,{size:18})})]})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsxs("div",{className:"photo-card-wrapper",children:[o.jsx("div",{className:"photo-ambient-glow"}),o.jsxs("div",{className:"photo-card",children:[o.jsx("div",{className:"photo-frame",children:o.jsx("img",{src:"./assets/profile-photo.jpg",alt:"Gayathri J - Computer Science Student and Developer",className:"profile-img",loading:"eager",onError:w=>{w.target.src.includes("photo.jpeg")||(w.target.src="./assets/photo.jpeg")}})}),o.jsxs("div",{className:"floating-badge top-right",children:[o.jsx(Ku,{size:16,className:"badge-sparkle-icon"}),o.jsxs("div",{children:[o.jsx("span",{className:"badge-subtitle",children:"Specialization"}),o.jsx("strong",{className:"badge-title",children:"AI & Full-Stack"})]})]}),o.jsxs("div",{className:"floating-badge bottom-left",children:[o.jsx("div",{className:"badge-indicator"}),o.jsxs("div",{children:[o.jsx("span",{className:"badge-subtitle",children:"Education"}),o.jsx("strong",{className:"badge-title",children:"VIT-AP • 8.96 CGPA"})]})]})]})]})})]}),o.jsx("style",{children:`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          position: relative;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 6.5rem;
            padding-bottom: 3.5rem;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
        }

        .hero-badge-wrapper {
          margin-bottom: 1.25rem;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .hero-title {
          font-size: clamp(2.35rem, 5vw, 3.65rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          font-weight: 600;
          color: #93c5fd;
          margin-bottom: 1.35rem;
          line-height: 1.45;
        }

        .hero-headline .divider {
          color: var(--text-muted);
          margin: 0 0.35rem;
          opacity: 0.6;
        }

        .hero-intro {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 580px;
        }

        @media (max-width: 992px) {
          .hero-intro {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .hero-meta-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 992px) {
          .hero-meta-strip {
            justify-content: center;
          }
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .meta-icon {
          color: var(--accent-cyan);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }

        @media (max-width: 992px) {
          .hero-actions {
            justify-content: center;
          }
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 992px) {
          .hero-socials {
            justify-content: center;
          }
        }

        .social-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.18);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }

        /* Profile Visual Column */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .photo-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .photo-ambient-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%);
          filter: blur(25px);
          border-radius: var(--radius-xl);
          z-index: 0;
          pointer-events: none;
        }

        .photo-card {
          position: relative;
          z-index: 1;
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-xl);
          padding: 1.15rem;
          box-shadow: var(--shadow-lg), 0 0 30px rgba(37, 99, 235, 0.2);
        }

        .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.05;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform var(--transition-slow);
        }

        .photo-card:hover .profile-img {
          transform: scale(1.025);
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.95rem;
          background: rgba(9, 13, 22, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-md);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          z-index: 2;
          pointer-events: none;
        }

        .floating-badge.top-right {
          top: -15px;
          right: -15px;
        }

        .floating-badge.bottom-left {
          bottom: -15px;
          left: -15px;
        }

        @media (max-width: 480px) {
          .floating-badge.top-right {
            top: -10px;
            right: 0;
          }
          .floating-badge.bottom-left {
            bottom: -10px;
            left: 0;
          }
        }

        .badge-sparkle-icon {
          color: #38bdf8;
        }

        .badge-subtitle {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .badge-title {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .badge-indicator {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }
      `})]})}function Mf(){const w=[{icon:o.jsx($u,{size:24,className:"pillar-icon"}),title:"Machine Learning & AI",desc:"Developing end-to-end intelligent models using Scikit-learn, TensorFlow, and Pandas, covering data preprocessing, feature engineering, and evaluation."},{icon:o.jsx(hf,{size:24,className:"pillar-icon"}),title:"Full-Stack Development",desc:"Architecting interactive user interfaces in React.js and HTML/CSS/JS integrated with robust REST APIs built with Python Flask."},{icon:o.jsx(kf,{size:24,className:"pillar-icon"}),title:"Core CS & Problem Solving",desc:"Rigorous foundation in Data Structures, Algorithms, Object-Oriented Programming (OOP) in Java, and Database Management Systems."},{icon:o.jsx(vf,{size:24,className:"pillar-icon"}),title:"GenAI & Recommendation",desc:"Integrating Large Language Model APIs (Google Gemini) and implementing hybrid recommendation engines using TF-IDF, Cosine Similarity, and SVD."}];return o.jsxs("section",{id:"about",className:"section-wrapper about-section","aria-label":"About Me",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"About Me"}),o.jsxs("h2",{className:"section-title",children:["Engineering Solutions at the Intersection of ",o.jsx("span",{className:"text-gradient",children:"AI & Web"})]}),o.jsx("p",{className:"section-subtitle",children:"A disciplined Computer Science undergraduate combining rigorous computational theory with practical engineering."})]}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"card-glass about-narrative-card",children:[o.jsx("h3",{className:"narrative-heading",children:"Professional Background"}),o.jsxs("p",{className:"narrative-p",children:["I am a Computer Science and Engineering undergraduate at ",o.jsx("strong",{children:"Vellore Institute of Technology (VIT-AP University)"})," with an academic CGPA of ",o.jsx("strong",{children:"8.96"}),". My primary technical passions lie in Artificial Intelligence, Machine Learning, and Full-Stack Web Development."]}),o.jsx("p",{className:"narrative-p",children:"Through my coursework and project-based engineering, I have focused on solving real-world challenges—ranging from clinical diagnostic support with machine learning models like Random Forest, to personalized discovery platforms integrating Google Gemini AI and matrix decomposition techniques."}),o.jsxs("p",{className:"narrative-p",children:["Beyond individual development, I stay actively engaged in the tech community as a member of the ",o.jsx("strong",{children:"Computer Society of India (CSI) — VIT-AP Student Chapter"})," (2024), continuously expanding my algorithmic problem-solving abilities and collaborative development skills."]}),o.jsxs("div",{className:"about-highlights-row",children:[o.jsxs("div",{className:"about-highlight-box",children:[o.jsx("span",{className:"highlight-number",children:"8.96"}),o.jsx("span",{className:"highlight-label",children:"VIT-AP CGPA"})]}),o.jsxs("div",{className:"about-highlight-box",children:[o.jsx("span",{className:"highlight-number",children:"5+"}),o.jsx("span",{className:"highlight-label",children:"Verified Certifications"})]}),o.jsxs("div",{className:"about-highlight-box",children:[o.jsx("span",{className:"highlight-number",children:"2+"}),o.jsx("span",{className:"highlight-label",children:"Full-Stack AI Projects"})]})]})]}),o.jsx("div",{className:"about-pillars-grid",children:w.map((j,h)=>o.jsxs("div",{className:"card-glass pillar-card",children:[o.jsx("div",{className:"pillar-icon-box",children:j.icon}),o.jsx("h4",{className:"pillar-title",children:j.title}),o.jsx("p",{className:"pillar-desc",children:j.desc})]},h))})]})]}),o.jsx("style",{children:`
        .about-section {
          background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-narrative-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .narrative-heading {
          font-size: 1.35rem;
          margin-bottom: 1.15rem;
          color: var(--text-primary);
        }

        .narrative-p {
          font-size: 0.975rem;
          line-height: 1.75;
          margin-bottom: 1.1rem;
          color: var(--text-secondary);
        }

        .narrative-p strong {
          color: #e2e8f0;
          font-weight: 600;
        }

        .about-highlights-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 540px) {
          .about-highlights-row {
            grid-template-columns: 1fr;
          }
        }

        .about-highlight-box {
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 0.75rem;
          text-align: center;
        }

        .highlight-number {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--accent-cyan);
          line-height: 1.2;
        }

        .highlight-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.25rem;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 580px) {
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          padding: 1.6rem 1.4rem;
          display: flex;
          flex-direction: column;
        }

        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.15rem;
        }

        .pillar-icon {
          color: var(--accent-cyan);
        }

        .pillar-title {
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `})]})}function Lf(){const w=[{institution:"Vellore Institute of Technology, Andhra Pradesh",degree:"B.Tech in Computer Science and Engineering",duration:"2023 – Present",location:"Amaravati, Andhra Pradesh",metricType:"CGPA",metricValue:"8.96",status:"In Progress",description:"Rigorous curriculum encompassing Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Operating Systems, and Computer Networks.",highlights:["Core AI/ML Coursework","Dean's List / Academic Excellence","Active CSI Member"]},{institution:"Narayana Junior College, Anantapur",degree:"Intermediate Education (Class XII - MPC)",duration:"2021 – 2023",location:"Anantapur, Andhra Pradesh",metricType:"Score",metricValue:"95%",status:"Completed",description:"Focused on Mathematics, Physics, and Chemistry (MPC), building analytical thinking and quantitative foundation.",highlights:["Top Academic Standing","Mathematics & Physics Distinction"]},{institution:"AP Model School, Vidapanakal",degree:"Secondary Education (Class X - SSC)",duration:"2020 – 2021",location:"Vidapanakal, Andhra Pradesh",metricType:"Score",metricValue:"92%",status:"Completed",description:"Comprehensive foundational secondary education with consistent academic honors across all standard disciplines.",highlights:["High Distinction in Science & Mathematics"]}];return o.jsxs("section",{id:"education",className:"section-wrapper education-section","aria-label":"Education History",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"Academic Journey"}),o.jsxs("h2",{className:"section-title",children:["Education & ",o.jsx("span",{className:"text-gradient",children:"Qualifications"})]}),o.jsx("p",{className:"section-subtitle",children:"Strong academic credentials demonstrating consistent analytical discipline and computational curiosity."})]}),o.jsx("div",{className:"education-timeline",children:w.map((j,h)=>o.jsxs("div",{className:"timeline-item",children:[o.jsxs("div",{className:"timeline-marker",children:[o.jsx("div",{className:"marker-dot",children:o.jsx(Ju,{size:16})}),h!==w.length-1&&o.jsx("div",{className:"marker-line"})]}),o.jsxs("div",{className:"card-glass timeline-content",children:[o.jsxs("div",{className:"timeline-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"edu-status-badge",children:j.status}),o.jsx("h3",{className:"institution-name",children:j.institution}),o.jsx("h4",{className:"degree-name",children:j.degree})]}),o.jsxs("div",{className:"score-badge",children:[o.jsx("span",{className:"score-type",children:j.metricType}),o.jsx("span",{className:"score-val",children:j.metricValue})]})]}),o.jsxs("div",{className:"timeline-meta",children:[o.jsxs("span",{className:"meta-tag",children:[o.jsx(Gu,{size:14}),j.duration]}),o.jsxs("span",{className:"meta-tag",children:[o.jsx(Do,{size:14}),j.location]})]}),o.jsx("p",{className:"edu-desc",children:j.description}),o.jsx("div",{className:"edu-highlights",children:j.highlights.map((J,S)=>o.jsxs("span",{className:"badge badge-blue",children:[o.jsx(Bu,{size:12}),J]},S))})]})]},h))})]}),o.jsx("style",{children:`
        .education-timeline {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 1.5rem;
          position: relative;
        }

        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 36px 1fr;
            gap: 1rem;
          }
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .marker-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.15);
          border: 2px solid var(--accent-blue);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.3);
        }

        @media (max-width: 640px) {
          .marker-dot {
            width: 34px;
            height: 34px;
          }
        }

        .marker-line {
          position: absolute;
          top: 48px;
          bottom: -2.5rem;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-blue) 0%, rgba(51, 65, 85, 0.3) 100%);
          z-index: 1;
        }

        .timeline-content {
          padding: 1.75rem 2rem;
        }

        @media (max-width: 640px) {
          .timeline-content {
            padding: 1.25rem 1.25rem;
          }
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 0.85rem;
        }

        @media (max-width: 640px) {
          .timeline-header {
            flex-direction: column-reverse;
            gap: 0.75rem;
          }
        }

        .edu-status-badge {
          display: inline-block;
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
        }

        .institution-name {
          font-size: 1.2rem;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .degree-name {
          font-size: 0.975rem;
          font-weight: 500;
          color: #93c5fd;
          margin-top: 0.25rem;
        }

        .score-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.95rem;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          border-radius: var(--radius-md);
          min-width: 90px;
        }

        .score-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .score-val {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #38bdf8;
        }

        .timeline-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 1rem;
        }

        .meta-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .edu-desc {
          font-size: 0.925rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `})]})}function Tf(){const[w,j]=Me.useState("all"),h=[{id:"ai-ml",title:"AI & Machine Learning",icon:o.jsx($u,{size:20,className:"cat-icon"}),color:"blue",description:"End-to-end data modeling, feature selection, predictive algorithms, and statistical analysis.",skills:["Machine Learning","Scikit-learn","Pandas","NumPy","Matplotlib","TensorFlow","Deep Learning","Random Forest","TF-IDF & Cosine Similarity","Truncated SVD","Recommendation Systems"]},{id:"genai",title:"Generative AI & LLMs",icon:o.jsx(Ku,{size:20,className:"cat-icon"}),color:"cyan",description:"Language model prompting, API orchestrations, and intelligent retrieval workflows.",skills:["Google Gemini API","Generative AI","Large Language Models (LLMs)","Prompt Engineering","Retrieval-Augmented Generation (RAG)"]},{id:"languages",title:"Programming Languages",icon:o.jsx(Tl,{size:20,className:"cat-icon"}),color:"blue",description:"Core languages for systems, algorithms, backend logic, and scientific computing.",skills:["Python","Java","JavaScript","SQL","R"]},{id:"web",title:"Full-Stack & Web Dev",icon:o.jsx(jf,{size:20,className:"cat-icon"}),color:"cyan",description:"Modern front-to-back application development, user interfaces, and server endpoints.",skills:["React.js","HTML5","CSS3","JavaScript (ES6+)","Flask","REST APIs","Node.js"]},{id:"core-cs",title:"Core Computer Science",icon:o.jsx(cf,{size:20,className:"cat-icon"}),color:"emerald",description:"Foundational theory and rigorous software design paradigms.",skills:["Data Structures & Algorithms (DSA)","Object-Oriented Programming (OOP)","Database Management Systems (DBMS)","Operating Systems (OS)","Computer Networks (CN)"]},{id:"tools",title:"Tools & Platforms",icon:o.jsx(zf,{size:20,className:"cat-icon"}),color:"purple",description:"Development environments, version control, and cloud application deployment.",skills:["Git","GitHub","VS Code","Render","Jupyter Notebook","Anaconda"]}],J=w==="all"?h:h.filter(S=>S.id===w);return o.jsxs("section",{id:"skills",className:"section-wrapper skills-section","aria-label":"Technical Skills",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"Technical Competencies"}),o.jsxs("h2",{className:"section-title",children:["Skills & ",o.jsx("span",{className:"text-gradient",children:"Core Capabilities"})]}),o.jsx("p",{className:"section-subtitle",children:"Categorized technical stack backed by coursework at VIT-AP, personal projects, and verified certifications."})]}),o.jsxs("div",{className:"skills-filter-bar",children:[o.jsx("button",{type:"button",className:`filter-btn ${w==="all"?"active":""}`,onClick:()=>j("all"),children:"All Disciplines"}),h.map(S=>o.jsx("button",{type:"button",className:`filter-btn ${w===S.id?"active":""}`,onClick:()=>j(S.id),children:S.title},S.id))]}),o.jsx("div",{className:"skills-grid",children:J.map(S=>o.jsxs("div",{className:"card-glass skill-category-card",children:[o.jsxs("div",{className:"cat-header",children:[o.jsx("div",{className:`cat-icon-wrap cat-icon-${S.color}`,children:S.icon}),o.jsxs("div",{children:[o.jsx("h3",{className:"cat-title",children:S.title}),o.jsx("p",{className:"cat-desc",children:S.description})]})]}),o.jsx("div",{className:"skills-tags-wrap",children:S.skills.map((D,V)=>o.jsxs("span",{className:"skill-pill",children:[o.jsx(Wu,{size:13,className:"pill-check"}),o.jsx("span",{children:D})]},V))})]},S.id))})]}),o.jsx("style",{children:`
        .skills-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.75rem;
        }

        .filter-btn {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-light);
          background: rgba(30, 41, 59, 0.7);
        }

        .filter-btn.active {
          color: #ffffff;
          background: var(--gradient-blue);
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .skill-category-card {
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
        }

        .cat-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .cat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-icon-blue {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #60a5fa;
        }

        .cat-icon-cyan {
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          color: #38bdf8;
        }

        .cat-icon-emerald {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
        }

        .cat-icon-purple {
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.35);
          color: #c084fc;
        }

        .cat-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .cat-desc {
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--text-muted);
        }

        .skills-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.85rem;
          background: rgba(30, 41, 59, 0.55);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.84rem;
          color: #e2e8f0;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(59, 130, 246, 0.4);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .pill-check {
          color: var(--accent-cyan);
          opacity: 0.85;
        }
      `})]})}function Rf(){const[w,j]=Me.useState(null),h=S=>{j(w===S?null:S)},J=[{id:"anemiasense",featured:!0,title:"AnemiaSense",subtitle:"AI-Powered Anemia Prediction System",date:"May 2025",icon:o.jsx(xf,{size:22,className:"proj-icon text-rose"}),accentColor:"rose",summary:"Developed an AI-powered anemia prediction system utilizing the Kaggle Anemia.csv clinical dataset. The model evaluates patient features such as Hemoglobin, MCH, MCHC, MCV, and Gender to assess likelihood indicators.",detailedWorkflow:["Curated and preprocessed clinical hematology features from the Kaggle Anemia dataset.","Engineered feature pipelines and conducted cross-model evaluation, selecting Random Forest based on empirical validation results.","Constructed lightweight Python Flask REST endpoints for programmatic inference.","Designed a responsive, accessible client-side interface using HTML5, CSS3, and JavaScript.","Deployed the application for online public access on GitHub Pages."],technologies:["Python","Pandas","Scikit-learn","Random Forest","Flask","REST APIs","HTML5","CSS3","JavaScript"],liveDemo:"https://gayathrijinka.github.io/anemia-sense/",githubRepo:"https://github.com/Gayathrijinka",repoLabel:"GitHub Profile",noticeType:"info",notice:"Educational & Academic Study Project: Built for machine learning and clinical dataset evaluation. Not intended as a replacement for clinical medical diagnosis or healthcare professional evaluation."},{id:"cinebook",featured:!0,title:"CineBook",subtitle:"AI-Based Movie & Book Recommendation System",date:"June 2026",icon:o.jsx(yf,{size:22,className:"proj-icon text-sky"}),accentColor:"sky",summary:"Developed an AI-based recommendation platform that helps users discover movies and books using dataset attributes including genres, narrative descriptions, cast, directors, ratings, and user preferences.",detailedWorkflow:["Engineered content-based vectorization workflows using TF-IDF and Cosine Similarity matrices.","Implemented Truncated SVD (Singular Value Decomposition) to reduce dimensionality and discover latent topic clusters.","Engineered a hybrid recommendation engine merging content features and collaborative patterns.","Integrated Google Gemini AI to interpret natural-language semantic prompts from users.","Constructed Flask REST APIs to bridge the client-side experience with server-side AI computation."],technologies:["Python","Flask","TF-IDF","Cosine Similarity","Truncated SVD","Google Gemini API","REST APIs","Recommendation Systems"],liveDemo:"https://cinebuk.onrender.com/",githubRepo:"https://github.com/Gayathrijinka/CineBuk",repoLabel:"GitHub Repository",noticeType:"render",notice:"Render Free Tier Hosting: The backend server automatically enters sleep mode when idle. If the application has not been visited recently, the initial cold-start may take approximately 30–50 seconds to spin up."},{id:"empowerher",featured:!1,title:"EmpowerHer",subtitle:"Multilingual Women Empowerment Platform",date:"Dec 2025",icon:o.jsx(Ef,{size:22,className:"proj-icon text-teal"}),accentColor:"teal",summary:"Developed a multilingual web platform connecting rural women with vocational skill training, educational guidance, and localized employment opportunities.",detailedWorkflow:["Built an intuitive, high-accessibility multilingual interface in HTML, CSS, and modern JavaScript.","Structured modular resource categories for skill development workshops, mentorship, and local listings.","Ensured mobile-friendly responsiveness for low-bandwidth mobile environments in rural communities."],technologies:["HTML5","CSS3","JavaScript","Multilingual UI","Responsive Design"],liveDemo:"https://gayathrijinka.github.io/EmpowerHer/",githubRepo:"https://github.com/Gayathrijinka",repoLabel:"GitHub Profile",noticeType:null,notice:null}];return o.jsxs("section",{id:"projects",className:"section-wrapper projects-section","aria-label":"Featured Projects",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"Project Portfolio"}),o.jsxs("h2",{className:"section-title",children:["Featured ",o.jsx("span",{className:"text-gradient",children:"Engineering Work"})]}),o.jsx("p",{className:"section-subtitle",children:"End-to-end applications demonstrating machine learning pipelines, recommendation algorithms, generative AI integrations, and full-stack delivery."})]}),o.jsx("div",{className:"projects-grid",children:J.map(S=>{const D=w===S.id;return o.jsxs("article",{className:`card-glass project-card ${S.featured?"project-featured":""}`,children:[o.jsxs("div",{className:"project-card-header",children:[o.jsxs("div",{className:"header-meta",children:[o.jsx("div",{className:"proj-icon-wrapper",children:S.icon}),o.jsxs("div",{children:[o.jsxs("div",{className:"title-row",children:[o.jsx("h3",{className:"project-title",children:S.title}),S.featured&&o.jsx("span",{className:"featured-pill",children:"Featured Project"})]}),o.jsx("p",{className:"project-subtitle",children:S.subtitle})]})]}),o.jsxs("span",{className:"project-date",children:[o.jsx(Gu,{size:13}),S.date]})]}),o.jsxs("div",{className:"project-body",children:[o.jsx("p",{className:"project-summary",children:S.summary}),o.jsxs("div",{className:"expandable-wrapper",children:[o.jsxs("button",{type:"button",className:"expand-toggle-btn",onClick:()=>h(S.id),"aria-expanded":D,children:[o.jsx("span",{children:D?"Hide Technical Highlights":"View Technical Highlights"}),D?o.jsx(ff,{size:16}):o.jsx(df,{size:16})]}),D&&o.jsxs("div",{className:"expanded-content",children:[o.jsx("h4",{className:"expanded-heading",children:"Implementation Highlights"}),o.jsx("ul",{className:"workflow-list",children:S.detailedWorkflow.map((V,K)=>o.jsx("li",{children:V},K))})]})]}),S.notice&&o.jsxs("div",{className:`project-notice notice-${S.noticeType}`,children:[S.noticeType==="render"?o.jsx(mf,{size:16,className:"notice-icon text-amber"}):o.jsx(pf,{size:16,className:"notice-icon text-blue"}),o.jsx("p",{className:"notice-text",children:S.notice})]}),o.jsx("div",{className:"tech-badge-container",children:S.technologies.map((V,K)=>o.jsx("span",{className:"badge badge-tech",children:V},K))})]}),o.jsxs("div",{className:"project-card-footer",children:[o.jsxs("a",{href:S.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-primary proj-cta-btn",children:[o.jsx("span",{children:"Launch Live Demo"}),o.jsx(Qu,{size:14})]}),o.jsxs("a",{href:S.githubRepo,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-secondary proj-cta-btn",children:[o.jsx(Rl,{size:14}),o.jsx("span",{children:S.repoLabel})]})]})]},S.id)})})]}),o.jsx("style",{children:`
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .project-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
        }

        @media (max-width: 640px) {
          .project-card {
            padding: 1.5rem 1.25rem;
          }
        }

        .project-featured {
          border-color: rgba(59, 130, 246, 0.35);
          background: linear-gradient(180deg, rgba(22, 32, 54, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%);
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 640px) {
          .project-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .proj-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-rose {
          color: #f43f5e;
        }

        .text-sky {
          color: #38bdf8;
        }

        .text-teal {
          color: #14b8a6;
        }

        .title-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .project-title {
          font-size: 1.4rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .featured-pill {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(37, 99, 235, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #60a5fa;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .project-subtitle {
          font-size: 0.95rem;
          color: #94a3b8;
          margin-top: 0.2rem;
          font-weight: 500;
        }

        .project-date {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(30, 41, 59, 0.5);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .project-body {
          margin-bottom: 1.75rem;
        }

        .project-summary {
          font-size: 1rem;
          line-height: 1.75;
          color: #cbd5e1;
          margin-bottom: 1.25rem;
        }

        /* Expandable Workflow Section */
        .expandable-wrapper {
          margin-bottom: 1.25rem;
        }

        .expand-toggle-btn {
          background: transparent;
          border: none;
          color: var(--accent-cyan);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          padding: 0.35rem 0;
          transition: color var(--transition-fast);
        }

        .expand-toggle-btn:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }

        .expanded-content {
          margin-top: 0.85rem;
          padding: 1.25rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .expanded-heading {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }

        .workflow-list {
          list-style-type: disc;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .workflow-list li {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #e2e8f0;
        }

        /* Project Operational Notices */
        .project-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          font-size: 0.825rem;
          line-height: 1.55;
        }

        .notice-info {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #94a3b8;
        }

        .notice-render {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #fbbf24;
        }

        .notice-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .text-amber {
          color: #f59e0b;
        }

        .text-blue {
          color: #60a5fa;
        }

        .notice-text {
          color: inherit;
        }

        /* Tech Badges */
        .tech-badge-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .badge-tech {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          color: #93c5fd;
          font-family: var(--font-mono);
          font-size: 0.775rem;
        }

        /* Footer Buttons */
        .project-card-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .proj-cta-btn {
          min-width: 140px;
        }
      `})]})}function If(){const w=[{id:1,title:"Machine Learning",provider:"SmartBridge",collaboration:"In collaboration with Google",category:"AI & Data Science",credentialUrl:"https://drive.google.com/file/d/1ROgeb7g_E52AM7NS-wZrZFQqVR4u9a9S/view?usp=drive_link",verified:!0},{id:2,title:"Getting Started with Full Stack Java Development",provider:"Simplilearn SkillUp",collaboration:null,category:"Full-Stack Engineering",credentialUrl:"https://drive.google.com/file/d/1eyzx1dAJifnMnMZgpR3AGgISG56P9Iae/view?usp=sharing",verified:!0},{id:3,title:"OOPs in Java",provider:"Simplilearn SkillUp",collaboration:null,category:"Core Computer Science",credentialUrl:null,verified:!1},{id:4,title:"Data Structures and Algorithms using Java",provider:"Great Learning",collaboration:null,category:"Core Computer Science & DSA",credentialUrl:null,verified:!1},{id:5,title:"Generative AI and ChatGPT",provider:"GeeksforGeeks",collaboration:null,category:"Generative AI & LLMs",credentialUrl:"https://drive.google.com/file/d/1TYOMijUEkSgP7WMgzQYiFNYVzjjlnh_g/view",verified:!0}];return o.jsxs("section",{id:"certifications",className:"section-wrapper certs-section","aria-label":"Certifications",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"Credentials"}),o.jsxs("h2",{className:"section-title",children:["Certifications & ",o.jsx("span",{className:"text-gradient",children:"Specializations"})]}),o.jsx("p",{className:"section-subtitle",children:"Professional certifications and skill tracks across Machine Learning, Java Engineering, DSA, and Generative AI."})]}),o.jsx("div",{className:"certs-grid",children:w.map(j=>o.jsxs("div",{className:"card-glass cert-card",children:[o.jsxs("div",{className:"cert-top",children:[o.jsx("div",{className:"cert-badge-wrap",children:o.jsx(Bu,{size:20,className:"cert-award-icon"})}),o.jsx("span",{className:"cert-category",children:j.category})]}),o.jsxs("div",{className:"cert-body",children:[o.jsx("h3",{className:"cert-title",children:j.title}),o.jsxs("p",{className:"cert-provider",children:["Issued by ",o.jsx("strong",{children:j.provider}),j.collaboration&&o.jsxs("span",{className:"cert-collab",children:[" • ",j.collaboration]})]})]}),o.jsx("div",{className:"cert-footer",children:j.credentialUrl?o.jsxs("a",{href:j.credentialUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-outline cert-link-btn",children:[o.jsx(Cf,{size:14,className:"shield-icon"}),o.jsx("span",{children:"View Verified Document"}),o.jsx(Qu,{size:13})]}):o.jsxs("div",{className:"cert-status-badge",children:[o.jsx(Wu,{size:14,className:"check-icon"}),o.jsx("span",{children:"Coursework Completed"})]})})]},j.id))})]}),o.jsx("style",{children:`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border-subtle);
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .cert-badge-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-award-icon {
          color: var(--accent-cyan);
        }

        .cert-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .cert-body {
          margin-bottom: 1.5rem;
        }

        .cert-title {
          font-size: 1.15rem;
          line-height: 1.4;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .cert-provider {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .cert-provider strong {
          color: #93c5fd;
        }

        .cert-collab {
          color: #64748b;
          font-size: 0.825rem;
        }

        .cert-footer {
          padding-top: 1.1rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
        }

        .cert-link-btn {
          width: 100%;
          justify-content: center;
        }

        .shield-icon {
          color: #38bdf8;
        }

        .cert-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #94a3b8;
          font-size: 0.825rem;
          padding: 0.35rem 0.65rem;
          background: rgba(30, 41, 59, 0.45);
          border-radius: var(--radius-sm);
        }

        .check-icon {
          color: #10b981;
        }
      `})]})}function Df(){const w=[{id:"linkedin",name:"LinkedIn",handle:"gayathri-j-08604032a",url:"https://www.linkedin.com/in/gayathri-j-08604032a",icon:o.jsx(Io,{size:26,className:"profile-brand-icon text-linkedin"}),color:"#0a66c2",role:"Professional Network",description:"Connect with me for engineering opportunities, updates on my academic journey at VIT-AP, and project collaborations."},{id:"github",name:"GitHub",handle:"Gayathrijinka",url:"https://github.com/Gayathrijinka",icon:o.jsx(Rl,{size:26,className:"profile-brand-icon text-github"}),color:"#f8fafc",role:"Code Repositories",description:"Explore my open-source repositories, machine learning models, Flask backend architectures, and web application source code."},{id:"leetcode",name:"LeetCode",handle:"Gayathri_jinka",url:"https://leetcode.com/u/Gayathri_jinka/",icon:o.jsx(Tl,{size:26,className:"profile-brand-icon text-leetcode"}),color:"#f59e0b",role:"Algorithmic Problem Solving",description:"View my active practice on Data Structures and Algorithms in Java and Python, focusing on arrays, dynamic programming, and trees."}];return o.jsxs("section",{id:"profiles",className:"section-wrapper profiles-section","aria-label":"Coding & Professional Profiles",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"Online Presence"}),o.jsxs("h2",{className:"section-title",children:["Coding & ",o.jsx("span",{className:"text-gradient",children:"Professional Profiles"})]}),o.jsx("p",{className:"section-subtitle",children:"Explore my code contributions, professional networking, and continuous problem-solving practice."})]}),o.jsx("div",{className:"profiles-grid",children:w.map(j=>o.jsxs("a",{href:j.url,target:"_blank",rel:"noopener noreferrer",className:"card-glass profile-card",children:[o.jsxs("div",{className:"profile-card-top",children:[o.jsx("div",{className:"profile-icon-box",children:j.icon}),o.jsxs("div",{className:"profile-external-badge",children:[o.jsx("span",{children:"Visit Profile"}),o.jsx(sf,{size:15})]})]}),o.jsxs("div",{className:"profile-card-body",children:[o.jsxs("div",{className:"profile-identity",children:[o.jsx("h3",{className:"profile-name",children:j.name}),o.jsx("span",{className:"profile-role",children:j.role})]}),o.jsxs("p",{className:"profile-handle",children:["@",j.handle]}),o.jsx("p",{className:"profile-desc",children:j.description})]})]},j.id))})]}),o.jsx("style",{children:`
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 1.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .profile-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .profile-card:hover .profile-external-badge {
          color: var(--accent-cyan);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateX(3px);
        }

        .profile-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .profile-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-linkedin {
          color: #38bdf8;
        }

        .text-github {
          color: #f8fafc;
        }

        .text-leetcode {
          color: #fbbf24;
        }

        .profile-external-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .profile-name {
          font-size: 1.35rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .profile-role {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-cyan);
          margin-bottom: 0.25rem;
        }

        .profile-handle {
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: #93c5fd;
          margin-bottom: 0.85rem;
        }

        .profile-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `})]})}function Af(){const[w,j]=Me.useState(!1),[h,J]=Me.useState({name:"",email:"",subject:"",message:""}),[S,D]=Me.useState(!1),V="gayathrijinka2005@gmail.com",K="+91 8121086697",I=async()=>{try{await navigator.clipboard.writeText(V),j(!0),setTimeout(()=>j(!1),2500)}catch{j(!1)}},re=B=>{J($=>({...$,[B.target.name]:B.target.value}))},ae=B=>{B.preventDefault();const $=encodeURIComponent(h.subject||`Inquiry from ${h.name}`),ke=encodeURIComponent(`Hi Gayathri,

Name: ${h.name}
Email: ${h.email}

Message:
${h.message}`);window.location.href=`mailto:${V}?subject=${$}&body=${ke}`,D(!0),setTimeout(()=>D(!1),5e3)};return o.jsxs("section",{id:"contact",className:"section-wrapper contact-section","aria-label":"Contact Section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-badge",children:"Get In Touch"}),o.jsxs("h2",{className:"section-title",children:["Let's Start a ",o.jsx("span",{className:"text-gradient",children:"Conversation"})]}),o.jsx("p",{className:"section-subtitle",children:"Open to software engineering internships, AI/ML roles, collaborative student research, and technical inquiries."})]}),o.jsxs("div",{className:"contact-grid",children:[o.jsxs("div",{className:"card-glass contact-info-card",children:[o.jsx("h3",{className:"contact-info-title",children:"Direct Contact Information"}),o.jsx("p",{className:"contact-info-intro",children:"Feel free to reach out directly via email, phone, or connect with me through my professional channels."}),o.jsxs("div",{className:"contact-methods",children:[o.jsxs("div",{className:"contact-method-item",children:[o.jsx("div",{className:"method-icon-box",children:o.jsx(Ll,{size:20,className:"method-icon"})}),o.jsxs("div",{className:"method-details",children:[o.jsx("span",{className:"method-label",children:"Email Address"}),o.jsx("a",{href:`mailto:${V}`,className:"method-value",children:V}),o.jsx("button",{type:"button",className:"copy-email-btn",onClick:I,title:"Copy email to clipboard",children:w?o.jsxs(o.Fragment,{children:[o.jsx(Uu,{size:13,className:"text-emerald"}),o.jsx("span",{className:"text-emerald",children:"Copied to clipboard!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(gf,{size:13}),o.jsx("span",{children:"Copy address"})]})})]})]}),o.jsxs("div",{className:"contact-method-item",children:[o.jsx("div",{className:"method-icon-box",children:o.jsx(Sf,{size:20,className:"method-icon"})}),o.jsxs("div",{className:"method-details",children:[o.jsx("span",{className:"method-label",children:"Phone Number"}),o.jsx("a",{href:`tel:${K.replace(/\s+/g,"")}`,className:"method-value",children:K}),o.jsx("span",{className:"method-subtext",children:"Available Mon–Sat during work hours"})]})]}),o.jsxs("div",{className:"contact-method-item",children:[o.jsx("div",{className:"method-icon-box",children:o.jsx(Do,{size:20,className:"method-icon"})}),o.jsxs("div",{className:"method-details",children:[o.jsx("span",{className:"method-label",children:"Current Location"}),o.jsx("span",{className:"method-value",children:"VIT-AP University, Andhra Pradesh, India"}),o.jsx("span",{className:"method-subtext",children:"Open to remote & on-site opportunities"})]})]})]}),o.jsxs("div",{className:"contact-resume-cta",children:[o.jsxs("div",{children:[o.jsx("strong",{className:"resume-cta-title",children:"Looking for a PDF Resume?"}),o.jsx("p",{className:"resume-cta-desc",children:"Download my updated academic & technical resume."})]}),o.jsxs("a",{href:"./assets/resume.pdf",download:"Gayathri_J_Resume.pdf",className:"btn btn-sm btn-outline",children:[o.jsx(Ml,{size:14}),o.jsx("span",{children:"Resume PDF"})]})]})]}),o.jsxs("div",{className:"card-glass contact-form-card",children:[o.jsx("h3",{className:"form-card-title",children:"Send a Direct Message"}),o.jsx("p",{className:"form-card-desc",children:"Fill out the form below to immediately draft and send an email directly to my inbox."}),o.jsxs("form",{onSubmit:ae,className:"contact-form",children:[o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{htmlFor:"contact-name",className:"form-label",children:["Your Name ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"text",id:"contact-name",name:"name",required:!0,placeholder:"e.g. John Doe / Tech Recruiter",value:h.name,onChange:re,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{htmlFor:"contact-email",className:"form-label",children:["Your Email ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"email",id:"contact-email",name:"email",required:!0,placeholder:"e.g. recruiter@company.com",value:h.email,onChange:re,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{htmlFor:"contact-subject",className:"form-label",children:["Subject ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"text",id:"contact-subject",name:"subject",required:!0,placeholder:"e.g. Internship Opportunity / Collaboration",value:h.subject,onChange:re,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{htmlFor:"contact-message",className:"form-label",children:["Message ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("textarea",{id:"contact-message",name:"message",required:!0,rows:4,placeholder:"Write your message here...",value:h.message,onChange:re,className:"form-textarea"})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",children:[o.jsx(Nf,{size:16}),o.jsx("span",{children:"Open Mail Client & Send"})]}),S&&o.jsxs("div",{className:"form-success-banner",children:[o.jsx(Uu,{size:16}),o.jsx("span",{children:"Your email client is opening with your formatted message!"})]})]})]})]})]}),o.jsx("style",{children:`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-info-card,
        .contact-form-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .contact-info-card,
          .contact-form-card {
            padding: 1.5rem 1.25rem;
          }
        }

        .contact-info-title,
        .form-card-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .contact-info-intro,
        .form-card-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-method-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .method-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-icon {
          color: var(--accent-cyan);
        }

        .method-details {
          display: flex;
          flex-direction: column;
        }

        .method-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .method-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          word-break: break-all;
        }

        .method-value:hover {
          color: var(--accent-cyan);
        }

        .method-subtext {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .copy-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: var(--accent-cyan);
          font-size: 0.775rem;
          cursor: pointer;
          margin-top: 0.35rem;
          padding: 0;
          font-family: inherit;
        }

        .copy-email-btn:hover {
          text-decoration: underline;
        }

        .text-emerald {
          color: #34d399 !important;
        }

        .contact-resume-cta {
          margin-top: auto;
          padding: 1.25rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        @media (max-width: 500px) {
          .contact-resume-cta {
            flex-direction: column;
            text-align: center;
          }
        }

        .resume-cta-title {
          display: block;
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .resume-cta-desc {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Form Controls */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .required {
          color: #f43f5e;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-muted);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.85rem;
        }

        .form-success-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
          font-size: 0.825rem;
        }
      `})]})}function Ff(){const w=()=>{window.scrollTo({top:0,behavior:"smooth"})},j=new Date().getFullYear();return o.jsxs("footer",{className:"portfolio-footer",role:"contentinfo",children:[o.jsxs("div",{className:"container footer-container",children:[o.jsxs("div",{className:"footer-top",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("span",{className:"brand-badge",children:"GJ"}),o.jsxs("div",{children:[o.jsx("span",{className:"footer-name",children:"Gayathri J"}),o.jsx("p",{className:"footer-tagline",children:"Computer Science & Engineering • VIT-AP University"})]})]}),o.jsxs("div",{className:"footer-links-group",children:[o.jsx("a",{href:"#about",className:"footer-link",children:"About"}),o.jsx("a",{href:"#education",className:"footer-link",children:"Education"}),o.jsx("a",{href:"#skills",className:"footer-link",children:"Skills"}),o.jsx("a",{href:"#projects",className:"footer-link",children:"Projects"}),o.jsx("a",{href:"#certifications",className:"footer-link",children:"Certifications"}),o.jsx("a",{href:"#profiles",className:"footer-link",children:"Profiles"}),o.jsx("a",{href:"#contact",className:"footer-link",children:"Contact"}),o.jsx("a",{href:"./assets/resume.pdf",download:"Gayathri_J_Resume.pdf",className:"footer-link text-highlight",children:"Resume"})]}),o.jsxs("div",{className:"footer-social-row",children:[o.jsx("a",{href:"https://www.linkedin.com/in/gayathri-j-08604032a",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"LinkedIn",children:o.jsx(Io,{size:18})}),o.jsx("a",{href:"https://github.com/Gayathrijinka",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"GitHub",children:o.jsx(Rl,{size:18})}),o.jsx("a",{href:"https://leetcode.com/u/Gayathri_jinka/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"LeetCode",children:o.jsx(Tl,{size:18})}),o.jsx("a",{href:"mailto:gayathrijinka2005@gmail.com",className:"footer-social-icon","aria-label":"Email",children:o.jsx(Ll,{size:18})})]})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("p",{className:"footer-copy",children:["© ",j," Gayathri J. Crafted with React • Hosted with pride."]}),o.jsxs("button",{type:"button",className:"scroll-top-btn",onClick:w,"aria-label":"Scroll back to top",children:[o.jsx("span",{children:"Back to top"}),o.jsx(uf,{size:15})]})]})]}),o.jsx("style",{children:`
        .portfolio-footer {
          background: rgba(6, 9, 16, 0.95);
          border-top: 1px solid var(--border-subtle);
          padding: 4rem 0 2.5rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 860px) {
          .footer-top {
            flex-direction: column;
            text-align: center;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        @media (max-width: 860px) {
          .footer-brand {
            flex-direction: column;
          }
        }

        .footer-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-tagline {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }

        .footer-links-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          justify-content: center;
        }

        .footer-link {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-cyan);
        }

        .text-highlight {
          color: #93c5fd;
          font-weight: 600;
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .footer-social-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .footer-social-icon:hover {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        .footer-copy {
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-family: inherit;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-light);
          background: rgba(51, 65, 85, 0.6);
        }
      `})]})}function Of(){return o.jsxs("div",{className:"portfolio-app",children:[o.jsxs("div",{className:"ambient-bg","aria-hidden":"true",children:[o.jsx("div",{className:"ambient-blob ambient-blob-1"}),o.jsx("div",{className:"ambient-blob ambient-blob-2"}),o.jsx("div",{className:"ambient-blob ambient-blob-3"})]}),o.jsx(_f,{}),o.jsxs("main",{id:"main-content",role:"main",children:[o.jsx(bf,{}),o.jsx(Mf,{}),o.jsx(Lf,{}),o.jsx(Tf,{}),o.jsx(Rf,{}),o.jsx(If,{}),o.jsx(Df,{}),o.jsx(Af,{})]}),o.jsx(Ff,{})]})}nf.createRoot(document.getElementById("root")).render(o.jsx(Kd.StrictMode,{children:o.jsx(Of,{})}));
