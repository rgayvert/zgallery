import{x as h,ch as T,k as x,e as w,m as l,a as m,z as u,u as B,c as p,ci as d,cj as L,ck as E,G as b}from"./index-ThLq7XmM.js";function f(t){return new T(t.data,()=>t.children.map(o=>f(o)))}const r={tree:(t,o,n=1)=>{const e={data:h.words(n),children:[]};for(let s=1;s<t;s++){const i=x.randomInt(0,o);for(let c=0;c<i;c++)e.children.push(r.tree(t-1,o,n))}return e},treeNode:(t,o,n=2)=>f(r.tree(t,o,n))};function g(){const t=r.treeNode(5,3,2),o={height:w(15),width:l(30),alignItems:"stretch",justifyContent:"start"},n=m(void 0,{action:e=>u.info("selection1: "+e)}),a=m(void 0,{action:e=>u.info(e)});return B({justifyItems:"center",minColumnWidth:"40ch",rowGap:p.space.s5}).append(d(t,n,e=>e.data,{...o,showRoot:!0,initialExpansionLevel:1}),d(L,a,e=>{var s,i;return((s=e.data)==null?void 0:s.title)||((i=e.data)==null?void 0:i.key)||""},{...o,iconSide:"right",paddingLeft:l(1),showRoot:!1}))}const k=`
line 1
 line 1.a
  line 1.a.1
  line 1.a.2
 line 1.b
line 2
 line 2.a
 line 2.b
`;function y(){return E(k,{indent:l(1.5),bullets:"⦿◦+‣",labelOptions:{color:p.color.blue}})}function G(){return b(v)}const v={sourceDir:"/source/Demos/Trees",sections:[{title:"Basic Tree",componentFn:g,sources:["BasicTreeExample.ts"],markdown:"BasicTreeExample.md"},{title:"Bullet List",componentFn:y,sources:["BulletListExample.ts"],markdown:"BulletListExample.md"}]};export{G as ListDemo,G as default};
