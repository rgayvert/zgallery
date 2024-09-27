var u=Object.defineProperty;var f=(r,t,e)=>t in r?u(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var l=(r,t,e)=>(f(r,typeof t!="symbol"?t+"":t,e),e);import{aF as g,a as i,aG as h,c,O as F,aH as b,f as D,G as v}from"./index-wGBmh4K9.js";import{d as a}from"./FormFieldValidators-CJk185Fg.js";class y extends g{constructor(e,s="",o="",n="",m="",d="",p=""){super(e);l(this,"recordID",-1);this.title=s,this.firstName=o,this.lastName=n,this.email=m,this.password=d,this.role=p}get name(){return[this.title,this.firstName,this.lastName].filter(e=>e).join(" ")}}function B(){return{title:{label:"Title",type:"select",choices:["","Mr","Mrs","Miss","Ms"],gridArea:{r1:1,c1:1,r2:2,c2:2},validators:[a.notBlank]},lastName:{label:"Last Name",type:"string",gridArea:{r1:1,c1:2,r2:2,c2:5},validators:[a.length(1,20),a.lettersOnly]},firstName:{label:"First Name",type:"string",gridArea:{r1:1,c1:5,r2:2,c2:8},validators:[a.notBlank]},email:{label:"Email",type:"email",gridArea:{r1:2,c1:1,r2:3,c2:5},validators:[a.email]},role:{label:"Role",type:"select",choices:["","Admin","User"],gridArea:{r1:2,c1:5,r2:3,c2:8},validators:[a.notBlank]},password:{label:"Password",type:"password",gridArea:{r1:3,c1:1,r2:4,c2:4},validators:[a.length(6)]}}}function N(){const r=i(new y(void 0)),t=h(r.get()),e=i(!1);function s(){return b(r,t,B(),{containerOptions:{width:D(90)},submitAction:()=>alert(JSON.stringify(r.get())),validationOn:e,localDefaults:{"LabelBox.TextLabel":{color:c.color.purple}}})}const o={TextLabel:{color:c.color.green}};return F(o,()=>s())}function L(){return v(x)}const x={sourceDir:"/source/Demos/Forms",sections:[{title:"Basic Form",componentFn:N,sources:["BasicFormExample.ts","DemoUserRecord.ts","DemoUserFields.ts"],markdown:"BasicFormExample.md"}]};export{L as FormsDemo,L as default};
