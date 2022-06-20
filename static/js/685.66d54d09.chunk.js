"use strict";(self.webpackChunkalfa_invest=self.webpackChunkalfa_invest||[]).push([[685],{6953:function(e,n,r){var t,a=r(1413),s=r(4925),l=r(168),c=(r(2791),r(7939)),i=r(4653),o=r(184),d=["children"],u=c.ZP.div(t||(t=(0,l.Z)(["\n  padding: 12px 15px;\n  background-color: #F7F7F7;\n  width: 100%;\n  display: block;\n"])));n.Z=function(e){var n=e.children,r=(0,s.Z)(e,d);return(0,o.jsx)(u,(0,a.Z)((0,a.Z)({},r),{},{children:(0,o.jsx)(i.W2,{fluid:!0,children:n})}))}},2630:function(e,n,r){var t,a=r(1413),s=r(168),l=(r(2791),r(7939)),c=r(5581),i=r(184),o=l.ZP.form(t||(t=(0,s.Z)(["\n  display: flex;\n\n  .search-form-input {\n    padding: 15px 25px;\n    border: 1px solid #CDCDCD;\n    border-radius: 5px 0px 0px 5px;\n    display: block;\n    width: 100%;\n    outline: none;\n    transition: 0.2s ease;\n    font-size: 16px;\n    font-family: 'Gilroy-Regular', sans-serif;\n\n    &:focus {\n      border-color: #13D6D1;\n    }\n  }\n\n  .search-form-btn {\n    padding: 15px 20px;\n    min-width: 175px;\n    text-align: center;\n    border: none;\n    background: #13D6D1;\n    border-radius: 0px 5px 5px 0px;\n    color: #fff;\n    font-size: 16px;\n    font-family: 'Gilroy-Medium', sans-serif;\n    cursor: pointer;\n  }\n"])));n.Z=function(e){var n=Object.assign({},e),r=(0,c.cI)(),t=r.register,s=r.handleSubmit;return(0,i.jsxs)(o,(0,a.Z)((0,a.Z)({onSubmit:s((function(e){console.log("search",e)}))},n),{},{children:[(0,i.jsx)("input",(0,a.Z)((0,a.Z)({placeholder:"\u041f\u043e\u0438\u0441\u043a"},t("search")),{},{type:"text",className:"search-form-input"})),(0,i.jsx)("button",{className:"search-form-btn",type:"submit",children:"\u041d\u0430\u0439\u0442\u0438"})]}))}},4175:function(e,n,r){var t,a=r(1413),s=r(4925),l=r(168),c=(r(2791),r(7939)),i=r(4653),o=r(184),d=["children"],u=c.ZP.section(t||(t=(0,l.Z)(["\n  padding: 25px 15px;\n  background-color: #fff;\n  \n"])));n.Z=function(e){var n=e.children,r=(0,s.Z)(e,d);return(0,o.jsx)(u,(0,a.Z)((0,a.Z)({},r),{},{children:(0,o.jsx)(i.W2,{fluid:!0,children:n})}))}},2250:function(e,n,r){var t,a=r(1413),s=r(9439),l=r(4925),c=r(168),i=r(2791),o=r(7939),d=r(184),u=["children"],f=o.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h2{\n    padding-right: 25px;\n    font-size: 24px;\n    color: #000;\n    font-family: 'Gilroy-Bold', sans-serif;\n    margin-bottom: 0;\n  }\n  .line{\n    height: 1px;\n    background-color: #E5E5E5;\n    margin-top: 5px;\n    ","\n  }\n"])),(function(e){var n=e.w;return n&&"width: calc(100% - ".concat(n,"px - 10px);")}));n.Z=function(e){var n=e.children,r=(0,l.Z)(e,u),t=(0,i.useState)(0),c=(0,s.Z)(t,2),o=c[0],p=c[1];(0,i.useEffect)((function(){p(b.current.clientWidth)}),[]);var b=(0,i.useRef)(null);return(0,d.jsxs)(f,(0,a.Z)((0,a.Z)({},r),{},{w:o,children:[(0,d.jsx)("h2",{ref:b,children:n}),(0,d.jsx)("div",{className:"line"})]}))}},7685:function(e,n,r){r.r(n),r.d(n,{default:function(){return le}});var t=r(1413),a=r(168),s=r(2791),l=r(7939),c=r(4925),i=r(9314),o=r(763),d=r(4653),u=r(6953),f=r(2630),p=r(2250),b=r(4175),m=(r(9279),r(631),r(6591),r(6871)),x=r(3168);function h(e){return function(n){return!!n.type&&n.type.tabsRole===e}}var v=h("Tab"),y=h("TabList"),j=h("TabPanel");function Z(e,n){return s.Children.map(e,(function(e){return null===e?null:function(e){return v(e)||y(e)||j(e)}(e)?n(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,s.cloneElement)(e,Object.assign({},e.props,{children:Z(e.props.children,n)})):e}))}function g(e,n){return s.Children.forEach(e,(function(e){null!==e&&(v(e)||j(e)?n(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(y(e)&&n(e),g(e.props.children,n)))}))}var C=r(8182);function N(e){var n=0;return g(e,(function(e){v(e)&&n++})),n}var w,k=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function T(e){return e&&"getAttribute"in e}function R(e){return T(e)&&e.getAttribute("data-rttab")}function E(e){return T(e)&&"true"===e.getAttribute("aria-disabled")}var P=function(e){var n=(0,s.useRef)([]),r=(0,s.useRef)([]),t=(0,s.useRef)();function a(n,r){n<0||n>=i()||(0,e.onSelect)(n,e.selectedIndex,r)}function l(e){for(var n=i(),r=e+1;r<n;r++)if(!E(o(r)))return r;for(var t=0;t<e;t++)if(!E(o(t)))return t;return e}function c(e){for(var n=e;n--;)if(!E(o(n)))return n;for(n=i();n-- >e;)if(!E(o(n)))return n;return e}function i(){return N(e.children)}function o(e){return n.current["tabs-"+e]}function d(e){var n=e.target;do{if(u(n)){if(E(n))return;return void a([].slice.call(n.parentNode.children).filter(R).indexOf(n),e)}}while(null!=(n=n.parentNode))}function u(e){if(!R(e))return!1;var n=e.parentElement;do{if(n===t.current)return!0;if(n.getAttribute("data-rttabs"))break;n=n.parentElement}while(n);return!1}e.children;var f=e.className,p=(e.disabledTabClassName,e.domRef),b=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,k));return s.createElement("div",Object.assign({},b,{className:(0,C.Z)(f),onClick:d,onKeyDown:function(n){var r=e.direction,t=e.disableUpDownKeys;if(u(n.target)){var s=e.selectedIndex,f=!1,p=!1;"Space"!==n.code&&32!==n.keyCode&&"Enter"!==n.code&&13!==n.keyCode||(f=!0,p=!1,d(n)),"ArrowLeft"!==n.code&&37!==n.keyCode&&(t||38!==n.keyCode&&"ArrowUp"!==n.code)?"ArrowRight"!==n.code&&39!==n.keyCode&&(t||40!==n.keyCode&&"ArrowDown"!==n.code)?35===n.keyCode||"End"===n.code?(s=function(){for(var e=i();e--;)if(!E(o(e)))return e;return null}(),f=!0,p=!0):36!==n.keyCode&&"Home"!==n.code||(s=function(){for(var e=i(),n=0;n<e;n++)if(!E(o(n)))return n;return null}(),f=!0,p=!0):(s="rtl"===r?c(s):l(s),f=!0,p=!0):(s="rtl"===r?l(s):c(s),f=!0,p=!0),f&&n.preventDefault(),p&&a(s,n)}},ref:function(e){t.current=e,p&&p(e)},"data-rttabs":!0}),function(){var t=0,a=e.children,l=e.disabledTabClassName,c=e.focus,d=e.forceRenderTabPanel,u=e.selectedIndex,f=e.selectedTabClassName,p=e.selectedTabPanelClassName,b=e.environment;r.current=r.current||[];for(var m=r.current.length-i(),x=(0,s.useId)();m++<0;)r.current.push(""+x+r.current.length);return Z(a,(function(e){var a=e;if(y(e)){var i=0,m=!1;null==w&&function(e){var n=e||("undefined"!==typeof window?window:void 0);try{w=!("undefined"===typeof n||!n.document||!n.document.activeElement)}catch(r){w=!1}}(b);var x=b||("undefined"!==typeof window?window:void 0);w&&x&&(m=s.Children.toArray(e.props.children).filter(v).some((function(e,n){return x.document.activeElement===o(n)}))),a=(0,s.cloneElement)(e,{children:Z(e.props.children,(function(e){var t="tabs-"+i,a=u===i,o={tabRef:function(e){n.current[t]=e},id:r.current[i],selected:a,focus:a&&(c||m)};return f&&(o.selectedClassName=f),l&&(o.disabledClassName=l),i++,(0,s.cloneElement)(e,o)}))})}else if(j(e)){var h={id:r.current[t],selected:u===t};d&&(h.forceRender=d),p&&(h.selectedClassName=p),t++,a=(0,s.cloneElement)(e,h)}return a}))}())};P.defaultProps={className:"react-tabs",focus:!1},P.propTypes={};var D=P,O=function(e){var n=e.children,r=e.defaultFocus,t=e.defaultIndex,a=e.focusTabOnClick,l=e.onSelect,c=(0,s.useState)(r),i=c[0],o=c[1],d=(0,s.useState)(function(e){return null===e.selectedIndex?1:0}(e)),u=d[0],f=(0,s.useState)(1===u?t||0:null),p=f[0],b=f[1];if((0,s.useEffect)((function(){o(!1)}),[]),1===u){var m=N(n);(0,s.useEffect)((function(){if(null!=p){var e=Math.max(0,m-1);b(Math.min(p,e))}}),[m])}var x=Object.assign({},e);return x.focus=i,x.onSelect=function(e,n,r){"function"===typeof l&&!1===l(e,n,r)||(a&&o(!0),1===u&&b(e))},null!=p&&(x.selectedIndex=p),delete x.defaultFocus,delete x.defaultIndex,delete x.focusTabOnClick,s.createElement(D,x,n)};O.propTypes={},O.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},O.tabsRole="Tabs";var I=O,_=["children","className"];var F=function(e){var n=e.children,r=e.className,t=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,_);return s.createElement("ul",Object.assign({},t,{className:(0,C.Z)(r),role:"tablist"}),n)};F.tabsRole="TabList",F.propTypes={},F.defaultProps={className:"react-tabs__tab-list"};var S=F,A=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];var X="react-tabs__tab",K={className:X,disabledClassName:X+"--disabled",focus:!1,id:null,selected:!1,selectedClassName:X+"--selected"},U=function(e){var n,r=(0,s.useRef)(),t=e.children,a=e.className,l=e.disabled,c=e.disabledClassName,i=e.focus,o=e.id,d=e.selected,u=e.selectedClassName,f=e.tabIndex,p=e.tabRef,b=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,A);return(0,s.useEffect)((function(){d&&i&&r.current.focus()}),[d,i]),s.createElement("li",Object.assign({},b,{className:(0,C.Z)(a,(n={},n[u]=d,n[c]=l,n)),ref:function(e){r.current=e,p&&p(e)},role:"tab",id:"tab"+o,"aria-selected":d?"true":"false","aria-disabled":l?"true":"false","aria-controls":"panel"+o,tabIndex:f||(d?"0":null),"data-rttab":!0}),t)};U.propTypes={},U.tabsRole="Tab",U.defaultProps=K;var z=U,J=["children","className","forceRender","id","selected","selectedClassName"];var M="react-tabs__tab-panel",G={className:M,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},L=function(e){var n,r=e.children,t=e.className,a=e.forceRender,l=e.id,c=e.selected,i=e.selectedClassName,o=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,J);return s.createElement("div",Object.assign({},o,{className:(0,C.Z)(t,(n={},n[i]=c,n)),role:"tabpanel",id:"panel"+l,"aria-labelledby":"tab"+l}),a||c?r:null)};L.tabsRole="TabPanel",L.propTypes={},L.defaultProps=G;var W,B,H,$=L,q=r(184),Q=["header","body"],V=l.ZP.div(W||(W=(0,a.Z)(["\n  .react-tabs__tab--selected {\n    border-radius: unset !important;\n    border-bottom-color: ",";\n  }\n\n  .react-tabs__tab {\n    padding: 10px 25px;\n    color: #000;\n    border: none;\n    border-bottom: 7px solid #F0F0F0;\n    min-width: 150px;\n    text-align: center;\n    position: unset;\n\n    &:focus {\n      outline: none !important;\n      border-bottom: 7px solid #F0F0F0;\n    }\n  }\n\n  .react-tabs__tab-list {\n    border: none !important;\n    display: flex;\n    margin-bottom: 30px;\n  }\n"])),(function(e){return e.success?"#13D6D1 !important":"#1D283A !important"})),Y=function(e){var n=e.header,r=void 0===n?[]:n,a=e.body,s=void 0===a?[]:a,l=(0,c.Z)(e,Q);return(0,q.jsx)(V,(0,t.Z)((0,t.Z)({},l),{},{children:(0,q.jsxs)(I,{children:[(0,q.jsx)(S,{children:r&&r.map((function(e,n){return(0,q.jsx)(z,{children:e},n+1)}))}),s&&s.map((function(e,n){return(0,q.jsx)($,{children:e},n+1)}))]})}))},ee=(r(9925),["data"]),ne=l.ZP.div(B||(B=(0,a.Z)(["\n  padding: 30px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  border: 1px solid #CDCDCD;\n"]))),re=function(e){e.data;var n=(0,c.Z)(e,ee);return(0,q.jsx)(ne,(0,t.Z)({},n))},te=["id"],ae=function(e){var n=e.id,r=((0,c.Z)(e,te),(0,x.$)().t),t=((0,m.s0)(),(0,i.o)((function(e){return(0,o.get)(e,"setBreadcrumbs",(function(){}))}))),a=(0,s.useMemo)((function(){return[{id:1,title:r("\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"),path:"/products"},{id:2,title:n,path:"#"}]}),[]);return(0,s.useEffect)((function(){t(a)}),[]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(u.Z,{children:(0,q.jsx)(d.X2,{children:(0,q.jsx)(d.JX,{xs:12,children:(0,q.jsx)(f.Z,{})})})}),(0,q.jsxs)(b.Z,{children:[(0,q.jsx)(d.X2,{className:"mb-25",children:(0,q.jsx)(d.JX,{xs:12,children:(0,q.jsx)(p.Z,{children:r("Agent product")})})}),(0,q.jsx)(d.X2,{children:(0,q.jsx)(d.JX,{xs:12,children:(0,q.jsx)(Y,{header:["\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043b\u0438\u0446\u0430","\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043b\u0438\u0446\u0430 "],body:[(0,q.jsx)(Y,{success:!0,header:["\u0410\u0432\u0442\u043e\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430","\u041b\u0438\u0447\u043d\u043e\u0435 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438","\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0435 \u0440\u0438\u0441\u043a\u0438"],body:[(0,q.jsx)(d.X2,{children:(0,q.jsx)(d.JX,{xs:4,children:(0,q.jsx)(re,{})})})]})]})})})]})]})},se=l.ZP.div(H||(H=(0,a.Z)(["\n"]))),le=function(e){var n=Object.assign({},e);return(0,q.jsx)(se,(0,t.Z)((0,t.Z)({},n),{},{children:(0,q.jsx)(ae,{})}))}}}]);
//# sourceMappingURL=685.66d54d09.chunk.js.map