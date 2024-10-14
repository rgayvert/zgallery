import{m as r,e as c,c as e,V as m,l as x,h,D as f,I as E,H as b,B as g,p as d,be as B,x as u,T as C,bf as L,z as k,a as i,L as p,_ as T,bg as y,a2 as S,k as D,s as H,t as I,bh as F,J as V,a7 as z,bi as P,bj as j,d as v,C as W,f as _,G as q}from"./index-B1SqNwk6.js";import{c as A}from"./CarouselAtom-DwGAnXaa.js";function G(){const t={width:r(30),height:c(8),gap:e.space.s3,border:e.border.thin,padding:e.space.s3,alignItems:"center",justifyContent:"start"};return m(t).append(x("Text label"),h({label:"Button"}),f(e.space.s5),E("icon.shopping-cart"))}function O(){const t={minWidth:r(40),height:c(4),gap:e.space.s3,border:e.border.thin,padding:e.space.s3,alignItems:"center",justifyContent:"center"};return b(t).append(x("Text label"),h({label:"Button"}),f(1),E("icon.shopping-cart"))}function J(){return g({border:e.border.thin,width:d(300),resize:"both"}).append(B({gap:e.space.s6,padding:e.space.s3}).append(x(u.words(2)),C(u.words(16),{overflow:"hidden"})))}function M(){const t=["icon.bold","icon.italic","icon.unordered-list","icon.numbered-list","icon.quote"];return g({border:e.border.thin,width:r(40),height:c(6),minWidth:r(4),minHeight:c(3),resize:"both"}).append(L({gap:d(1)}).append(...t.map(o=>h({leadingIconURI:o,action:()=>k.info(o),border:e.border.none,tooltip:o}))))}function R(){const t=i("xstart-ystart",{action:l=>k.info(l)}),o=g({background:e.color.primary,width:r(20),height:c(2)}),n=i(!1),a={color:e.color.tertiary,font:e.font.label_small.bold()};return m("gap-5").append(b(["gap-8","b1","pad-3"]).append(p("Placement:").append(T(t,y())),p("Label",{placementPt:t,textLabelOptions:a}).append(o)),b("s3").append(p("Click me:").append(S(n))))}function U(){const t=D.sequence(0,5).map(s=>u.image(400,300)),o={hidden:H.fadeIn("in&out")},n=A(t,t[0],{circular:!0}),a=i(0),l=I(!1,{action:s=>a.set(s?3e3:0)}),w=i(()=>t.map(s=>s===n.get()));return m({gap:e.space.s6}).append(F(n,s=>V(s,{effects:o}),{minWidth:d(400),minHeight:d(300),preloadList:t,intervalMillis:a}),z(w),p("Scroll automatically",{side:"right"}).append(S(l)))}function K(){const t=["red","green","blue"],o=i("red");function n(a){const l=v({cssName:a});return W(a,{width:_(100),height:r(12),background:l,color:e.color.white,opacity:.5})}return m().append(P(o,t),j(o,a=>n(a)))}function Z(){return q(Q)}const Q={sourceDir:"/source/Demos/Layouts",sections:[{title:"VStack",componentFn:G,sources:["VStackExample.ts"],markdown:"VStackExample.md"},{title:"HStack",componentFn:O,sources:["HStackExample.ts"],markdown:"HStackExample.md"},{title:"Ensemble",componentFn:K,sources:["EnsembleExample.ts"],markdown:"EnsembleExample.md"},{title:"Carousel",componentFn:U,sources:["CarouselExample.ts"],markdown:"CarouselExample.md"},{title:"LabelBox",componentFn:R,sources:["LabelBoxExample.ts"],markdown:"LabelBoxExample.md"},{title:"Sidebar",componentFn:J,sources:["SidebarExample.ts"],markdown:"SidebarExample.md"},{title:"Toolbar",componentFn:M,sources:["ToolbarExample.ts"],markdown:"ToolbarExample.md"}]};export{Z as LayoutsDemo,Z as default};
