import { GridLayout, TextBox, View, core } from "zaffre";

export function ResponsiveGridLayoutExample(): View {
  const content = `<h1>Main article area</h1><p>
    In this layout, we display the areas in source order for a small screen. 
    We go to a two column layout, and then to a three
    column layout by redefining the grid, and the placement of items on the grid.`;
  const nav = `Link 1<br>Link 2<br>Link 3`;

  function text(gridArea: string, content: string): View {
    return TextBox(content, {
      gridArea: gridArea,
      background: core.color.background,
      color: core.color.primary,
    });
  }

  const small = {
    areas: `"header" "nav" "content" "sidebar" "ad" "footer"`,
    gap: core.space.s1,
  };
  const medium = {
    areas: `
       "header  header"
       "nav     nav"
       "sidebar content"
       "ad      footer"`,
    columns: "1fr 3fr",
    gap: core.space.s1,
  };
  const large = {
    areas: `
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer"`,
    columns: "1fr 4fr 1fr",
    gap: core.space.s1,
  };
  return GridLayout(small, medium, large, { border: core.border.thin, background: core.color.tertiary }).append(
    text("header", "The header"),
    text("content", content),
    text("nav", nav),
    text("sidebar", "Sidebar"),
    text("ad", "Advertising and more"),
    text("footer", "The footer")
  );
}
