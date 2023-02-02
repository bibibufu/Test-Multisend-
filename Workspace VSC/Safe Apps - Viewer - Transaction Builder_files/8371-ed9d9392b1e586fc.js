"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8371],{86551:function(n,e,t){var r;t.d(e,{V:function(){return o},n:function(){return r}}),function(n){n.GRANTED="granted",n.PROMPT="prompt",n.DENIED="denied"}(r||(r={}));var i=["accelerometer","ambient-light-sensor","autoplay","battery","camera","cross-origin-isolated","display-capture","document-domain","encrypted-media","execution-while-not-rendered","execution-while-out-of-viewport","fullscreen","geolocation","gyroscope","keyboard-map","magnetometer","microphone","midi","navigation-override","payment","picture-in-picture","publickey-credentials-get","screen-wake-lock","sync-xhr","usb","web-share","xr-spatial-tracking","clipboard-read","clipboard-write","gamepad","speaker-selection"],o=function(n){return i.includes(n)}},46115:function(n,e,t){t.d(e,{uB:function(){return A},cS:function(){return b},hY:function(){return d},d:function(){return y}});var r=t(14924),i=t(85822),o=t(46794),a=t(26042),u=t(69396),s=t(10253),c=t(86551),l=t(99805),f=t(67294),p=t(65934),d=function(){var n=(0,s.Z)((0,l.Z)("SafeApps__browserPermissions"),2),e=n[0],t=void 0===e?{}:e,i=n[1],o=(0,f.useCallback)((function(n){return t[(0,p.Os)(n)]||[]}),[t]),d=(0,f.useCallback)((function(n,e){var o=(0,p.Os)(n);i((0,u.Z)((0,a.Z)({},t),(0,r.Z)({},o,t[o].map((function(n){var t=e.find((function(e){return e.feature===n.feature}));return t&&(n.status=t.selected?c.n.GRANTED:c.n.DENIED),n})))))}),[t,i]),v=(0,f.useCallback)((function(n){delete t[(0,p.Os)(n)],i((0,a.Z)({},t))}),[t,i]),m=(0,f.useCallback)((function(n,e){i((0,u.Z)((0,a.Z)({},t),(0,r.Z)({},(0,p.Os)(n),e)))}),[t,i]),y=(0,f.useCallback)((function(n){return o(n).filter((function(n){return n.status===c.n.GRANTED})).map((function(n){return n.feature})).join("; ")}),[o]);return{permissions:t,getPermissions:o,updatePermission:d,addPermissions:m,removePermissions:v,getAllowedFeaturesList:y}},v=t(29815),m="userRestricted",y=function(){var n=(0,s.Z)((0,l.Z)("SafeApps__safePermissions"),2),e=n[0],t=void 0===e?{}:e,i=n[1],o=(0,f.useState)(),d=o[0],y=o[1],h=(0,f.useCallback)((function(n){return t[(0,p.Os)(n)]||[]}),[t]),b=(0,f.useCallback)((function(n,e){var o=(0,p.Os)(n);i((0,u.Z)((0,a.Z)({},t),(0,r.Z)({},o,t[o].map((function(n){var t,r=e.find((function(e){return e.capability===n.parentCapability}));r&&(r.selected?n.caveats=(null===(t=n.caveats)||void 0===t?void 0:t.filter((function(n){return n.type!==m})))||[]:k(n.caveats)||(n.caveats=(0,v.Z)(n.caveats||[]).concat([{type:m,value:!0}])));return n})))))}),[t,i]),A=(0,f.useCallback)((function(n){delete t[(0,p.Os)(n)],i((0,a.Z)({},t))}),[t,i]),Z=(0,f.useCallback)((function(n,e){var r;return null===(r=t[(0,p.Os)(n)])||void 0===r?void 0:r.some((function(n){return n.parentCapability===e&&!k(n.caveats)}))}),[t]),C=(0,f.useCallback)((function(n,e){var r;return null===(r=t[(0,p.Os)(n)])||void 0===r?void 0:r.some((function(n){return n.parentCapability===e}))}),[t]),g=(0,f.useCallback)((function(n){if(!d)return[];var e=(0,v.Z)(t[d.origin]||[]);return d.request.forEach((function(t){var r=Object.keys(t)[0];C(d.origin,r)?e.map((function(e){var t,i;e.parentCapability===r&&(k(e.caveats)?n===c.n.GRANTED&&(e.caveats=(null===(t=e.caveats)||void 0===t?void 0:t.filter((function(n){return n.type!==m})))||[]):n===c.n.DENIED&&(null===(i=e.caveats)||void 0===i||i.push({type:m,value:!0})))})):e.push({invoker:d.origin,parentCapability:r,date:(new Date).getTime(),caveats:n===c.n.DENIED?[{type:m,value:!0}]:[]})})),i((0,u.Z)((0,a.Z)({},t),(0,r.Z)({},d.origin,e))),y(void 0),e}),[d,t,i,C]),k=function(n){return!!(null===n||void 0===n?void 0:n.some((function(n){return n.type===m&&!0===n.value})))};return{permissions:t,isUserRestricted:k,getPermissions:h,updatePermission:b,removePermissions:A,permissionsRequest:d,setPermissionsRequest:y,confirmPermissionRequest:g,hasPermission:Z}},h=(0,r.Z)({},i.RestrictedMethods.requestAddressBook,{displayName:"Address Book",description:"Access to your address book"}),b=function(n){return h[n]},A=function(n){return{displayName:(0,o.kC)(n).replace(/-/g," "),description:"Allow to use - ".concat(n)}}},28371:function(n,e,t){t.d(e,{W:function(){return Z}});var r=t(10253),i=t(29815),o=t(67294),a=t(82669),u=t(47568),s=t(34051),c=t.n(s),l=t(91708),f=t(73816),p=t(73936),d=function(n){return"".concat("customSafeApps","-").concat(n)},v=t(89336),m=t(93372),y=t(46115),h=t(49257),b=t(8002),A=t(62687),Z=function(){var n=(0,r.Z)((0,a.W)(),3),e=n[0],t=n[1],s=n[2],Z=function(){var n=(0,o.useState)([]),e=n[0],t=n[1],r=(0,o.useState)(!1),i=r[0],a=r[1],s=(0,p.ZP)(),v=(0,o.useCallback)((function(n){t(n);var e=d(s);l.Z.setItem(e,n.map((function(n){return{url:n.url}})))}),[s]);return(0,o.useEffect)((function(){var n=function(){var n=(0,u.Z)(c().mark((function n(){var e,r,i,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),e=d(s),r=l.Z.getItem(e)||[],n.next=5,Promise.allSettled(r.map((function(n){return(0,f.Cw)(n.url,s)})));case 5:i=n.sent,o=i.filter((function(n){return"fulfilled"===n.status})).map((function(n){return n.value})),t(o),a(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[s]),{customSafeApps:e,loading:i,updateCustomSafeApps:v}}(),C=Z.customSafeApps,g=Z.loading,k=Z.updateCustomSafeApps,S=function(){var n=(0,p.ZP)(),e=(0,v.CG)((function(e){return(0,m.kh)(e,n)})),t=(0,o.useMemo)((function(){return new Set(e)}),[e]),r=(0,v.TL)();return{pinnedSafeAppIds:t,updatePinnedSafeApps:(0,o.useCallback)((function(e){r((0,m.rt)({pinned:Array.from(e),chainId:n}))}),[r,n])}}(),w=S.pinnedSafeAppIds,P=S.updatePinnedSafeApps,x=(0,y.d)().removePermissions,E=(0,y.hY)().removePermissions,I=(0,o.useMemo)((function(){return(e||[]).concat(C).sort((function(n,e){return n.name.localeCompare(e.name)}))}),[e,C]),N=(0,o.useMemo)((function(){return(null===e||void 0===e?void 0:e.filter((function(n){return w.has(n.id)})))||[]}),[e,w]),D=function(n,e){return(0,o.useMemo)((function(){if(!n.length)return[];var t=(0,h.Xj)(n),r=(0,h.Xj)(e),o=n.slice().sort((function(){return Math.random()-.5})),a=((null===n||void 0===n?void 0:n.filter((function(n){var e;return null===(e=n.tags)||void 0===e?void 0:e.includes(b.cd.SAFE_CLAIMING_APP)})))||[]).concat(r,e,t,o).filter((function(n){return!n.tags.includes(b.cd.DASHBOARD_FEATURED)}));return(0,i.Z)(new Set(a)).slice(0,5)}),[n])}(I,N),O=(0,o.useCallback)((function(n){k((0,i.Z)(C).concat([n]))}),[k,C]),_=(0,o.useCallback)((function(n){k(C.filter((function(e){return e.id!==n})));var e=C.find((function(e){return e.id===n}));e&&(x(e.url),E(e.url))}),[k,C,x,E]);return{allSafeApps:I,rankedSafeApps:D,remoteSafeApps:e||[],remoteSafeAppsLoading:s||!(e||t),remoteSafeAppsError:t,pinnedSafeApps:N,pinnedSafeAppIds:w,togglePin:function(n){var e,t=w.has(n),r=new Set(w),i=null===(e=I.find((function(e){return e.id===n})))||void 0===e?void 0:e.name;t?(r.delete(n),(0,A.vQ)(A.Lh.UNPIN,i)):(r.add(n),(0,A.vQ)(A.Lh.PIN,i)),P(r)},customSafeApps:C,customSafeAppsLoading:g,addCustomApp:O,removeCustomApp:_}}},73816:function(n,e,t){t.d(e,{Cw:function(){return l}});var r=t(47568),i=t(34051),o=t.n(i),a=t(65934),u=t(18831),s=function(n,e){var t=e.icons,r=void 0===t?[]:t,i=e.iconPath,o=void 0===i?"":i,u=r.length?function(n){var e=n.find((function(n){var e;return(null===n||void 0===n||null===(e=n.sizes)||void 0===e?void 0:e.includes("any"))||"image/svg+xml"===(null===n||void 0===n?void 0:n.type)}));if(e)return e.src;var t=!0,r=!1,i=void 0;try{for(var o,a=n[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value,s=!0,c=!1,l=void 0;try{for(var f,p=u.sizes.split(" ")[Symbol.iterator]();!(s=(f=p.next()).done);s=!0){var d=f.value;if(Number(d.split("x")[0])>=128)return u.src}}catch(v){c=!0,l=v}finally{try{s||null==p.return||p.return()}finally{if(c)throw l}}}}catch(v){r=!0,i=v}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}return n[0].src||""}(r):o;return u.startsWith("https://")?u:"".concat(n).concat((0,a.j3)(u)?"":"/").concat(u)},c=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i,u,s,c,l=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:5e3,r=(0,a.Os)(e),i="".concat(r,"/manifest.json"),u=new AbortController,s=setTimeout((function(){return u.abort()}),t),n.next=7,fetch(i,{signal:u.signal});case 7:if(c=n.sent,clearTimeout(s),c.ok){n.next=11;break}throw new Error("Failed to fetch manifest from ".concat(i));case 11:return n.abrupt("return",c.json());case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,i,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,a.Os)(e),n.next=3,c(e);case 3:if(i=n.sent,null!=(o=i)&&"object"===typeof o&&"name"in o&&"description"in o&&("icons"in o||"iconPath"in o)){n.next=6;break}throw new Error("Invalid app manifest");case 6:return l=s(r,i),n.abrupt("return",{id:Math.random(),url:r,name:i.name,description:i.description,accessControl:{type:u.SafeAppAccessPolicyTypes.NoRestrictions},tags:[],chainIds:[t],iconUrl:l,safeAppsPermissions:i.safe_apps_permissions||[]});case 8:case"end":return n.stop()}var o}),n)})));return function(e,t){return n.apply(this,arguments)}}()},49257:function(n,e,t){t.d(e,{Xj:function(){return p},dq:function(){return f},xr:function(){return l}});var r=t(14924),i=t(26042),o=t(69396),a=t(10253),u=t(91708),s="SafeApps__dashboard",c=function(){return u.Z.getItem(s)||{}},l=function(n){var e,t,a=c(),l=(null===(e=a[n])||void 0===e?void 0:e.openCount)||0,f=(null===(t=a[n])||void 0===t?void 0:t.txCount)||0;u.Z.setItem(s,(0,o.Z)((0,i.Z)({},a),(0,r.Z)({},n,{timestamp:Date.now(),openCount:l+1,txCount:f})))},f=function(n){var e,t=c(),a=(null===(e=t[n])||void 0===e?void 0:e.txCount)||0;u.Z.setItem(s,(0,o.Z)((0,i.Z)({},t),(0,r.Z)({},n,(0,o.Z)((0,i.Z)({},t[n]),{txCount:a+1}))))},p=function(n){var e=c(),t=d(e);return Object.entries(t).sort((function(n,e){return e[1]-n[1]})).map((function(e){return n.find((function(n){return String(n.id)===e[0]}))})).filter(Boolean)},d=function(n){var e,t,r,i,o={},u=Object.entries(n).sort((function(n,e){return n[1].timestamp-e[1].timestamp})),s=!0,c=!1,l=void 0;try{for(var f,p=Array.from(u.entries())[Symbol.iterator]();!(s=(f=p.next()).done);s=!0){var d=(0,a.Z)(f.value,2),v=d[0],m=d[1],y=(e=v,t=0,r=u.length,(i=1)+(e-t)*(2-i)/(r-t));o[m[0]]=(2*m[1].txCount+1*m[1].openCount)*y}}catch(h){c=!0,l=h}finally{try{s||null==p.return||p.return()}finally{if(c)throw l}}return o}}}]);
//# sourceMappingURL=8371-ed9d9392b1e586fc.js.map