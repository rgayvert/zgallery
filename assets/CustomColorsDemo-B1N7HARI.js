import{ad as m,c as r,ae as u,O as C,aj as t,l as a,a as l,X as d,U as g,V as b,m as S,G as f}from"./index-B1SqNwk6.js";import{C as h}from"./ColorSelector-sYJC1jPU.js";const c=["rgb","lch","lab","hsl"];function x(s,n={}){const p=m("ColorSpaceGrid",n);function i(o){return l(()=>d(s.get(),o).toCSS())}const e={padding:r.space.s3,background:r.color.background};return u(C({...p,nrows:4,border:r.border.thin,background:r.color.lightgray,gap:r.space.s1,gridAutoFlow:"column"}).append(t(c,o=>o,o=>a(o.toUpperCase(),e)),t(c,o=>`${o}-label`,o=>a(i(o),{...e,font:r.font.label_large}))))}function G(){const s=l(g("#5588ee"));return b({gap:r.space.s7,padding:r.space.s6}).append(h(s,"customcolors"),x(s,{width:S(44)}))}function O(){return f(k)}const k={sourceDir:"/source/Demos/Colors",sections:[{title:"Custom Colors",componentFn:G,sources:["ColorSpaceGrid.ts","ColorSelector.ts","CustomColorsExample.ts"],markdown:"CustomColorsExample.md"}]};export{O as CustomColorsDemo,O as default};
