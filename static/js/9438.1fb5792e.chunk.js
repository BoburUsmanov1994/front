"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[9438],{9438:function(t,d,a){a.r(d),a.d(d,{default:function(){return q}});var e,s=a(1413),n=a(168),r=a(2791),i=a(7939),c=a(9439),l=a(4653),h=a(4175),o=a(2250),x=a(763),j=a(9925),g=a(9279),u=a(631),m=a(6591),f=a(3282),p=a(9314),y=a(3168),b=a(6871),v=a(7892),P=a.n(v),k=a(967),Z=a(5141),J=a(7164),X=a(4519),w=a(2703),_=a(184),A=function(t){Object.assign({},t);var d=(0,r.useState)(!1),a=(0,c.Z)(d,2),e=a[0],n=a[1],i=(0,y.$)().t,v=(0,b.UO)().id,A=(0,j.xq)({id:v,key:g.t.agents,url:u.n.agents}),Y=A.data,q=A.isLoading,M=(A.isError,(0,j.i7)({key:g.t.accountroles,url:u.n.accountroles}).data);M=(0,w.WZ)((0,x.get)(M,"data.data",[]),"_id","name");var N=(0,j.i7)({key:g.t.accountstatus,url:u.n.accountstatus}).data;N=(0,w.WZ)((0,x.get)(N,"data.data",[]),"_id","name");var S=(0,j.n7)({listKeyId:g.t.user}),z=S.mutate,B=(S.isLoading,(0,p.o)((function(t){return(0,x.get)(t,"setBreadcrumbs",(function(){}))}))),C=(0,r.useMemo)((function(){return[{id:1,title:i("Agents"),path:"/agents"},{id:2,title:v,path:"#"}]}),[Y]);if((0,r.useEffect)((function(){B(C)}),[]),q)return(0,_.jsx)(m.E,{});return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(h.Z,{children:[(0,_.jsxs)(l.X2,{className:"",children:[(0,_.jsx)(l.JX,{xs:10,children:(0,_.jsx)(o.Z,{children:"Agent view"})}),(0,_.jsx)(l.JX,{className:"text-right",xs:2,children:(0,_.jsx)(k.Z,{onClick:function(){return n(!0)},children:"Add Account"})})]}),(0,_.jsxs)(l.X2,{children:[(0,_.jsx)(l.JX,{xs:6,children:(0,_.jsxs)(f.Z,{thead:["1","2"],children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("accountrole")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.accountrole.name")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("accountstatus")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.accountstatus.name")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("agreementdate")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:P()((0,x.get)(Y,"data.data.agreementdate")).format("DD/MM/YYYY")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("agreementnumber")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.agreementnumber")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("branch")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.branch.branchname")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("checkingaccount")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.checkingaccount")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("email")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.email")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("inn")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.inn")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("typeofagent")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.typeofagent.name")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("typeofpersons")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.typeofpersons.name")})})]})]})}),(0,_.jsx)(l.JX,{xs:6,children:(0,_.jsxs)(f.Z,{thead:["1","2"],children:[(0,x.get)(Y,"data.data.corporateentitiesdata.districts")&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic address")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.address")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic checkingaccount")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.checkingaccount")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic districts")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.districts.name")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic innofbank")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.innofbank")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic mfo")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.mfo")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic nameofbank")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.nameofbank")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic nameoforganization")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.nameoforganization")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic oked")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.oked")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic postcode")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.postcode")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Juridic region")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.corporateentitiesdata.regionId.name")})})]})]}),(0,x.get)(Y,"data.data.forindividualsdata")&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical region")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.address")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical citizenship")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.citizenship")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical dateofbirth")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:P()((0,x.get)(Y,"data.data.forindividualsdata.dateofbirth")).format("DD/MM/YYYY")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical districts")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.districts")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical emailforcontact")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.emailforcontact")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical emailforcontact")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.emailforcontact")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical gender")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.gender.name")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical mfo")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.mfo")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical middlename")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.middlename")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical name")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.name")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical nameofbank")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.nameofbank")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical numberofcard")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.numberofcard")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical passportSeries")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.passportSeries")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical passportNumber")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.passportNumber")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical passportissuedby")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.passportissuedby")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical personalaccount")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.personalaccount")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical pin")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.pin")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical postcode")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.postcode")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical regions")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.regions")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical secondname")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.secondname")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical telephonenumber")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.telephonenumber")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical transitaccount")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.transitaccount")})})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:i("Physical typeofdocument")}),(0,_.jsx)("td",{children:(0,_.jsx)("strong",{children:(0,x.get)(Y,"data.data.forindividualsdata.typeofdocument")})})]})]})]})})]}),(0,_.jsx)(Z.Z,{visible:e,onClose:function(){return n(!1)},children:(0,_.jsx)(X.Z,{footer:(0,_.jsx)(k.Z,{children:"Add"}),formRequest:function(t){return function(t){var d=t.data;z({url:u.n.user,attributes:(0,s.Z)({},d),config:{headers:{branch_Id:(0,x.get)(Y,"data.data.branch._id"),agent_Id:v}}},{onSuccess:function(){n(!1)}})}(t)},children:(0,_.jsxs)(l.X2,{className:"mt-15",children:[(0,_.jsx)(l.JX,{xs:6,children:(0,_.jsx)(J.Z,{name:"email",type:"input",label:"Email",params:{required:!0}})}),(0,_.jsx)(l.JX,{xs:6,children:(0,_.jsx)(J.Z,{name:"password",type:"input",label:"Password",params:{required:!0},property:{type:"password"}})}),(0,_.jsx)(l.JX,{xs:6,children:(0,_.jsx)(J.Z,{name:"accountrole",type:"select",label:"Role",options:M,params:{required:!0}})}),(0,_.jsx)(l.JX,{xs:6,children:(0,_.jsx)(J.Z,{name:"accountstatus",type:"select",label:"Status",options:N,params:{required:!0}})})]})})})]})})},Y=i.ZP.div(e||(e=(0,n.Z)(["\n  .box__outlined{\n    border:1px dotted #BABABA;\n    padding: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .rodal-dialog {\n    width: unset !important;\n    max-width: 50%;\n    min-width: 750px;\n    min-height: 350px !important;\n    max-height: 50vh !important;\n    overflow-y: auto;\n  }\n"]))),q=function(t){var d=Object.assign({},t);return(0,_.jsx)(Y,(0,s.Z)((0,s.Z)({},d),{},{children:(0,_.jsx)(A,{})}))}}}]);
//# sourceMappingURL=9438.1fb5792e.chunk.js.map