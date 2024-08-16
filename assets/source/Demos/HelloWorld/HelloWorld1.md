Reactive content and style
<br>  
Here we add a text input to the first example, and demonstrate how reactive values work with content and style.
<br>
Notes:
  - A reactive value (*atom*) is created to hold dynamic content.
  - A VStack is used to position the components vertically (i.e., a flexbox).
  - A TextInput is created using the reactive value for content. This sets up a two-way binding between the reactive value and the value of the underlying \<input\> element.
  - This example configures the TextInput to update the reactive value with the user changes the text (setOnEnter). It could also be set to update on enter or blur.
  - The TextLabel component is given the same reactive value for content, rather than a literal string as in the first example. This results in the content of the TextLabel changing automatically.
  - There are three kinds of reactive mechanisms: content, style, and structure.
  - The opacity attribute of the TextLabel is specified as a *derived atom*, whose value is defined as a function of other reactive values. In this case, the opacity of the label will vary as the length of the input string changes.