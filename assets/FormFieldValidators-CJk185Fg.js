const r={notBlank:t=>{const e=t.value.get();return e&&e!=="&nbsp;"?"":"Must not be blank"},lettersOnly:t=>{const e=t.value.get();return typeof e=="string"?e.match(/^[A-Za-z]+$/)?"":"Must be letters only":""},length:(t,e)=>l=>{const n=l.value.get();return typeof n=="string"?n.length<t?`Length must be at least ${t}`:e&&n.length>e?`Length must be at most ${e}`:"":""},email:t=>{const e=t.value.get();return typeof e=="string"?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.toLowerCase())?"":"Invalid email address":""}};export{r as d};
