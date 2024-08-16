var M=Object.defineProperty;var B=(a,e,t)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(B(a,typeof e!="symbol"?e+"":e,t),t);import{l as f,a as c,aP as A,a7 as N,a8 as L,aM as y,aD as O,aR as G,t as $,bL as x,B as D,E,f as v,bM as U,aa as q,b as n,ac as R,ae as H,an as V,j as W,m as j,H as z,k as w,x as k,e as Y,bN as Z,M as J,bO as K,bP as Q,G as X}from"./index-C620NqEJ.js";import{c as _}from"./TimerAtom-Cp9SbOPA.js";const C={stockToTalon:0,talonToFoundation:10,tableauToFoundation:10,talonToTableau:5,tableauToTableau:5,none:0},d=class d{constructor(e){s(this,"suit");s(this,"indexInSuit");s(this,"name");s(this,"pile");s(this,"faceup",c(!1,{name:`${this.toString()}-faceup`}));s(this,"imageName",c(()=>this.getImageName()));s(this,"cardID");this.index=e,this.cardID=this.getCardID(),e===0?(this.suit=0,this.name="blank",this.indexInSuit=0):(this.suit=Math.floor((e-1)/13),this.indexInSuit=(e-1)%13+1,this.name=d.names[this.indexInSuit-1])}static nextID(){return this.cardID++}frontImageName(){return`playing_card.${this.fullName}`}getImageName(){return this.faceup.get()?this.frontImageName():"playing_card.back"}getCardID(){return d.nextID()}get fullName(){return`${d.suits[this.suit]}_${this.name}`}toString(){return this.fullName}get color(){return d.suitColors[this.suit]}isFaceUp(){return this.faceup.get()}turnFaceUp(){this.faceup.set(!0)}turnFaceDown(){this.faceup.set(!1)}isOnTalonPile(){return this.pile instanceof b}isOnFoundationPile(){return this.pile instanceof P}isOnTableauPile(){return this.pile instanceof p}isLastInPile(){var e;return this===((e=this.pile)==null?void 0:e.lastCard())}indexInPile(){return this.pile?this.pile.cards.get().indexOf(this):-1}mayMoveToFoundationPile(e){const t=e.lastCard();return t instanceof u&&this.name==="ace"||t!==void 0&&this.isLastInPile()&&this.suit===t.suit&&this.indexInSuit===t.indexInSuit+1}mayMoveToTableauPile(e){const t=e.lastCard();return!!(t instanceof u&&this.name==="king"||t&&this.color!==t.color&&this.indexInSuit===t.indexInSuit-1)}isTopOfTableauSequence(){var t;const e=(t=this.pile)==null?void 0:t.cardAtIndex(this.indexInPile()-1);return this.pile instanceof p&&(e===void 0||!e.faceup.get())}isBottomOfTableauSequence(){var e;return((e=this.pile)==null?void 0:e.cardAtIndex(this.indexInPile()+1))===void 0}willAcceptCard(e){const t=this.pile;return e&&e!==this&&t instanceof p&&this.isBottomOfTableauSequence()&&e.mayMoveToTableauPile(t)||t instanceof P&&e.mayMoveToFoundationPile(t)}willAcceptDrop(){return this.pile instanceof p||this.pile instanceof P}};s(d,"suits",["clubs","diamonds","hearts","spades"]),s(d,"suitColors",["black","red","red","black"]),s(d,"names",["ace",...f.sequence(2,9).map(e=>e.toString()),"jack","queen","king"]),s(d,"cardID",0);let T=d;const g=class g extends T{static nextBaseCardID(){return this.baseCardID--}constructor(){super(0),g.allBaseCards.push(this)}getCardID(){return g.nextBaseCardID()}get fullName(){return"blank"}allowDrag(){return!1}turnFaceUp(){}getImageName(){return"playing_card.blank"}};s(g,"baseCardID",-1),s(g,"allBaseCards",[]);let u=g;class I{constructor(e,t=0){s(this,"cards");s(this,"baseCard",new u);this.name=e,this.cards=A(Array(t),{name:e})}get currentCards(){return this.cards.get()}setCards(e){e.forEach(t=>t.pile=this),this.cards.set(e.length>0&&e[0]instanceof u?e:[this.baseCard,...e])}isEmpty(){return this.currentCards.length===1}lastCard(){return this.currentCards.at(-1)}indexOfCard(e){return this.currentCards.indexOf(e)}cardAtIndex(e){return this.currentCards[e]}willAcceptCard(e){return!1}acceptCard(e){return 0}addCard(e){this.setCards([...this.currentCards,e])}removeCard(e){e&&this.setCards(this.currentCards.filter(t=>t!==e))}removeLastCard(){this.removeCard(this.lastCard())}}class F extends I{constructor(){super("stock",24)}}class b extends I{constructor(){super("talon")}createInitialCards(){return A([],{name:"talon"})}acceptCard(e){const t=e.pile;return t==null||t.removeCard(e),e.faceup.set(!0),this.addCard(e),C.stockToTalon}}class P extends I{constructor(e){super(`foundation[${e}]`),this.index=e}willAcceptCard(e){return e.mayMoveToFoundationPile(this)}acceptCard(e){const t=e.pile;return t instanceof b||t instanceof p?(t.removeLastCard(),this.addCard(e),t instanceof b?C.talonToFoundation:C.tableauToFoundation):C.none}}class p extends I{constructor(e){super(`tableau[${e}]`),this.index=e}willAcceptCard(e){return e.mayMoveToTableauPile(this)}turnLastCardFaceUp(){var e;(e=this.currentCards.at(-1))==null||e.turnFaceUp()}setCards(e){super.setCards(e),this.turnLastCardFaceUp()}removeLastCard(){super.removeLastCard(),this.turnLastCardFaceUp()}acceptCard(e){const t=e.pile;if(t instanceof b||t instanceof P)return t.removeLastCard(),this.addCard(e),C.talonToTableau;if(t instanceof p){const i=e.indexInPile(),o=t.cards.get().slice(i);return t.setCards(t.cards.get().slice(0,i)),t.turnLastCardFaceUp(),this.setCards([...this.cards.get(),...o]),C.tableauToTableau}return C.none}}class ee{constructor(){s(this,"data",N.instance);s(this,"deck",f.sequence(1,52).map(e=>new T(e)));s(this,"score",c(0));s(this,"elapsedTime",_(e=>`Time: ${f.formatSeconds(e/1e3)}`,1e3));s(this,"scoreString",c(()=>`Score: ${this.score.get()}`));s(this,"highScore",this.data.addAtom("solitaireHighScore",0));s(this,"highScoreString",c(()=>`High Score: ${this.highScore.get()}`));s(this,"lowTime",this.data.addAtom("solitaireLowTime",0));s(this,"lowTimeString",c(()=>`Best Time: ${f.formatSeconds(this.lowTime.get())}`));s(this,"stockPile",new F);s(this,"talonPile",new b);s(this,"foundationPiles",f.sequence(0,4).map(e=>new P(e)));s(this,"tableauPiles",f.sequence(0,7).map(e=>new p(e)))}newGame(){this.deal(),this.score.set(0),this.elapsedTime.stop()}addToScore(e){L(this.score,e),this.score.get()>this.highScore.get()&&this.highScore.set(this.score.get())}stopClock(){this.elapsedTime.stop();const e=Math.floor(this.elapsedTime.elapsedMilliseconds()/1e3),t=this.lowTime.get();(t===0||e<t)&&this.lowTime.set(e)}gameIsWon(){return!this.deck.find(e=>!e.isFaceUp())&&this.talonPile.isEmpty()}deal(){this.deck.forEach(t=>t.turnFaceDown()),f.shuffle(this.deck),this.stockPile.setCards(this.deck.slice(0,24)),this.talonPile.setCards([]);for(let t=0;t<4;t++)this.foundationPiles[t].setCards([]);for(let t=0;t<7;t++)this.tableauPiles[t].setCards([]);let e=24;for(let t=0;t<7;t++)this.tableauPiles[t].setCards(this.deck.slice(e,e+t+1)),e+=t+1}findDestinationPileForCard(e){const t=e.pile;if(t instanceof F)return this.talonPile;if(e.faceup.get()){if(e.name==="ace")return this.foundationPiles.find(i=>i.willAcceptCard(e));if(e.name==="2")return this.foundationPiles.find(i=>i.willAcceptCard(e))||this.tableauPiles.find(i=>i.willAcceptCard(e));if(t instanceof b)return this.tableauPiles.find(i=>i.willAcceptCard(e))||this.foundationPiles.find(i=>i.willAcceptCard(e));if(t instanceof p)return this.foundationPiles.find(i=>i.willAcceptCard(e))||this.tableauPiles.find(i=>i.willAcceptCard(e));if(t instanceof P)return this.tableauPiles.find(i=>i.willAcceptCard(e))}}turnTopStockCard(){this.startTimerIfNotRunning();const e=this.stockPile.cards.get();if(e.length>1){const t=e[e.length-1];this.talonPile.acceptCard(t)}else this.flipTalonPile()}flipTalonPile(){const e=f.allButFirst(y(this.talonPile.cards)).reverse();e.forEach(t=>t.turnFaceDown()),this.stockPile.setCards(e),this.talonPile.setCards([])}cardMayBeMoved(e){const t=!!this.foundationPiles.find(o=>o.willAcceptCard(e)),i=!!this.tableauPiles.find(o=>o.willAcceptCard(e));return e.faceup&&(e instanceof u&&e.pile===this.stockPile||e.pile===this.stockPile||t||i)}startTimerIfNotRunning(){this.elapsedTime.isRunning()||this.elapsedTime.start()}cardClicked(e){if(!this.gameIsWon()){if(this.startTimerIfNotRunning(),e instanceof u&&e.pile===this.stockPile)this.flipTalonPile();else{const t=this.findDestinationPileForCard(e);t&&(this.addToScore(t.acceptCard(e)),this.stockPile.isEmpty()&&this.talonPile.isEmpty()&&!this.deck.find(i=>!i.isFaceUp())&&this.autoPlay())}this.gameIsWon()&&this.stopClock()}}autoPlay(){const[e,t]=this.findMovableCard();e&&(this.addToScore(t.acceptCard(e)),setTimeout(()=>{this.autoPlay()},100))}findMovableCard(){for(const e of this.tableauPiles){const t=e.lastCard();if(t){const i=this.foundationPiles.find(o=>o.willAcceptCard(t));if(i)return[t,i]}}return[void 0,void 0]}}function te(a,e){function t(r){const h=U.dragData;return h instanceof T&&r.willAcceptCard(h)?"2px solid green":""}function i(){return{click:e}}function o(r){return{click:e,drag:{dragData:r,mayDrag:c(()=>r.isFaceUp()&&(r.isOnTalonPile()||r.isOnTableauPile()))},drop:{acceptsDrop:c(()=>r.willAcceptDrop()),acceptsData:h=>h instanceof T&&r.willAcceptCard(h),dataTransferEffect:"move",dropAction:h=>{var S;return(S=r.pile)==null?void 0:S.acceptCard(h)}}}}function l(r){return r instanceof u?i():o(r)}const m={id:a.cardID.toString(),name:a.fullName,model:a,height:"fit-content",position:"relative",filter:c(()=>O.default.inDarkMode()?G(.7):void 0),retainOnRemove:!0,componentName:"Card",events:l(a),effects:{mounted:$.slideFromPreviousLocation("in"),dragged:x({filter:"brightness(0.75)"}),draggedOver:x({border:c(()=>t(a))})}};return D(m).append(E(a.imageName,{width:v(100)}))}q("SolitaireGame","Box",{width:v(100),outline:n.border.none,onIntersectionVisible:a=>a.focus(!0)});function ie(a={}){const e=R("SolitaireGame",a),t=new ee;H(e,{keyBindings:{Space:()=>t.turnTopStockCard()}}),t.deal();const i=new Map([...u.allBaseCards,...t.deck].map(l=>[l.cardID,te(l,()=>t.cardClicked(l))]));function o(l,m,r="0"){const h=c(()=>y(l.cards).map(S=>i.get(S.cardID)));return K({name:m,offsetY:r,hasBaseView:!0,padding:n.space.s0,font:n.font.display_medium}).append(Q(h))}return V(e).append(W({maxWidth:j(120),padding:n.space.s3,alignItems:"center"}).append(z({padding:n.space.s3}).append(w(t.highScoreString,{font:n.font.title_medium}),k(n.space.s4),w(t.lowTimeString,{font:n.font.title_medium}),k(n.space.s6),w(t.scoreString,{font:n.font.title_medium}),k(n.space.s4),w(t.elapsedTime,{font:n.font.title_medium}),D({width:Y(3)}),Z("New Game",{padding:n.space.s0,font:n.font.title_medium,action:()=>t.newGame()})),J({gap:n.space.s2,templateRows:"1fr 4fr",outlineGridCells:!0,ncolumns:7,width:v(100),aspectRatio:6/5}).append(o(t.stockPile,"stock"),o(t.talonPile,"talon"),D({name:"filler"}),...t.foundationPiles.map((l,m)=>o(l,`foundation_${m}`)),...t.tableauPiles.map((l,m)=>o(l,`tableau_${m}`,"5%")))))}function re(){return X(se)}const se={sourceDir:"/source/Demos/Solitaire",sections:[{title:"Solitaire",componentFn:ie,sources:["SolitaireGame.ts","SolitaireModel.ts","CardComponent.ts"],markdown:"SolitaireGame.md"}]};export{re as SolitaireDemo,re as default};
