_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{E7j8:function(n,e,i){"use strict";i.r(e),i.d(e,"__N_SSG",(function(){return j}));var c=i("nKUr"),t=i("q1tI"),s=i("YFqc"),r=i.n(s),d=i("nOHt"),l=i("9ixD"),o=function(n){return Object(c.jsxs)("li",{children:[Object(c.jsx)(r.a,{href:n.link,as:n.link,children:Object(c.jsx)("a",{children:n.name})})," ","- ",n.title]},n.link)},j=!0;e.default=function(n){var e,i=n.data,s=Object(d.useRouter)(),j=s.query,a=j.slug,h=void 0===a?[]:a,u=j.index;Object(t.useEffect)((function(){if(s.replace(s.asPath.split("?")[0],void 0,{shallow:!0}),u&&(null===i||void 0===i?void 0:i.sites))return s.push(i.sites[parseInt(u,10)].link)}),[]);var b=h.join("/");return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a,{title:"Open-WebRing | ".concat(null===i||void 0===i?void 0:i.name),description:null===i||void 0===i?void 0:i.description}),Object(c.jsxs)("div",{children:["Back to"," ",Object(c.jsx)(r.a,{href:"/",as:"/",children:Object(c.jsx)("a",{children:"RingWorld"})})]}),Object(c.jsx)("h1",{children:null===i||void 0===i?void 0:i.name}),Object(c.jsx)("h3",{children:null===i||void 0===i?void 0:i.description}),(null===i||void 0===i?void 0:i.sites)?" - ".concat(null===i||void 0===i||null===(e=i.sites)||void 0===e?void 0:e.length," sites - "):void 0,Object(c.jsx)("ul",{children:(null===i||void 0===i?void 0:i.sites)&&i.sites.map(o)}),Object(c.jsxs)("font",{size:"-1",children:[" ",Object(c.jsx)(r.a,{href:"/ring/".concat(b,".json"),children:Object(c.jsx)("a",{children:"JSON"})})," ",Object(c.jsx)(r.a,{href:"/ring/".concat(b,"/random"),children:Object(c.jsx)("a",{children:"Random"})})]})," ",Object(c.jsx)(r.a,{href:"/ring/".concat(b,"/search"),children:Object(c.jsx)("a",{children:Object(c.jsx)("font",{size:"-1",children:"Search Ring"})})})]})}},GUbG:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ring/[...slug]",function(){return i("E7j8")}])}},[["GUbG",0,1,2,3]]]);