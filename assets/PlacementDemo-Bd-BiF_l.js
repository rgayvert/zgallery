import{a,H as p,b as e,B as c,m as s,T as m,f as l,bo as P,bp as u,e as x,x as f,L as h,bf as g,ba as b,g as w,G as T}from"./index-C620NqEJ.js";function v(){const t=a("xcenter-ycenter"),i=a(()=>({referencePt:t.get(),viewPt:"xcenter-ycenter"}));function r(o){const n=P(o);if(n){const d=n==null?void 0:n.eventPoint(o);t.set(u(n.clientRect(),d))}}return p({gap:e.space.s5}).append(c({events:{pointerMove:o=>r(o)},width:s(20),height:s(20),border:e.border.thin,margin:e.space.s6}).append(c({transition:"all 0.2s",width:s(4),height:s(4),background:e.color.red,placement:i}),m("The red box will follow the cursor to the nearest cardinal point on the outer box",{cursor:"default",width:l(100),height:l(100),padding:e.space.s4})))}function E(){const t=a("xcenter-yend"),i=a(()=>t.get()),r=a(()=>({referencePt:t.get(),side:"outside"})),o={padding:e.space.s2,font:e.font.body_medium,maxHeight:x(7),overflowY:"scroll"};return p({gap:e.space.s9,alignItems:"center"}).append(f(e.space.s4),h("Placement",{side:"top"}).append(g(b().sort(),t,o)),w({label:"Hover to see Tooltip",tooltip:i,tooltipPlacement:r}))}function C(){return T(B)}const B={sourceDir:"/source/Demos/Placement",sections:[{title:"Tooltip Placement",componentFn:E,sources:["TooltipPlacementExample.ts"],markdown:"TooltipPlacementExample.md"},{title:"Cardinal Points",componentFn:v,sources:["CardinalPointsExample.ts"],markdown:"CardinalPointsExample.md"}]};export{C as PlacementDemo,C as default};
