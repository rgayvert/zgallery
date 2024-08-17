var m=Object.defineProperty;var d=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var o=(n,e,t)=>(d(n,typeof e!="symbol"?e+"":e,t),t);import{a7 as l,a as s,a8 as f,a9 as h,aa as p,ab as r,f as C,ac as g,ad as y,ae as D,af as x,p as i,ag as G,M as V,b as w,ah as N,G as S}from"./index-CKN91vmA.js";class K{constructor(e="count",t=10){o(this,"count");o(this,"maxValue",99);o(this,"minValue",-9);o(this,"mayNotIncrement");o(this,"mayNotDecrement");this.key=e,this.defaultValue=t,this.count=l.instance.addAtom(e,t),this.mayNotIncrement=s(()=>this.count.get()>=this.maxValue),this.mayNotDecrement=s(()=>this.count.get()<=this.minValue)}countString(){return s(()=>this.count.get().toString())}increment(){f(this.count)}decrement(){h(this.count)}reset(){this.count.resetToDefaultValue()}}p("Counter","",{rounded:!0,bounds:r(0,0,100,120),width:C(100)});function u(n,e,t,c){return c&&D(t,{click:c}),x(n,{...t,x:e.x,y:e.y,width:i(e.width),height:i(e.height),cursor:"pointer"})}function a(n={}){const e=g("Counter",n),t=new K(e.storageKey,e.defaultCount);return y(e).append(u(t.countString(),r(10,10,80,80),{...e,vOffset:-6}),u("-",r(25,90,20,20),{...e,disabled:t.mayNotDecrement},()=>t.decrement()),u("+",r(55,90,20,20),{...e,disabled:t.mayNotIncrement},()=>t.increment()))}function b(){return G().append(V({nrows:2,ncolumns:2,gap:w.space.s2,outlineGridCells:!0,width:N(70)}).append(a({storageKey:"counter1",defaultCount:10}),a({storageKey:"counter2",defaultCount:20}),a({rounded:!1,storageKey:"counter3",defaultCount:30}),a({rounded:!1,storageKey:"counter4",defaultCount:40})))}function I(){return S(E)}const E={sourceDir:"/source/Demos/Counter",sections:[{title:"SVG Counters",componentFn:b,sources:["CounterGridExample.ts","Counter.ts","CounterModel.ts"],markdown:"CounterGridExample.md"}]};export{I as CounterDemo,I as default};