(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8150],{94532:function(e,n,t){"use strict";var s=t(64836);n.Z=void 0;var l=s(t(64938)),i=t(85893),r=(0,l.default)((0,i.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");n.Z=r},2525:function(e,n,t){"use strict";var s=t(64836);n.Z=void 0;var l=s(t(64938)),i=t(85893),r=(0,l.default)((0,i.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}),"VisibilityOutlined");n.Z=r},4973:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/balances",function(){return t(35523)}])},71807:function(e,n,t){"use strict";var s=t(85893),l=t(99226),i=t(52774),r=t(92613),a=t(98927);n.Z=function(e){var n=e.children;return(0,s.jsx)(r.Z,{title:"Assets",action:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(i.Z,{tabs:a.do}),n]})})})}},72486:function(e,n,t){"use strict";var s=t(14924),l=t(10253),i=t(85893),r=t(67294),a=t(99226),o=t(7906),c=t(295),d=t(53252),u=t(72882),f=t(53184),h=t(8896),x=t(53816),m=t(26280),p=t(90629),Z=t(13113),v=t(94184),j=t.n(v),C=t(71824),b=t.n(C),g=t(57922);function _(e,n,t){return n.cells[t].rawValue<e.cells[t].rawValue?-1:n.cells[t].rawValue>e.cells[t].rawValue?1:0}function y(e){var n=e.headCells,t=e.order,l=e.orderBy,r=e.onRequestSort;return(0,i.jsx)(f.Z,{children:(0,i.jsx)(x.Z,{children:n.map((function(e){return(0,i.jsx)(d.Z,{align:"left",padding:"normal",sortDirection:l===e.id&&t,sx:e.width?{width:e.width}:void 0,className:j()((0,s.Z)({sticky:e.sticky},b().hide,e.hide)),children:e.label&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{active:l===e.id,direction:l===e.id?t:"asc",onClick:(n=e.id,function(){r(n)}),children:[e.label,l===e.id?(0,i.jsx)(a.Z,{component:"span",sx:Z.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})})},e.id);var n}))})})}var k=[10,25,100];n.Z=function(e){var n,t=e.rows,f=e.headCells,m=e.mobileVariant,Z=(0,r.useState)("asc"),v=Z[0],C=Z[1],w=(0,r.useState)(""),S=w[0],I=w[1],N=(0,r.useState)(0),H=N[0],A=N[1],O=(0,r.useState)(k[1]),V=O[0],E=O[1],B=S?t.slice().sort(function(e,n){return"desc"===e?function(e,t){return _(e,t,n)}:function(e,t){return-_(e,t,n)}}(v,S)):t,T=B.slice(H*V,H*V+V);return(0,i.jsxs)(a.Z,{sx:{width:"100%"},children:[(0,i.jsx)(u.Z,{component:p.Z,sx:{width:"100%",mb:2},children:(0,i.jsxs)(o.Z,{"aria-labelledby":"tableTitle",className:m?b().mobileColumn:void 0,children:[(0,i.jsx)(y,{headCells:f,order:v,orderBy:S,onRequestSort:function(e){C(S===e&&"asc"===v?"desc":"asc"),I(e)}}),(0,i.jsx)(c.Z,{children:T.length>0?T.map((function(e,t){return(0,i.jsx)(x.Z,{tabIndex:-1,selected:e.selected,className:e.collapsed?b().collapsedRow:void 0,children:Object.entries(e.cells).map((function(n){var r,a=(0,l.Z)(n,2),o=a[0],c=a[1];return(0,i.jsx)(d.Z,{className:j()((r={sticky:c.sticky},(0,s.Z)(r,b().hide,c.hide),(0,s.Z)(r,b().collapsedCell,e.collapsed),r)),children:(0,i.jsx)(g.Z,{in:!e.collapsed,enter:!1,children:c.content},t)},o)}))},null!==(n=e.key)&&void 0!==n?n:t)})):(0,i.jsx)(x.Z,{children:(0,i.jsx)(d.Z,{})})})]})}),t.length>T.length&&(0,i.jsx)(h.Z,{rowsPerPageOptions:k,component:"div",count:t.length,rowsPerPage:V,page:H,onPageChange:function(e,n){A(n)},onRowsPerPageChange:function(e){E(parseInt(e.target.value,10)),A(0)}})]})}},52774:function(e,n,t){"use strict";var s=t(26042),l=t(99534),i=t(85893),r=t(67294),a=t(41664),o=t.n(a),c=t(40044),d=t(88409),u=t(15861),f=t(11163),h=t(51039),x=t.n(h),m=(0,r.forwardRef)((function(e,n){var t=e.href,r=e.as,a=e.replace,c=e.scroll,d=e.shallow,u=e.prefetch,f=e.legacyBehavior,h=void 0===f||f,x=e.locale,m=(0,l.Z)(e,["href","as","replace","scroll","shallow","prefetch","legacyBehavior","locale"]);return(0,i.jsx)(o(),{href:t,prefetch:u,as:r,replace:a,scroll:c,shallow:d,passHref:!0,locale:x,legacyBehavior:h,children:(0,i.jsx)("a",(0,s.Z)({ref:n},m))})}));n.Z=function(e){var n=e.tabs,t=(0,f.useRouter)(),s=n.map((function(e){return e.href})).indexOf(t.pathname);return(0,i.jsx)(d.Z,{value:s,variant:"scrollable",allowScrollButtonsMobile:!0,className:x().tabs,children:n.map((function(e,n){return(0,i.jsx)(c.Z,{component:m,href:{pathname:e.href,query:{safe:t.query.safe}},className:x().tab,label:(0,i.jsx)(u.Z,{variant:"body2",fontWeight:700,color:s===n?"primary":"primary.light",className:x().label,children:e.label})},e.href)}))})}},92613:function(e,n,t){"use strict";var s=t(85893),l=t(99226),i=t(15861),r=t(28962),a=t.n(r);n.Z=function(e){var n=e.title,t=e.action,r=e.noBorder;return(0,s.jsxs)(l.Z,{className:a().container,sx:{borderBottom:r?void 0:function(e){var n=e.palette;return"1px solid ".concat(n.border.light)}},children:[(0,s.jsx)(i.Z,{variant:"h3",className:a().title,children:n}),t]})}},71233:function(e,n,t){"use strict";var s=t(14924),l=t(85893),i=t(18831),r=t(66172),a=t.n(r),o=t(46794),c=t(38042),d=t(94184),u=t.n(d);n.Z=function(e){var n=e.value,t=e.decimals,r=e.logoUri,d=e.tokenSymbol,f=e.direction,h=e.fallbackSrc,x=f===i.TransferDirection.OUTGOING?"-":"",m=t?(0,o.Mb)(n,t):n;return(0,l.jsxs)("span",{className:u()(a().container,(0,s.Z)({},a().verticalAlign,r)),children:[r&&(0,l.jsx)(c.Z,{logoUri:r,tokenSymbol:d,fallbackSrc:h}),x,m," ",d]})}},39986:function(e,n,t){"use strict";var s=t(26042),l=t(69396),i=t(99534),r=t(85893),a=(t(67294),t(24939)),o=t(96326),c=t(14234),d=[{label:"Send tokens",render:function(e,n){var t=e.disableSpendingLimit,s=(0,i.Z)(e,["disableSpendingLimit"]);return(0,r.jsx)(a.ZP,{onSubmit:n,formData:s,disableSpendingLimit:t})}},{label:"Review transaction",render:function(e,n){return(0,r.jsx)(o.Z,{onSubmit:n,params:e})}}];n.Z=function(e){return(0,r.jsx)(c.Z,(0,l.Z)((0,s.Z)({},e),{steps:d}))}},35523:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return pe}});var s,l,i=t(85893),r=t(9008),a=t.n(r),o=t(99226),c=t(98456),d=t(26042),u=t(69396),f=t(67294),h=t(83321),x=t(34386),m=t(15861),p=t(53219),Z=t(93946),v=t(69368),j=t(18831),C=t(75355),b=t.n(C),g=t(89336),_=t(39059),y=t(13162),k=function(e){var n=e.value,t=(0,g.CG)(_.j),s=(0,f.useMemo)((function(){return(0,y.xG)(n,t)}),[n,t]);return(0,i.jsx)("span",{suppressHydrationWarning:!0,children:s})},w=t(71233),S=t(38042),I=t(72486),N=t(87728),H=t(39986),A=t(75041),O=t(3514),V=t(12888),E=t(92924),B=t(2525),T=t(62687),L=t(94532),D=t(63589),z=t.n(D),P=function(e){var n=e.saveChanges,t=e.cancel,s=e.selectedAssetCount,l=e.showHiddenAssets,r=e.deselectAll;return 0!==s||l?(0,i.jsxs)(o.Z,{className:z().stickyBox,children:[(0,i.jsxs)(o.Z,{className:z().hideTokensHeader,children:[(0,i.jsx)(L.Z,{}),(0,i.jsxs)(m.Z,{children:[s," ",1===s?"token":"tokens"," selected"]})]}),(0,i.jsxs)(o.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,i.jsx)(O.Z,(0,u.Z)((0,d.Z)({},T.iV.CANCEL_HIDE_DIALOG),{children:(0,i.jsx)(h.Z,{onClick:t,className:z().cancelButton,size:"small",variant:"outlined",children:"Cancel"})})),(0,i.jsx)(O.Z,(0,u.Z)((0,d.Z)({},T.iV.DESELECT_ALL_HIDE_DIALOG),{children:(0,i.jsx)(h.Z,{onClick:r,className:z().cancelButton,size:"small",variant:"outlined",children:"Deselect all"})})),(0,i.jsx)(O.Z,(0,u.Z)((0,d.Z)({},T.iV.SAVE_HIDE_DIALOG),{children:(0,i.jsx)(h.Z,{onClick:n,className:z().applyButton,size:"small",variant:"contained",children:"Save"})}))]})]}):null},M=t(2120),R=t(2735),G=t(29815),U=t(73936),F=[{id:"asset",label:"Asset",width:"60%"},{id:"balance",label:"Balance",width:"20%"},{id:"value",label:"Value",width:"20%"},{id:"actions",label:"",width:"20%",sticky:!0}],W=function(e){var n=e.showHiddenAssets,t=e.setShowHiddenAssets,s=(0,f.useState)(),l=s[0],r=s[1],a=(0,A.Z)(),c=(0,R.Z)(),C=(0,M.Z)().balances,y=function(e){var n=(0,g.TL)(),t=(0,U.ZP)(),s=(0,M.Z)().balances,l=(0,f.useState)([]),i=l[0],r=l[1],a=(0,f.useState)([]),o=a[0],c=a[1],d=(0,f.useState)(),u=d[0],h=d[1],x=(0,R.Z)(),m=(0,f.useCallback)((function(e){i.includes(e)?r(i.filter((function(n){return n!==e}))):o.includes(e)?c(o.filter((function(n){return n!==e}))):x.includes(e)?c(o.concat(e)):r(i.concat(e))}),[i,o,x]),p=(0,f.useCallback)((function(){r([]),c((0,G.Z)(x.filter((function(e){return s.items.some((function(n){return n.tokenInfo.address===e}))}))))}),[x,s]),Z=(0,f.useCallback)((function(e){return x.includes(e)&&!o.includes(e)||i.includes(e)}),[i,o,x]),v=(0,f.useCallback)((function(){r([]),c([]),e()}),[e]);return{hideAsset:(0,f.useCallback)((function(e){h(e),setTimeout((function(){var s=(0,G.Z)(x).concat([e]);n((0,_.qr)({chainId:t,assets:s})),h(void 0)}),300)}),[t,n,x]),saveChanges:(0,f.useCallback)((function(){var e=(0,G.Z)(x.filter((function(e){return!o.includes(e)}))).concat((0,G.Z)(i));n((0,_.qr)({chainId:t,assets:e})),v()}),[i,o,t,n,x,v]),cancel:v,toggleAsset:m,isAssetSelected:Z,deselectAll:p,hidingAsset:u}}((function(){return t(!1)})),T=y.isAssetSelected,L=y.toggleAsset,D=y.hidingAsset,z=y.hideAsset,W=y.cancel,q=y.deselectAll,Y=y.saveChanges,K=(0,f.useMemo)((function(){var e;return n?C.items:null===(e=C.items)||void 0===e?void 0:e.filter((function(e){return!c.includes(e.tokenInfo.address)}))}),[c,C.items,n]),X=(null===K||void 0===K?void 0:K.filter((function(e){return T(e.tokenInfo.address)})).length)||0,J=!a,Q=(K||[]).map((function(e){var t=parseFloat(e.fiatBalance),s=e.tokenInfo.type===j.TokenType.NATIVE_TOKEN,l=T(e.tokenInfo.address);return{key:e.tokenInfo.address,selected:l,collapsed:e.tokenInfo.address===D,cells:{asset:{rawValue:e.tokenInfo.name,collapsed:e.tokenInfo.address===D,content:(0,i.jsxs)("div",{className:b().token,children:[(0,i.jsx)(S.Z,{logoUri:e.tokenInfo.logoUri,tokenSymbol:e.tokenInfo.symbol}),(0,i.jsx)(m.Z,{children:e.tokenInfo.name}),!s&&(0,i.jsx)(N.Z,{address:e.tokenInfo.address})]})},balance:{rawValue:Number(e.balance)/Math.pow(10,e.tokenInfo.decimals),collapsed:e.tokenInfo.address===D,content:(0,i.jsx)(w.Z,{value:e.balance,decimals:e.tokenInfo.decimals,tokenSymbol:e.tokenInfo.symbol})},value:{rawValue:t,collapsed:e.tokenInfo.address===D,content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{value:e.fiatBalance}),0===t&&(0,i.jsx)(x.Z,{title:"Value may be zero due to missing token price information",placement:"top",arrow:!0,children:(0,i.jsx)("span",{children:(0,i.jsx)(p.Z,{component:E.Z,inheritViewBox:!0,color:"error",fontSize:"small",sx:{verticalAlign:"middle",marginLeft:.5}})})})]})},actions:{rawValue:"",sticky:!0,collapsed:e.tokenInfo.address===D,content:(0,i.jsx)(o.Z,{display:"flex",flexDirection:"row",gap:1,alignItems:"center",children:(0,i.jsxs)(i.Fragment,{children:[!J&&(0,i.jsx)(O.Z,(0,u.Z)((0,d.Z)({},V.i.SEND),{children:(0,i.jsx)(h.Z,{sx:{visibility:n?"hidden":"visible"},variant:"contained",color:"primary",size:"small",onClick:function(){return r(e.tokenInfo.address)},children:"Send"})})),n?(0,i.jsx)(v.Z,{size:"small",checked:l,onClick:function(){return L(e.tokenInfo.address)}}):(0,i.jsx)(O.Z,(0,u.Z)((0,d.Z)({},V.i.HIDE_TOKEN),{children:(0,i.jsx)(x.Z,{title:"Hide asset",arrow:!0,disableInteractive:!0,children:(0,i.jsx)(Z.Z,{disabled:void 0!==D,size:"medium",onClick:function(){return z(e.tokenInfo.address)},children:(0,i.jsx)(B.Z,{fontSize:"small"})})})}))]})})}}}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(P,{saveChanges:Y,cancel:W,deselectAll:q,selectedAssetCount:X,showHiddenAssets:n}),(0,i.jsxs)("div",{className:b().container,children:[(0,i.jsx)(I.Z,{rows:Q,headCells:F}),l&&(0,i.jsx)(H.Z,{onClose:function(){return r(void 0)},initialData:[{tokenAddress:l}]})]})]})},q=t(71807),Y=t(57407),K=["title","titleId"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},X.apply(this,arguments)}function J(e,n){if(null==e)return{};var t,s,l=function(e,n){if(null==e)return{};var t,s,l={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var Q=function(e){var n=e.title,t=e.titleId,i=J(e,K);return f.createElement("svg",X({width:65,height:64,viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},i),n?f.createElement("title",{id:t},n):null,s||(s=f.createElement("path",{d:"M39.3016 47.8791V50.4924C39.3016 51.2782 38.6651 51.9147 37.8794 51.9147H14.082C13.2963 51.9147 12.6598 51.2782 12.6598 50.4924L12.6527 26.7022C12.6563 25.9164 13.2891 25.28 14.0749 25.28H16.6954C17.0865 25.28 17.4065 24.96 17.4065 24.5689V21.2302C17.4065 20.8391 17.0865 20.5191 16.6954 20.5191H13.7691C12.9834 20.5191 12.3469 21.1556 12.3469 21.9413V23.5271C12.3469 24.3129 11.714 24.9493 10.9283 24.9529H10.1994L9.31404 24.96C8.53182 24.96 7.89893 25.6 7.89893 26.3822V50.8373C7.89893 51.6231 8.53537 52.2596 9.32115 52.2596H10.9247C11.7105 52.2596 12.3469 52.896 12.3469 53.6818V55.2533C12.3469 56.0391 12.9834 56.6756 13.7691 56.6756H38.1851C38.9709 56.6756 39.6074 56.0391 39.6074 55.2569V53.6604C39.6074 52.8782 40.2403 52.2453 41.026 52.2418H41.8154L41.8474 52.2382H42.6403C43.4225 52.2311 44.0554 51.5947 44.0554 50.8124V47.8791C44.0554 47.488 43.7354 47.168 43.3443 47.168H40.0127C39.6216 47.168 39.3016 47.488 39.3016 47.8791Z",className:"illustration-light-fill"})),l||(l=f.createElement("path",{d:"M57.1722 37.6889V13.3476C57.1722 12.5618 56.5322 11.9253 55.7464 11.9253H54.1571C53.3713 11.9289 52.7349 11.296 52.7313 10.5102V8.81066C52.7242 8.02844 52.0878 7.392 51.3055 7.392H26.8824C26.0967 7.392 25.4602 8.02844 25.4602 8.81422V10.4071C25.4602 11.1893 24.8273 11.8258 24.0451 11.8293L22.4273 11.8364C21.6451 11.8364 21.0122 12.4764 21.0122 13.2587V37.7138C21.0122 38.4996 21.6487 39.136 22.4344 39.136H24.038C24.8238 39.136 25.4602 39.7724 25.4602 40.5582V42.1298C25.4602 42.9156 26.0967 43.552 26.8824 43.552H51.302C52.0878 43.552 52.7242 42.9156 52.7242 42.1298V40.5369C52.7242 39.7547 53.3571 39.1182 54.1393 39.1147L55.7535 39.1076C56.5358 39.1076 57.1687 38.4676 57.1687 37.6853L57.1722 37.6889ZM50.9962 38.7911H27.1953C26.4095 38.7911 25.7731 38.1547 25.7731 37.3689L25.766 13.5787C25.766 12.7929 26.4024 12.1564 27.1882 12.1564H50.9855C51.7713 12.1564 52.4078 12.7929 52.4078 13.5787L52.4149 37.3689C52.4149 38.1547 51.7784 38.7911 50.9926 38.7911H50.9962Z",className:"illustration-light-fill"})))},$=t(93500),ee=t.n($),ne=t(76934),te=t(10253),se=t(99805),le=t(46212),ie=function(e){var n=e.children,t=e.widgetLocalStorageId,s=e.text,l=e.initiallyShown,r=void 0===l||l,a=e.className,c=(0,te.Z)((0,se.Z)(t),2),d=c[0],u=void 0===d?!r:d,f=c[1],m=(0,le.v)();return u?n:(0,i.jsx)(x.Z,{PopperProps:{className:a},open:!0,arrow:!0,title:(0,i.jsxs)(o.Z,{display:"flex",alignItems:"center",gap:1,padding:1,children:[(0,i.jsx)(p.Z,{component:E.Z,inheritViewBox:!0,fontSize:"small"}),(0,i.jsx)("span",{children:s}),(0,i.jsx)(h.Z,{size:"small",color:m?"background":"secondary",variant:"text",sx:{whiteSpace:"nowrap"},onClick:function(){return f(!0)},children:"Got it!"})]}),children:n})},re=function(e){var n=(0,f.useMemo)((function(){return Math.random()>=.5}),[]),t=(0,te.Z)((0,se.Z)("AB_".concat(e)),2),s=t[0],l=void 0===s?n:s,i=t[1];return(0,f.useEffect)((function(){i((function(e){return null!==e&&void 0!==e?e:n}))}),[n,l,i]),(0,f.useEffect)((function(){l&&(0,ne.lg)(e)}),[e,l]),l},ae=function(e){var n,t=e.toggleShowHiddenAssets,s=e.showHiddenAssets,l=(0,M.Z)().balances,r=(0,R.Z)(),a=re(ne.JG.HIDE_TOKEN_PROMO),o=(null===(n=l.items)||void 0===n?void 0:n.filter((function(e){return r.includes(e.tokenInfo.address)})).length)||0;return(0,i.jsx)(ie,{className:ee().hiddenTokenButton,initiallyShown:a,widgetLocalStorageId:"ONBOARDING_HIDDEN_TOKEN_BUTTON",text:"Spam or unwanted tokens in your asset list? Hide them now!",children:(0,i.jsx)("div",{children:(0,i.jsx)(O.Z,(0,u.Z)((0,d.Z)({},T.iV.SHOW_HIDDEN_ASSETS),{children:(0,i.jsx)(h.Z,{className:ee().hiddenTokenButton,sx:{gap:1,padding:1,borderWidth:"1px !important",borderColor:function(e){return e.palette.border.main}},disabled:s,onClick:t,"data-testid":"toggle-hidden-assets",variant:"outlined",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B.Z,{fontSize:"small"}),(0,i.jsxs)(m.Z,{fontSize:"small",children:[0===o?"Hide tokens":"".concat(o," hidden token").concat(o>1?"s":"")," "]})]})})}))})})},oe=t(94054),ce=t(47312),de=t(18972),ue=t(18360),fe=t(94232),he=t(9434),xe=function(){var e=(0,te.Z)((0,fe.Z)(j.getFiatCurrencies,[]),2),n=e[0],t=e[1];return(0,f.useEffect)((function(){t&&(0,he.H)(he.D1._607,t.message)}),[t]),n},me=function(){var e=(0,g.CG)(_.j),n=(0,g.TL)(),t=xe()||[e.toUpperCase()],s=function(e){(0,T.zj)((0,u.Z)((0,d.Z)({},T.iV.CURRENCY_MENU),{label:e}))};return(0,i.jsxs)(oe.Z,{size:"small",children:[(0,i.jsx)(ce.Z,{id:"currency-label",children:"Currency"}),(0,i.jsx)(ue.Z,{labelId:"currency-label",id:"currency",value:e.toUpperCase(),label:"Currency",onChange:function(e){var t=e.target.value;(0,T.zj)((0,u.Z)((0,d.Z)({},T.iV.CHANGE_CURRENCY),{label:t.toUpperCase()})),n((0,_.NW)(t.toLowerCase()))},onOpen:function(){return s("Open")},onClose:function(){return s("Close")},children:t.map((function(e){return(0,i.jsx)(de.Z,{value:e,sx:{overflow:"hidden"},children:e.toUpperCase()},e)}))})]})},pe=function(){var e=(0,M.Z)(),n=e.loading,t=e.error,s=(0,f.useState)(!1),l=s[0],r=s[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{children:(0,i.jsx)("title",{children:"Safe \u2013 Assets"})}),(0,i.jsx)(q.Z,{children:(0,i.jsxs)(o.Z,{display:"flex",flexDirection:"row",alignItems:"center",gap:1,children:[(0,i.jsx)(ae,{showHiddenAssets:l,toggleShowHiddenAssets:function(){return r((function(e){return!e}))}}),(0,i.jsx)(me,{})]})}),(0,i.jsxs)("main",{children:[n&&(0,i.jsx)(c.Z,{size:20,sx:{marginTop:2}}),t?(0,i.jsx)(Y.Z,{img:(0,i.jsx)(Q,{}),text:"There was an error loading your assets"}):(0,i.jsx)(W,{setShowHiddenAssets:r,showHiddenAssets:l})]})]})}},75355:function(e){e.exports={container:"styles_container__gapRs",token:"styles_token__l2XWF"}},93500:function(e){e.exports={hiddenTokenButton:"styles_hiddenTokenButton__4CCvV"}},63589:function(e){e.exports={hideTokensHeader:"styles_hideTokensHeader__YCMjB",stickyBox:"styles_stickyBox__kWu3G",cancelButton:"styles_cancelButton__OqvPe",applyButton:"styles_applyButton__4j2cs"}},71824:function(e){e.exports={hide:"styles_hide__xcsYc",tableCell:"styles_tableCell__t4PBD",collapsedCell:"styles_collapsedCell__hJpGm",collapsedRow:"styles_collapsedRow__h5L8I",actions:"styles_actions__Xi7e7",mobileColumn:"styles_mobileColumn__x_pTy"}},51039:function(e){e.exports={tabs:"styles_tabs__0HwOj",tab:"styles_tab__kSwiT",label:"styles_label__kLyY9"}},28962:function(e){e.exports={container:"styles_container__dwmnI",title:"styles_title__sN5vi"}},66172:function(e){e.exports={container:"styles_container__BWo4Q",verticalAlign:"styles_verticalAlign__imDG1"}}},function(e){e.O(0,[6272,9073,6572,931,9697,3859,6326,9774,2888,179],(function(){return n=4973,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=balances-fbb1486e965738c0.js.map