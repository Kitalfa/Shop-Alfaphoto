(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[9743],{89881:(p,u,n)=>{var r=n(47816),a=n(99291),o=a(r);p.exports=o},69199:(p,u,n)=>{var r=n(89881),a=n(98612);function o(s,e){var d=-1,t=a(s)?Array(s.length):[];return r(s,function(i,x,h){t[++d]=e(i,x,h)}),t}p.exports=o},82689:(p,u,n)=>{var r=n(29932),a=n(97786),o=n(67206),s=n(69199),e=n(71131),d=n(7518),t=n(85022),i=n(6557),x=n(1469);function h(E,l,c){l.length?l=r(l,function(g){return x(g)?function(v){return a(v,g.length===1?g[0]:g)}:g}):l=[i];var m=-1;l=r(l,d(o));var f=s(E,function(g,v,j){var P=r(l,function(O){return O(g)});return{criteria:P,index:++m,value:g}});return e(f,function(g,v){return t(g,v,c)})}p.exports=h},71131:p=>{function u(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}p.exports=u},26393:(p,u,n)=>{var r=n(33448);function a(o,s){if(o!==s){var e=o!==void 0,d=o===null,t=o===o,i=r(o),x=s!==void 0,h=s===null,E=s===s,l=r(s);if(!h&&!l&&!i&&o>s||i&&x&&E&&!h&&!l||d&&x&&E||!e&&E||!t)return 1;if(!d&&!i&&!l&&o<s||l&&e&&t&&!d&&!i||h&&e&&t||!x&&t||!E)return-1}return 0}p.exports=a},85022:(p,u,n)=>{var r=n(26393);function a(o,s,e){for(var d=-1,t=o.criteria,i=s.criteria,x=t.length,h=e.length;++d<x;){var E=r(t[d],i[d]);if(E){if(d>=h)return E;var l=e[d];return E*(l=="desc"?-1:1)}}return o.index-s.index}p.exports=a},99291:(p,u,n)=>{var r=n(98612);function a(o,s){return function(e,d){if(e==null)return e;if(!r(e))return o(e,d);for(var t=e.length,i=s?t:-1,x=Object(e);(s?i--:++i<t)&&d(x[i],i,x)!==!1;);return e}}p.exports=a},89734:(p,u,n)=>{var r=n(21078),a=n(82689),o=n(5976),s=n(16612),e=o(function(d,t){if(d==null)return[];var i=t.length;return i>1&&s(d,t[0],t[1])?t=[]:i>2&&s(t[0],t[1],t[2])&&(t=[t[0]]),a(d,r(t,1),[])});p.exports=e},71590:(p,u,n)=>{"use strict";n.d(u,{A:()=>d});var r=n(85893),a=n(71997),o=n(16607);const s=(0,a.ZP)(o.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:t})=>t?"auto 1fr":"1fr"};
`,e=(0,a.ZP)(o.x)`
  overflow-x: hidden;
`,d=({sideNav:t,children:i})=>(0,r.jsxs)(s,{hasSideNav:Boolean(t),children:[t,(0,r.jsx)(e,{paddingBottom:10,children:i})]})},29824:(p,u,n)=>{"use strict";n.d(u,{r:()=>E});var r=n(85893),a=n(67294),o=n(62577),s=n(73727),e=n(71997),d=n(66362),t=n(10574),i=n(16607);const x=e.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:l})=>l?"none":void 0};
  color: ${({disabled:l,theme:c})=>l?c.colors.neutral600:c.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${t.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:l})=>l.colors.primary500};
  }

  &:active {
    color: ${({theme:l})=>l.colors.primary700};
  }

  ${d.BF};
`,h=(0,e.ZP)(i.x)`
  display: flex;
`,E=a.forwardRef(({children:l,href:c,to:m,disabled:f=!1,startIcon:g,endIcon:v,...j},P)=>{const O=c?"_blank":void 0,M=c?"noreferrer noopener":void 0;return(0,r.jsxs)(x,{as:m&&!f?s.OL:"a",target:O,rel:M,to:f?void 0:m,href:f?"#":c,disabled:f,ref:P,...j,children:[g&&(0,r.jsx)(h,{as:"span","aria-hidden":!0,paddingRight:2,children:g}),(0,r.jsx)(t.Z,{children:l}),v&&!c&&(0,r.jsx)(h,{as:"span","aria-hidden":!0,paddingLeft:2,children:v}),c&&(0,r.jsx)(h,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,r.jsx)(o.Z,{})})]})})},56233:(p,u,n)=>{"use strict";n.d(u,{m:()=>d});var r=n(85893),a=n(71997),o=n(31988);const s=`${232/16}rem`,e=(0,a.ZP)(o.r)`
  width: ${s};
  background: ${({theme:t})=>t.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  z-index: 1;
`,d=({ariaLabel:t,...i})=>(0,r.jsx)(e,{"aria-label":t,as:"nav",...i})},71603:(p,u,n)=>{"use strict";n.d(u,{p:()=>g});var r=n(85893),a=n(67294),o=n(90272),s=n(71997),e=n(40840),d=n(92058);const t=v=>{const j=(0,a.useRef)();return(0,a.useEffect)(()=>{j.current=v}),j.current};var i=n(26910),x=n(16607),h=n(49185),E=n(35987),l=n(96987),c=n(10574),m=n(96208);const f=(0,s.ZP)(i.i)`
  width: ${24/16}rem;
  background-color: ${({theme:v})=>v.colors.neutral200};
`,g=({as:v="h2",label:j,searchLabel:P="",searchable:O=!1,onChange:M=()=>{},value:C="",onClear:L=()=>{},onSubmit:D=()=>{},id:A})=>{const[_,T]=(0,a.useState)(!1),W=t(_),K=(0,d.M)(A),y=(0,a.useRef)(void 0),R=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{_&&y.current&&y.current.focus(),W&&!_&&R.current&&R.current.focus()},[_,W]);const $=()=>{T(B=>!B)},U=B=>{L(B),y.current.focus()},Z=B=>{B.relatedTarget?.id!==K&&T(!1)},S=B=>{B.key===e.y.ESCAPE&&T(!1)};return _?(0,r.jsxs)(x.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(h.U,{children:(0,r.jsx)(E.w,{name:"searchbar",value:C,onChange:M,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:S,ref:y,onBlur:Z,onClear:U,onSubmit:D,clearLabel:"Clear",size:"S",children:P})}),(0,r.jsx)(x.x,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(f,{})})]}):(0,r.jsxs)(x.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(c.Z,{variant:"beta",as:v,children:j}),O&&(0,r.jsx)(m.h,{ref:R,onClick:$,label:P,icon:(0,r.jsx)(o.Z,{})})]}),(0,r.jsx)(x.x,{paddingTop:4,children:(0,r.jsx)(f,{})})]})}},36636:(p,u,n)=>{"use strict";n.d(u,{E:()=>l});var r=n(85893),a=n(67294),o=n(59233),s=n(71997),e=n(16607),d=n(10574),t=n(96987),i=n(53342);const x=(0,s.ZP)(e.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:c})=>c.colors.neutral800};
  svg > * {
    fill: ${({theme:c})=>c.colors.neutral600};
  }

  &.active {
    ${({theme:c})=>`
      background-color: ${c.colors.primary100};
      border-right: 2px solid ${c.colors.primary600};
      svg > * {
        fill: ${c.colors.primary700};
      }
      ${d.Z} {
        color: ${c.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,h=(0,s.ZP)(o.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:c,$active:m})=>m?c.colors.primary600:c.colors.neutral600};
  }
`,E=s.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,l=a.forwardRef(({children:c,icon:m=null,withBullet:f=!1,as:g=i.f,isSubSectionChild:v=!1,...j},P)=>(0,r.jsxs)(x,{as:g,icon:m,background:"neutral100",paddingLeft:v?9:7,paddingBottom:2,paddingTop:2,ref:P,...j,children:[(0,r.jsxs)(t.k,{children:[m?(0,r.jsx)(E,{children:m}):(0,r.jsx)(h,{}),(0,r.jsx)(e.x,{paddingLeft:2,children:(0,r.jsx)(d.Z,{as:"span",children:c})})]}),f&&(0,r.jsx)(e.x,{as:t.k,paddingRight:4,children:(0,r.jsx)(h,{$active:!0})})]}))},21660:(p,u,n)=>{"use strict";n.d(u,{D:()=>m});var r=n(85893),a=n(67294),o=n(71997),s=n(58471),e=n(96987),d=n(16607),t=n(10574);const i=(0,o.ZP)(e.k)`
  border: none;
  padding: 0;
  background: transparent;
`,x=o.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:f})=>f?"0deg":"180deg"});
`,h=({collapsable:f=!1,label:g,onClick:v=()=>{},ariaExpanded:j,ariaControls:P})=>f?(0,r.jsxs)(i,{as:"button",onClick:v,"aria-expanded":j,"aria-controls":P,textAlign:"left",children:[(0,r.jsx)(d.x,{paddingRight:1,children:(0,r.jsx)(t.Z,{variant:"sigma",textColor:"neutral600",children:g})}),f&&(0,r.jsx)(x,{rotated:j,children:(0,r.jsx)(s.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(i,{children:(0,r.jsx)(d.x,{paddingRight:1,children:(0,r.jsx)(t.Z,{variant:"sigma",textColor:"neutral600",children:g})})});var E=n(92058),l=n(18787);const c=(0,o.ZP)(d.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:f})=>f.colors.neutral500};
    }
  }
`,m=({collapsable:f=!1,label:g,badgeLabel:v,children:j,id:P})=>{const[O,M]=(0,a.useState)(!0),C=(0,E.M)(P),L=()=>{M(D=>!D)};return(0,r.jsxs)(e.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(c,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(d.x,{position:"relative",paddingRight:v?6:0,children:[(0,r.jsx)(h,{onClick:L,ariaExpanded:O,ariaControls:C,collapsable:f,label:g}),v&&(0,r.jsx)(l.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:v})]})}),(!f||O)&&(0,r.jsx)("ol",{id:C,children:a.Children.map(j,(D,A)=>(0,r.jsx)("li",{children:D},A))})]})}},61499:(p,u,n)=>{"use strict";n.d(u,{Z:()=>e});var r=n(85893),a=n(67294),o=n(16607),s=n(96987);const e=({children:d,spacing:t=2,horizontal:i=!1,...x})=>(0,r.jsx)(o.x,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(s.k,{as:"ol",gap:t,direction:i?"row":"column",alignItems:i?"center":"stretch",...x,children:a.Children.map(d,(h,E)=>(0,r.jsx)("li",{children:h},E))})})},59233:(p,u,n)=>{"use strict";n.d(u,{Z:()=>o});var r=n(85893);const a=s=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 4 4",...s,children:(0,r.jsx)("rect",{width:4,height:4,fill:"#A5A5BA",rx:2})}),o=a},46759:(p,u,n)=>{"use strict";n.d(u,{Z:()=>o});var r=n(85893);const a=s=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,r.jsx)("path",{fill:"#8E8EA9",d:"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"})}),o=a}}]);
