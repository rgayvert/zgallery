import{aa as P,a as i,ac as x,cf as w,B as h,cg as A,l as C,b as s,p as d,H as y,j as B,x as T,k as D,g as I,G as F}from"./index-C620NqEJ.js";import{c as V}from"./TimerAtom-Cp9SbOPA.js";P("YouTubeIFrame","Box",{controls:!0,disableKeyboard:!0,allowFullscreen:!1});const b=i(!1);function R(){b.set(!0)}async function v(){window.onYouTubeIframeAPIReady=R,await A.getInstance().addScript("https://www.youtube.com/iframe_api",!0)}function E(l,a){var p;const n=x("YouTubeIFrame",a);n.id="player",(p=n.seekTime)==null||p.addAction(o=>{console.log("seeking to "+o),u.seekTo(o,!0)});let r;w(n,o=>{r=o.elt});let u;function m(o){}function f(o){}function c(){var o;console.log("here: videoID="+l),u=new YT.Player(r,{videoId:l,playerVars:{playsinline:1,autohide:1,rel:0,controls:n.controls?1:0,disablekb:n.disableKeyboard?1:0,fs:n.allowFullscreen?1:0},events:{onReady:m,onStateChange:f}}),(o=n.player)==null||o.set(u)}return b.get()||(v(),b.addAction(()=>c())),h(n)}function G(){const l=i(0),a=i(void 0),n=V(()=>m(),500,{runImmediately:!0}),r=i(!1),u=i(()=>C.formatSeconds(n.get()));function m(){const e=a.get();return e&&e.getCurrentTime?e.getCurrentTime():0}function f(e){const t=a.get();if(p(),t){const g=t.getCurrentTime();t.seekTo(g+e,!0)}}function c(){const e=a.get();e&&(e.getPlayerState()===YT.PlayerState.PLAYING?(e.pauseVideo(),r.set(!1)):(e.setPlaybackRate(1),e.playVideo(),r.set(!0)))}function p(){var t;const e=a.get();e&&e.getPlayerState()===YT.PlayerState.PLAYING&&((t=a.get())==null||t.pauseVideo()),r.set(!1)}function o(e,t){return t!==0?I({rounding:s.rounding.pill,labelOptions:{padding:d(0)},label:e,action:()=>f(t)}):I({leadingIconURI:i(()=>r.get()?"icon.stop-circle":"icon.play"),action:()=>c(),controlSize:"xxl",border:s.border.none,paddingInline:s.space.s4})}function Y(){const e=[["<<<",-10],["<<",-2],["<",-.5],["",0],[">",.5],[">>",2],[">>>",10]];return y({gap:s.space.s4}).append(D(u,{font:s.font.label_large}),T(s.space.s6),...e.map(([t,g])=>o(t,g)))}const S={gap:s.space.s6,height:d(800),outline:"none",alignItems:"start",events:{keyBindings:{Space:()=>c()}}},k={width:d(800),height:d(450),seekTime:l,player:a,controls:!1};return y(S).append(B().append(E("p53X66_NVEg",k),T(s.space.s5),Y()))}function _(){return F(L)}const L={sourceDir:"/source/Demos/YouTube",sections:[{title:"YouTube",componentFn:G,sources:["YouTubeExample.ts","YouTubeIFrame.ts"],markdown:"YouTubeExample.md"}]};export{_ as YouTubeDemo,_ as default};
