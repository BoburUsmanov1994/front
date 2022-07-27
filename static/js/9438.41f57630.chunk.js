"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[9438],{4175:function(n,t,d){var i,e=d(1413),a=d(4925),r=d(168),s=(d(2791),d(7939)),c=d(4653),l=d(184),h=["children"],o=s.ZP.section(i||(i=(0,r.Z)(["\n  padding: 25px 15px;\n  background-color: #fff;\n  \n"])));t.Z=function(n){var t=n.children,d=(0,a.Z)(n,h);return(0,l.jsx)(o,(0,e.Z)((0,e.Z)({},d),{},{children:(0,l.jsx)(c.W2,{fluid:!0,children:t})}))}},3282:function(n,t,d){var i,e=d(1413),a=d(4925),r=d(168),s=(d(2791),d(7939)),c=d(1694),l=d.n(c),h=d(184),o=["thead","children","hideThead"],x=s.ZP.table(i||(i=(0,r.Z)(["\n  width: 100%;\n  //overflow-x: scroll;\n\n  .form-group {\n    margin-bottom: 0;\n  }\n\n  tr {\n    vertical-align: middle;\n  }\n\n  .table-head {\n    &.hidden {\n      opacity: 0;\n    }\n\n    th {\n      padding: 12px;\n      color: #010101;\n      font-family: 'Gilroy-Medium', sans-serif;\n      font-size: 16px;\n\n      &:first-child {\n        text-align: left;\n        padding-left: 20px;\n      }\n\n      text-align: center;\n\n      &:last-child {\n        text-align: right;\n        padding-right: 20px;\n        min-width: 125px;\n      }\n    }\n  }\n\n  .table-body {\n    tr:nth-child(2n+1) {\n      background-color: #F4F4F4;\n    }\n\n    td {\n      padding: 12px;\n      font-family: 'Gilroy-Regular', sans-serif;\n      color: #000;\n      .w-250{\n        min-width: 250px !important;\n      }\n\n      &:first-child {\n        text-align: left;\n        padding-left: 20px;\n      }\n\n      text-align: center;\n\n      &:last-child {\n        text-align: right;\n        padding-right: 20px;\n      }\n    }\n  }\n \n"])));t.Z=function(n){var t=n.thead,d=void 0===t?[]:t,i=n.children,r=n.hideThead,s=void 0===r||r,c=(0,a.Z)(n,o);return(0,h.jsxs)(x,(0,e.Z)((0,e.Z)({},c),{},{children:[(0,h.jsx)("thead",{className:l()("table-head",{hidden:s}),children:(0,h.jsx)("tr",{children:d&&d.map((function(n,t){return(0,h.jsx)("th",{children:n},t+1)}))})}),(0,h.jsx)("tbody",{className:"table-body",children:i})]}))}},2250:function(n,t,d){var i,e,a=d(1413),r=d(9439),s=d(4925),c=d(168),l=d(2791),h=d(7939),o=d(184),x=["children"],j=h.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h2{\n    padding-right: 25px;\n    font-size: 24px;\n    color: #000;\n    font-family: 'Gilroy-Bold', sans-serif;\n    margin-bottom: 0;\n  }\n  .line{\n    height: 1px;\n    background-color: #E5E5E5;\n    margin-top: 5px;\n    ","\n  }\n  \n  ","\n"])),(function(n){var t=n.w;return t&&"width: calc(100% - ".concat(t,"px - 10px);")}),(function(n){return n.sm&&(0,h.iv)(e||(e=(0,c.Z)(["\n    h2 {\n      font-size: 18px;\n    }\n  "])))}));t.Z=function(n){var t=n.children,d=(0,s.Z)(n,x),i=(0,l.useState)(0),e=(0,r.Z)(i,2),c=e[0],h=e[1];(0,l.useEffect)((function(){h(g.current.clientWidth)}),[]);var g=(0,l.useRef)(null);return(0,o.jsxs)(j,(0,a.Z)((0,a.Z)({},d),{},{w:c,children:[(0,o.jsx)("h2",{ref:g,children:t}),(0,o.jsx)("div",{className:"line"})]}))}},9438:function(n,t,d){d.r(t),d.d(t,{default:function(){return J}});var i,e=d(1413),a=d(168),r=d(2791),s=d(7939),c=d(4653),l=d(4175),h=d(2250),o=d(763),x=d(9925),j=d(9279),g=d(631),u=d(6591),f=d(3282),p=d(9314),m=d(3168),v=d(6871),y=d(7892),b=d.n(y),Z=d(184),P=function(n){Object.assign({},n);var t=(0,m.$)().t,d=(0,v.UO)().id,i=(0,x.xq)({id:d,key:j.t.agents,url:g.n.agents}),e=i.data,a=i.isLoading,s=(i.isError,(0,p.o)((function(n){return(0,o.get)(n,"setBreadcrumbs",(function(){}))}))),y=(0,r.useMemo)((function(){return[{id:1,title:t("Agents"),path:"/agents"},{id:2,title:d,path:"#"}]}),[e]);return(0,r.useEffect)((function(){s(y)}),[]),a&&u.E,(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(c.X2,{className:"",children:(0,Z.jsx)(c.JX,{xs:12,children:(0,Z.jsx)(h.Z,{children:"Agent view"})})}),(0,Z.jsxs)(c.X2,{children:[(0,Z.jsx)(c.JX,{xs:6,children:(0,Z.jsxs)(f.Z,{thead:["1","2"],children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("accountrole")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.accountrole.name")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("accountstatus")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.accountstatus.name")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("agreementdate")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:b()((0,o.get)(e,"data.data.agreementdate")).format("DD/MM/YYYY")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("agreementnumber")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.agreementnumber")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("branch")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.branch.branchname")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("checkingaccount")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.checkingaccount")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("email")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.email")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("inn")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.inn")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("typeofagent")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.typeofagent.name")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("typeofpersons")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.typeofpersons.name")})})]})]})}),(0,Z.jsx)(c.JX,{xs:6,children:(0,Z.jsxs)(f.Z,{thead:["1","2"],children:[(0,o.get)(e,"data.data.corporateentitiesdata.districts")&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic address")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.address")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic checkingaccount")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.checkingaccount")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic districts")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.districts.name")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic innofbank")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.innofbank")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic mfo")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.mfo")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic nameofbank")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.nameofbank")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic nameoforganization")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.nameoforganization")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic oked")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.oked")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic postcode")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.postcode")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Juridic region")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.corporateentitiesdata.regionId.name")})})]})]}),(0,o.get)(e,"data.data.forindividualsdata")&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical region")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.address")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical citizenship")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.citizenship")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical dateofbirth")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:b()((0,o.get)(e,"data.data.forindividualsdata.dateofbirth")).format("DD/MM/YYYY")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical districts")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.districts")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical emailforcontact")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.emailforcontact")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical emailforcontact")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.emailforcontact")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical gender")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.gender.name")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical mfo")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.mfo")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical middlename")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.middlename")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical name")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.name")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical nameofbank")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.nameofbank")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical numberofcard")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.numberofcard")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical passportSeries")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.passportSeries")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical passportNumber")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.passportNumber")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical passportissuedby")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.passportissuedby")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical personalaccount")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.personalaccount")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical pin")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.pin")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical postcode")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.postcode")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical regions")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.regions")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical secondname")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.secondname")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical telephonenumber")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.telephonenumber")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical transitaccount")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.transitaccount")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:t("Physical typeofdocument")}),(0,Z.jsx)("td",{children:(0,Z.jsx)("strong",{children:(0,o.get)(e,"data.data.forindividualsdata.typeofdocument")})})]})]})]})})]})]})})},k=s.ZP.div(i||(i=(0,a.Z)(["\n  .box__outlined{\n    border:1px dotted #BABABA;\n    padding: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n"]))),J=function(n){var t=Object.assign({},n);return(0,Z.jsx)(k,(0,e.Z)((0,e.Z)({},t),{},{children:(0,Z.jsx)(P,{})}))}}}]);
//# sourceMappingURL=9438.41f57630.chunk.js.map