import{ad as l,p as o,bm as G,b as t,aH as h,aO as E,bx as C,aI as f,by as M,bz as y,bA as x,P as s,ab as w,bB as I,bC as S,bD as k,bE as p,f as d,bF as F,bG as P,T as W,v as D,bH as O,G as B}from"./index-B2MlLmhe.js";import{S as L}from"./SVGDefs-C7tG1w_D.js";function T(){return l({width:o(300),height:o(200)}).append(G({width:"100%",height:"100%",fill:t.color.red}),h({cx:150,cy:100,r:80,fill:t.color.green}),E("SVG",{x:150,y:125,fontSize:o(60),textAnchor:"middle",fill:t.color.white}))}function j(){const r={stroke:t.color.black,fill:t.color.transparent,strokeWidth:5},i={stroke:t.color.red,fill:t.color.transparent,strokeWidth:5},a={stroke:t.color.orange,fill:t.color.transparent,strokeWidth:5},e={stroke:t.color.green,fill:t.color.transparent,strokeWidth:5},m={fill:t.color.transparent,stroke:t.color.blue,strokeWidth:5};return l({width:o(200),height:o(250)}).append(G({x:10,y:10,width:30,height:30,...r}),G({x:60,y:10,rx:10,ry:10,width:30,height:30,...r}),h({cx:25,cy:75,r:20,...i}),C({cx:75,cy:75,rx:20,ry:5,...i}),f({x1:10,x2:50,y1:110,y2:150,stroke:t.color.orange,strokeWidth:5}),M({points:"60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145",...a}),y({points:"50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180",...e}),x({d:"M20,230 Q40,205 50,230 T90,230",...m}))}function v(){const r=["M 10 10 C 20 20, 40 20, 50 10","M 70 10 C 70 20, 110 20, 110 10","M 130 10 C 120 20, 180 20, 170 10","M 10 60 C 20 80, 40 80, 50 60","M 70 60 C 70 80, 110 80, 110 60","M 130 60 C 120 80, 180 80, 170 60","M 10 110 C 20 140, 40 140, 50 110","M 70 110 C 70 140, 110 140, 110 110","M 130 110 C 120 140, 180 140, 170 110"],i={stroke:t.color.black,fill:t.color.transparent,strokeWidth:1.5},a={stroke:t.color.red,strokeWidth:1.5,strokeLinecap:"square"},e={r:2.5,fill:t.color.red};function m(c){const n=c.split(" "),V=s(parseInt(n[1]),parseInt(n[2])),u=s(parseInt(n[4]),parseInt(n[5])),b=s(parseInt(n[6]),parseInt(n[7])),g=s(parseInt(n[8]),parseInt(n[9]));return[x({d:c,...i}),h({c:V,...e}),f({pt1:V,pt2:u,...a}),h({c:u,...e}),h({c:b,...e}),f({pt1:g,pt2:b,...a}),h({c:g,...e})]}return l({width:o(190),height:o(160),border:t.border.thin}).append(...r.map(c=>m(c)).flat())}function $(){const r={stroke:t.color.black,fill:t.color.transparent},i={stroke:t.color.pink,strokeWidth:.1,fill:t.color.transparent},a=" a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5";function e(m,c){return x({d:`M${m} ${a}`,strokeLinejoin:c,...r})}return l({bounds:w(0,0,18,12),width:o(300),height:o(200),border:t.border.thin}).append(e("1,5","miter"),e("7,5","round"),e("13,5","bevel"),e("3,11","miter-clip"),e("9,11","arcs"),I({id:"highlight"}).append(x({d:`M1,5 ${a}`,...i})),S({href:"#highlight",x:6}),S({href:"#highlight",x:12}),S({href:"#highlight",x:2,y:6}),S({href:"#highlight",x:8,y:6}))}function z(){return l({width:o(120),height:o(240),border:t.border.thin}).append(L().append(k({id:"Gradient1"}).append(p({stopColor:t.color.red,offset:d(0)}),p({stopColor:t.color.black,stopOpacity:0,offset:d(50)}),p({stopColor:t.color.blue,offset:d(100)})),k({id:"Gradient2",x1:o(0),x2:o(0),y1:o(0),y2:o(0)}).append(p({stopColor:t.color.red,offset:d(0)}),p({stopColor:t.color.black,stopOpacity:0,offset:d(50)}),p({stopColor:t.color.blue,offset:d(100)}))),G({x:10,y:10,rx:15,ry:15,width:"100",height:"100",fill:"url(#Gradient1)"}),G({x:10,y:120,rx:15,ry:15,width:"100",height:"100",fill:"url(#Gradient2)"}))}function A(){return l({width:o(300),height:o(200),border:t.border.thin}).append(F("image.flowers",{width:300,height:200}))}function H(){const r=new O([s(5,5),s(195,10),s(185,185),s(10,195)]);return l({bounds:w(0,0,200,200),width:o(400),height:o(400),fill:t.color.primary.contrast}).append(y({polygon:r,stroke:t.color.tertiary}),P({x:20,y:20,width:160,height:160}).append(W(D.sentences(200),{editable:!0})))}function U(){return B(R)}const R={sourceDir:"/source/Demos/SimpleSVG",sections:[{title:"Basic SVG Shapes",componentFn:T,sources:["SVGExample1.ts"],markdown:"SVGExample1.md"},{title:"More SVG Shapes",componentFn:j,sources:["SVGExample2.ts"],markdown:"SVGExample2.md"},{title:"SVG Paths",componentFn:v,sources:["SVGExample3.ts"],markdown:"SVGExample3.md"},{title:"SVG Group",componentFn:$,sources:["SVGExample4.ts"],markdown:"SVGExample4.md"},{title:"SVG Gradients",componentFn:z,sources:["SVGExample5.ts"],markdown:"SVGExample5.md"},{title:"SVG Image",componentFn:A,sources:["SVGExample6.ts"],markdown:"SVGExample6.md"},{title:"SVG Foreign Object",componentFn:H,sources:["SVGExample7.ts"],markdown:"SVGExample7.md"}]};export{U as SVGExamplesDemo,U as default};