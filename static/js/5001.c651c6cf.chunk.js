"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[5001],{5001:function(e,a,t){t.r(a),t.d(a,{default:function(){return E}});var n,s=t(1413),r=t(168),l=t(2791),d=t(7939),i=t(9439),c=t(4653),u=t(4175),o=t(2250),m=t(763),p=t(9925),x=t(9279),h=t(631),f=t(6591),j=t(9314),b=t(3168),g=t(6871),y=t(4519),Z=t(967),X=t(7164),J=t(1469),k=t(7379),q=t(2703),V=t(184),v=function(e){Object.assign({},e);var a=(0,b.$)().t,t=(0,g.s0)(),n=(0,g.UO)().id,s=(0,p.xq)({id:n,key:x.t.branches,url:h.n.branches}),r=s.data,d=s.isLoading,v=(s.isError,(0,j.o)((function(e){return(0,m.get)(e,"setBreadcrumbs",(function(){}))}))),_=(0,p.i7)({key:x.t.levelofbranch,url:h.n.levelofbranch}).data;_=(0,q.WZ)((0,m.get)(_,"data.data",[]),"_id","name");var E=(0,p.i7)({key:x.t.regions,url:h.n.regions}).data;E=(0,q.WZ)((0,m.get)(E,"data.data",[]),"_id","name");var N=(0,p.i7)({key:x.t.position,url:h.n.position}).data;N=(0,q.WZ)((0,m.get)(N,"data.data",[]),"_id","name");var B=(0,p.i7)({key:x.t.breanchstatus,url:h.n.breanchstatus}).data;B=(0,q.WZ)((0,m.get)(B,"data.data",[]),"_id","name");var C=(0,p._E)({listKeyId:x.t.branches}),W=C.mutate,O=C.isLoading,w=(0,l.useState)(1),F=(0,i.Z)(w,2),I=F[0],L=F[1],P=(0,l.useMemo)((function(){return[{id:1,title:a("Branches"),path:"/branches"},{id:2,title:n,path:"#"}]}),[]);return(0,l.useEffect)((function(){v(P)}),[]),(0,l.useEffect)((function(){var e;null!==(e=(0,m.get)(r,"data.data.employees",[]))&&void 0!==e&&e.length&&L((0,m.get)(r,"data.data.employees").length)}),[(0,m.get)(r,"data.data")]),d?(0,V.jsx)(f.E,{}):(0,V.jsxs)(V.Fragment,{children:[O&&(0,V.jsx)(f.E,{}),(0,V.jsxs)(u.Z,{children:[(0,V.jsx)(c.X2,{className:"mb-25",children:(0,V.jsx)(c.JX,{xs:12,children:(0,V.jsx)(o.Z,{children:"Branch update"})})}),(0,V.jsxs)(y.Z,{footer:(0,V.jsx)(Z.Z,{type:"submit",lg:!0,children:"Update"}),formRequest:function(e){return function(e){var a=e.data;W({url:"".concat(h.n.branches,"/").concat(n),attributes:a},{onSuccess:function(){t("/branches")},onError:function(){}})}(e)},children:[(0,V.jsxs)(c.X2,{className:"mb-15",children:[(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"levelofbreanches",type:"select",label:"Branch level",options:_,params:{required:!0},defaultValue:(0,m.get)(r,"data.data.levelofbreanches")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"codeofbreanches",type:"input",label:"codeofbreanches",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.codeofbreanches")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"inn",type:"input-mask",label:"INN",property:{mask:"999999999",maskChar:"_"},params:{required:!0,pattern:/^[0-9]*$/},defaultValue:(0,m.get)(r,"data.data.inn")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"region",type:"select",label:"Region",options:E,params:{required:!0},defaultValue:(0,m.get)(r,"data.data.region._id")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"branchname",type:"input",label:"branchname",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.branchname")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"shorttitleofbranch",type:"input",label:"shorttitleofbranch",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.shorttitleofbranch")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"address",type:"input",label:"address",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.address")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"telephone",type:"input",label:"telephone",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.telephone")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"email",type:"input",label:"email",property:{type:"email"},params:{required:!0},defaultValue:(0,m.get)(r,"data.data.email")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"agreementnumber",type:"input",label:"agreementnumber",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.agreementnumber")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"agreementdate",type:"datepicker",label:"agreementdate",defaultValue:(0,m.get)(r,"data.data.agreementdate")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"expirationdate",type:"datepicker",label:"expirationdate",defaultValue:(0,m.get)(r,"data.data.expirationdate")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"checkingaccount",type:"input",label:"checkingaccount",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.checkingaccount")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"mfo",type:"input",label:"mfo",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.mfo")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"nameofbank",type:"input",label:"nameofbank",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.nameofbank")})}),(0,V.jsx)(c.JX,{xs:4,children:(0,V.jsx)(X.Z,{name:"breanchstatus",type:"select",label:"Branch status",options:B,params:{required:!0},defaultValue:(0,m.get)(r,"data.data.breanchstatus._id")})})]}),(0,V.jsx)(c.X2,{className:"mb-15",children:(0,V.jsx)(c.JX,{xs:12,children:(0,V.jsx)(o.Z,{sm:!0,children:"Add employee"})})}),(0,m.range)(0,I).map((function(e,a){return(0,V.jsxs)(c.X2,{align:"center",children:[(0,V.jsx)(c.JX,{xs:11,children:(0,V.jsxs)(c.X2,{children:[(0,V.jsx)(c.JX,{xs:3,children:(0,V.jsx)(X.Z,{name:"employees[".concat(e,"].fullname"),type:"input",label:"Fullname",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.employees[".concat(e,"].fullname"))})}),(0,V.jsx)(c.JX,{xs:3,children:(0,V.jsx)(X.Z,{name:"employees[".concat(e,"].positions"),type:"select",label:"Positions",options:N,params:{required:!0},defaultValue:(0,m.get)(r,"data.data.employees[".concat(e,"].positions._id"))})}),(0,V.jsx)(c.JX,{xs:3,children:(0,V.jsx)(X.Z,{name:"employees[".concat(e,"].telephonenumber"),type:"input",label:"telephonenumber",params:{required:!0},defaultValue:(0,m.get)(r,"data.data.employees[".concat(e,"].telephonenumber"))})}),(0,V.jsx)(c.JX,{xs:3,children:(0,V.jsx)(X.Z,{name:"employees[".concat(e,"].emailforcontacts"),type:"input",label:"emailforcontacts",property:{type:"email"},params:{required:!0},defaultValue:(0,m.get)(r,"data.data.employees[".concat(e,"].emailforcontacts"))})})]})}),(0,V.jsx)(c.JX,{xs:1,className:"text-right",children:(0,m.isEqual)(I,e+1)?(0,V.jsx)(Z.Z,{onClick:function(){return L((function(e){return++e}))},sm:!0,type:"button",inline:!0,children:(0,V.jsx)(J.Z,{})}):(0,V.jsx)(Z.Z,{danger:!0,onClick:function(){return L((function(e){return--e}))},sm:!0,type:"button",inline:!0,children:(0,V.jsx)(k.Z,{})})})]})}))]})]})]})},_=d.ZP.div(n||(n=(0,r.Z)(["\n"]))),E=function(e){var a=Object.assign({},e);return(0,V.jsx)(_,(0,s.Z)((0,s.Z)({},a),{},{children:(0,V.jsx)(v,{})}))}}}]);
//# sourceMappingURL=5001.c651c6cf.chunk.js.map