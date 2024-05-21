"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[6394],{84409:(R,l,e)=>{e.d(l,{p:()=>d});var t=e(67294),O=e(23246),_=e(88767);const d=(m={})=>{const{get:E}=(0,O.kY)(),{data:a,isLoading:n}=(0,_.useQuery)(["ee","providers"],async()=>{const{data:P}=await E("/admin/providers");return P},m);return{providers:t.useMemo(()=>a??[],[a]),isLoading:n}}},76394:(R,l,e)=>{e.r(l),e.d(l,{LoginEE:()=>o});var t=e(67294),O=e(26910),_=e(16607),d=e(96987),m=e(10574),E=e(45697),a=e.n(E),n=e(86896),M=e(71997),P=e(13320),u=e(31640),D=e(84409),v=e(80090);const i=(0,M.ZP)(O.i)`
  flex: 1;
`,o=c=>{const{formatMessage:s}=(0,n.Z)(),{isLoading:p,providers:g}=(0,D.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!p&&g.length===0?t.createElement(P.Md,null,t.createElement(u.Z,{...c})):t.createElement(P.Md,null,t.createElement(u.Z,{...c},t.createElement(_.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(i,null),t.createElement(_.x,{paddingLeft:3,paddingRight:3},t.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(v.Z,{providers:g,displayAllProviders:!1})))))};o.defaultProps={onSubmit:c=>c.preventDefault(),requestError:null},o.propTypes={formErrors:a().object.isRequired,modifiedData:a().object.isRequired,onChange:a().func.isRequired,onSubmit:a().func,requestError:a().object}},80090:(R,l,e)=>{e.d(l,{Z:()=>c});var t=e(67294),O=e(96987),_=e(81315),d=e(10574),m=e(31988),E=e(6498),a=e(45697),n=e.n(a),M=e(86896),P=e(73727),u=e(71997);const D=u.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,v=(0,u.ZP)(O.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,i=({provider:s})=>t.createElement(_.u,{label:s.displayName},t.createElement(D,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,s.displayName)));i.propTypes={provider:n().shape({icon:n().string,displayName:n().string.isRequired,uid:n().string.isRequired}).isRequired};const o=({providers:s,displayAllProviders:p})=>{const{formatMessage:g}=(0,M.Z)();return p?t.createElement(m.r,{gap:4},s.map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):s.length>2&&!p?t.createElement(m.r,{gap:4},s.slice(0,2).map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(E.P,{col:4},t.createElement(_.u,{label:g({id:"global.see-more"})},t.createElement(D,{as:P.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},s.map(r=>t.createElement(i,{key:r.uid,provider:r})))};o.defaultProps={displayAllProviders:!0},o.propTypes={providers:n().arrayOf(n().object).isRequired,displayAllProviders:n().bool};const c=o}}]);
