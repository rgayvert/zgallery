Creating a web application using current tools is complicated. If typically involves multiple technologies (HTML/CSS/JS/SVG) spread over multiple files, a myriad of APIs and dependencies, and a complex workflow with preprocessors, transpilers, and bundlers. Zaffre is an experimental framework which attempts to simplify this process by using a single language (Typescript) together with a reactive mechanism that encourages building higher-level abstractions via declarative composition. There are no required runtime dependencies, and the build process is made easy with vite and rollup.
<br/>  
Here's a basic example of a Zaffre component that uses reactive content and styling.
<br/>  

```js
  function HelloWorld1(): View {
    // a reactive value
    const text = atom("Hello World");      
    return VStack({
      padding: core.space.s6,
      maxWidth: ch(120)
    }).append(
      // text input with reactive update on any input
      TextInput(text, {
        rounding: core.rounding.pill,      
        border: core.border.thin,
        textAlign: "center",
        font: core.font.display_medium,
        placeholder: "Enter some text",
      }),
      // text label with reactive style
      TextLabel(text, {                    
        color: core.color.primary,
        opacity: atom(() => zutil.clamp(text.get().length / 20, 0, 1)), 
        font: core.font.headline_medium,
      })
    );
  }
```
<br/>

This produces the following result:
<img src='http://localhost:5173/assets/image/HelloWorld1.png' width="100%">
<br/>

A Zaffre *component* is just a function which returns a View object. In this sample, the HelloWorld1 component is defined as a composition of three other components: VStack, TextInput, and TextLabel. The Zaffre rendering process builds the HTML elements and CSS styles dynamically, so no external HTML or CSS files are needed. The reactive text value (an "atom") is shared by the input and label components. When this value is changed by the user in the input field, the label will be updated automatically. This is a kind of reactive content. The opacity of the label is specified as a *derived atom*, which in this case is a function of the text atom. This yields a reactive CSS attribute; that is, the opacity will automatically change when the length of the text value changes.
<br>  
Notes:
<br>
  - Composition is done with the *append()* method.
  - Each component typically takes a list of *options* which result in CSS/HTML/SVG attributes being set on the underlying element.
  - Attributes are often specified using *tokens*. A token is an object that combines with the current *theme* to construct HTML/CSS attributes. 
  - The *core* object contains a collection of predefined tokens for color, font, borders, space, and rounding. These are generally turned into CSS properties when rendered.
  - Any additional CS/JS files that are needed may be loaded into the DOM dynamically.
  - Components are never manipulated directly once they are created. Any varying aspect of a component should be represented in terms of reactive values in the model (content / attributes / structure).

<br>  
DOM structure may also be reactive. Below is a simple example.  
<br>
<br>  

```js
  class HelloModel4 {
    counter = 1;
    textValues = createArrayAtom(["Hello World 1"]);
    disabled = atom(() => this.textValues.length === 1);

    pushRow(): void {
      this.textValues.push(`Hello World ${this.counter + 1}`);
      this.counter++;
    }
    popRow(): void {
      this.textValues.pop();
    }
  }
  export function HelloWorld4(): View {
    const model = new HelloModel4();

    function createLabel(text: string): View {
      return TextLabel(text, {
        color: core.color.primary,
        font: core.font.headline_medium,
      });
    }
    return VStack({
      gap: core.space.s5,
      alignItems: "center",
      padding: core.space.s6,
      maxWidth: ch(120),
    }).append(
      Box({ border: core.border.thin, padding: core.space.s3 }).append(
        List(
          model.textValues,
          (text) => text,
          (text) => createLabel(text)
        )
      ),
      HStack({ gap: core.space.s5 }).append(
        Button({ label: "Push row", action: () => model.pushRow() }),
        Button({
          label: "Pop row",
          disabled: model.disabled,
          action: () => model.popRow(),
        })
      )
    );
  }
```

The key to reactive content is the *List()* function, which returns a *ViewList* rather than a View. A ViewList consists of a reactive array along with a childID function and a childCreator function. As the array changes, the viewList will update the list of children to match the array, preserving children with matching ids.

Some Caveats and Issues
<br>  
- The minimal bundle size is about 100k. 
- Debugging can be challenging; in some cases it can be difficult to understand why particluar actions are not triggered; subtle bugs in derived atom dependencies
- Nesting derived actions, in particular, can result in complex dependencies.
Memory footprint?
- How to prevent circular references?

<br>  
Availability
- Download the Zaffre monorepo at ...
- See the gallery of examples at ...