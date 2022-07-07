"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2483],{79147:function(e,t,n){n.d(t,{D:function(){return Z},x:function(){return I}});var i=n(97772),r=n(81976),o=n(34885),a=n(40238),s=n(26544),l=n(59937),c=n(90536),d=n(63350),p=n(90272),u=n(99311),m=n(52158),g=n(51027),f=n(82238),h=n(88349);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t,n,i,r=e.collectionData,o=e.master,a=e.compact,x=e.isLocked,v=e.children,y=e.onClick,b=e.className,w=e.analyticsContext,P=(0,m.ES)(),O=P.subscription,C=P.loading,_=null===(t=r.thumbnails)||void 0===t?void 0:t[o],N=!(null!==(n=r.componentMap)&&void 0!==n&&n[o]),k=(0,u.K7)(o),I=(0,p.S)({randomizeRequest:{collectionId:r.id,modifications:k},builderRequest:_?{imageId:_}:null,analyticsContext:w,disableRandomize:N}),Z=x||(null===(i=r.lockedMasters)||void 0===i?void 0:i.includes(o)),S=!C&&(!(null!==O&&void 0!==O&&O.isPaid)&&r.locked||!(null!==O&&void 0!==O&&O.isPaid)&&Z);return _?(0,h.jsx)(g.Z,{imageRequest:{imageId:_},children:function(e){return(0,h.jsx)(f.N,j(j({},e),{},{compact:a}))}}):(0,h.jsx)(l.Z,{className:b,imageSrc:(0,d.NW)(r.id,r.version,"".concat((0,d.E_)(o),".svg"),"w=500"),title:{label:(0,s.id)(o)},imageStyle:{objectFit:"contain",padding:"5%"},blocker:S?(0,h.jsx)(c.Y,{}):void 0,generateIllustrationProps:I,onClick:y,"data-testid":"card-".concat(o),aspectRatio:1.5,compact:a,children:v})},y=n(92255),b=n(30258),w=n(9371),P=n(47341),O=n(64455),C=n(57994),_=n(82774);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b.NI,{style:{marginTop:32,marginBottom:16}}),(0,h.jsxs)(a.R,{$min:["120px","230px","280px","280px"],children:[(0,h.jsx)(b.Bw,{style:{paddingTop:"80%"}}),(0,h.jsx)(b.Bw,{}),(0,h.jsx)(b.Bw,{})]})]})},Z=function(e){var t=e.collectionData,n=e.onUpdateTags,r=e.onUpdateLocked,a=e.isInEditingMode,l=e.groupTogether,c=e.gridColumns,d=e.includeStickers,p=void 0===d||d,m=(e.analyticsContext,t.masters.reduce((function(e,n,i){var r=t.masterSlugs[i];return r&&(e[n]=r),e}),{})),g=p?t:k(k({},t),{},{masters:t.masters.filter((function(e){return t.componentMap.hasOwnProperty(e)}))}),f=l?[[l,g.masters]]:(0,C.Tv)(g);return(0,h.jsx)(h.Fragment,{children:f.map((function(e){var d,p=(0,i.Z)(e,2),g=p[0],f=p[1];return f.length?(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(S,{children:null!==l&&void 0!==l?l:(d=g,(0,s.id)((0,u.N2)(d)))}),(0,h.jsx)(_.r,{columns:null!==c&&void 0!==c?c:{xs:2,sm:3,md:3,lg:3},children:f.map((function(e){var i=m[e],s=t.masterTags[e],l=t.lockedMasters.includes(e);if(!i)return null;var c=(0,h.jsx)(v,{collectionData:t,master:e});return a?(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[c,(0,h.jsxs)("div",{"data-testid":"admin-controls",children:[r&&(0,h.jsx)(P.Z,{style:{marginTop:8},label:l?"Paid":"Free",onToggle:function(t){r(t,e)},id:e,checked:l}),n&&(0,h.jsx)(w.$,{tags:s,onChange:function(t){n({masters:[{key:e,newTags:t}]})}})]})]},"".concat(t.id).concat(i)):(0,h.jsx)(o.Fragment,{children:c},"".concat(t.id).concat(i))}))})]},"".concat(t.id).concat(g)):null}))})};var S=y.ZP.h2.withConfig({displayName:"CollectionMasters__SectionHeading",componentId:"sc-1o5hhtd-0"})(["margin-top:32px;margin-bottom:8px;&:first-of-type{margin-top:24px;}","{margin-top:56px;margin-bottom:16px;&:first-of-type{margin-top:32px;}}"],(0,O.up)("sm"))},60710:function(e,t,n){n.d(t,{m:function(){return f}});var i=n(92255),r=n(64455),o=n(34885),a=n(74717),s=n(41566),l=n(47808),c=n(88349),d=i.ZP.ul.withConfig({displayName:"Breadcrumbs__WrapperUl",componentId:"sc-10ixenr-0"})(["align-self:end;li{line-height:1em;margin:0;display:inline-block;color:",";&:not(:first-child){text-indent:4px;}&:after{content:' / ';}}a{text-decoration:none;color:",";&:hover,&.focus-visible{text-decoration:underline;}}"],l.rS.colors.dark,l.rS.colors.dark),p=function(e){var t=e.children,n=e.className,i=(0,s.Z)().t;return(0,c.jsxs)(d,{className:n,children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.default,{href:"/",children:(0,c.jsx)("a",{children:i("common:home")})})}),o.Children.map(t,(function(e){return e?(0,c.jsx)("li",{children:e}):null}))]})},u=n(94745),m=n(36029),g=n(5226);var f=(0,o.memo)((function(e){var t,n=e.hero,i=e.title,r=e.cta,o=e.artistLink,l=e.description,d=e.nav,p=e.collectionId,f=e.collectionSlug,C=e.collectionName,_=e.withBreadcrumbs,N=e.headerImage,k=e.style,I=(0,u.useRouter)(),Z=(0,m.t7)(),S=(0,s.Z)().t,T=(t=I.route).startsWith("/team/")?"teams":t.startsWith("/collections")?"collections":null;return(0,c.jsxs)(w,{style:k,children:[(0,c.jsxs)(h,{children:[_&&(0,c.jsxs)(b,{children:["collections"===T&&(0,c.jsx)(a.default,{href:"/collections",children:(0,c.jsx)("a",{children:S("common:collections")})}),"teams"===T&&Z&&(0,c.jsx)(a.default,{href:"/team/".concat(Z.uid),children:(0,c.jsx)("a",{children:Z.name})}),Boolean(p)&&(0,c.jsx)(a.default,{href:"/collections/".concat(p).concat(f?"/".concat(f):""),children:(0,c.jsx)("a",{children:C})})]}),(0,c.jsxs)(j,{children:["string"===typeof i?(0,c.jsx)("h1",{style:{margin:0},children:i}):i,n&&(0,c.jsx)(g.VM,{style:{margin:0},children:n}),o&&(0,c.jsx)(O,{children:o})]}),(0,c.jsx)(v,{children:r}),l&&(0,c.jsx)(y,{children:l})]}),N&&(0,c.jsx)(x,{children:N}),d&&(0,c.jsx)(P,{children:d})]})}));f.displayName="PageHeader";var h=i.ZP.div.withConfig({displayName:"PageHeader__HeaderGrid",componentId:"sc-1e4osxu-0"})(["display:grid;grid-gap:12px;grid-template-rows:[top] auto [middle] auto [end] auto;grid-template-columns:[title] 1fr [author] auto;","{grid-template-rows:[top] 24px [middle] minmax(36px,max-content) [end] 1fr;}"],(0,r.up)("sm")),x=i.ZP.div.withConfig({displayName:"PageHeader__HeaderImage",componentId:"sc-1e4osxu-1"})(["margin-top:8px;","{margin-top:16px;}","{margin-top:24px;}"],(0,r.up)("sm"),(0,r.up)("md")),j=i.ZP.div.withConfig({displayName:"PageHeader__TitleArea",componentId:"sc-1e4osxu-2"})(["grid-column:title;grid-row:middle;align-self:start;display:flex;align-items:baseline;min-width:0;"]),v=i.ZP.div.withConfig({displayName:"PageHeader__CtaArea",componentId:"sc-1e4osxu-3"})(["align-self:start;grid-column:author;grid-row:middle;","{align-self:end;grid-column:author;margin-top:0;}"],(0,r.up)("sm")),y=i.ZP.div.withConfig({displayName:"PageHeader__Description",componentId:"sc-1e4osxu-4"})(["grid-column:title;grid-column-end:artist;grid-row:end;"]),b=(0,i.ZP)(p).withConfig({displayName:"PageHeader__StyledBreadcrumbs",componentId:"sc-1e4osxu-5"})(["grid-row:top;grid-column:title;"]),w=i.ZP.div.withConfig({displayName:"PageHeader__Container",componentId:"sc-1e4osxu-6"})(["padding-bottom:12px;","{padding-bottom:16px;}","{padding-bottom:20px;}align-self:center;display:flex;flex-direction:column;","{order:2;}","{","{display:none;}","{order:2;}","{order:3;}","{order:1;}}"],(0,r.up)("sm"),(0,r.up)("md"),y,(0,r.z)("xs"),b,h,y,x),P=i.ZP.div.withConfig({displayName:"PageHeader__Nav",componentId:"sc-1e4osxu-7"})(["grid-column:title;grid-column-end:artist;grid-row:bottom;margin-top:16px;margin-bottom:4px;"]),O=i.ZP.div.withConfig({displayName:"PageHeader__Artist",componentId:"sc-1e4osxu-8"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-left:8px;","{margin-top:0;}"],(0,r.up)("sm"))},9371:function(e,t,n){n.d(t,{$:function(){return p}});var i=n(96451),r=n(34885),o=n(92255),a=n(94953),s=n(12970),l=n(47808),c=n(35265),d=n(88349),p=function(e){var t=e.style,n=e.tags,o=void 0===n?"":n,s=e.placeholder,l=void 0===s?"Enter tags...":s,p=e.onChange,f=e["data-testid"],h=(0,r.useState)(""),x=h[0],j=h[1],v=(0,c.vr)(o),y=(0,r.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),p((0,c.Bs)([].concat((0,i.Z)(v),[x]))),j("")}),[v,p,x]),b=(0,r.useCallback)((function(e){if(e.target.value.includes(",")){j("");var t=e.target.value.replace(",","");p((0,c.Bs)([].concat((0,i.Z)(v),[t])))}else j(e.target.value)}),[v,p]);return(0,d.jsxs)(u,{style:t,"data-testid":f,children:[v.map((function(e,t){return(0,d.jsx)(a.Z,{small:!0,"aria-label":"Remove Tag ".concat(e),onClick:function(){var e=v.filter((function(e,n){return t!==n}));p((0,c.Bs)(e))},children:e},t)})),(0,d.jsxs)("form",{onSubmit:y,style:{display:"block",width:"100%",position:"relative"},children:[(0,d.jsx)(m,{onChange:b,value:x,placeholder:l,"aria-label":"Tags","data-testid":"".concat(f,"-input")}),(0,d.jsx)(g,{children:(0,d.jsx)("small",{children:Boolean(x)&&"Press ENTER to submit"})})]})]})},u=o.ZP.div.withConfig({displayName:"Tags__TagContainer",componentId:"sc-1tb1jue-0"})(["display:flex;justify-content:flex-start;align-items:center;width:100%;flex-wrap:wrap;margin-top:8px;","{margin-right:8px;margin-bottom:8px;}"],a.n),m=o.ZP.input.withConfig({displayName:"Tags__TagInput",componentId:"sc-1tb1jue-1"})([""," width:100%;padding:4px 0;text-decoration:none;"],s.t.borderHover({type:"naked"})),g=o.ZP.div.withConfig({displayName:"Tags__Instructions",componentId:"sc-1tb1jue-2"})(["position:absolute;right:0;top:0;height:100%;color:",";display:flex;align-items:center;pointer-events:none;"],l.rS.colors.light)}}]);