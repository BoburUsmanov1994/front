"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[8979],{8979:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a,r=n(1413),s=n(168),i=n(2791),c=n(7939),d=n(9439),l=n(4925),o=n(9314),u=n(763),h=n(4653),x=n(6953),j=n(2630),g=n(2250),p=n(4175),m=n(9279),b=n(631),f=n(6591),y=n(3168),Z=n(9925),v=n(3282),L=n(4519),P=n(4910),k=n(948),C=n(7892),T=n.n(C),Y=n(7881),D=n(9098),S=n(3197),A=n(184),M=["id"],N=function(e){e.id,(0,l.Z)(e,M);var t=(0,y.$)().t,n=(0,i.useState)(1),a=(0,d.Z)(n,2),r=a[0],s=a[1],c=(0,Z.zi)({key:m.t.tengebankContracts,url:b.n.tengebankContracts,page:r}),C=c.data,N=c.isLoading,X=c.isFetching,E=(0,Z.n7)({listKeyId:m.t.tengebankContracts}),_=E.mutate,w=E.isLoading,z=(0,o.o)((function(e){return(0,u.get)(e,"setBreadcrumbs",(function(){}))})),I=(0,i.useMemo)((function(){return[{id:1,title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",path:"/products"},{id:2,title:"Tenge bank contracts",path:"#"}]}),[]);(0,i.useEffect)((function(){z(I)}),[]);return N?(0,A.jsx)(f.E,{}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(x.Z,{children:(0,A.jsx)(h.X2,{children:(0,A.jsx)(h.JX,{xs:12,children:(0,A.jsx)(j.Z,{})})})}),(0,A.jsxs)(p.Z,{children:[(0,A.jsx)(h.X2,{className:"mb-25",children:(0,A.jsx)(h.JX,{xs:12,children:(0,A.jsx)(g.Z,{children:t("Tenge bank contracts")})})}),(0,A.jsx)(h.X2,{children:(0,A.jsxs)(h.JX,{xs:12,children:[(X||w)&&(0,A.jsx)(f.p,{}),(0,A.jsx)("div",{className:"horizontal-scroll",children:(0,A.jsx)(v.Z,{thead:["\u2116",t("Loan type"),t("Loan total"),t("Loan amount"),t("Loan term"),t("objectBrand"),t("objectName"),t("insuranceLiability"),t("insurancePremium"),t("insurancePremiumAuto"),t("insurancePremiumLoan"),t("Subject"),t("Organization/Customer"),t("Contract number"),t("Contract date"),t("Loan contract number"),t("Payment date"),t("Policy"),t("Created date"),t("Accepted")],hideThead:!1,children:C&&(0,u.get)(C,"data.data",[]).map((function(e,t){return(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:20*(r-1)+(t+1)}),(0,A.jsx)("td",{children:(0,u.get)(e,"loan.loanType","-")}),(0,A.jsx)("td",{children:(0,A.jsx)(k.Z,{displayType:"text",thousandSeparator:" ",value:(0,u.get)(e,"loan.loanTotal",0)})}),(0,A.jsx)("td",{children:(0,A.jsx)(k.Z,{displayType:"text",thousandSeparator:" ",value:(0,u.get)(e,"loan.loanAmount",0)})}),(0,A.jsx)("td",{children:(0,u.get)(e,"loan.loanTerm","-")}),(0,A.jsx)("td",{children:(0,u.get)(e,"loan.objectBrand","-")}),(0,A.jsx)("td",{children:(0,u.get)(e,"loan.objectName","-")}),(0,A.jsx)("td",{children:(0,A.jsx)(k.Z,{displayType:"text",thousandSeparator:" ",value:(0,u.get)(e,"insuranceLiability",0)})}),(0,A.jsx)("td",{children:(0,A.jsx)(k.Z,{displayType:"text",thousandSeparator:" ",value:(0,u.get)(e,"insurancePremium",0)})}),(0,A.jsx)("td",{children:(0,A.jsx)(k.Z,{displayType:"text",thousandSeparator:" ",value:(0,u.get)(e,"insurancePremiumAuto",0)})}),(0,A.jsx)("td",{children:(0,A.jsx)(k.Z,{displayType:"text",thousandSeparator:" ",value:(0,u.get)(e,"insurancePremiumLoan",0)})}),(0,A.jsx)("td",{children:(0,u.get)(e,"subject","-")}),(0,A.jsx)("td",{children:(0,u.isEqual)((0,u.get)(e,"subject","-"),"P")?(0,u.get)(e,"customer.fullName","-"):(0,u.get)(e,"organization.name","-")}),(0,A.jsx)("td",{children:(0,u.get)(e,"contractNumber","-")}),(0,A.jsx)("td",{children:T()((0,u.get)(e,"contractDate","-")).format("DD-MM-YYYY")}),(0,A.jsx)("td",{children:(0,u.get)(e,"loanContractNumber","-")}),(0,A.jsx)("td",{children:T()((0,u.get)(e,"paymentDate","-")).format("DD-MM-YYYY")}),(0,A.jsx)("td",{children:(0,u.get)(e,"policy.filePath")?(0,A.jsx)("a",{href:"".concat(S.Z.FILE_URL).concat((0,u.get)(e,"policy.filePath","#")),target:"_blank",download:!0,children:(0,A.jsx)(D.Z,{color:"#13D6D1"})}):"-"}),(0,A.jsx)("td",{children:T()((0,u.get)(e,"createdAt","-")).format("DD-MM-YYYY")}),(0,A.jsx)("td",{children:(0,A.jsx)(L.Z,{children:(0,A.jsx)(P.Z,{property:{handleChange:function(t){return function(e,t){e&&t&&_({url:b.n.tengebankContracts,attributes:{id:t,isAccepted:e}},{onSuccess:function(){},onError:function(){}})}(t,(0,u.get)(e,"_id",null))}},name:"accepted",type:"switch",defaultValue:(0,u.get)(e,"isAccepted",!1),options:[],disabled:(0,u.get)(e,"isAccepted",!1)})})})]},t+1)}))})}),(0,A.jsx)(Y.Z,{page:r,setPage:s,totalItems:(0,u.get)(C,"data.totalItems",0)})]})})]})]})},X=c.ZP.div(a||(a=(0,s.Z)(["\n  label{\n    display: none;\n  }\n  label + div>span{\n    display: none;\n  }\n"]))),E=function(e){var t=Object.assign({},e);return(0,A.jsx)(X,(0,r.Z)((0,r.Z)({},t),{},{children:(0,A.jsx)(N,{})}))}}}]);
//# sourceMappingURL=8979.18099b5b.chunk.js.map