"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[5013],{75021:(p,_,t)=>{t.d(_,{q:()=>o});var e=t(67294),l=t(23246),s=t(88767);function o({enabled:d}={enabled:!0}){const{get:c}=(0,l.kY)(),{data:r,isError:a,isLoading:m}=(0,s.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await c("/admin/license-limit-information");return i},{enabled:d}),n=e.useMemo(()=>r??{},[r]),M=e.useCallback(i=>(n?.features??[]).find(L=>L.name===i)?.options??{},[n?.features]);return{license:n,getFeature:M,isError:a,isLoading:m}}},65013:(p,_,t)=>{t.r(_),t.d(_,{AdminSeatInfoEE:()=>A});var e=t(67294),l=t(6498),s=t(10574),o=t(96987),d=t(81315),c=t(85200),r=t(29430),a=t(23246),m=t(94417),n=t(62577),M=t(86896),i=t(70743),D=t(36364),L=t(75021);const C="https://cloud.strapi.io/profile/billing",I="https://strapi.io/billing/request-seats",A=()=>{const{formatMessage:E}=(0,M.Z)(),f=(0,i.v9)(D._),{isLoading:g,allowedActions:{canRead:R,canCreate:U,canUpdate:v,canDelete:B}}=(0,a.ss)(f.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:u,permittedSeats:O,isHostedOnStrapiCloud:P},isError:W,isLoading:K}=(0,L.q)({enabled:!g&&R&&U&&v&&B});return W||(g||K)||!O?null:e.createElement(l.P,{col:6,s:12},e.createElement(s.Z,{variant:"sigma",textColor:"neutral600"},E({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(o.k,{gap:2},e.createElement(o.k,null,e.createElement(s.Z,{as:"p"},E({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:O,enforcementUserCount:u,text:h=>e.createElement(s.Z,{fontWeight:"semiBold",textColor:u>O?"danger500":null},h)}))),T==="OVER_LIMIT"&&e.createElement(d.u,{description:E({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(c.J,{width:`${(0,a.Q1)(14)}rem`,height:`${(0,a.Q1)(14)}rem`,color:"danger500",as:m.Z}))),e.createElement(r.r,{href:P?C:I,isExternal:!0,endIcon:e.createElement(n.Z,null)},E({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:P})))}}}]);
