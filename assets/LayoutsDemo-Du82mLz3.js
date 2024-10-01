import{m as r,e as l,c as e,V as u,l as b,h as x,D as h,I as f,H as E,B as g,p as c,bd as w,x as d,T as B,be as T,z as k,a as i,L as m,$ as C,bf as L,k as y,s as D,t as H,bg as I,J as F,a8 as V,a3 as z,bh as P,bi as v,d as W,C as j,f as q,G as A}from"./index-DCW3DhvE.js";import{c as G}from"./CarouselAtom-D5UBLRst.js";function _(){const t={width:r(30),height:l(8),gap:e.space.s3,border:e.border.thin,padding:e.space.s3,alignItems:"center",justifyContent:"start"};return u(t).append(b("Text label"),x({label:"Button"}),h(e.space.s5),f("icon.shopping-cart"))}function J(){const t={minWidth:r(40),height:l(4),gap:e.space.s3,border:e.border.thin,padding:e.space.s3,alignItems:"center",justifyContent:"center"};return E(t).append(b("Text label"),x({label:"Button"}),h(1),f("icon.shopping-cart"))}function M(){return g({border:e.border.thin,width:c(300),resize:"both"}).append(w({gap:e.space.s6,padding:e.space.s3}).append(b(d.words(2)),B(d.words(16),{overflow:"hidden"})))}function O(){const t=["icon.bold","icon.italic","icon.unordered-list","icon.numbered-list","icon.quote"];return g({border:e.border.thin,width:r(40),height:l(6),minWidth:r(4),minHeight:l(3),resize:"both"}).append(T({gap:c(1)}).append(...t.map(o=>x({leadingIconURI:o,action:()=>k.info(o),border:e.border.none,tooltip:o}))))}function R(){const t=i("xstart-ystart",{action:a=>k.info(a)}),o=g({background:e.color.primary,width:r(20),height:l(2)}),n={color:e.color.tertiary,font:e.font.label_small.bold()};return E().append(m("Placement:").append(C(t,L())),h(e.space.s8),m("Label",{placementPt:t,labelOptions:n}).append(o))}function U(){const t=y.sequence(0,5).map(s=>d.image(400,300)),o={hidden:D.fadeIn("in&out")},n=G(t,t[0],{circular:!0}),a=i(0),p=H(!1,{action:s=>a.set(s?3e3:0)}),S=i(()=>t.map(s=>s===n.get()));return u({gap:e.space.s6}).append(I(n,s=>F(s,{effects:o}),{minWidth:c(400),minHeight:c(300),preloadList:t,intervalMillis:a}),V(S),m("Scroll automatically",{side:"right"}).append(z(p)))}function $(){const t=["red","green","blue"],o=i("red");function n(a){const p=W({cssName:a});return j(a,{width:q(100),height:r(12),background:p,color:e.color.white,opacity:.5})}return u().append(P(o,t),v(o,a=>n(a)))}function Y(){return A(K)}const K={sourceDir:"/source/Demos/Layouts",sections:[{title:"VStack",componentFn:_,sources:["VStackExample.ts"],markdown:"VStackExample.md"},{title:"HStack",componentFn:J,sources:["HStackExample.ts"],markdown:"HStackExample.md"},{title:"Ensemble",componentFn:$,sources:["EnsembleExample.ts"],markdown:"EnsembleExample.md"},{title:"Carousel",componentFn:U,sources:["CarouselExample.ts"],markdown:"CarouselExample.md"},{title:"LabelBox",componentFn:R,sources:["LabelBoxExample.ts"],markdown:"LabelBoxExample.md"},{title:"Sidebar",componentFn:M,sources:["SidebarExample.ts"],markdown:"SidebarExample.md"},{title:"Toolbar",componentFn:O,sources:["ToolbarExample.ts"],markdown:"ToolbarExample.md"}]};export{Y as LayoutsDemo,Y as default};