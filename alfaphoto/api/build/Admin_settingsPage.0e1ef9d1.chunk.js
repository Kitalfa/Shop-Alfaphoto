(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[5895],{3101:(rt,q,t)=>{"use strict";t.d(q,{G:()=>s,T:()=>U});var e=t(67294),T=t(23246),h=t(57557),_=t.n(h),x=t(42678);const dt=(r,m)=>({...r,fieldsToPick:m});var et=t(18172),nt=t(78718),K=t.n(nt),ot=t(36968),st=t.n(ot),ct=t(98601),mt=t.n(ct);const at={fieldsToPick:[],formErrors:{},initialData:{},isLoading:!0,modifiedData:{},showHeaderButtonLoader:!1,showHeaderLoader:!0},ut=(r,m)=>(0,et.ZP)(r,c=>{switch(m.type){case"GET_DATA_SUCCEEDED":{c.isLoading=!1,c.showHeaderLoader=!1,c.initialData=K()(m.data,r.fieldsToPick),c.modifiedData=K()(m.data,r.fieldsToPick);break}case"ON_CANCEL":{c.modifiedData=r.initialData,c.formErrors={};break}case"ON_CHANGE":{m.inputType==="password"&&!m.value?mt()(c.modifiedData,m.keys.split(".")):m.keys.includes("username")&&!m.value?st()(c.modifiedData,m.keys.split("."),null):st()(c.modifiedData,m.keys.split("."),m.value);break}case"ON_SUBMIT":{c.showHeaderButtonLoader=!0;break}case"ON_SUBMIT_SUCCEEDED":{c.initialData=K()(m.data,r.fieldsToPick),c.modifiedData=K()(m.data,r.fieldsToPick),c.showHeaderButtonLoader=!1;break}case"SET_ERRORS":{c.formErrors=m.errors,c.showHeaderButtonLoader=!1;break}default:return c}}),gt=async(r,m)=>{let c=null;try{await m.validate(r,{abortEarly:!1})}catch(z){c=(0,T.CJ)(z)}return c},s=(r,m,c,z)=>{const[{formErrors:J,initialData:Z,isLoading:H,modifiedData:B,showHeaderButtonLoader:j,showHeaderLoader:W},E]=(0,e.useReducer)(ut,at,()=>dt(at,z)),p=(0,T.lm)(),{lockApp:I,unlockApp:Q}=(0,T.o1)(),{get:Y,put:b}=(0,T.kY)();return(0,e.useEffect)(()=>{r&&(async()=>{try{const{data:{data:M}}=await Y(r);E({type:"GET_DATA_SUCCEEDED",data:M,fieldsToPick:z})}catch(M){console.error(M.response),p({type:"warning",message:{id:"notification.error"}})}})()},[r]),[{formErrors:J,initialData:Z,isLoading:H,modifiedData:B,showHeaderButtonLoader:j,showHeaderLoader:W},E,{handleCancel:()=>{E({type:"ON_CANCEL"})},handleChange:({target:{name:O,value:M,type:y}})=>{E({type:"ON_CHANGE",inputType:y,keys:O,value:M})},handleSubmit:async O=>{O.preventDefault();const M=await gt(B,m);if(E({type:"SET_ERRORS",errors:M||{}}),!M)try{I(),E({type:"ON_SUBMIT"});const y=_()(B,["confirmPassword","registrationToken"]);y.roles&&(y.roles=y.roles.map(k=>k.id)),y.ssoLockedRoles&&(y.ssoLockedRoles=[...new Set(y.ssoLockedRoles)]);const{data:{data:R}}=await b(r,y);c(R),E({type:"ON_SUBMIT_SUCCEEDED",data:R}),p({type:"success",message:{id:"notification.success.saved"}})}catch(y){const R=y?.response?.payload??{data:{}};R?.data&&typeof R.data=="string"?p({type:"warning",message:R.data}):p({type:"warning",message:R.message});const k=(0,x.I)(R);E({type:"SET_ERRORS",errors:k})}finally{Q()}},setField:(O,M)=>{E({type:"ON_CHANGE",keys:O,value:M})}}]};var pt=t(70743),it=t(36364),ft=t(48232);const lt={global:[{intlLabel:{id:"Settings.application.title",defaultMessage:"Overview"},to:"/settings/application-infos",id:"000-application-infos",permissions:[]},{intlLabel:{id:"Settings.webhooks.title",defaultMessage:"Webhooks"},to:"/settings/webhooks",id:"webhooks"},{intlLabel:{id:"Settings.apiTokens.title",defaultMessage:"API Tokens"},to:"/settings/api-tokens?sort=name:ASC",id:"api-tokens"},{intlLabel:{id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"},to:"/settings/transfer-tokens?sort=name:ASC",id:"transfer-tokens"},...!window.strapi.features.isEnabled(window.strapi.features.SSO)&&window.strapi?.flags?.promoteEE?[{intlLabel:{id:"Settings.sso.title",defaultMessage:"Single Sign-On"},to:"/settings/purchase-single-sign-on",id:"sso",lockIcon:!0}]:[],...!window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)&&window.strapi?.flags?.promoteEE?[{intlLabel:{id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"},to:"/settings/purchase-review-workflows",id:"review-workflows",lockIcon:!0}]:[]],admin:[{intlLabel:{id:"global.roles",defaultMessage:"Roles"},to:"/settings/roles",id:"roles"},{intlLabel:{id:"global.users"},to:"/settings/users?pageSize=10&page=1&sort=firstname",id:"users"},...!window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)&&window.strapi?.flags?.promoteEE?[{intlLabel:{id:"global.auditLogs",defaultMessage:"Audit Logs"},to:"/settings/purchase-audit-logs",id:"auditLogs",lockIcon:!0}]:[]]},ht=r=>r.map(m=>{const c=m.links.map(z=>({...z,isDisplayed:!1}));return{...m,links:c}});var Et=t(89734),vt=t.n(Et);const P=r=>vt()(r,m=>m.id),U=()=>{const[{isLoading:r,menu:m},c]=(0,e.useState)({isLoading:!0,menu:[]}),{allPermissions:z}=(0,T.vn)(),{shouldUpdateStrapi:J}=(0,T.L7)(),{settings:Z}=(0,T.j1)(),H=(0,pt.v9)(it._),{global:B,admin:j}=(0,ft.c)(lt,async()=>(await t.e(3683).then(t.bind(t,53683))).LINKS_EE,{combine(p,I){return{admin:[...I.admin,...p.admin],global:[...p.global,...I.global]}},defaultValue:{admin:[],global:[]}}),W=(0,e.useCallback)(p=>{if(!p.id)throw new Error("The settings menu item must have an id attribute.");return{...p,permissions:H.settings?.[p.id]?.main}},[H.settings]);(0,e.useEffect)(()=>{const p=async()=>{const tt=await(X=>Promise.all(X.reduce((V,w,O)=>{const M=y=>y.map(async(R,k)=>({hasPermission:await(0,T.qX)(z,R.permissions),sectionIndex:O,linkIndex:k}));return[...V,...M(w.links)]},[])))(Y);c(X=>({...X,isLoading:!1,menu:Y.map((V,w)=>({...V,links:V.links.map((O,M)=>{const y=tt.find(R=>R.sectionIndex===w&&R.linkIndex===M);return{...O,isDisplayed:Boolean(y.hasPermission)}})}))}))},{global:I,...Q}=Z,Y=ht([{...Z.global,links:P([...Z.global.links,...B.map(W)]).map(b=>({...b,hasNotification:b.id==="000-application-infos"&&J}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:j.map(W)},...Object.values(Q)]);p()},[j,B,z,Z,J,W]);const E=p=>({...p,links:p.links.filter(I=>I.isDisplayed)});return{isLoading:r,menu:m.map(E)}}},39223:(rt,q,t)=>{"use strict";t.r(q),t.d(q,{SettingsPage:()=>Me});var e=t(67294),T=t(71590),h=t(23246),_=t(64593),x=t(86896),$=t(16550),dt=t(3101),et=t(48232),nt=t(53752),K=t(29823),ot=t(85200),st=t(56233),ct=t(71603),mt=t(61499),at=t(21660),ut=t(36636),gt=t(46759),At=t(45697),s=t.n(At),pt=t(73727),it=t(71997);const ft=(0,it.ZP)(ot.J)`
  right: 15px;
  position: absolute;
`,lt=({menu:n})=>{const{formatMessage:o}=(0,x.Z)(),{trackUsage:i}=(0,h.rS)(),{pathname:a}=(0,$.TH)(),f=n.filter(d=>!d.links.every(l=>l.isDisplayed===!1)).map(d=>({...d,title:d.intlLabel,links:d.links.map(l=>({...l,title:l.intlLabel,name:l.id}))})),v=o({id:"global.settings",defaultMessage:"Settings"}),g=(d=null)=>{i("willNavigate",{from:a,to:d})};return e.createElement(st.m,{ariaLabel:v},e.createElement(ct.p,{label:v}),e.createElement(mt.Z,null,f.map(d=>e.createElement(at.D,{key:d.id,label:o(d.intlLabel)},d.links.map(l=>e.createElement(ut.E,{as:pt.OL,withBullet:l.hasNotification,to:l.to,onClick:()=>g(l.to),key:l.id},o(l.intlLabel),l?.lockIcon&&e.createElement(ft,{width:`${15/16}rem`,height:`${15/16}rem`,as:gt.Z})))))))};lt.propTypes={menu:s().array.isRequired};const Dt=lt,ht=[{async Component(){return await t.e(3455).then(t.bind(t,7513))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(2544)]).then(t.bind(t,63727))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,87901))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,93552))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,71589))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,10372))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,38402))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,71362))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(4782),t.e(9074),t.e(4299)]).then(t.bind(t,1880))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(4782),t.e(9074),t.e(92)]).then(t.bind(t,50955))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(4782),t.e(3467),t.e(4816)]).then(t.bind(t,81524))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,68446))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(4782),t.e(3467),t.e(2492)]).then(t.bind(t,63252))},to:"/settings/transfer-tokens/:id",exact:!0},{async Component(){return await t.e(6090).then(t.bind(t,72364))},to:"/settings/purchase-audit-logs",exact:!0},{async Component(){return await t.e(7531).then(t.bind(t,61578))},to:"/settings/purchase-review-workflows",exact:!0},{async Component(){return await t.e(4486).then(t.bind(t,7185))},to:"/settings/purchase-single-sign-on",exact:!0}];var Et=t(40720),vt=t(74863),Ft=t(90731),P=t(12473),Pt=t(34726),U=t(96987),r=t(10574),m=t(31988),c=t(6498),z=t(29824),J=t(18226),Z=t(62577),H=t(88767),B=t(70743),j=t(83171),W=t(36364),E=t(16607);const p=750,I=100,Q=["image/jpeg","image/png","image/svg+xml"];var Y=t(87385),b=t(7677),tt=t(96208),X=t(68020),V=t(83598),w=t(75975),O=t(74622),M=t(36854),y=t(18172);const R={localImage:void 0},Vt=(n=R,o)=>(0,y.ZP)(n,i=>{switch(o.type){case"SET_LOCAL_IMAGE":{i.localImage=o.value;break}default:return i}}),Lt=({onChangeLogo:n,customLogo:o,goTo:i,Component:a,modalTitle:u,next:f,prev:v,currentStep:g})=>{const[{localImage:d},l]=(0,e.useReducer)(Vt,R),{formatMessage:C}=(0,x.Z)(),L=D=>{l({type:"SET_LOCAL_IMAGE",value:D})},A=()=>{i(null)};return g?e.createElement(O.P,{labelledBy:"modal",onClose:A},e.createElement(M.x,null,e.createElement(r.Z,{fontWeight:"bold",as:"h2",id:"modal"},C(u))),e.createElement(a,{setLocalImage:L,goTo:i,next:f,prev:v,onClose:A,asset:d||o,onChangeLogo:n})):null};Lt.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},Lt.propTypes={Component:s().elementType,currentStep:s().string,customLogo:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}),goTo:s().func.isRequired,modalTitle:s().shape({id:s().string,defaultMessage:s().string}),next:s().string,onChangeLogo:s().func.isRequired,prev:s().string};const $t=Lt,Ut={currentStep:void 0},Kt=(n=Ut,o)=>(0,y.ZP)(n,i=>{switch(o.type){case"GO_TO":{i.currentStep=o.to;break}default:return i}});var Jt=t(98948),yt=t(91788),Qt=t(26910),St=t(94955),Yt=t(45094),Xt=t(78048),wt=t(61456),Ct=t(37022),kt=t(73734);const qt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},Zt={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},_t=n=>new Promise(o=>{const i=new FileReader;i.onload=()=>{const a=new Image;a.onload=function(){o({width:a.width,height:a.height})},a.src=i.result},i.readAsDataURL(n)}),te=(n,o)=>({ext:n.name.split(".").pop(),size:n.size/1e3,name:n.name,url:URL.createObjectURL(n),rawFile:n,width:o.width,height:o.height}),Nt=async n=>{let o;if(!Q.includes(n.type))throw o=new Error("File format"),o.displayMessage=qt,o;const a=await _t(n);if(!(a.width<=p&&a.height<=p))throw o=new Error("File sizing"),o.displayMessage=Zt,o;const f=te(n,a);if(!(f.size<=I))throw o=new Error("File sizing"),o.displayMessage=Zt,o;return f},ee=(0,it.ZP)(Yt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,Mt=({setLocalImage:n,goTo:o,next:i,onClose:a})=>{const{formatMessage:u}=(0,x.Z)(),[f,v]=(0,e.useState)(!1),[g,d]=(0,e.useState)(void 0),l=(0,e.useRef)(null),C=()=>v(!0),L=()=>v(!1),A=N=>{N.preventDefault(),l.current.click()},D=async()=>{L();const N=l.current.files[0];if(N)try{const G=await Nt(N);n(G),o(i)}catch(G){if(G.displayMessage)d(u(G.displayMessage,{size:I,dimension:p})),l.current.focus();else throw G}},F=()=>f?"primary500":g?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(E.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(Xt.g,{name:"logo-upload",error:g},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(U.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:f?"primary100":"neutral100",borderColor:F(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:C,onDragLeave:L},e.createElement(ot.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:kt.Z,"aria-hidden":!0}),e.createElement(E.x,{paddingTop:3,paddingBottom:5},e.createElement(r.Z,{variant:"delta",as:"span"},u({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(ee,{accept:Q,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:D,ref:l,id:"logo-upload"}),e.createElement(P.z,{type:"button",onClick:A},u({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(E.x,{paddingTop:6},e.createElement(r.Z,{variant:"pi",textColor:"neutral600"},u({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:I,dimension:p})))),e.createElement(wt.c,null)))))),e.createElement(Ct.m,{startActions:e.createElement(P.z,{onClick:a,variant:"tertiary"},u({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};Mt.defaultProps={next:null},Mt.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const ne=Mt;var oe=t(38670);const se=async n=>{try{const{get:o}=(0,h.tg)(),i=await o(n,{responseType:"blob",timeout:8e3});return new File([i.data],i.config.url,{type:i.headers["content-type"]})}catch(o){throw o.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},o}},Rt=({goTo:n,next:o,onClose:i,setLocalImage:a})=>{const{formatMessage:u}=(0,x.Z)(),[f,v]=(0,e.useState)(""),[g,d]=(0,e.useState)(null),l=L=>{v(L.target.value)},C=async()=>{try{const L=await se(f),A=await Nt(L);a(A),n(o)}catch(L){if(L.displayMessage)d(u(L.displayMessage,{size:I,dimension:p}));else throw L}};return e.createElement("form",{onSubmit:L=>{L.preventDefault(),C()}},e.createElement(E.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(oe.o,{label:u({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:g,onChange:l,value:f,name:"logo-url"})),e.createElement(Ct.m,{startActions:e.createElement(P.z,{onClick:i,variant:"tertiary"},u({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(P.z,{type:"submit"},u({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};Rt.defaultProps={next:null},Rt.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const ae=Rt,Tt=({setLocalImage:n,goTo:o,next:i,onClose:a})=>{const{formatMessage:u}=(0,x.Z)();return e.createElement(Jt.v,{label:u({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(E.x,{paddingLeft:8,paddingRight:8},e.createElement(yt.m,null,e.createElement(yt.O,null,u({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(yt.O,null,u({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement(Qt.i,null)),e.createElement(St.n,null,e.createElement(St.x,null,e.createElement(ne,{onClose:a,setLocalImage:n,goTo:o,next:i})),e.createElement(St.x,null,e.createElement(ae,{onClose:a,setLocalImage:n,goTo:o,next:i}))))};Tt.defaultProps={next:null},Tt.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const ie=Tt;var le=t(16244),re=t(60909),de=t(26611),ce=t(37255),me=t(19700),Bt=t(56457),ue=t(1136);const Gt=({asset:n})=>{const{formatMessage:o}=(0,x.Z)();return e.createElement(le.Z,null,e.createElement(re.O,null,e.createElement(de.H,{size:"S",src:n.url})),e.createElement(ce.e,null,e.createElement(me.a,null,e.createElement(Bt.l,null,n.name),e.createElement(Bt._,null,`${n.ext.toUpperCase()} - ${n.width}\u2715${n.height}`)),e.createElement(ue.E,null,o({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};Gt.propTypes={asset:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}).isRequired};const ge=Gt,xt=({onClose:n,asset:o,prev:i,next:a,goTo:u,setLocalImage:f,onChangeLogo:v})=>{const{formatMessage:g}=(0,x.Z)(),d=()=>{f(void 0),u(i)},l=()=>{v(o),u(a)};return e.createElement(e.Fragment,null,e.createElement(E.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(U.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(U.k,{direction:"column",alignItems:"flex-start"},e.createElement(r.Z,{variant:"pi",fontWeight:"bold"},g({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(r.Z,{variant:"pi",textColor:"neutral500"},g({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(P.z,{onClick:d,variant:"secondary"},g({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(E.x,{maxWidth:(0,h.Q1)(180)},o.url?e.createElement(ge,{asset:o}):null)),e.createElement(Ct.m,{startActions:e.createElement(P.z,{onClick:n,variant:"tertiary"},g({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(P.z,{onClick:l},g({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};xt.defaultProps={next:null,prev:null},xt.propTypes={goTo:s().func.isRequired,asset:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}).isRequired,next:s().string,onClose:s().func.isRequired,onChangeLogo:s().func.isRequired,prev:s().string,setLocalImage:s().func.isRequired};const pe={upload:{Component:ie,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:xt,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},It=({canUpdate:n,customLogo:o,defaultLogo:i,hint:a,label:u,onChangeLogo:f,onResetLogo:v})=>{const[{currentStep:g},d]=(0,e.useReducer)(Kt,Ut),{Component:l,next:C,prev:L,modalTitle:A}=pe[g]||{},{formatMessage:D}=(0,x.Z)(),F=N=>{d({type:"GO_TO",to:N})};return e.createElement(e.Fragment,null,e.createElement(Y.F,{label:u,selectedSlide:0,hint:a,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:o?.name||"logo.png",actions:e.createElement(b.b,null,e.createElement(tt.h,{disabled:!n,onClick:()=>F(o?"pending":"upload"),label:D({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(V.Z,null)}),o&&e.createElement(tt.h,{disabled:!n,onClick:v,label:D({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(w.Z,null)}))},e.createElement(X.q,{label:D({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(E.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:o?.url||i,alt:D({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement($t,{Component:l,currentStep:g,onChangeLogo:f,customLogo:o,goTo:F,next:C,prev:L,modalTitle:A}))};It.defaultProps={canUpdate:!1,customLogo:null,hint:null},It.propTypes={canUpdate:s().bool,customLogo:s().shape({url:s().string,name:s().string}),label:s().string.isRequired,hint:s().string,defaultLogo:s().string.isRequired,onChangeLogo:s().func.isRequired,onResetLogo:s().func.isRequired};const Ht=It;var fe=t(82492),he=t.n(fe);const Ee=(n,o)=>he()(n,{menuLogo:{display:o.menuLogo},authLogo:{display:o.authLogo}}),zt={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},ve=(n=zt,o)=>(0,y.ZP)(n,i=>{switch(o.type){case"SET_CUSTOM_MENU_LOGO":{i.menuLogo.display=o.value,i.menuLogo.submit.rawFile=o.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{i.authLogo.display=o.value,i.authLogo.submit.rawFile=o.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{i.menuLogo.display=null,i.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{i.authLogo.display=null,i.authLogo.submit={rawFile:null,isReset:!0};break}default:return i}}),Ot=(0,e.forwardRef)(({canUpdate:n,projectSettingsStored:o},i)=>{const{formatMessage:a}=(0,x.Z)(),{trackUsage:u}=(0,h.rS)(),{logos:{menu:f,auth:v}}=(0,j.m)(),[{menuLogo:g,authLogo:d},l]=(0,e.useReducer)(ve,zt,()=>Ee(zt,o)),C=F=>{l({type:"SET_CUSTOM_MENU_LOGO",value:F})},L=()=>{u("didClickResetLogo",{logo:"menu"}),l({type:"RESET_CUSTOM_MENU_LOGO"})},A=F=>{l({type:"SET_CUSTOM_AUTH_LOGO",value:F})},D=()=>{u("didClickResetLogo",{logo:"auth"}),l({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(i,()=>({getValues:()=>({menuLogo:g.submit,authLogo:d.submit})})),e.createElement(E.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(r.Z,{variant:"delta",as:"h3"},a({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(r.Z,{variant:"pi",textColor:"neutral600"},a({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:p,size:I})),e.createElement(m.r,{paddingTop:4,gap:4},e.createElement(c.P,{col:6,s:12},e.createElement(Ht,{canUpdate:n,customLogo:g.display,defaultLogo:f.default,hint:a({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:a({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:C,onResetLogo:L})),e.createElement(c.P,{col:6,s:12},e.createElement(Ht,{canUpdate:n,customLogo:d.display,defaultLogo:v.default,hint:a({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:a({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:A,onResetLogo:D}))))});Ot.defaultProps={canUpdate:!1,projectSettingsStored:null},Ot.propTypes={canUpdate:s().bool,projectSettingsStored:s().shape({menuLogo:s().shape({url:s().string,name:s().string})})};const Le=Ot,ye=n=>{const o=new FormData;return Object.entries(n).forEach(([i,a])=>{a&&a.rawFile instanceof File&&o.append(i,a.rawFile),a&&a.isReset&&o.append(i,null)}),o},Se=()=>null,Ce=()=>{const n=e.useRef(),o=(0,h.lm)(),{trackUsage:i}=(0,h.rS)(),{formatMessage:a}=(0,x.Z)(),{get:u,post:f}=(0,h.kY)(),{updateProjectSettings:v}=(0,j.m)(),g=(0,B.v9)(W._),{formatAPIError:d}=(0,h.So)(),{communityEdition:l,latestStrapiReleaseTag:C,nodeVersion:L,shouldUpdateStrapi:A,strapiVersion:D}=(0,h.L7)(),F=(0,et.c)(Se,async()=>(await t.e(5013).then(t.bind(t,65013))).AdminSeatInfoEE),{allowedActions:{canRead:N,canUpdate:G}}=(0,h.ss)(g.settings["project-settings"]);(0,h.go)();const{data:jt,isLoading:Re}=(0,H.useQuery)(["project-settings"],async()=>{const{data:S}=await u("/admin/project-settings");return S},{cacheTime:0,enabled:N,select(S){return{...S,authLogo:S.authLogo?{...S.authLogo,url:(0,h.CR)(S.authLogo.url)}:S.authLogo,menuLogo:S.menuLogo?{...S.menuLogo,url:(0,h.CR)(S.menuLogo.url)}:S.menuLogo}}}),Te=(0,H.useMutation)(S=>f("/admin/project-settings",S,{headers:{"Content-Type":"multipart/form-data"}}),{onError(S){o({type:"warning",message:d(S)})},async onSuccess(S){const{menuLogo:Wt,authLogo:bt}=S;v({menuLogo:Wt?.url,authLogo:bt?.url}),Wt?.rawFile&&i("didChangeLogo",{logo:"menu"}),bt?.rawFile&&i("didChangeLogo",{logo:"auth"}),o({type:"success",message:a({id:"app",defaultMessage:"Saved"})})}}),xe=S=>{S.preventDefault(),Te.mutate(ye(n.current.getValues()))};return F?e.createElement(T.A,null,e.createElement(h.SL,{name:"Application"}),e.createElement(Et.o,null,Re?e.createElement(vt.a,null,a({id:"Settings.application.isLoading",defaultMessage:"Loading"})):e.createElement("form",{onSubmit:xe},e.createElement(Ft.T,{title:a({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:a({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:G&&e.createElement(P.z,{type:"submit",startIcon:e.createElement(J.Z,null)},a({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Pt.D,null,e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(r.Z,{variant:"delta",as:"h3"},a({id:"global.details",defaultMessage:"Details"})),e.createElement(m.r,{gap:5,as:"dl"},e.createElement(c.P,{col:6,s:12},e.createElement(r.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},a({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(U.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(r.Z,null,"v",D),A&&e.createElement(z.r,{href:`https://github.com/strapi/strapi/releases/tag/${C}`,isExternal:!0,endIcon:e.createElement(Z.Z,null)},a({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(c.P,{col:6,s:12},e.createElement(r.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},a({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(U.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(r.Z,null,a({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:l})),e.createElement(z.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(Z.Z,null)},a({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(c.P,{col:6,s:12},e.createElement(r.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},a({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(r.Z,{as:"dd"},L)),e.createElement(F,null))),N&&jt&&e.createElement(Le,{canUpdate:G,ref:n,projectSettingsStored:jt})))))):null};function Me(){const{settingId:n}=(0,$.UO)(),{settings:o}=(0,h.j1)(),{formatMessage:i}=(0,x.Z)(),{isLoading:a,menu:u}=(0,dt.T)(),f=(0,et.c)(ht,async()=>(await t.e(1470).then(t.bind(t,51470))).ROUTES_EE,{combine(d,l){return[...d,...l]},defaultValue:[]}),v=e.useMemo(()=>(0,K.W)(f.map(({to:d,Component:l,exact:C})=>(0,nt.o)(l,d,C))),[f]),g=Object.values(o).flatMap(d=>{const{links:l}=d;return l.map(C=>(0,nt.o)(C.Component,C.to,C.exact||!1))});return a?e.createElement(h.dO,null):n?e.createElement(T.A,{sideNav:e.createElement(Dt,{menu:u})},e.createElement(_.q,{title:i({id:"global.settings",defaultMessage:"Settings"})}),e.createElement($.rs,null,e.createElement($.AW,{path:"/settings/application-infos",component:Ce,exact:!0}),v,g)):e.createElement($.l_,{to:"/settings/application-infos"})}},98601:(rt,q,t)=>{var e=t(57406);function T(h,_){return h==null?!0:e(h,_)}rt.exports=T}}]);