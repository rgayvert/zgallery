var x=Object.defineProperty;var k=(o,n,t)=>n in o?x(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t;var l=(o,n,t)=>(k(o,typeof n!="symbol"?n+"":n,t),t);import{aI as g,k as f,aJ as E,B as d,m as i,c as r,a as b,H as w,a6 as A,d as c,G as y}from"./index-wYdoKrg9.js";function p(o){return new P(o)}class F extends E{}class P extends F{constructor(t){super({});l(this,"stopPoints",[]);l(this,"stopColors",[]);l(this,"direction","");this.options=t,this.normalize()}normalize(){var e,s;!this.options.angle&&!this.options.to?this.direction="to bottom":this.options.to?this.direction=`to ${this.options.to}`:this.direction=`${this.options.angle}deg`,(e=this.options).startColor??(e.startColor=g("white")),(s=this.options).endColor??(s.endColor=g("black")),this.stopPoints=this.options.stopPoints||[],this.stopColors=this.options.stopColors||[];const t=this.stopColors.length;t>0&&t!==this.stopPoints.length&&(this.stopPoints=this.stopColors.map((h,a)=>f.roundTo(100*(a+1)/(t+1),2)))}formatWithTheme(t){var a,m,u;const e=(a=this.options.startColor)==null?void 0:a.formatForAttributeValue(t),s=(m=this.options.endColor)==null?void 0:m.formatForAttributeValue(t),h=(u=this.stopColors)==null?void 0:u.map((G,C)=>`${G.formatForAttributeValue(t)} ${this.stopPoints[C]}%`);return f.joinNonEmpty([`linear-gradient(${this.direction}`,e,...h,`${s})`],", ")}}function T(o,n){return p({to:"right",startColor:o,endColor:n})}function $(o,n){return p({to:"bottom",startColor:o,endColor:n})}function X(){return d({height:i(20),width:i(20),border:r.border.thin,background:T(r.color.primary,r.color.tertiaryContainer)})}function Y(){return d({height:i(20),width:i(20),border:r.border.thin,background:$(r.color.primary,r.color.yellow)})}function D(){const o=b(45);function n(t){return p({angle:t,startColor:c({rgba:"#ff0000cc"}),endColor:c({rgba:"#0000ffcc"}),stopColors:[c({rgba:"#00ff00cc"})]})}return w({gap:r.space.s7}).append(d({height:i(20),width:i(20),border:r.border.thin,background:b(()=>n(o.get()))}),A(o,{maxVal:360}))}function H(){return y(V)}const V={sourceDir:"/source/Demos/Colors",sections:[{title:"Gradient X",componentFn:X,sources:["GradientXExample.ts"],markdown:"GradientXExample.md"},{title:"Gradient Y",componentFn:Y,sources:["GradientYExample.ts"],markdown:"GradientYExample.md"},{title:"Reactive Gradient Angle",componentFn:D,sources:["GradientAngleExample.ts"],markdown:"GradientAngleExample.md"}]};export{H as GradientDemo,H as default};