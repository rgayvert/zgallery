import{c as n,H as c,l as s,aS as i,m as a,f as u,B as t,u as O,V as x,D as d,I as f,p as B,bl as F,a as k,k as I,aD as E,ab as S,ad as w,L as C,G as y}from"./index-B1SqNwk6.js";function D(){const o={border:n.border.thin,font:n.font.headline_small,color:n.color.red,padding:n.space.s2,background:n.color.primaryContainer};return c({gap:n.space.s7,alignItems:"center"}).append(s("Hello, World"),s("Hello, World",o))}i("medium-gap",{gap:n.space.s5});i("small-box",{width:a(6),height:a(6)});i("blue-box",{background:n.color.red});i("green-circle",{background:n.color.green,rounding:u(50)});function L(){return c("medium-gap").append(t(["small-box","blue-box"]),t(["small-box","green-circle"]))}function r(o,p){return x({border:n.border.thin,alignItems:"center",justifyItems:"end",height:u(100),padding:n.space.s3}).append(d(1),p,d(1),s(o))}const b={border:n.border.thin.color(n.color.red),padding:n.space.s3},g={border:n.border.thin.color(n.color.red),padding:n.space.s3,gap:n.space.s3};function e(){return f("icon.fox",{fontSize:B(54)})}function v(){return t(b).append(e())}function A(){return t(b).append(e(),e())}function H(){return F(g).append(e(),e())}function R(){return x(g).append(e(),e())}function V(){return O({minColumnWidth:"17ch"}).append(r("Fox",e()),r("FoxInBox",v()),r("FoxOnFoxInBox",A()),r("FoxAndFoxInStack",H()),r("FoxAndFoxInVStack",R()))}function W(){const o={width:a(10),height:a(10),border:n.border.thin,background:n.color.primary,color:n.color.white,opacity:k(()=>I.clamp((E()-500)/2e3,0,1))};return t(o)}S("SampleBox","Box",{border:n.border.thin,rounding:n.rounding.circle,padding:n.space.s5,labelBoxOptions:{placementPt:"xcenter-ystart",textLabelOptions:{color:n.color.green}}});function m(o,p={}){const l=w("SampleBox",p),h={background:n.color.blue,width:a(3),height:a(3)};return t(l).append(C(o,l.labelBoxOptions).append(t(h)))}function G(){const o={labelBoxOptions:{placementPt:"xstart-ycenter",textLabelOptions:{color:n.color.red}}};return c("gap-5").append(m("label1"),m("label2",o))}function j(){return y(z)}const z={sourceDir:"/source/Demos/Options",sections:[{title:"Basic Options",componentFn:D,sources:["BasicOptionsExample.ts"],markdown:"BasicOptionsExample.md"},{title:"Reactive Options",componentFn:W,sources:["ReactiveOptionsExample.ts"],markdown:"ReactiveOptionsExample.md"},{title:"Options Inheritance",componentFn:V,sources:["InheritanceExample.ts"],markdown:"InheritanceExample.md"},{title:"Option Bundles",componentFn:L,sources:["OptionBundlesExample.ts"],markdown:"OptionBundlesExample.md"},{title:"Option Chaining",componentFn:G,sources:["OptionChainingExample.ts"],markdown:"OptionChainingExample.md"}]};export{j as OptionsDemo,j as default};
