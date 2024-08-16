function R(y,F){for(var S=0;S<F.length;S++){const m=F[S];if(typeof m!="string"&&!Array.isArray(m)){for(const p in m)if(p!=="default"&&!(p in y)){const w=Object.getOwnPropertyDescriptor(m,p);w&&Object.defineProperty(y,p,w.get?w:{enumerable:!0,get:()=>m[p]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tt(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var V={exports:{}};(function(y,F){(function(S,m){y.exports=m()})(X,function(){var S=1e3,m=6e4,p=36e5,w="millisecond",j="second",k="minute",T="hour",M="day",L="week",g="month",z="quarter",v="year",Y="date",J="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},P=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},K={s:P,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+P(r,2,"0")+":"+P(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,g),s=t-e<0,u=n.clone().add(r+(s?-1:1),g);return+(-(r+(t-e)/(s?e-u:u-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:g,y:v,w:L,d:M,D:Y,h:T,m:k,s:j,ms:w,Q:z}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},x="en",b={};b[x]=Q;var Z="$isDayjsObject",U=function(i){return i instanceof I||!(!i||!i[Z])},W=function i(n,t,r){var e;if(!n)return x;if(typeof n=="string"){var s=n.toLowerCase();b[s]&&(e=s),t&&(b[s]=t,e=s);var u=n.split("-");if(!e&&u.length>1)return i(u[0])}else{var o=n.name;b[o]=n,e=o}return!r&&e&&(x=e),e||!r&&x},f=function(i,n){if(U(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new I(t)},a=K;a.l=W,a.i=U,a.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var I=function(){function i(t){this.$L=W(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Z]=!0}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(B);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return s?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!a.u(r)||r,u=a.p(t),o=function(_,l){var D=a.w(e.$u?Date.UTC(e.$y,l,_):new Date(e.$y,l,_),e);return s?D:D.endOf(M)},c=function(_,l){return a.w(e.toDate()[_].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},d=this.$W,h=this.$M,$=this.$D,H="set"+(this.$u?"UTC":"");switch(u){case v:return s?o(1,0):o(31,11);case g:return s?o(1,h):o(0,h+1);case L:var O=this.$locale().weekStart||0,A=(d<O?d+7:d)-O;return o(s?$-A:$+(6-A),h);case M:case Y:return c(H+"Hours",0);case T:return c(H+"Minutes",1);case k:return c(H+"Seconds",2);case j:return c(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[M]=u+"Date",e[Y]=u+"Date",e[g]=u+"Month",e[v]=u+"FullYear",e[T]=u+"Hours",e[k]=u+"Minutes",e[j]=u+"Seconds",e[w]=u+"Milliseconds",e)[s],c=s===M?this.$D+(r-this.$W):r;if(s===g||s===v){var d=this.clone().set(Y,1);d.$d[o](c),d.init(),this.$d=d.set(Y,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var u=a.p(r),o=function(h){var $=f(s);return a.w($.date($.date()+Math.round(h*t)),s)};if(u===g)return this.set(g,this.$M+t);if(u===v)return this.set(v,this.$y+t);if(u===M)return o(1);if(u===L)return o(7);var c=(e={},e[k]=m,e[T]=p,e[j]=S,e)[u]||1,d=this.$d.getTime()+t*c;return a.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var s=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,$=e.months,H=e.meridiem,O=function(l,D,C,N){return l&&(l[D]||l(r,s))||C[D].slice(0,N)},A=function(l){return a.s(o%12||12,l,"0")},_=H||function(l,D,C){var N=l<12?"AM":"PM";return C?N.toLowerCase():N};return s.replace(G,function(l,D){return D||function(C){switch(C){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return d+1;case"MM":return a.s(d+1,2,"0");case"MMM":return O(e.monthsShort,d,$,3);case"MMMM":return O($,d);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return O(e.weekdaysMin,r.$W,h,2);case"ddd":return O(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return A(1);case"hh":return A(2);case"a":return _(o,c,!0);case"A":return _(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}(l)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,u=this,o=a.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*m,h=this-c,$=function(){return a.m(u,c)};switch(o){case v:s=$()/12;break;case g:s=$();break;case z:s=$()/3;break;case L:s=(h-d)/6048e5;break;case M:s=(h-d)/864e5;break;case T:s=h/p;break;case k:s=h/m;break;case j:s=h/S;break;default:s=h}return e?s:a.a(s)},n.daysInMonth=function(){return this.endOf(g).$D},n.$locale=function(){return b[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=W(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),E=I.prototype;return f.prototype=E,[["$ms",w],["$s",j],["$m",k],["$H",T],["$W",M],["$M",g],["$y",v],["$D",Y]].forEach(function(i){E[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,I,f),i.$i=!0),f},f.locale=W,f.isDayjs=U,f.unix=function(i){return f(1e3*i)},f.en=b[x],f.Ls=b,f.p={},f})})(V);var q=V.exports;const et=tt(q),nt=R({__proto__:null,default:et},[q]);export{nt as d};
