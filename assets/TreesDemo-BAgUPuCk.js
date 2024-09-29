import{x as h,ch as f,k as T,e as x,m as i,a as m,u as w,c as d,ci as u,cj as B,ck as L,G as g}from"./index-fNkfTKV2.js";function p(t){return new f(t.data,()=>t.children.map(o=>p(o)))}const r={tree:(t,o,n=1)=>{const e={data:h.words(n),children:[]};for(let s=1;s<t;s++){const l=T.randomInt(0,o);for(let c=0;c<l;c++)e.children.push(r.tree(t-1,o,n))}return e},treeNode:(t,o,n=2)=>p(r.tree(t,o,n))};function E(){const t=r.treeNode(5,3,2),o={height:x(15),width:i(30),alignItems:"stretch",justifyContent:"start"},n=m(void 0,{action:e=>console.log("selection1: "+e)}),a=m(void 0,{action:e=>console.log(e)});return w({justifyItems:"center",minColumnWidth:"40ch",rowGap:d.space.s5}).append(u(t,n,e=>e.data,{...o,showRoot:!0,initialExpansionLevel:1}),u(B,a,e=>{var s,l;return((s=e.data)==null?void 0:s.title)||((l=e.data)==null?void 0:l.key)||""},{...o,iconSide:"right",paddingLeft:i(1),showRoot:!1}))}const b=`
line 1
 line 1.a
  line 1.a.1
  line 1.a.2
 line 1.b
line 2
 line 2.a
 line 2.b
`;function k(){return L(b,{indent:i(1.5),bullets:"⦿◦+‣",labelOptions:{color:d.color.blue}})}function D(){return g(y)}const y={sourceDir:"/source/Demos/Trees",sections:[{title:"Basic Tree",componentFn:E,sources:["BasicTreeExample.ts"],markdown:"BasicTreeExample.md"},{title:"Bullet List",componentFn:k,sources:["BulletListExample.ts"],markdown:"BulletListExample.md"}]};export{D as ListDemo,D as default};
