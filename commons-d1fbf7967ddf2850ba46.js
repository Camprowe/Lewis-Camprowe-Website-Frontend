(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";var n,a=r("FdF9"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function c(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),c()},o.componentDidUpdate=function(){c()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",l),d}}},"9YXZ":function(e,t,r){e.exports={footer:"footer-module--footer--1sNjJ",logo:"footer-module--logo--3V8aA",socials:"footer-module--socials--3x9xx"}},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),u=n(r("FdF9")),c=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=m(t||r||[]);return n&&n.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=p(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function T(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+u+o+l+r+n+t+i+a+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=u.default.createElement(I,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),l):l})),I=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},m,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,T=e.loading,O=e.draggable,A=h||g;if(!A)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:j?1:0,transition:P?"opacity "+y+"ms":"none"},l),R="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},M=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&N,l,f),z={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:w},H=this.state.isHydrated?m(A):A[0];if(h)return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),R&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&N)}),H.base64&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:z,imageVariants:A,generateSources:C}),H.tracedSVG&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:z,imageVariants:A,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,E(A),u.default.createElement(I,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:r,title:t,loading:T},H,{imageVariants:A}))}}));if(g){var V=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete V.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},R&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&N)}),H.base64&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:z,imageVariants:A,generateSources:C}),H.tracedSVG&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:z,imageVariants:A,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,E(A),u.default.createElement(I,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:r,title:t,loading:T},H,{imageVariants:A}))}}))}return null},t}(u.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function R(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");c.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}j.propTypes={resolutions:P,sizes:k,fixed:R(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:R(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=j;t.default=N},"D+oU":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("FdF9"),a=r("JAJf"),i=r.n(a),o=r("9eSz"),l=r.n(o);function s(e){return n.default.createElement("section",{className:i.a.section},n.default.createElement("div",{className:i.a.gridContainer},n.default.createElement("div",{className:i.a.gridItem},n.default.createElement("div",{className:i.a.make},n.default.createElement("h2",null,e.title),n.default.createElement("p",null,e.description))),n.default.createElement("div",{className:i.a.gridItem},n.default.createElement(l.a,{fluid:e.image,alt:"..."}))))}},Eg6Q:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("FdF9"),a=r("Wbzz"),i=r("uEY5"),o=r.n(i);function l(){return n.default.createElement("header",{className:o.a.header},n.default.createElement("div",{className:o.a.logo},n.default.createElement(a.a,{to:"/"},"Lewis ",n.default.createElement("span",{className:o.a.logoMiddle},"Matthew")," Campbell")),n.default.createElement("div",{className:o.a.blog},n.default.createElement(a.a,{to:"/blog/"},"Blog")))}},JAJf:function(e,t,r){e.exports={section:"headerSection-module--section--1BaJS",gridContainer:"headerSection-module--gridContainer--138Mw",gridItem:"headerSection-module--gridItem--3KYBz",make:"headerSection-module--make--2d2oN"}},YVoz:function(e,t,r){"use strict";e.exports=Object.assign},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,s,u,c;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(c=t.entries();!(s=c.next()).done;)if(!o.has(s.value[0]))return!1;for(c=t.entries();!(s=c.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(c=t.entries();!(s=c.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(u=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,u[s]))return!1;if(r&&t instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],o[u[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},fItr:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("FdF9"),a=r("Wbzz"),i=r("9YXZ"),o=r.n(i);function l(){return n.default.createElement("header",{className:o.a.footer},n.default.createElement("div",{className:o.a.logo},n.default.createElement(a.a,{to:"/"},"Lewis Matthew Campbell")),n.default.createElement("div",{className:o.a.socials},n.default.createElement("span",null,n.default.createElement("li",null,n.default.createElement("a",{"aria-label":"Instagram Lewis Campbell",href:"https://instagram.com/lewismcampbell",title:"Instagram"},n.default.createElement("svg",{viewBox:"0 0 512 512"},n.default.createElement("g",null,n.default.createElement("path",{d:"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"}),n.default.createElement("path",{d:"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"}),n.default.createElement("circle",{cx:"351.5",cy:"160.5",r:"21.5"})))))),n.default.createElement("span",null,n.default.createElement("li",null,n.default.createElement("a",{"aria-label":"Youtube Lewis Campbell",href:"https://www.youtube.com/channel/UCYRHlGLDqAJbe7POuSAtmlA?sub_confirmation=1",title:"YouTube"},n.default.createElement("svg",{viewBox:"0 0 512 512"},n.default.createElement("path",{d:"M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"}))))),n.default.createElement("span",null,n.default.createElement("li",null,n.default.createElement("a",{"aria-label":"Twitter Lewis Campbell",href:"https://twitter.com/lewismcampbell",title:"Twitter"},n.default.createElement("svg",{viewBox:"0 0 512 512"},n.default.createElement("path",{d:"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}))))),n.default.createElement("span",null,n.default.createElement("li",null,n.default.createElement("a",{"aria-label":"Github Lewis Campbell",href:"https://github.com/lewismcampbell",title:"GitHub"},n.default.createElement("svg",{viewBox:"0 0 512 512"},n.default.createElement("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})))))))}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("E9XD");var n,a,i,o,l=r("17x9"),s=r.n(l),u=r("8+s/"),c=r.n(u),d=r("bmMU"),f=r.n(d),p=r("FdF9"),m=r("YVoz"),h=r.n(m),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",S="http-equiv",C="innerHTML",O="itemprop",A="name",L="property",x="rel",I="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",R="defer",N="encodeSpecialCharacters",M="onChangeClientState",z="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),V=[v.NOSCRIPT,v.SCRIPT,v.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},D=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=Z(e,v.TITLE),r=Z(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,k);return t||n||void 0},J=function(e){return Z(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],s=l.toLowerCase();-1===t.indexOf(s)||r===x&&"canonical"===e[r].toLowerCase()||s===x&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==C&&l!==E&&l!==O||(r=l)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],s=h()({},n[l],a[l]);n[l]=s}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),$=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:e.cancelAnimationFrame||$,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;le(v.BODY,n),le(v.HTML,a),oe(d,f);var p={baseTag:se(v.BASE,r),linkTags:se(v.LINK,i),metaTags:se(v.META,o),noscriptTags:se(v.NOSCRIPT,l),scriptTags:se(v.SCRIPT,u),styleTags:se(v.STYLE,c)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var s=o[l],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var c=i.indexOf(s);-1!==c&&i.splice(c,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=ce(r,n),[p.default.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return ce(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),p.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(g,r,n),htmlAttributes:de(b,a,n),link:de(v.LINK,i,n),meta:de(v.META,o,n),noscript:de(v.NOSCRIPT,l,n),script:de(v.SCRIPT,s,n),style:de(v.STYLE,u,n),title:de(v.TITLE,{title:d,titleAttributes:f},n)}},pe=c()((function(e){return{baseTag:K([T,j],e),bodyAttributes:G(g,e),defer:Z(e,R),encode:Z(e,N),htmlAttributes:G(b,e),linkTags:X(v.LINK,[x,T],e),metaTags:X(v.META,[A,w,S,L,O],e),noscriptTags:X(v.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:X(v.SCRIPT,[I,C],e),styleTags:X(v.STYLE,[E],e),title:U(e),titleAttributes:G(y,e)}}),(function(e){ne&&te(ne),e.defer?ne=ee((function(){ae(e,(function(){ne=null}))})):(ae(e),ne=null)}),fe)((function(){return null})),me=(a=pe,o=i=function(e){function t(){return q(this,t),D(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return _({},a,((t={})[n.type]=o,t.titleAttributes=_({},i),t));case v.BODY:return _({},a,{bodyAttributes:_({},i)});case v.HTML:return _({},a,{htmlAttributes:_({},i)})}return _({},a,((r={})[n.type]=_({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach((function(t){var n;r=_({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(Y(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=_({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.default.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.default.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},uEY5:function(e,t,r){e.exports={header:"header-module--header--2_vNE",logo:"header-module--logo--1S0NZ",blog:"header-module--blog--2uPnt"}}}]);
//# sourceMappingURL=commons-d1fbf7967ddf2850ba46.js.map