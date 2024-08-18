import{b as e,H as i,a as n,l as h,g as p,as as u,at as g,au as w,B as c,k as l,e as D,f as E,m as y,av as T,aw as k,ax as v,ay as P,az as C,P as F,Z as S,G as B}from"./index-DlBCob52.js";function A(){const o=[e.color.primary,e.color.error,e.color.yellow,e.color.success],s=["left","top","right","bottom"];function r(t){const a=n(h.randomElement(o)),d=n(()=>`${t}: ${a.get().key}`);return p({label:d,background:a,color:n(()=>a.get().contrast),padding:e.space.s3,rounding:e.rounding.r2,ripple:!1}).append(u(w(a,o,m=>m.key),{placement:g[t]}))}return i({gap:e.space.s8,justifyContent:"space-around"}).append(...s.map(t=>r(t)))}function H(){function o(){return c({componentName:"Popover",padding:e.space.s0}).append(c({padding:e.space.s2}).append(p({label:"Popover text",background:e.color.background})))}return i().append(c({border:e.border.thin,rounding:e.rounding.r2,padding:e.space.s1}).append(l("Click to show popover",{padding:e.space.s2})).append(u(o(),{placement:g.top})),c({width:D(2)}),c({border:e.border.thin,rounding:e.rounding.r2,padding:e.space.s1}).append(l("Hover to show popover",{padding:e.space.s2})).append(u(o(),{showOnReferenceHover:!0,placement:g.top})))}function L(){const o=n(!0),s=n(!0),r=n(!0),t=n("");function a(d,m,x,f,b){return p({label:d,padding:e.space.s3,ripple:!1,action:()=>f.set(!1)}).append(T(f,m,x,b))}return i({gap:e.space.s4,width:E(50),justifyContent:"space-around"}).append(a("Simple Alert","Don't do that.",()=>t.set("OK"),o,{}),a("Yes/No","Are you sure?",()=>t.set("Yes"),s,{acceptLabel:"Yes",rejectLabel:"No",rejectAction:()=>t.set("No")}),a("Save Changes","Save your changes?",()=>t.set("Save"),r,{acceptLabel:"Save",rejectLabel:"Discard",rejectAction:()=>t.set("Discard"),cancelLabel:"Cancel",cancelAction:()=>t.set("Cancel")}),l(n(()=>`Response: ${t.get()}`),{font:e.font.label_medium,minWidth:y(7)}))}function j(){function o(r){const t={color:e.color.red,font:e.font.body_medium};return l(r,t)}return p({label:"Button with custom tooltip",font:e.font.body_large,tooltip:"There's always money in the banana stand"}).append(k({textCreator:o}))}function M(){const o=v([],{maxLength:4});function s(){o.addValue("hey now")}return i({gap:e.space.s6}).append(P("Hey now",{label:"Simple"}),p({label:"Click to win",action:()=>s()}).append(C(o,{placement:{referencePt:"xend-ystart",offset:F(100,50)},maxItems:1,duration:1500})))}function N(){const o=n("");return S(o,["First choice","Second choice","Third choice"])}function _(){return B(I)}const I={sourceDir:"/source/Demos/Floating",sections:[{title:"Tooltip",componentFn:j,sources:["TooltipExample.ts"],markdown:"TooltipExample.md"},{title:"Drop-down button",componentFn:N,sources:["DropDownExample.ts"],markdown:"DropDownExample.md"},{title:"Menu Placement",componentFn:A,sources:["MenuPlacementExample.ts"],markdown:"MenuPlacementExample.md"},{title:"Popovers",componentFn:H,sources:["PopoverExample.ts"],markdown:"PopoverExample.md"},{title:"Dialogs",componentFn:L,sources:["DialogExample1.ts"],markdown:"DialogExample1.md"},{title:"Toast",componentFn:M,sources:["ToastExample.ts"],markdown:"ToastExample.md"}]};export{_ as FloatingDemo,_ as default};