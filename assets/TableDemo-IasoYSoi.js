var g=Object.defineProperty;var x=(e,o,t)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var l=(e,o,t)=>(x(e,typeof o!="symbol"?o+"":o,t),t);import{bW as m,e as w,b as a,bu as r,bX as d,bv as n,bY as b,bZ as f,b_ as T,b$ as E,aP as y,an as S,f as u,I as C,c0 as D,H as R,B as h,j as M,g as p,a as k,bw as O,G as A}from"./index-mQMVzl2x.js";function B(){return m({maxHeight:w(10),border:a.border.thin}).append(r(d.tableModel(10,7),{sortable:!0}))}class F extends E{constructor(){super(...arguments);l(this,"name","");l(this,"age",0);l(this,"city","")}}class I{constructor(){l(this,"columns",[n("Name",o=>o.name),b("Age",o=>o.age,{round:"round"}),n("City",o=>o.city)]);l(this,"plainRecords",[{recordID:1,name:"Joe",age:23,city:"Toledo"},{recordID:2,name:"Sue",age:41,city:"Reno"},{recordID:3,name:"Mary",age:25,city:"Omaha"}]);l(this,"store",new f(this.plainRecords,F));l(this,"tableModel");this.tableModel=new T(this.allRecords(),this.columns)}allRecords(){const o=this.store.createRecordList();return this.store.getAll(o),o}}function H(){const e=new I,o={maxHeight:w(10),border:a.border.thin},t={gridLines:"both",sortable:!0};return m(o).append(r(e.tableModel,t))}const v=[["Apples",200,2.39,!0],["Bananas",15,.69,!1],["Oranges",13,1.35,!0],["Durian",1,12.35,!1]],G=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),z=[n("Fruit",e=>e[0],void 0,"left"),b("Qty",e=>e[1]),b("Price",e=>e[2],{intl:G}),D("On Sale",e=>e[3])];function N(){const e=new T(y(v),z),o={sortable:!0,headerCellViewOptions:{background:a.color.cyan,color:a.color.red},dataCellViewCreator:c},t={border:a.border.thin};function c(s){return s.column.title==="On Sale"?i(s):void 0}function i(s){return S({width:u(100),height:u(100),background:a.color.background}).append(C(s.value.get()?"icon.check":"icon.blank"))}return m(t).append(r(e,o))}function P(){const e=d.tableModel(5,7),o={sortable:!0};function t(){return!!(e.selectedRow.get()&&e.rows.length>1)}function c(){e.addRowAfterSelection(d.tableRow(e.columns))}function i(){e.deleteSelectedRow()}return R({gap:a.space.s7}).append(h({border:a.border.thin}).append(r(e,o)),M({gap:a.space.s5}).append(p({label:"Add row",controlSize:"sm",action:()=>c()}),p({label:"Delete row",controlSize:"sm",action:()=>i(),disabled:k(()=>!t())})))}function V(){const e=[["AA","BB","CC"],["DD","EE","FF"],["GG","HH","II"]],o=[n("Col1",t=>t[0]),n("Col2",t=>t[1]),n("Col3",t=>t[2])];return O(e,o)}function L(){const e=V(),o={editable:!0};return h({border:a.border.thin}).append(r(e,o))}function Q(){return A(U)}const U={sourceDir:"/source/Demos/Tables",sections:[{title:"Table with default layout",componentFn:B,sources:["TableExample1.ts"],markdown:"TableExample1.md"},{title:"Table with record list",componentFn:H,sources:["TableExample2.ts"],markdown:"TableExample2.md"},{title:"Table with some customization",componentFn:N,sources:["TableExample3.ts"],markdown:"TableExample3.md"},{title:"Table with row/column editing",componentFn:P,sources:["TableExample4.ts"],markdown:"TableExample4.md"},{title:"Table with cell editing",componentFn:L,sources:["TableExample5.ts"],markdown:"TableExample5.md"}]};export{Q as TableExample,Q as default};