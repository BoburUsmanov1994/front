"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[392],{392:function(a,e,t){t.r(e),t.d(e,{default:function(){return Y}});var d,n=t(1413),s=t(168),i=t(2791),r=t(7939),l=t(9439),o=t(4653),u=t(4175),c=t(2250),p=t(763),m=t(9925),x=t(9279),f=t(631),j=t(6591),g=t(9314),y=t(3168),h=t(6871),b=t(4519),Z=t(967),v=t(7164),X=t(1469),J=t(7379),V=t(2703),k=(t(6953),t(2630),t(184)),q=function(a){Object.assign({},a);var e=(0,y.$)().t,t=(0,h.s0)(),d=(0,h.UO)().id,s=(0,i.useState)(null),r=(0,l.Z)(s,2),q=r[0],_=r[1],Y=(0,i.useState)(0),E=(0,l.Z)(Y,2),A=E[0],D=E[1],F=(0,m.xq)({id:d,key:x.t.agents,url:f.n.agents}),M=F.data,W=F.isLoading,N=(F.isError,(0,m._E)({listKeyId:x.t.agents})),C=N.mutate,w=N.isLoading,z=(0,g.o)((function(a){return(0,p.get)(a,"setBreadcrumbs",(function(){}))})),I=(0,m.i7)({key:x.t.branches,url:f.n.branches}).data;I=(0,V.WZ)((0,p.get)(I,"data.data",[]),"_id","branchname");var P=(0,m.i7)({key:x.t.regions,url:f.n.regions}).data;P=(0,V.WZ)((0,p.get)(P,"data.data",[]),"_id","name");var U=(0,m.i7)({key:x.t.typeofagent,url:f.n.typeofagent}).data;U=(0,V.WZ)((0,p.get)(U,"data.data",[]),"_id","name");var R=(0,m.i7)({key:x.t.typeofpersons,url:f.n.typeofpersons}).data;R=(0,V.WZ)((0,p.get)(R,"data.data",[]),"_id","name");var B=(0,m.i7)({key:x.t.accountstatus,url:f.n.accountstatus}).data;B=(0,V.WZ)((0,p.get)(B,"data.data",[]),"_id","name");var S=(0,m.i7)({key:x.t.accountroles,url:f.n.accountroles}).data;S=(0,V.WZ)((0,p.get)(S,"data.data",[]),"_id","name");var L=(0,m.i7)({key:x.t.genders,url:f.n.genders}).data;L=(0,V.WZ)((0,p.get)(L,"data.data",[]),"_id","name");var O=(0,m.i7)({key:x.t.citizenship,url:f.n.citizenship}).data;O=(0,V.WZ)((0,p.get)(O,"data.data",[]),"_id","name");var $=(0,m.i7)({key:x.t.typeofdocuments,url:f.n.typeofdocuments}).data;$=(0,V.WZ)((0,p.get)($,"data.data",[]),"_id","name");var G=(0,m.i7)({key:x.t.districts,url:f.n.districts}).data;G=(0,V.WZ)((0,p.get)(G,"data.data",[]),"_id","name");var K=(0,m.i7)({key:x.t.position,url:f.n.position}).data;K=(0,V.WZ)((0,p.get)(K,"data.data",[]),"_id","name");var H=(0,i.useMemo)((function(){return[{id:1,title:e("Agents"),path:"/agents"},{id:2,title:d,path:"#"}]}),[]);return(0,i.useEffect)((function(){z(H)}),[]),(0,i.useEffect)((function(){var a;null!==(a=(0,p.get)(M,"data.data.corporateentitiesdata.employees",[]))&&void 0!==a&&a.length&&D((0,p.get)(M,"data.data.corporateentitiesdata.employees").length)}),[(0,p.get)(M,"data.data")]),W?(0,k.jsx)(j.E,{}):(0,k.jsxs)(k.Fragment,{children:[w&&(0,k.jsx)(j.E,{}),(0,k.jsxs)(u.Z,{children:[(0,k.jsx)(o.X2,{className:"mb-25",children:(0,k.jsx)(o.JX,{xs:12,children:(0,k.jsx)(c.Z,{children:"Agent update"})})}),(0,k.jsx)(b.Z,{getValueFromField:function(a,e){return function(a,e){(0,p.isEqual)(e,"typeofpersons")&&_(a)}(a,e)},footer:(0,k.jsx)(Z.Z,{children:"Update"}),formRequest:function(a){return function(a){var e=a.data;C({url:"".concat(f.n.agents,"/").concat(d),attributes:(0,n.Z)((0,n.Z)({},e),{},{isbeneficiary:null,isfixedpolicyholde:null})},{onSuccess:function(){t("/agents/insurance-agents")},onError:function(){}})}(a)},children:(0,k.jsxs)(o.X2,{children:[(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"branch",type:"select",label:"Branch",options:I,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.branch")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"inn",type:"input-mask",label:"INN",property:{mask:"999999999",maskChar:"_"},params:{required:!0,pattern:/^[0-9]*$/},defaultValue:(0,p.get)(M,"data.data.inn")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"agreementnumber",type:"input",label:"agreementnumber",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.agreementnumber")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"agreementdate",dateFormat:"MM/DD/YYYY",type:"datepicker",label:"agreementdate",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.agreementdate")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"typeofagent",type:"select",label:"Agent type",options:U,defaultValue:(0,p.get)(M,"data.data.typeofagent._id")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"typeofpersons",type:"select",label:"Person type",options:R,defaultValue:(0,p.get)(M,"data.data.typeofpersons._id"),params:{required:!0}})}),(0,p.isEqual)(q,"6292025f8982798b6996bc34")&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.name",type:"input",label:"name",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.name")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.secondname",type:"input",label:"secondname",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.secondname")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.middlename",type:"input",label:"middlename",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.middlename")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.gender",type:"select",label:"Gender",options:L,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.gender")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.dateofbirth",dateFormat:"MM/DD/YYYY",type:"datepicker",label:"dateofbirth",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.dateofbirth")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.citizenship",type:"select",label:"Citizenship",options:O,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.citizenship")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.typeofdocument",type:"select",label:"typeofdocument",options:$,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.typeofdocument")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.passportSeries",type:"input-mask",label:"Passport seria",property:{mask:"aa",maskChar:"_"},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.passportSeries")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.passportNumber",type:"input-mask",label:"Passport number",property:{mask:"9999999",maskChar:"_"},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.passportNumber")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.pin",type:"input-mask",label:"PINFL",property:{mask:"99999999999999",maskChar:"_"},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.pin")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.passportissuancedate",dateFormat:"MM/DD/YYYY",type:"datepicker",label:"passportissuancedate",defaultValue:(0,p.get)(M,"forindividualsdata.passportissuancedate")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.passportissuedby",type:"input",label:"passportissuedby",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.passportissuedby")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.regions",type:"select",label:"Region",options:P,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.regions")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.districts",type:"select",label:"District",options:G,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.forindividualsdata.districts")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.address",type:"input",label:"address",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.address")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.postcode",type:"input",label:"postcode",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.postcode")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.telephonenumber",type:"input",label:"telephonenumber",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.telephonenumber")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.emailforcontact",type:"input",label:"emailforcontact",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.emailforcontact")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.personalaccount",type:"input",label:"personalaccount",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.personalaccount")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.transitaccount",type:"input",label:"transitaccount",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.transitaccount")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.mfo",type:"input",label:"mfo",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.mfo")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.nameofbank",type:"input",label:"nameofbank",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.nameofbank")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"forindividualsdata.numberofcard",type:"input",label:"numberofcard",defaultValue:(0,p.get)(M,"data.data.forindividualsdata.numberofcard")})})]}),(0,p.isEqual)(q,"629202448982798b6996bc32")&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.nameoforganization",type:"input",label:"nameoforganization",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.nameoforganization")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.oked",type:"input",label:"oked",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.oked")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.mfo",type:"input",label:"mfo",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.mfo")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.nameofbank",type:"input",label:"nameofbank",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.nameofbank")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.innofbank",type:"input",label:"innofbank",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.innofbank")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.scheduledaccount",type:"input",label:"scheduledaccount",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.scheduledaccount")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.regionId",type:"select",label:"Region",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.regionId"),options:P})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.districts",type:"select",label:"District",options:G,defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.districts"),params:{required:!0}})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.address",type:"input",label:"address",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.address")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.postcode",type:"input",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.postcode"),label:"postcode"})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.checkingaccount",type:"input",label:"checkingaccount",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.checkingaccount")})}),(0,k.jsx)(o.JX,{xs:11,className:"mb-15",children:(0,k.jsx)(c.Z,{sm:!0,children:"Add employee"})}),(0,k.jsx)(o.JX,{xs:1,className:"text-right",children:(0,k.jsx)(Z.Z,{onClick:function(){return D((function(a){return++a}))},sm:!0,type:"button",inline:!0,children:(0,k.jsx)(X.Z,{})})}),(0,p.range)(0,A).map((function(a){return(0,k.jsx)(o.JX,{xs:12,className:"box__outlined",children:(0,k.jsxs)(o.X2,{align:"center",children:[(0,k.jsx)(o.JX,{xs:11,children:(0,k.jsxs)(o.X2,{children:[(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].fullname"),type:"input",label:"Employee fullname",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].fullname"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].positions"),type:"select",options:K,label:"Employee position",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].positions"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].typeofdocumentsformanager"),type:"select",options:$,label:"Employee doc type",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].typeofdocumentsformanager"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].documentnumber"),type:"input",label:"Employee documentnumber",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].documentnumber"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].dateofmanagerdocument"),dateFormat:"MM/DD/YYYY",type:"datepicker",label:"dateofmanagerdocument",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].dateofmanagerdocument"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].expirationdate"),dateFormat:"MM/DD/YYYY",type:"datepicker",label:"expirationdate",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].expirationdate"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].telephonenumber"),type:"input",label:"telephonenumber",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].telephonenumber"))})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"corporateentitiesdata.employees[".concat(a,"].emailforcontacts"),type:"input",label:"emailforcontacts",defaultValue:(0,p.get)(M,"data.data.corporateentitiesdata.employees[".concat(a,"].emailforcontacts"))})})]})}),(0,k.jsx)(o.JX,{xs:1,className:"text-right ",children:(0,k.jsx)(Z.Z,{danger:!0,onClick:function(){return D((function(a){return--a}))},sm:!0,type:"button",inline:!0,children:(0,k.jsx)(J.Z,{})})})]})})}))]}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{label:"isUsedourpanel",type:"switch",name:"isUsedourpanel",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.isUsedourpanel")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{label:"isUserRestAPI",type:"switch",name:"isUserRestAPI",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.isUserRestAPI")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"email",type:"input",label:"Email",params:{required:!0},defaultValue:(0,p.get)(M,"data.data.email")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"password",type:"input",label:"password",property:{type:"password"},params:{required:!0},defaultValue:(0,p.get)(M,"data.data.password")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"accountstatus",type:"select",label:"Account status",options:B,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.accountstatus._id")})}),(0,k.jsx)(o.JX,{xs:4,children:(0,k.jsx)(v.Z,{name:"accountrole",type:"select",label:"Account role",options:S,params:{required:!0},defaultValue:(0,p.get)(M,"data.data.accountrole._id")})})]})})]})]})},_=r.ZP.div(d||(d=(0,s.Z)(["\n  .box__outlined{\n    border:1px dotted #BABABA;\n    padding: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n"]))),Y=function(a){var e=Object.assign({},a);return(0,k.jsx)(_,(0,n.Z)((0,n.Z)({},e),{},{children:(0,k.jsx)(q,{})}))}}}]);
//# sourceMappingURL=392.df5cedd8.chunk.js.map