var m=Object.defineProperty;var n=(a,e,t)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(n(a,typeof e!="symbol"?e+"":e,t),t);import{a as s,aQ as o,p,aR as g,f as i,aS as u,aT as d,aU as F,aV as f,aW as x,aX as h,aY as v,H as S,b as l,j as I,e as w,aZ as b,x as y,M as C,m as c,k as G,an as j,a_ as R,a4 as _,G as k}from"./index-C620NqEJ.js";class D{constructor(){r(this,"imageFiles",s([],{action:()=>this.imageFilesChanged()}));r(this,"imageSrc",s("image.flowers"));r(this,"filters",[{title:"Blur",value:s(0),max:4,css:e=>o(p(e))},{title:"Brightness",value:s(100),max:100,css:e=>g(i(e))},{title:"Contrast",value:s(100),max:100,css:e=>u(i(e))},{title:"Invert",value:s(0),max:100,css:e=>d(i(e))},{title:"Saturation",value:s(100),max:100,css:e=>F(i(e))},{title:"Grayscale",value:s(0),max:100,css:e=>f(i(e))},{title:"Hue-Rotate",value:s(0),max:180,css:e=>x(e)},{title:"Opacity",value:s(100),max:100,css:e=>h(i(e))},{title:"Sepia",value:s(0),max:100,css:e=>v(i(e))}]);r(this,"filter",s(()=>this.filters.map(e=>e.css(e.value.get()))))}imageFilesChanged(){const e=this.imageFiles.get();this.imageSrc.set(e.length>0?URL.createObjectURL(e[0]):"")}}function H(){const a=new D;function e(t){return _(t.value,{minVal:0,maxVal:t.max,width:c(10),alignSelf:"center"})}return S({gap:l.space.s5}).append(I({alignItems:"center",justifyContent:"start",gap:w(.2),font:l.font.body_medium,padding:l.space.s5}).append(b(a.imageFiles,{multiple:!0,showFiles:!1,accept:".jpg, .jpeg, .png",label:"Change image"}),y(l.space.s6),C({ncolumns:2,nrows:9,gridAutoFlow:"column",columnGap:c(1),rowGap:l.space.s2}).append(...a.filters.map(t=>G(t.title)),...a.filters.map(t=>e(t)))),j({maxWidth:i(70)}).append(R({padding:l.space.s3,imageSrc:a.imageSrc,width:i(100),filter:a.filter})))}function L(){return k(V)}const V={sourceDir:"/source/Demos/ImageFilters",sections:[{title:"Image Filters",componentFn:H,sources:["ImageFiltersExample.ts","ImageFiltersModel.ts"],markdown:"ImageFiltersExample.md"}]};export{L as ImageFiltersDemo,L as default};
