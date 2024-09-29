var h=Object.defineProperty;var p=(a,e,o)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var r=(a,e,o)=>(p(a,typeof e!="symbol"?e+"":e,o),o);import{k as d,a as c,a9 as T,c9 as v,V as u,f as y,c as t,l as m,H as f,P as L,ai as b,e as q,m as w,ag as k,ca as C,h as x,G as O}from"./index-DG0uSPdl.js";class V{constructor(){r(this,"player1","X");r(this,"player2","O");r(this,"squareValues",d.sequence(0,9).map(e=>c("")));r(this,"moveList",T.instance.addAtom("moveList",[],e=>this.moveListChanged(e)));r(this,"winner",c(()=>this.getWinner()));r(this,"nextPlayer",c(()=>this.getNextPlayer()));r(this,"status",c(()=>this.getStatus()))}squareIsDisabled(e){return!!(this.getWinner()||this.squareValues[e].get())}moveListChanged(e){this.squareValues.forEach((o,l)=>{const s=e.indexOf(l);o.set(s===-1?"":this.playerOnMove(s))})}playerOnMove(e){return e%2==0?this.player1:this.player2}getNextPlayer(){return this.winner.get()?void 0:this.playerOnMove(this.moveList.get().length)}getStatus(){const e=this.winner.get();return e?`Winner: ${e}`:this.gameOver()?"Draw":`${v("Next player:")} ${this.getNextPlayer()}`}gameOver(){return!!this.winner.get()||this.moveList.get().length===9}squareClicked(e){this.squareValues[e].set(this.getNextPlayer()||""),this.moveList.set([...this.moveList.get(),e])}goToMove(e){this.moveList.set(this.moveList.get().slice(0,e))}newGame(){this.moveList.set([])}getWinner(){const e=this.moveList.get(),o=d.sequence(0,9).map((s,i)=>{const n=e.indexOf(i);return n===-1?void 0:n%2===0?this.player1:this.player2}),l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let s=0;s<l.length;s++){const[i,n,g]=l[s];if(o[i]&&o[i]===o[n]&&o[i]===o[g])return o[i]}}}function G(){const a=new V;function e(s){return k(a.squareValues[s],{name:`square-${s}`,events:{click:()=>a.squareClicked(s)},disabled:c(()=>a.squareIsDisabled(s)),textColor:c(()=>a.squareValues[s].get()==="X"?t.color.red:t.color.green),vOffset:-8})}function o(){const s=c(()=>a.moveList.get().map((i,n)=>`Go to Move ${n+1}`));return C(s,(i,n)=>({name:`goto-${n}`,selectionColor:t.color.tertiary,background:t.color.secondaryContainer,events:{click:()=>a.goToMove(n)}}))}function l(){return x({label:"New Game",font:t.font.title_medium,rounding:t.rounding.r3,padding:t.space.s4,marginTop:t.space.s7,background:t.color.secondaryContainer,action:()=>a.newGame(),hidden:c(()=>!a.gameOver())})}return u({name:"TicTacToe",model:a,justifyContent:"start",height:y(100),gap:t.space.s5}).append(m("Tic-Tac-Toe",{name:"game-title",padding:t.space.s5,font:t.font.display_medium}),f({gap:t.space.s7}).append(L({nrows:3,ncolumns:3,gap:t.space.s2,width:b(50)}).append(...d.sequence(0,9).map(s=>e(s))),u({justifyContent:"start",border:t.border.thin,minHeight:q(20),background:t.color.secondaryContainer}).append(m("History",{name:"history-title",font:t.font.title_medium.bold(),background:t.color.secondaryContainer}),u({minWidth:w(16),padding:t.space.s2,background:t.color.secondaryContainer}).append(o()))),m(a.status,{name:"status",font:t.font.headline_medium}),l())}function N(){return O(M)}const M={sourceDir:"/source/Demos/TicTacToe",sections:[{title:"Tic Tac Toe",componentFn:G,sources:["TicTacToe.ts","TicTacToeModel.ts"],markdown:"TicTacToe.md"}]};export{N as TicTacToeDemo,N as default};