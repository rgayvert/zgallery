import{bU as l,bE as t,ad as n,aP as k,af as s,p as a,bB as f,c as o,bC as i,G as p}from"./index-9pqxGvR_.js";import{S as c}from"./SVGDefs-ClWxUxHR.js";function d(e={}){const r=e.scale||1;return l({bounds:n(0,0,10*r,10*r),refX:`${5*r}`,refY:`${5*r}`,markerWidth:6*r,markerHeight:6*r,orient:"auto-start-reverse"}).append(t({d:`M 0 0 L ${10*r} ${5*r} L 0 ${10*r} z`,fill:e.fill,fillOpacity:e.fillOpacity}))}function u(e={}){return l({refX:"3",refY:"3",markerWidth:6,markerHeight:6,markerUnits:"strokeWidth"}).append(k({cx:3,cy:3,r:2,stroke:"context-stroke",fill:"context-fill"}))}function h(e={}){const r=e.scale||1;return l({bounds:n(0,0,10*r,10*r),refX:`${5*r}`,refY:`${5*r}`,markerWidth:5*r,markerHeight:5*r}).append(k({cx:5*r,cy:5*r,r:5*r,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill}))}function S(){const e=d(),r=c().append(e);return s({bounds:n(0,0,300,100),width:a(600),height:a(200)}).append(r,f({x1:10,y1:10,x2:90,y2:90,stroke:o.color.black,markerEnd:e}),t({d:"M 110 10 C 120 20, 130 20, 140 10 C 150 0, 160 0, 170 10 C 180 20, 190 20, 200 10",stroke:o.color.black,fill:"none",markerStart:e,markerMid:e,markerEnd:e}))}function G(){const e=d({name:"arrow"}),r=h({fill:o.color.red}),m=c().append(e,r);return s({bounds:n(0,0,100,100),width:a(200),height:a(200)}).append(m,i({points:"10,10 10,90 90,90",fill:"none",stroke:o.color.black,markerStart:e,markerEnd:e}),i({points:"15,80 29,50 43,60 57,30 71,40 85,15",fill:"none",stroke:o.color.gray,marker:r}))}function V(){const e=u(),r=c().append(e);return s({bounds:n(0,0,50,50),width:a(600),height:a(200)}).append(r,t({d:"M 10,10 30,10 h 10",stroke:o.color.black,marker:e}),t({d:"M 10,20 30,20 h 10",stroke:o.color.blue,fill:o.color.red,marker:e}),t({d:"M 10,30 30,30 h 10",stroke:o.color.red,fill:"none",marker:e}),t({d:"M 10,40 30,40 h 10",stroke:o.color.gray,fill:o.color.blue,strokeWidth:1.5,marker:e}))}function E(){return p(x)}const x={sourceDir:"/source/Demos/SVGMarkers",sections:[{title:"Arrowheads",componentFn:S,sources:["SVGMarkerExample1.ts"],markdown:"SVGMarkerExample1.md"},{title:"Polymarkers",componentFn:G,sources:["SVGMarkerExample2.ts"],markdown:"SVGMarkerExample2.md"},{title:"Context fill and stroke",componentFn:V,sources:["SVGMarkerExample3.ts"],markdown:"SVGMarkerExample3.md"}]};export{E as SVGMarkerDemo,E as default};
