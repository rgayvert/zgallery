import{bs as u,j as t,bc as m,bd as p,d,C as b,f as r,m as g,b as o,J as x,bt as k,k as E,G as s}from"./index-c7Go_K0D.js";function f(){const i=["red","green","blue"],n=u("color","red");function c(e){const l=d({cssName:e});return b(e,{width:r(100),height:g(12),background:l,color:o.color.white,opacity:.5})}return t().append(m(n,i),p(n,e=>c(e)))}function h(){return t().append(x("link.gridexamples",{text:"Grid Example"}))}function L(){return k()?t({width:r(100)}).append(E("Note: this application is configured to use hash routing",{font:o.font.body_small,paddingBlock:o.space.s5}),s(a)):s(a)}const a={sourceDir:"/source/Demos/Routing",sections:[{title:"Ensemble Routing",componentFn:f,sources:["EnsembleRoutingExample.ts"],markdown:"EnsembleRoutingExample.md"},{title:"Links",componentFn:h,sources:["LinkExample.ts"],markdown:"LinkExample.md"}]};export{L as RoutingDemo,L as default};
