var E=Object.defineProperty;var H=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>(H(e,typeof t!="symbol"?t+"":t,s),s);import{a as d,aN as r,V as L,B as M,g as D,aj as v,H as S,c as i,bk as V,e as B,h as C,m as R,aR as j,k as A,x as k,z as T,p as w,l as _,G as q}from"./index-C_Osj5oS.js";function F(e,t,s,l={}){l.onResize=z;let x=!0,o,c=20,u=0,h=0;const f=d(Array.prototype.slice.call(r(e),0,0)),g=L({alignItems:"start",justifyContent:"start"}),y=M();function b(n){var a,m;o=(a=n.parent)==null?void 0:a.parent,o==null||o.addEventListener("scroll",()=>I()),f.set(Array.prototype.slice.call(r(e),0,1)),c=((m=n.children.at(0))==null?void 0:m.height)||20,y.setMinHeight(c*r(e).length)}function z(n){x&&(x=!1,b(n)),setTimeout(()=>{I()})}function I(){const n=(o==null?void 0:o.height)||0,a=(o==null?void 0:o.elt.scrollTop)||0,m=a%c;h=Math.min(r(e).length,Math.ceil(n/c)+1),u=Math.min(r(e).length-h+1,Math.floor(a/c)),g.setHeight(n),f.set(Array.prototype.slice.call(r(e),u,u+h)),g.setOffset(D(0,a-m))}return y.append(g.append(v(f,t,s,l)))}class G{constructor(){p(this,"loremList",j(A.sequence(0,5).map(t=>k.words(t+2))));p(this,"selectedItem",d("",{action:t=>T.info("selection: "+t)}))}removeListItem(t){this.loremList.delete(t)}addListItem(){this.loremList.push(k.words(5))}sort(){this.loremList.toggleSort()}}function N(){const e=new G;function t(s,l){return C({label:s,width:R(10),rounding:i.rounding.pill,action:l})}return S({gap:i.space.s7}).append(V(e.loremList,e.selectedItem,{dblClickAction:s=>e.removeListItem(s),maxHeight:B(10),overflow:"auto",padding:i.space.s2,font:i.font.body_medium}),L({gap:B(1),margin:i.space.s5}).append(t("Add Item",()=>e.addListItem()),t("Sort",()=>e.sort())))}class O{constructor(){p(this,"list",A.sequence(1,1e4).map(t=>`Item ${t}`))}}function Y(){const e=new O,t=d("");return L({padding:i.space.s3,alignItems:"start",justifyContent:"start",overflowY:"scroll",width:w(100),height:w(200),border:i.border.thin}).append(F(e.list,s=>s,(s,l)=>_(s,{font:i.font.body_small,clickAction:()=>t.set(s),selected:d(()=>t.get()===s),selectionColor:i.color.tertiary})))}function P(){return q($)}const $={sourceDir:"/source/Demos/Lists",sections:[{title:"List Box",componentFn:N,sources:["ListBoxExample.ts"],markdown:"ListBoxExample.md"},{title:"Virtual List",componentFn:Y,sources:["VirtualListExample.ts"],markdown:"VirtualListExample.md"}]};export{P as ListDemo,P as default};