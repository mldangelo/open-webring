(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return l}});var n=r(9008),o=r(7294);function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var i={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},p=function(e){var t=[];e.titleTemplate&&(i.templateTitle=e.titleTemplate);var r="";e.title&&(r=e.title,i.templateTitle&&(r=i.templateTitle.replace(/%s/g,(function(){return r}))),t.push(o.createElement("title",{key:"title"},r)));var n=e.noindex||i.noindex||e.dangerouslySetAllPagesToNoIndex,a=e.nofollow||i.nofollow||e.dangerouslySetAllPagesToNoFollow;if(n||a?(e.dangerouslySetAllPagesToNoIndex&&(i.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(i.nofollow=!0),t.push(o.createElement("meta",{key:"robots",name:"robots",content:(n?"noindex":"index")+","+(a?"nofollow":"follow")})),t.push(o.createElement("meta",{key:"googlebot",name:"googlebot",content:(n?"noindex":"index")+","+(a?"nofollow":"follow")}))):(t.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(o.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var p=e.openGraph.type.toLowerCase();t.push(o.createElement("meta",{key:"og:type",property:"og:type",content:p})),"profile"===p&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===p&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,r){t.push(o.createElement("meta",{key:"book:author:0"+r,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,r){t.push(o.createElement("meta",{key:"book:tag:0"+r,property:"book:tag",content:e}))}))):"article"===p&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,r){t.push(o.createElement("meta",{key:"article:author:0"+r,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,r){t.push(o.createElement("meta",{key:"article:tag:0"+r,property:"article:tag",content:e}))}))):"video.movie"!==p&&"video.episode"!==p&&"video.tv_show"!==p&&"video.other"!==p||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,r){e.profile&&t.push(o.createElement("meta",{key:"video:actor:0"+r,property:"video:actor",content:e.profile})),e.role&&t.push(o.createElement("meta",{key:"video:actor:role:0"+r,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,r){t.push(o.createElement("meta",{key:"video:director:0"+r,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,r){t.push(o.createElement("meta",{key:"video:writer:0"+r,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,r){t.push(o.createElement("meta",{key:"video:tag:0"+r,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(o.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||r})),(e.openGraph.description||e.description)&&t.push(o.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(i.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(i.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,r){t.push(o.createElement("meta",{key:"og:image:0"+r,property:"og:image",content:e.url})),e.alt&&t.push(o.createElement("meta",{key:"og:image:alt0"+r,property:"og:image:alt",content:e.alt})),e.width?t.push(o.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:e.width.toString()})):i.defaultOpenGraphImageWidth&&t.push(o.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:i.defaultOpenGraphImageWidth.toString()})),e.height?t.push(o.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:e.height.toString()})):i.defaultOpenGraphImageHeight&&t.push(o.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:i.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(i.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(i.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,r){t.push(o.createElement("meta",{key:"og:video:0"+r,property:"og:video",content:e.url})),e.alt&&t.push(o.createElement("meta",{key:"og:video:alt0"+r,property:"og:video:alt",content:e.alt})),e.width?t.push(o.createElement("meta",{key:"og:video:width0"+r,property:"og:video:width",content:e.width.toString()})):i.defaultOpenGraphVideoWidth&&t.push(o.createElement("meta",{key:"og:video:width0"+r,property:"og:video:width",content:i.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(o.createElement("meta",{key:"og:video:height"+r,property:"og:video:height",content:e.height.toString()})):i.defaultOpenGraphVideoHeight&&t.push(o.createElement("meta",{key:"og:video:height"+r,property:"og:video:height",content:i.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(o.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},l=(o.Component,function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,a=void 0!==r&&r,i=e.nofollow,l=e.description,c=e.canonical,u=e.openGraph,s=e.facebook,h=e.twitter,d=e.additionalMetaTags,f=e.titleTemplate,m=e.mobileAlternate,g=e.languageAlternates;return o.createElement(n.default,null,p({title:t,noindex:a,nofollow:i,description:l,canonical:c,facebook:s,openGraph:u,additionalMetaTags:d,twitter:h,titleTemplate:f,mobileAlternate:m,languageAlternates:g}))},t}(o.Component))},6071:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),i=r(1689),p=r(2441),l=r(5749),c={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,r=(0,p.useRouter)(),o=r&&r.asPath||"/",s=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],p=r[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):p||a}}),[o,e.href,e.as]),h=s.href,d=s.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var k=a.Children.only(f),b=k&&"object"===typeof k&&k.ref,G=(0,l.useIntersection)({rootMargin:"200px"}),E=n(G,2),w=E[0],O=E[1],_=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,a.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(h),n="undefined"!==typeof v?v:r&&r.locale,o=c[h+"%"+d+(n?"%"+n:"")];e&&!o&&u(r,h,d,{locale:n})}),[d,h,O,v,t,r]);var M={ref:_,onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,p,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==p&&(p=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:p}))}(e,r,h,d,m,g,y,v)},onMouseEnter:function(e){(0,i.isLocalURL)(h)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u(r,h,d,{priority:!0}))}};if(e.passHref||"a"===k.type&&!("href"in k.props)){var x="undefined"!==typeof v?v:r&&r.locale,S=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(d,x,r&&r.locales,r&&r.domainLocales);M.href=S||(0,i.addBasePath)((0,i.addLocale)(d,x,r&&r.defaultLocale))}return a.default.cloneElement(k,M)};t.default=s},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=(0,o.useRef)(),c=(0,o.useState)(!1),u=n(c,2),s=u[0],h=u[1],d=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||s||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=p.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return p.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),p.delete(o))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[r,t,s]);return(0,o.useEffect)((function(){if(!i&&!s){var e=(0,a.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=r(7294),a=r(8391),i="undefined"!==typeof IntersectionObserver;var p=new Map},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},7947:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=h,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),p=(a=r(617))&&a.__esModule?a:{default:a},l=r(3367),c=r(4287),u=r(7845);function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var p=o.key.slice(o.key.indexOf("$")+1);e.has(p)?a=!1:e.add(p)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,c=f.length;l<c;l++){var u=f[l];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var s=o.props[u],h=n[u]||new Set;"name"===u&&i||!h.has(s)?(h.add(s),n[u]=h):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return p["data-href"]=p.href,p.href=void 0,p["data-optimized-fonts"]=!0,i.default.cloneElement(e,p)}return i.default.cloneElement(e,{key:a})}))}function g(e){var t=e.children,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(p.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}g.rewind=function(){};var y=g;t.default=y},617:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),i=(r(1506),r(2205)),p=r(8585),l=r(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),s=function(e){i(r,e);var t=c(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=s},9008:function(e,t,r){e.exports=r(7947)},1664:function(e,t,r){e.exports=r(6071)}}]);