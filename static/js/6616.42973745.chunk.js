"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[6616],{6616:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var n,d=s(1413),r=s(168),a=s(2791),i=s(7939),c=s(9439),l=s(4653),h=s(4175),x=s(2250),j=s(763),o=s(9925),u=s(9279),m=s(631),g=s(6591),p=s(3282),f=s(9314),b=s(3168),Z=s(6871),y=s(7892),v=s.n(y),X=s(967),_=s(4519),w=s(7164),J=s(5141),k=s(2703),E=s(184),q=function(e){Object.assign({},e);var t=(0,b.$)().t,s=(0,Z.UO)().id,n=(0,a.useState)(!1),r=(0,c.Z)(n,2),i=r[0],y=r[1],q=(0,o.xq)({id:s,key:u.t.employee,url:m.n.employee}),A=q.data,N=q.isLoading,S=(q.isError,(0,o.i7)({key:u.t.accountroles,url:m.n.accountroles}).data);S=(0,k.WZ)((0,j.get)(S,"data.data",[]),"_id","name");var C=(0,o.i7)({key:u.t.accountstatus,url:m.n.accountstatus}).data;C=(0,k.WZ)((0,j.get)(C,"data.data",[]),"_id","name");var P=(0,o.n7)({listKeyId:[u.t.employee,s]}),Y=P.mutate,B=(P.isLoading,(0,f.o)((function(e){return(0,j.get)(e,"setBreadcrumbs",(function(){}))}))),D=(0,a.useMemo)((function(){return[{id:1,title:t("Employee"),path:"/branches"},{id:2,title:s,path:"#"}]}),[A]);if((0,a.useEffect)((function(){B(D)}),[]),N)return(0,E.jsx)(g.E,{});return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(h.Z,{children:[(0,E.jsxs)(l.X2,{className:"",children:[(0,E.jsx)(l.JX,{xs:10,children:(0,E.jsx)(x.Z,{children:"Employee view"})}),(0,E.jsx)(l.JX,{className:"text-right",xs:2,children:(0,E.jsx)(X.Z,{onClick:function(){return y(!0)},children:"Add Account"})})]}),(0,E.jsxs)(l.X2,{children:[(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsxs)(p.Z,{thead:["1","2"],children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Branch name")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.branch.branchname")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Region")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.regions.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("District")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.districts.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("address")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.address")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Position")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.position.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("name")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("secondname")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.secondname")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("middlename")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.middlename")})})]})]})}),(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsxs)(p.Z,{thead:["1","2"],children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("passportSeries")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.passportSeries")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("passportNumber")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.passportNumber")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("dateofbirth")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:v()((0,j.get)(A,"data.data.dateofbirth")).format("DD/MM/YYYY")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Pinfl")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.pin")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("telephone")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.telephonenumber")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("citizenship")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.citizenship.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("gender")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.gender.name")})})]})]})}),(0,E.jsx)(l.JX,{xs:12,className:"mt-15",children:(0,E.jsx)(x.Z,{sm:!0,children:"Account info"})}),(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsxs)(p.Z,{thead:["1","2"],children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Email")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.user_id.email")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Account role")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.user_id.accountrole.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Account status")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.user_id.accountstatus.name")})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:t("Branch")}),(0,E.jsx)("td",{children:(0,E.jsx)("strong",{children:(0,j.get)(A,"data.data.user_id.branch_Id.branchname")})})]})]})})]}),(0,E.jsx)(J.Z,{visible:i,onClose:function(){return y(!1)},children:(0,E.jsx)(_.Z,{footer:(0,E.jsx)(X.Z,{children:"Add"}),formRequest:function(e){return function(e){var t=e.data;Y({url:m.n.user,attributes:(0,d.Z)((0,d.Z)({},t),{},{branch_Id:(0,j.get)(A,"data.data.branch._id"),emp_id:s})},{onSuccess:function(){y(!1)}})}(e)},children:(0,E.jsxs)(l.X2,{className:"mt-15",children:[(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsx)(w.Z,{name:"email",type:"input",label:"Email",params:{required:!0}})}),(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsx)(w.Z,{name:"password",type:"input",label:"Password",params:{required:!0},property:{type:"password"}})}),(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsx)(w.Z,{name:"accountrole",type:"select",label:"Role",options:S,params:{required:!0}})}),(0,E.jsx)(l.JX,{xs:6,children:(0,E.jsx)(w.Z,{name:"accountstatus",type:"select",label:"Status",options:C,params:{required:!0}})})]})})})]})})},A=i.ZP.div(n||(n=(0,r.Z)(["\n  .rodal-dialog {\n    width: unset !important;\n    max-width: 50%;\n    min-width: 750px;\n    min-height: 350px !important;\n    max-height: 50vh !important;\n    overflow-y: auto;\n  }\n"]))),N=function(e){var t=Object.assign({},e);return(0,E.jsx)(A,(0,d.Z)((0,d.Z)({},t),{},{children:(0,E.jsx)(q,{})}))}}}]);
//# sourceMappingURL=6616.42973745.chunk.js.map