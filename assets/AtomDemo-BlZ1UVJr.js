var A=Object.defineProperty;var h=(t,e,o)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var a=(t,e,o)=>(h(t,typeof e!="symbol"?e+"":e,o),o);import{j as f,k as u,V as g,l as r,c as n,H as l,h as m,a as c,m as p,n as x,r as w,o as E,q as T,G as b}from"./index-wGBmh4K9.js";import{t as i}from"./TimerAtom-1vmDz6ar.js";import{c as y}from"./CarouselAtom-pEl5nDmo.js";function k(t,e,o=0){return new C(t,e,o)}class C extends f{constructor(e,o,s=0){super(o),this.fn=e,this.interval=s,this.getValue()}async getValue(){const e=await this.fn();this.set(e),this.interval&&setTimeout(()=>this.getValue(),this.interval)}}class _{constructor(){a(this,"clock",i(()=>`Clock: ${new Date().toLocaleTimeString()}`,1e3,{runImmediately:!0}));a(this,"stopWatch",i(e=>`Stopwatch: ${u.formatSeconds(e/1e3)}`,1e3));a(this,"intervalTimer",i(e=>`Interval Timer: ${u.formatSeconds(e/1e3)}`,[1e3,2e3,3e3,4e3,5e3]))}}function F(){const t=new _;function e(o){return l({gap:n.space.s3}).append(r(o,{padding:n.space.s2,font:n.font.headline_medium}),m({label:c(()=>o.isRunning()?"Stop":"Start"),action:()=>o.toggle(),width:p(10),rounding:n.rounding.pill,ripple:!1}))}return g().append(r(t.clock,{padding:n.space.s2,font:n.font.headline_medium}),e(t.stopWatch),e(t.intervalTimer))}class v{constructor(){a(this,"weatherURL","https://wttr.in/London?format=j1")}extractWeather(e){try{const o=e,s=o.current_condition[0].temp_C,d=o.current_condition[0].weatherDesc[0].value;return`London Weather: ${s}° ${d}`}catch{return""}}}function I(){const t=new v,e=x(t.weatherURL,o=>t.extractWeather(o),"");return r(e,{font:n.font.headline_medium})}function S(){return new Promise((t,e)=>t(`GMT: ${new Date().toLocaleTimeString("en-GB",{timeZone:"UTC"})}`))}function W(){const t=k(()=>S(),"",1e3);return r(t,{font:n.font.headline_medium})}function $(){const t=w("info.sample"),e=E(t);return r(e,{font:n.font.body_large})}function D(){const t=T(1),e=c(()=>t.get()*2);return l({gap:n.space.s5}).append(m({label:"-",action:()=>t.decrement(),rounding:n.rounding.pill}),r(c(()=>`n=${t.get()},   n2=${e.get()}`),{font:n.font.body_large,border:n.border.thin,paddingInline:n.space.s4,minWidth:p(14),textPositionX:"center"}),m({label:"+",action:()=>t.increment(),rounding:n.rounding.pill}))}function L(){const t=y(["1","2","3","4"],"2");return l({gap:n.space.s5}).append(m({label:"<",action:()=>t.previous(),rounding:n.rounding.pill}),r(t,{font:n.font.body_large,border:n.border.thin,paddingInline:n.space.s4}),m({label:">",action:()=>t.next(),rounding:n.rounding.pill}))}function U(){return b(M)}const M={sourceDir:"/source/Demos/Atoms",sections:[{title:"Fetch Atom",componentFn:$,sources:["FetchAtomExample.ts"],markdown:"FetchAtomExample.md"},{title:"Counter Atom",componentFn:D,sources:["CounterAtomExample.ts"],markdown:"CounterAtomExample.md"},{title:"Carousel Atom",componentFn:L,sources:["CarouselAtomExample.ts"],markdown:"CarouselAtomExample.md"},{title:"Timer Atom",componentFn:F,sources:["TimerAtomModel.ts","TimerAtomExample.ts"],markdown:"TimerAtomExample.md"},{title:"API Atom",componentFn:I,sources:["APIAtomExample.ts"],markdown:"APIAtomExample.md"},{title:"Async Atom",componentFn:W,sources:["AsyncAtomExample.ts"],markdown:"AsyncAtomExample.md"}]};export{U as MiscDemo,U as default};
