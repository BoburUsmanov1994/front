"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[2200],{3995:function(e,t,r){var n=r(4925),s=r(2791),d=r(9314),i=r(763),c=r(4653),o=r(6953),l=r(2630),h=r(2250),a=r(4175),x=r(9925),j=r(9279),u=r(631),f=r(6591),p=r(3282),g=r(2428),m=r(8965),y=r(9098),v=r(8720),I=r(6871),Z=r(1830),b=r.n(Z),w=r(3168),k=r(184),_=["id"];t.Z=function(e){var t=e.id,r=((0,n.Z)(e,_),(0,w.$)().t),Z=(0,I.s0)(),O=(0,x.xq)({id:t,key:j.t.products,url:u.n.products}),E=O.data,X=O.isLoading,C=(O.isError,(0,x.V0)({listKeyId:j.t.products})),D=C.mutate,B=C.isLoading,P=(0,d.o)((function(e){return(0,i.get)(e,"setBreadcrumbs",(function(){}))})),J=(0,s.useMemo)((function(){return[{id:1,title:r("\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"),path:"/products"},{id:2,title:(0,i.get)(E,"data.data.productname"),path:"#"}]}),[E]);(0,s.useEffect)((function(){P(J)}),[(0,i.get)(E,"data.data")]);var K=(0,i.get)(E,"data.data",{});return X?(0,k.jsx)(f.E,{}):(0,k.jsxs)(k.Fragment,{children:[B&&(0,k.jsx)(f.p,{}),(0,k.jsx)(o.Z,{children:(0,k.jsx)(c.X2,{children:(0,k.jsx)(c.JX,{xs:12,children:(0,k.jsx)(l.Z,{})})})}),(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(c.X2,{children:(0,k.jsx)(c.JX,{xs:12,children:(0,k.jsxs)(v.Z,{className:"w-100",children:[(0,k.jsx)(h.Z,{children:(0,i.get)(K,"productname",r("Product"))}),(0,k.jsx)(g.Z,{onClick:function(){return Z("/products/update/".concat(t))},className:"cursor-pointer mr-10 ml-15",size:28,color:"#13D6D1"}),(0,k.jsx)(m.Z,{onClick:function(){return e=t,void b().fire({position:"center",icon:"error",backdrop:"rgba(0,0,0,0.9)",background:"none",title:"Are you sure?",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#13D6D1",confirmButtonText:"Delete",customClass:{title:"title-color"}}).then((function(t){t.isConfirmed&&(D({url:"".concat(u.n.products,"/").concat(e)}),Z("/products/all"))}));var e},className:"cursor-pointer ",size:28,color:"#dc2626"})]})})}),(0,k.jsxs)(c.X2,{children:[(0,k.jsx)(c.JX,{xs:6,children:(0,k.jsxs)(p.Z,{thead:["1","2"],children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"groupofproductsId.name","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:r("\u041f\u043e\u0434 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f")}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"subgroupofproductsId.name","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:r("codeproduct")}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"codeproduct","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u043f\u043e \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 (\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430)"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"versionproduct","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0422\u0438\u043f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0449\u0438\u043a\u0430"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"typeofinsurerId.name","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"productname","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"statusofproducts.name","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"isrequirepermission",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0422\u0438\u043f \u043f\u043e\u043b\u0438\u0441\u0430"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"typeofpolice",[]).map((function(e){return e.name})).join(" , ")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u0433\u0435\u043d\u0442\u043e\u0432"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isagreement",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0435\u0432\u0435\u043d\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfixedpreventivemeasures",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isforeigncurrency",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u044b"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfranchisechange",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]})]})}),(0,k.jsx)(c.JX,{xs:6,children:(0,k.jsxs)(p.Z,{thead:["1","2"],children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0424\u043e\u0440\u043c\u0430 \u0430\u043d\u043a\u0435\u0442\u044b"}),(0,k.jsx)("td",{children:(0,k.jsx)("a",{href:(0,i.get)(K,"applicationformId","#"),target:"_blank",download:!0,children:(0,k.jsx)(y.Z,{color:"#13D6D1"})})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440"}),(0,k.jsx)("td",{children:(0,k.jsx)("a",{href:(0,i.get)(K,"contractform","#"),target:"_blank",download:!0,children:(0,k.jsx)(y.Z,{color:"#13D6D1"})})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),(0,k.jsx)("td",{children:(0,k.jsx)("a",{href:(0,i.get)(K,"additionaldocuments","#"),target:"_blank",download:!0,children:(0,k.jsx)(y.Z,{color:"#13D6D1"})})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u043b\u0438\u0441\u0430"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"policyformatId.name","-")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfixedpolicyholder",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0432\u044b\u0433\u043e\u0434\u043e\u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043b\u044f"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isbeneficiary",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0433\u043e\u0434\u043e\u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043b\u044f"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfixedbeneficiary",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0443\u044e \u0441\u0443\u043c\u043c\u0443"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfixedfee",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0441 \u0431\u0435\u0437 \u043e\u043f\u043b\u0430\u0442\u044b"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Ispolicywithoutpayment",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0422\u0438\u043f \u043e\u043f\u043b\u0430\u0442\u044b"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"typeofpayment",[]).map((function(e){return e.name})).join(" , ")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044e"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfixedfee",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0441\u0442\u0430\u0432\u043e\u043a"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isbettingrange",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"\u0418\u043c\u0435\u0435\u0442 \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u0443"}),(0,k.jsx)("td",{children:(0,k.jsx)("strong",{children:(0,i.get)(K,"Isfranchisechange",!1)?"\u0414\u0430":"\u041d\u0435\u0442"})})]})]})})]})]})]})}},2200:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var n,s=r(1413),d=r(168),i=r(2791),c=r(7939),o=(r(3995),r(6871)),l=r(4925),h=r(9314),a=r(763),x=r(9362),j=r.n(x),u=r(6953),f=r(2630),p=r(4653),g=r(4175),m=r(2250),y=r(5152),v=r(8701),I=r(6370),Z=r(9241),b=r(214),w=r(3393),k=r(9925),_=r(9279),O=r(631),E=r(6591),X=r(184),C=["id"],D=["groupofproductsId","subgroupofproductsId","typeofinsurerId","typeofsectorId","fixedpolicyholder","fixedbeneficiary","policyformatId","typeofclaimsettlement","typeofpayment","typeofpolice","agentlist","typeofrefund"],B=function(e){var t=e.id,r=((0,l.Z)(e,C),(0,k.xq)({id:t,key:_.t.products,url:O.n.products})),n=r.data,d=r.isLoading,c=(r.isError,(0,h.F)((function(e){return(0,a.get)(e,"setProduct",(function(){}))}))),o=(0,h.F)((function(e){return(0,a.get)(e,"resetProduct",(function(){}))})),x=(0,h.o)((function(e){return(0,a.get)(e,"setBreadcrumbs",(function(){}))})),B=(0,i.useMemo)((function(){return[{id:1,title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",path:"/products"},{id:2,title:(0,a.get)(n,"data.data.productname"),path:"#"}]}),[n]);(0,i.useEffect)((function(){o()}),[]),(0,i.useEffect)((function(){if(x(B),n){var e=(0,a.get)(n,"data.data",{}),t=e.groupofproductsId,r=e.subgroupofproductsId,d=e.typeofinsurerId,i=e.typeofsectorId,o=e.fixedpolicyholder,h=e.fixedbeneficiary,j=e.policyformatId,u=e.typeofclaimsettlement,f=e.typeofpayment,p=e.typeofpolice,g=e.agentlist,m=e.typeofrefund,y=(0,l.Z)(e,D);c((0,s.Z)((0,s.Z)({},y),{},{groupofproductsId:(0,a.get)(t,"_id"),subgroupofproductsId:(0,a.get)(r,"_id"),typeofinsurerId:(0,a.get)(d,"_id"),typeofsectorId:(0,a.get)(i,"_id"),fixedpolicyholder:(0,a.get)(o,"_id"),fixedbeneficiary:h.map((function(e){return e._id})),policyformatId:(0,a.get)(j,"_id"),typeofclaimsettlement:(0,a.get)(u,"_id"),typeofpayment:f.map((function(e){return e._id})),typeofpolice:p.map((function(e){return e._id})),agentlist:g.map((function(e){return e._id})),typeofrefund:(0,a.get)(m,"_id")}))}}),[(0,a.get)(n,"data.data")]);var P=(0,h.F)((function(e){return(0,a.get)(e,"product",{})}));return console.log("Product",P),d?(0,X.jsx)(E.E,{}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(u.Z,{children:(0,X.jsx)(p.X2,{children:(0,X.jsx)(p.JX,{xs:12,children:(0,X.jsx)(f.Z,{})})})}),(0,X.jsxs)(g.Z,{children:[(0,X.jsx)(p.X2,{children:(0,X.jsx)(p.JX,{xs:12,children:(0,X.jsxs)(m.Z,{children:["\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442 (",(0,a.get)(n,"data.data.productname"),")"]})})}),(0,X.jsx)(p.X2,{children:(0,X.jsx)(p.JX,{xs:12,children:(0,X.jsxs)(j(),{isHashEnabled:!0,children:[(0,X.jsx)(y.Z,{id:t,hashKey:"one"}),(0,X.jsx)(v.Z,{hashKey:"two"}),(0,X.jsx)(I.Z,{hashKey:"three"}),(0,X.jsx)(Z.Z,{id:t,hashKey:"four"}),(0,X.jsx)(b.Z,{id:t,hashKey:"five"}),(0,X.jsx)(w.Z,{hashKey:"six"})]})})})]})]})},P=c.ZP.div(n||(n=(0,d.Z)(["\n\n"]))),J=function(e){var t=Object.assign({},e),r=(0,o.UO)().id,n=void 0===r?null:r;return(0,X.jsx)(P,(0,s.Z)((0,s.Z)({},t),{},{children:(0,X.jsx)(B,{id:n})}))}},2428:function(e,t,r){var n=r(2791),s=r(2007),d=r.n(s);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=(0,n.forwardRef)((function(e,t){var r=e.color,s=void 0===r?"currentColor":r,d=e.size,o=void 0===d?24:d,l=c(e,["color","size"]);return n.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),n.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));o.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},o.displayName="Edit",t.Z=o}}]);
//# sourceMappingURL=2200.a31e406d.chunk.js.map