var T=Object.defineProperty;var m=(t,e,s)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>(m(t,typeof e!="symbol"?e+"":e,s),s);import{a,br as b,b as n,e as h,f as i,j as E,k as l,T as u,ap as w,G as f}from"./index-C620NqEJ.js";class R{constructor(){r(this,"sourceText",a(`800-555-1234

abc55
`,{action:()=>this.groupTextChanged()}));r(this,"plainSourceText",a(""));r(this,"pattern",a("",{action:()=>this.groupTextChanged()}));r(this,"groupText",a(""))}groupTextChanged(){const e=this.pattern.get().trim(),s=this.plainSourceText.get();if(e)try{const p=new RegExp(e,"g"),o=p.exec(s);if(this.sourceText.set(s.replace(p,x=>`<span class='regex-highlight'>${x}</span>`)),o&&o.length>1){const x=o.slice(1).map((c,g)=>`${g}: ${c}`),d=Object.entries(o.groups||{}).map(([c,g])=>`${c}: ${g}`);this.groupText.set([...x,...d].join(`
`))}else this.groupText.set("")}catch{this.sourceText.set(s),this.groupText.set("")}else this.sourceText.set(s),this.groupText.set("")}}function S(){b.default.addRule(".regex-highlight","border: 1px solid red");const t=new R,e={editable:!0,padding:n.space.s3,border:n.border.thin,height:h(10),width:i(100),overflowY:"scroll",pastePlainText:!0,plainText:t.plainSourceText,whiteSpace:"pre-wrap"};return E({alignItems:"start",width:i(80),justifyContent:"start"}).append(l("Text:"),u(t.sourceText,e),l("Pattern:"),w(t.pattern,{border:n.border.thin,width:i(100)}),l("Groups:"),u(t.groupText,{whiteSpace:"pre-wrap",border:n.border.thin,width:i(100),height:h(6)}))}function C(){return f($)}const $={sourceDir:"/source/Demos/RegEx",sections:[{title:"RegEx Example",componentFn:S,sources:["RegExExample.ts","RegExModel.ts"],markdown:"RegExExample.md"}]};export{C as RegExDemo,C as default};
