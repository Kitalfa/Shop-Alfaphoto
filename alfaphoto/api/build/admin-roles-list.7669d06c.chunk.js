"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[3455],{98374:(N,f,t)=>{t.d(f,{F:()=>u});var e=t(67294),n=t(23246),i=t(86896),c=t(88767);const u=(j={},I={})=>{const{id:M="",...y}=j,{get:o}=(0,n.kY)(),{locale:Z}=(0,i.Z)(),L=(0,n.Xe)(Z,{sensitivity:"base"}),{data:D,error:d,isError:T,isLoading:Q,refetch:V}=(0,c.useQuery)(["roles",M,y],async()=>{const{data:R}=await o(`/admin/roles/${M??""}`,{params:y});return R},I);return{roles:e.useMemo(()=>{let R=[];return D&&(Array.isArray(D.data)?R=D.data:R=[D.data]),[...R].sort((H,b)=>L.compare(H.name,b.name))},[D,L]),error:d,isError:T,isLoading:Q,refetch:V}}},7513:(N,f,t)=>{t.r(f),t.d(f,{default:()=>ue});var e=t(67294),n=t(23246),i=t(70743),c=t(36364),u=t(40720),j=t(90731),I=t(12473),M=t(55040),y=t(34726),o=t(5923),Z=t(38454),L=t(3547),D=t(29299),d=t(69398),T=t(10574),Q=t(22304),V=t(35752),J=t(43838),R=t(2382),H=t(54425),b=t(83598),k=t(86896),q=t(16550),_=t(98374);const ee=()=>"todo empty role";var te=t(96987),ne=t(16607),le=t(96208),se=t(45697),v=t.n(se);const z=({id:s,name:m,description:a,usersCount:O,icons:r,rowIndex:W,canUpdate:E})=>{const{formatMessage:P}=(0,k.Z)(),[,x]=r,g=P({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:O});return e.createElement(D.Tr,{"aria-rowindex":W,key:s,...E?(0,n.X7)({fn:x.onClick}):{}},e.createElement(d.Td,{maxWidth:(0,n.Q1)(130)},e.createElement(T.Z,{ellipsis:!0,textColor:"neutral800"},m)),e.createElement(d.Td,{maxWidth:(0,n.Q1)(250)},e.createElement(T.Z,{ellipsis:!0,textColor:"neutral800"},a)),e.createElement(d.Td,null,e.createElement(T.Z,{textColor:"neutral800"},g)),e.createElement(d.Td,null,e.createElement(te.k,{justifyContent:"flex-end",...n.UW},r.map((h,A)=>h?e.createElement(ne.x,{key:h.label,paddingLeft:A===0?0:1},e.createElement(le.h,{onClick:h.onClick,label:h.label,noBorder:!0,icon:h.icon})):null))))};z.propTypes={id:v().number.isRequired,name:v().string.isRequired,description:v().string.isRequired,usersCount:v().number.isRequired,icons:v().array.isRequired,rowIndex:v().number.isRequired,canUpdate:v().bool},z.defaultProps={canUpdate:!1};const ae=z;var oe=t(18172);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(s,m)=>(0,oe.ZP)(s,a=>{switch(m.type){case"ON_REMOVE_ROLES":{a.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{a.shouldRefetchData=!0,a.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{a.shouldRefetchData=!1,a.roleToDelete=null,a.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{a.roleToDelete=m.id;break}default:return a}}),de=({canCreate:s,canDelete:m,canUpdate:a,refetchRoles:O})=>{const{formatMessage:r}=(0,k.Z)(),{formatAPIError:W}=(0,n.So)(),E=(0,n.lm)(),[P,x]=(0,e.useState)(!1),{push:g}=(0,q.k6)(),[{selectedRoles:h,showModalConfirmButtonLoading:A,roleToDelete:X},U]=(0,e.useReducer)(ie,re),{post:G}=(0,n.tg)(),Y=async()=>{try{U({type:"ON_REMOVE_ROLES"}),await G("/admin/roles/batch-delete",{ids:[X]}),await O(),U({type:"RESET_DATA_TO_DELETE"})}catch(l){E({type:"warning",message:W(l)})}B()},K=(0,e.useCallback)(l=>{g(`/settings/roles/duplicate/${l}`)},[g]),$=()=>g("/settings/roles/new"),F=(0,e.useCallback)(l=>{U({type:"SET_ROLE_TO_DELETE",id:l}),B()},[]),B=()=>x(l=>!l),p=(0,e.useCallback)(l=>{g(`/settings/roles/${l}`)},[g]),S=(0,e.useCallback)((l,C)=>{l.preventDefault(),l.stopPropagation(),C.usersCount?E({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):F(C.id)},[E,F]),w=(0,e.useCallback)((l,C)=>{l.preventDefault(),l.stopPropagation(),K(C.id)},[K]),me=(0,e.useCallback)(l=>[...s?[{onClick:C=>w(C,l),label:r({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(J.Z,null)}]:[],...a?[{onClick:()=>p(l.id),label:r({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(R.Z,null)}]:[],...m?[{onClick:C=>S(C,l),label:r({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(H.Z,null)}]:[]],[r,S,w,p,s,a,m]);return{handleNewRoleClick:$,getIcons:me,selectedRoles:h,isWarningDeleteAllOpened:P,showModalConfirmButtonLoading:A,handleToggleModal:B,handleDeleteData:Y}},ce=()=>{const{formatMessage:s}=(0,k.Z)();(0,n.go)();const m=(0,i.v9)(c._),[{query:a}]=(0,n.Kx)(),{isLoading:O,allowedActions:{canCreate:r,canDelete:W,canRead:E,canUpdate:P}}=(0,n.ss)(m.settings.roles),{roles:x,isLoading:g,refetch:h}=(0,_.F)({filters:a?._q?{name:{$containsi:a._q}}:void 0},{cacheTime:0,enabled:!O&&E}),{handleNewRoleClick:A,getIcons:X,isWarningDeleteAllOpened:U,showModalConfirmButtonLoading:G,handleToggleModal:Y,handleDeleteData:K}=de({refetchRoles:h,canCreate:r,canDelete:W,canUpdate:P}),$=x.length+1,F=6;if(O)return e.createElement(u.o,null,e.createElement(n.dO,null));const B=s({id:"global.roles",defaultMessage:"roles"});return e.createElement(u.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(j.T,{primaryAction:r?e.createElement(I.z,{onClick:A,startIcon:e.createElement(b.Z,null),size:"S"},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:B,subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),E&&e.createElement(M.Z,{startActions:e.createElement(n.m,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:B})})}),E&&e.createElement(y.D,null,e.createElement(o.i,{colCount:F,rowCount:$,footer:r?e.createElement(Z.c,{onClick:A,icon:e.createElement(b.Z,null)},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(L.h,null,e.createElement(D.Tr,{"aria-rowindex":1},e.createElement(d.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.description",defaultMessage:"Description"}))),e.createElement(d.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.users",defaultMessage:"Users"}))),e.createElement(d.Th,null,e.createElement(Q.T,null,s({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(V.p,null,x?.map((p,S)=>e.createElement(ae,{key:p.id,id:p.id,name:p.name,description:p.description,usersCount:p.usersCount,icons:X(p),rowIndex:S+2,canUpdate:P})))),!$&&!g&&e.createElement(ee,null)),e.createElement(n.QH,{isOpen:U,onConfirm:K,isConfirmButtonLoading:G,onToggleDialog:Y}))},ue=()=>{const s=(0,i.v9)(c._);return e.createElement(n.O4,{permissions:s.settings.roles.main},e.createElement(ce,null))}},55040:(N,f,t)=>{t.d(f,{Z:()=>i});var e=t(85893),n=t(96987);const i=({startActions:c,endActions:u})=>!c&&!u?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:c}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:u})]})},38454:(N,f,t)=>{t.d(f,{c:()=>y});var e=t(85893),n=t(71997),i=t(16607),c=t(26910),u=t(96987),j=t(10574);const I=(0,n.ZP)(i.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,M=(0,n.ZP)(i.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,y=({children:o,icon:Z,...L})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(c.i,{}),(0,e.jsx)(M,{as:"button",background:"primary100",padding:5,...L,children:(0,e.jsxs)(u.k,{children:[(0,e.jsx)(I,{"aria-hidden":!0,background:"primary200",children:Z}),(0,e.jsx)(i.x,{paddingLeft:3,children:(0,e.jsx)(j.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
