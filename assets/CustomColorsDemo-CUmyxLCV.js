import{c as r,ae as m,P as u,aj as t,l as a,a as c,Y as C,W as d,V as g,m as b,G as f}from"./index-DCW3DhvE.js";import{C as S}from"./ColorSelector--bVJ2WX5.js";const l=["rgb","lch","lab","hsl"];function h(s,n={}){function p(o){return c(()=>C(s.get(),o).toCSS())}const e={padding:r.space.s3,background:r.color.background},i=m("ColorSpaceGrid",n);return u({...i,nrows:4,border:r.border.thin,background:r.color.lightgray,gap:r.space.s1,gridAutoFlow:"column"}).append(t(l,o=>o,o=>a(o.toUpperCase(),e)),t(l,o=>`${o}-label`,o=>a(p(o),{...e,font:r.font.label_large})))}function x(){const s=c(d("#5588ee"));return g({gap:r.space.s7,padding:r.space.s6}).append(S(s,"customcolors"),h(s,{width:b(44)}))}function D(){return f(G)}const G={sourceDir:"/source/Demos/Colors",sections:[{title:"Custom Colors",componentFn:x,sources:["ColorSpaceGrid.ts","ColorSelector.ts","CustomColorsExample.ts"],markdown:"CustomColorsExample.md"}]};export{D as CustomColorsDemo,D as default};