var r=Object.defineProperty;var l=(e,s,t)=>s in e?r(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(l(e,typeof s!="symbol"?s+"":s,t),t);import{j as h,a as o}from"./index-wYdoKrg9.js";function m(e,s=1e3,t={}){return new p(e,s,t)}class p extends h{constructor(t,i,n){super(t(0),n);a(this,"timerRef");a(this,"state",o("stopped"));a(this,"elapsedMillis",0);a(this,"lastMillis",0);a(this,"intervalIndex",0);a(this,"intervals");this.fn=t,this.interval=i,this.options=n,this.intervals=Array.isArray(i)?i:[i],this.options.runImmediately&&this.start()}isStopped(){return this.state.get()==="stopped"}isRunning(){return this.state.get()==="running"}isPaused(){return this.state.get()==="paused"}setState(t){this.state.set(t)}elapsedMilliseconds(){return this.elapsedMillis}setElapsedMillis(t){this.elapsedMillis=t,this.updateValue()}setTimer(){this.timerRef=setTimeout(()=>this.increment(),this.intervals[this.intervalIndex]),this.intervals.length>1&&(this.intervalIndex=(this.intervalIndex+1)%this.intervals.length)}start(){var t,i;this.isRunning()||((i=(t=this.options).beforeStart)==null||i.call(t),this.lastMillis=Date.now(),this.setElapsedMillis(0),this.setTimer(),this.state.set("running"))}increment(){const t=Date.now();this.elapsedMillis+=t-this.lastMillis,this.lastMillis=t,this.updateValue(),this.isRunning()&&this.setTimer()}updateValue(){this.set(this.fn(this.elapsedMillis))}clearTimer(){this.timerRef&&(clearTimeout(this.timerRef),this.timerRef=void 0)}pause(){this.isRunning()&&(this.clearTimer(),this.state.set("paused"))}stop(){var t,i;this.clearTimer(),this.intervalIndex=0,this.state.set("stopped"),(i=(t=this.options).afterStop)==null||i.call(t)}resume(){this.isPaused()&&(this.lastMillis=Date.now(),this.setTimer(),this.state.set("running"))}toggle(){this.isRunning()?this.stop():this.start()}restart(){this.stop(),this.start()}}export{m as t};