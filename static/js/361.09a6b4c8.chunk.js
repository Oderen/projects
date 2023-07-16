"use strict";(self.webpackChunkmy_projects=self.webpackChunkmy_projects||[]).push([[361],{6361:function(n,r,e){e.r(r),e.d(r,{default:function(){return R}});var t=e(9439),a=e(2791),i=e(3044),o=e(8551),c=e(4708),s=e(9176),u=e(533),l=e(3433),p=e(4942),m=e(3366),d=e(7462),f=e(8182),g=e(1184),v=e(8519),h=e(4419),x=e(6934),w=e(1402),b=e(3967);var Z=a.createContext(),k=e(5878),S=e(1217);function j(n){return(0,S.Z)("MuiGrid",n)}var y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],W=(0,k.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,l.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,l.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,l.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-xs-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-sm-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-md-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-lg-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-xl-".concat(n)}))))),N=e(184),M=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function P(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function L(n){var r=n.breakpoints,e=n.values,t="";Object.keys(e).forEach((function(n){""===t&&0!==e[n]&&(t=n)}));var a=Object.keys(r).sort((function(n,e){return r[n]-r[e]}));return a.slice(0,a.indexOf(t))}var z=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState,t=e.container,a=e.direction,i=e.item,o=e.spacing,c=e.wrap,s=e.zeroMinWidth,u=e.breakpoints,p=[];t&&(p=function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var t=[];return r.forEach((function(r){var a=n[r];Number(a)>0&&t.push(e["spacing-".concat(r,"-").concat(String(a))])})),t}(o,u,r));var m=[];return u.forEach((function(n){var t=e[n];t&&m.push(r["grid-".concat(n,"-").concat(String(t))])})),[r.root,t&&r.container,i&&r.item,s&&r.zeroMinWidth].concat((0,l.Z)(p),["row"!==a&&r["direction-xs-".concat(String(a))],"wrap"!==c&&r["wrap-xs-".concat(String(c))]],m)}})((function(n){var r=n.ownerState;return(0,d.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,e=n.ownerState,t=(0,g.P$)({values:e.direction,breakpoints:r.breakpoints.values});return(0,g.k9)({theme:r},t,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(W.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,a=e.rowSpacing,i={};if(t&&0!==a){var o,c=(0,g.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=L({breakpoints:r.breakpoints.values,values:c})),i=(0,g.k9)({theme:r},c,(function(n,e){var t,a=r.spacing(n);return"0px"!==a?(0,p.Z)({marginTop:"-".concat(P(a))},"& > .".concat(W.item),{paddingTop:P(a)}):null!=(t=o)&&t.includes(e)?{}:(0,p.Z)({marginTop:0},"& > .".concat(W.item),{paddingTop:0})}))}return i}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,a=e.columnSpacing,i={};if(t&&0!==a){var o,c=(0,g.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=L({breakpoints:r.breakpoints.values,values:c})),i=(0,g.k9)({theme:r},c,(function(n,e){var t,a=r.spacing(n);return"0px"!==a?(0,p.Z)({width:"calc(100% + ".concat(P(a),")"),marginLeft:"-".concat(P(a))},"& > .".concat(W.item),{paddingLeft:P(a)}):null!=(t=o)&&t.includes(e)?{}:(0,p.Z)({width:"100%",marginLeft:0},"& > .".concat(W.item),{paddingLeft:0})}))}return i}),(function(n){var r,e=n.theme,t=n.ownerState;return e.breakpoints.keys.reduce((function(n,a){var i={};if(t[a]&&(r=t[a]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,g.P$)({values:t.columns,breakpoints:e.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(r/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var l=e.spacing(t.columnSpacing);if("0px"!==l){var p="calc(".concat(s," + ").concat(P(l),")");u={flexBasis:p,maxWidth:p}}}i=(0,d.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===e.breakpoints.values[a]?Object.assign(n,i):n[e.breakpoints.up(a)]=i,n}),{})}));var T=function(n){var r=n.classes,e=n.container,t=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];e&&(u=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return r.forEach((function(r){var t=n[r];if(Number(t)>0){var a="spacing-".concat(r,"-").concat(String(t));e.push(a)}})),e}(i,s));var p=[];s.forEach((function(r){var e=n[r];e&&p.push("grid-".concat(r,"-").concat(String(e)))}));var m={root:["root",e&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,l.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],p)};return(0,h.Z)(m,j,r)},_=a.forwardRef((function(n,r){var e=(0,w.Z)({props:n,name:"MuiGrid"}),t=(0,b.Z)().breakpoints,i=(0,v.Z)(e),o=i.className,c=i.columns,s=i.columnSpacing,u=i.component,l=void 0===u?"div":u,p=i.container,g=void 0!==p&&p,h=i.direction,x=void 0===h?"row":h,k=i.item,S=void 0!==k&&k,j=i.rowSpacing,y=i.spacing,W=void 0===y?0:y,P=i.wrap,L=void 0===P?"wrap":P,_=i.zeroMinWidth,E=void 0!==_&&_,G=(0,m.Z)(i,M),C=j||W,D=s||W,I=a.useContext(Z),B=g?c||12:I,F={},O=(0,d.Z)({},G);t.keys.forEach((function(n){null!=G[n]&&(F[n]=G[n],delete O[n])}));var $=(0,d.Z)({},i,{columns:B,container:g,direction:x,item:S,rowSpacing:C,columnSpacing:D,wrap:L,zeroMinWidth:E,spacing:W},F,{breakpoints:t.keys}),q=T($);return(0,N.jsx)(Z.Provider,{value:B,children:(0,N.jsx)(z,(0,d.Z)({ownerState:$,className:(0,f.Z)(q.root,o),as:l,ref:r},O))})})),E=_,G=e(4554),C=e(403),D=e(890),I=e(1614),B=e(9434),F=e(8661),O="LoginForm_loginButton__qeQmy",$="LoginForm_loginLink__ZHawW";function q(){var n=(0,B.I0)(),r=(0,a.useState)(!1),e=(0,t.Z)(r,2),l=e[0],p=e[1],m=(0,a.useState)(!1),d=(0,t.Z)(m,2),f=d[0],g=d[1],v=(0,B.v9)((function(n){return n.auth.isAuthProblem.isLogProblem}));return(0,N.jsxs)(I.Z,{component:"main",maxWidth:"xs",children:[(0,N.jsx)(c.ZP,{}),(0,N.jsxs)(G.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,N.jsx)(i.Z,{sx:{m:1,bgcolor:"#003262"},children:(0,N.jsx)(C.Z,{})}),(0,N.jsx)(D.Z,{component:"h1",variant:"h5",children:"Log In"}),(0,N.jsxs)(G.Z,{component:"form",onSubmit:function(r){r.preventDefault();var e=new FormData(r.currentTarget),t=e.get("email"),a=e.get("password");if(""===t)return p(!0);if(p(!1),!(a.length>6))return g(!0);g(!1);var i={name:t.split("@")[0],email:t,password:a};n((0,F.Ib)(i))},noValidate:!0,sx:{mt:1},children:[(0,N.jsx)(s.Z,{id:"email",name:"email",type:"email",label:"Email Address",placeholder:"example.something@gmail.com",autoComplete:"email",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,error:!(!l&&!v),helperText:l?"Invalid email. Please try again":""}),(0,N.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!(!f&&!v),helperText:f?"Password must contain at leat 7 characters":"",autoComplete:"current-password"}),v&&(0,N.jsx)("div",{style:{marginTop:10},children:(0,N.jsx)("p",{style:{margin:0,color:"red"},children:"Wrong email or password. Please try again"})}),(0,N.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},className:O,children:"Log In"}),(0,N.jsx)(E,{container:!0,children:(0,N.jsx)(E,{item:!0,children:(0,N.jsx)(u.Z,{href:"http://localhost:3000/goit-react-hw-08-phonebook/register",variant:"body2",style:{textDecoration:"none"},children:(0,N.jsxs)("p",{className:$,children:[(0,N.jsx)("span",{children:"Don't have an account?"}),(0,N.jsx)("span",{style:{marginLeft:5},children:"Sign Up"})]})})})})]})]})]})}var R=function(){return(0,N.jsx)(q,{})}}}]);
//# sourceMappingURL=361.09a6b4c8.chunk.js.map