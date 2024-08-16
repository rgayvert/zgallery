An *Atom* is a generic reactive value. For example you can have
```js
  const num: Atom<number> = atom(42);
```
or
```js
  const arr: Atom<string[]> = atom(["abc", def""]);
```
To access the value of an atom you need to use the *get()* method, and to change the value you must use *set()*. The primary utility of atoms comes from the *actions* that are attached. An action associated with an atom will be evaluated whenever the its value changes.
<br>
When an atom that is referenced in a component content or attribute, the framework will automatically give the atom an action (a *reactive action*) that will update the component whenever the value of the atom changes.
<br>
Atoms can be extended to encapsulate a variety of common patterns. In this first example, we have a kind of FetchAtom, which handles the interactions involved in retrieving a value through the Fetch API. This particular case is a FetchTextAtom, which takes a URL and sets its value when the data arrives.