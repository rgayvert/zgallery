var H=Object.defineProperty;var M=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>(M(e,typeof t!="symbol"?t+"":t,s),s);import{a as d,aN as r,V as L,B as D,g as v,aj as z,H as S,c as i,bj as V,e as B,h as j,m as C,aR as R,k as b,x as w,p as A,l as T,G as _}from"./index-wGBmh4K9.js";function q(e,t,s,l={}){l.onResize=E;let x=!0,o,c=20,u=0,h=0;const f=d(Array.prototype.slice.call(r(e),0,0)),g=L({alignItems:"start",justifyContent:"start"}),y=D();function k(n){var a,m;o=(a=n.parent)==null?void 0:a.parent,o==null||o.addEventListener("scroll",()=>I()),f.set(Array.prototype.slice.call(r(e),0,1)),c=((m=n.children.at(0))==null?void 0:m.height)||20,y.setMinHeight(c*r(e).length)}function E(n){x&&(x=!1,k(n)),setTimeout(()=>{I()})}function I(){const n=(o==null?void 0:o.height)||0,a=(o==null?void 0:o.elt.scrollTop)||0,m=a%c;h=Math.min(r(e).length,Math.ceil(n/c)+1),u=Math.min(r(e).length-h+1,Math.floor(a/c)),g.setHeight(n),f.set(Array.prototype.slice.call(r(e),u,u+h)),g.setOffset(v(0,a-m))}return y.append(g.append(z(f,t,s,l)))}class F{constructor(){p(this,"loremList",R(b.sequence(0,5).map(t=>w.words(t+2))));p(this,"selectedItem",d("",{action:t=>console.log("selection: "+t)}))}removeListItem(t){this.loremList.delete(t)}addListItem(){this.loremList.push(w.words(5))}sort(){this.loremList.toggleSort()}}function G(){const e=new F;function t(s,l){return j({label:s,width:C(10),rounding:i.rounding.pill,action:l})}return S({gap:i.space.s7}).append(V(e.loremList,e.selectedItem,{dblClickAction:s=>e.removeListItem(s),maxHeight:B(10),overflow:"auto",padding:i.space.s2,font:i.font.body_medium}),L({gap:B(1),margin:i.space.s5}).append(t("Add Item",()=>e.addListItem()),t("Sort",()=>e.sort())))}class N{constructor(){p(this,"list",b.sequence(1,1e4).map(t=>`Item ${t}`))}}function O(){const e=new N,t=d("");return L({padding:i.space.s3,alignItems:"start",justifyContent:"start",overflowY:"scroll",width:A(100),height:A(200),border:i.border.thin}).append(q(e.list,s=>s,(s,l)=>T(s,{font:i.font.body_small,clickAction:()=>t.set(s),selected:d(()=>t.get()===s),selectionColor:i.color.tertiary})))}function K(){return _(Y)}const Y={sourceDir:"/source/Demos/Lists",sections:[{title:"List Box",componentFn:G,sources:["ListBoxExample.ts"],markdown:"ListBoxExample.md"},{title:"Virtual List",componentFn:O,sources:["VirtualListExample.ts"],markdown:"VirtualListExample.md"}]};export{K as ListDemo,K as default};
