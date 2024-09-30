var m=Object.defineProperty;var d=(i,t,e)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var n=(i,t,e)=>(d(i,typeof t!="symbol"?t+"":t,e),e);import{V as p,f as c,c as l,e as g,af as b,p as f,bm as x,aP as P,bn as S,S as v,k as w,ad as B,a as r,g as u,q as W,G as k}from"./index-45SSxKmv.js";import{S as D}from"./AnimationItem-DF7X9NXG.js";import{A as G}from"./AnimationModel-BzUUOJQN.js";const s={nballs:75,height:300,shift:.02,radius:5,period:2,maxBlur:2,maxBrightness:5};class V extends D{constructor(e,a){super(a);n(this,"count",W(0));n(this,"brightness");n(this,"blur");this.index=e,this.initialLocation=a;const h=this.index/(2*s.radius*s.nballs)+s.shift,o=r(()=>.9*(s.height/2)*Math.sin(this.count.get()*h));this.location=r(()=>u(a.x,o.get())),this.brightness=r(()=>s.maxBrightness*(o.get()/s.height+.5)+1),this.blur=r(()=>s.maxBlur*(o.get()/s.height+.5))}step(e){this.count.increment()}}class A extends G{constructor(){super();n(this,"balls");this.balls=w.sequence(0,s.nballs).map(e=>this.createBall(e)),this.add(...this.balls)}createBall(e){const a=u((e+.5)*s.radius*2,(s.height-s.radius)/2);return new V(e,a)}}function y(){const i=new A,t=s.nballs*s.radius*2,e=B(0,-s.height/2,t,s.height);return p({width:c(90),gap:l.space.s5,marginTop:g(4)}).append(b({bounds:e,width:c(100),height:f(s.height)}).append(x({rect:e,fill:l.color.black}),...i.balls.map(a=>P({id:`ball-${a.index}`,r:s.radius,c:a.location,fill:l.color.primary,filter:S(a.brightness,a.blur),model:a}))),v(i.running))}function C(){return k(E)}const E={sourceDir:"/source/Demos/PendulumWaves",sections:[{title:"Pendulum Waves",componentFn:y,sources:["PendulumWavesExample.ts"],markdown:"PendulumWavesExample.md"}]};export{C as PendulumWavesDemo,C as default};