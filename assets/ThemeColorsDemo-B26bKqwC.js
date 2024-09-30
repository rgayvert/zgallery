var y=Object.defineProperty;var M=(t,o,r)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;var a=(t,o,r)=>(M(t,typeof o!="symbol"?o+"":o,r),r);import{a as n,bV as T,bW as x,bX as d,c as e,k as P,H as w,f as L,l as p,m as u,D as c,aj as b,d as N,C as S,bY as D,V as k,L as h,a5 as g,bZ as C,a6 as V,ah as G,bl as f,G as O}from"./index-BHo9vToq.js";import{T as v}from"./ThemeColorsGrid-DHBgKdlh.js";class K{constructor(){a(this,"palettePoints",[0,10,20,30,40,50,60,70,80,90,100].reverse());a(this,"currentThemeName",n("green",{action:o=>this.currentTheme.set(T(o,this.colorMode.get()))}));a(this,"currentTheme",n(T("green"),{action:o=>o.setColorMode(this.colorMode.get())}));a(this,"contrastRatio",n(()=>this.currentTheme.get().colorContrastRatio));a(this,"themePalettes",n(()=>x(new Map(Array.from(this.currentTheme.get().keyColors())))));a(this,"colorMode",n(d.light,{action:()=>this.toggleColorMode()}));a(this,"colorModeNames",[d.light,d.dark]);a(this,"themeColorTokens",n(()=>this.themeColorTokensForCurrentTheme()))}toggleColorMode(){this.currentTheme.get().toggleColorMode()}allColorTokens(){return Object.values(e.color)}themeColorTokensForCurrentTheme(){const o=this.currentTheme.get().fixedColorKeys(),r=this.currentTheme.get().semanticColorKeys();return this.allColorTokens().filter(l=>!o.includes(l.key)&&!r.includes(l.key))}}function _(t,o,r={}){const l=P.sequence(0,11,10);function i(s){const m=n(()=>N({color:t.tone(s)}));return S(`${s}`,{flex:D({grow:1}),background:m,color:n(()=>s<50?e.color.white:e.color.black),minWidth:u(4),font:e.font.body_medium,border:e.border.thin,componentName:"PaletteColorLabel"})}return w({width:L(100)}).append(p(o,{width:u(8)}),c(e.space.s4),b(l,s=>s,s=>i(s)))}function j(t){return k({alignItems:"center",gap:e.space.s5}).append(h("Theme:").append(g(t.currentThemeName,C,{rounding:e.rounding.none,font:e.font.body_small,tooltips:C.map(o=>`Switch to ${o} theme`),ripple:!0})),h("Mode:").append(g(t.colorMode,t.colorModeNames,{rounding:e.rounding.none,font:e.font.body_small})),h("Contrast:").append(V(t.contrastRatio.get(),{minVal:1,maxVal:21})))}function B(){const t=new K,o=n(()=>Object.entries(t.themePalettes.get())),r={marginTop:e.space.s6,font:e.font.title_medium,color:e.color.primary},l={paddingBlock:e.space.s1},i={maxWidth:u(120),theme:t.currentTheme,componentName:"ColorDemo"};return G(i).append(k({alignItems:"center",gap:e.space.s5,padding:e.space.s4}).append(c(e.space.s3),j(t),c(e.space.s5),p("Theme Colors",r),f(l),v(t.themeColorTokens),c(e.space.s5),p("Tonal Palettes",r),f(l),b(o,s=>s,([s,m])=>_(m,s))))}function W(){return O(E)}const E={sourceDir:"/source/Demos/Colors",sections:[{title:"Theme Colors",componentFn:B,sources:["ThemeSelector.ts","ThemeColorsExample.ts","ThemeColorsGrid.ts","ThemeColorsModel.ts"],markdown:"ThemeColorsExample.md"}]};export{W as ColorDemo,W as default};