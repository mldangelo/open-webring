_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{E7j8:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return s}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o),i=t("nOHt"),a=function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)(c.a,{href:e.link,as:e.link,children:Object(r.jsx)("a",{children:e.name})})," ","- ",e.title]},e.link)},s=!0;n.default=function(e){var n,t=e.data,o=Object(i.useRouter)().query.slug,s=(void 0===o?[]:o).join("/");return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:["Back to"," ",Object(r.jsx)(c.a,{href:"/",as:"/",children:Object(r.jsx)("a",{children:"RingWorld"})})]}),Object(r.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(r.jsx)("h3",{children:null===t||void 0===t?void 0:t.description}),(null===t||void 0===t?void 0:t.sites)?" - ".concat(null===t||void 0===t||null===(n=t.sites)||void 0===n?void 0:n.length," sites - "):void 0,Object(r.jsx)("ul",{children:(null===t||void 0===t?void 0:t.sites)&&t.sites.map(a)}),Object(r.jsxs)("font",{size:"-1",children:[" ",Object(r.jsx)(c.a,{href:"/ring/".concat(s,".json"),children:Object(r.jsx)("a",{children:"JSON"})})," ",Object(r.jsx)(c.a,{href:"/ring/".concat(s,"/random"),children:Object(r.jsx)("a",{children:"Random"})})]})," ",Object(r.jsx)(c.a,{href:"/ring/".concat(s,"/search"),children:Object(r.jsx)("a",{children:Object(r.jsx)("font",{size:"-1",children:"Search Ring"})})})]})}},GUbG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ring/[...slug]",function(){return t("E7j8")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),i=t("elyg"),a=t("nOHt"),s=t("vNVm"),l={};function u(e,n,t,r){if((0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,j=e.shallow,b=e.scroll,O=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=c.Children.only(v),x=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),_=r(y,2),m=_[0],w=_[1],E=c.default.useCallback((function(e){m(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,m]);(0,c.useEffect)((function(){var e=w&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof O?O:t&&t.locale,o=l[d+"%"+h+(r?"%"+r:"")];e&&!o&&u(t,d,h,{locale:r})}),[h,d,w,O,n,t]);var M={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,h,p,j,b,O)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(M.href=(0,i.addBasePath)((0,i.addLocale)(h,"undefined"!==typeof O?O:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(g,M)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,o=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){c.unobserve(e),0===i.size&&(c.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){a||f||(0,i.default)((function(){return d(!0)}))}),[f]),[h,f]};var c=t("q1tI"),i=o(t("0G5g")),a="undefined"!==typeof IntersectionObserver;var s=new Map}},[["GUbG",0,1,2]]]);