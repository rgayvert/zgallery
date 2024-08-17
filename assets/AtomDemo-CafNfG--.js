import{i as d,j as A,k as a,b as e,l as u,H as l,g as m,a as i,m as p,n as f,r as g,o as h,q as x,G as w}from"./index-BVFMvu2H.js";import{c}from"./TimerAtom-BTbCfjfL.js";import{c as E}from"./CarouselAtom-COqa10r3.js";function T(t,n,o=0){return new b(t,n,o)}class b extends d{constructor(n,o,s=0){super(o),this.fn=n,this.interval=s,this.getValue()}async getValue(){const n=await this.fn();this.set(n),this.interval&&setTimeout(()=>this.getValue(),this.interval)}}function y(){const t=c(()=>`Clock: ${new Date().toLocaleTimeString()}`,1e3,{runImmediately:!0}),n=c(r=>`Stopwatch: ${u.formatSeconds(r/1e3)}`,1e3),o=c(r=>`Interval Timer: ${u.formatSeconds(r/1e3)}`,[1e3,2e3,3e3,4e3,5e3]);function s(r){return l({gap:e.space.s3}).append(a(r,{padding:e.space.s2,font:e.font.headline_medium}),m({label:i(()=>r.isRunning()?"Stop":"Start"),action:()=>r.toggle(),width:p(10),rounding:e.rounding.pill,ripple:!1}))}return A().append(a(t,{padding:e.space.s2,font:e.font.headline_medium}),s(n),s(o))}const C="https://wttr.in/London?format=j1";function k(t){try{const n=t,o=n.current_condition[0].temp_C,s=n.current_condition[0].weatherDesc[0].value;return`London Weather: ${o}° ${s}`}catch{return""}}function F(){const t=f(C,k,"");return a(t,{font:e.font.headline_medium})}function _(){return new Promise((t,n)=>t(`GMT: ${new Date().toLocaleTimeString("en-GB",{timeZone:"UTC"})}`))}function I(){const t=T(()=>_(),"",1e3);return a(t,{font:e.font.headline_medium})}function S(){const t=g("info/sample.txt"),n=h(t);return a(n,{font:e.font.body_large})}function v(){const t=x(1),n=i(()=>t.get()*2);return l({gap:e.space.s5}).append(m({label:"-",action:()=>t.decrement(),rounding:e.rounding.pill}),a(i(()=>`n=${t.get()},   n2=${n.get()}`),{font:e.font.body_large,border:e.border.thin,paddingInline:e.space.s4,minWidth:p(14),textPositionX:"center"}),m({label:"+",action:()=>t.increment(),rounding:e.rounding.pill}))}function $(){const t=E(["1","2","3","4"],"2");return l({gap:e.space.s5}).append(m({label:"<",action:()=>t.previous(),rounding:e.rounding.pill}),a(t,{font:e.font.body_large,border:e.border.thin,paddingInline:e.space.s4}),m({label:">",action:()=>t.next(),rounding:e.rounding.pill}))}function W(){return w(D)}const D={sourceDir:"/source/Demos/Atoms",sections:[{title:"Fetch Atom",componentFn:S,sources:["FetchAtomExample.ts"],markdown:"FetchAtomExample.md"},{title:"Counter Atom",componentFn:v,sources:["CounterAtomExample.ts"],markdown:"CounterAtomExample.md"},{title:"Carousel Atom",componentFn:$,sources:["CarouselAtomExample.ts"],markdown:"CarouselAtomExample.md"},{title:"Timer Atom",componentFn:y,sources:["TimerAtomExample.ts"],markdown:"TimerAtomExample.md"},{title:"API Atom",componentFn:F,sources:["APIAtomExample.ts"],markdown:"APIAtomExample.md"},{title:"Async Atom",componentFn:I,sources:["AsyncAtomExample.ts"],markdown:"AsyncAtomExample.md"}]};export{W as MiscDemo,W as default};