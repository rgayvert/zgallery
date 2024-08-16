import { zget, Atom, ZStyle, atom, core, zutil, SimpleTree, TreeNode, pct, vh, px, Ensemble, ScrollPanel } from "zaffre";
import { SplitGridOptions, defineComponentDefaults, mergeComponentDefaults } from "zaffre";
import { TextBox, View, SplitGrid } from "zaffre";
import { TreeOptions, BoxOptions } from "zaffre";
import { WrappedObject, wrapView } from "./WrappedObject";

/**
 * #DOMInspector
 *   - provide a 3-column inspector showing the hierarchy, styles, and view data for a component
 *   - the hierachy is a simple tree of the names of the view and descendants
 *   - the style panel shows the collected styles and content of the selected view
 *   - the view data is a tree formed from the view and its children, as wrapped objects 
 */

export interface DOMInspectorOptions extends SplitGridOptions {
  reset?: Atom<boolean>;
}

defineComponentDefaults<DOMInspectorOptions>("DOMInspector", "SplitGrid", {
  columnMins: [100, 100, 100],
  columnMaxes: [2, 3, 3],
  width: pct(100),
  height: vh(80),
  maxHeight: px(500),
  gap: core.space.s1,
});


export function DOMInspector(baseView: View, inOptions: DOMInspectorOptions = {}): View {
  const options = mergeComponentDefaults("DOMInspector", inOptions);

  const selectedDOMView = atom(baseView);
  const viewStyle = atom(() => viewStyleText());
  const selectedViewID = atom(() => selectedDOMView.get().zname);
  const root = treeNodeFromView(baseView);
  baseView.addMutationAction(() => root.reload());
  options.reset?.addAction(() => root.reload());

  function treeNodeFromView(view: View): TreeNode<View> {
    return new TreeNode(view, () => view.children.get().map((child) => treeNodeFromView(child)));
  }
  function domTree(inOptions: TreeOptions = {}): View {
    const defaultOptions: TreeOptions = {
      initialExpansionLevel: 1,
    };
    const options: TreeOptions = zutil.mergeOptions(defaultOptions, inOptions);
    const selectedNode: Atom<TreeNode<View> | undefined> = atom(undefined, { action: (node) => selectedDOMView.set(node.data) });
    return SimpleTree(root, selectedNode, (node) => node.data.zname, options);
  }

  function treeNodeFromWrappedObject(wrappedObject: WrappedObject): TreeNode<WrappedObject> {
    return new TreeNode(wrappedObject, () => wrappedObject.children().map((child) => treeNodeFromWrappedObject(child)));
  }
  function createObjectTree(): View {
    const defaultOptions: TreeOptions = {
      initialExpansionLevel: 1,
    };
    const options: TreeOptions = zutil.mergeOptions(defaultOptions, commonOptions);
    const selectedNode: Atom<TreeNode<WrappedObject> | undefined> = atom(undefined);
    const root = treeNodeFromWrappedObject(wrapView(selectedDOMView.get()));
    return SimpleTree(root, selectedNode, (node) => node.data.name, options);
  }

  function viewStyleText(): string {
    const view = selectedDOMView.get();
    if (view) {
      const cssText = view.elt.style.cssText.split("; ").join("\n  ");
      const eltStyle = `element.style {\n  ${cssText}\n}\n\n`;

      // touch the reactive attributes so that they will refresh in the viewer as they change
      view.attributeBundle.touchReactiveAttributes();

      const otherStyles = Array.from(view.elt.classList)
        .reverse()
        .map((clsName) => `${clsName} {\n${ZStyle.named(clsName)?.asRule(2) || ""}\n}\n`)
        .join("\n");
      const content = view.hasContent() ? `\nContent: "${zget(view.getContent())}"` : "";
      return `<pre>${eltStyle}${otherStyles}${content}${view.htmlAttributeSummary()}${view.svgAttributeSummary()}</pre>`;
    } else {
      return "";
    }
  }

  const commonOptions: BoxOptions = {
    background: core.color.background,
    border: core.border.none,
    justifyContent: "start",
    minHeight: pct(100),
  };
  return SplitGrid(options).append(
    ScrollPanel().append(domTree(commonOptions)),
    TextBox(viewStyle, {
      ...commonOptions,
      color: core.color.surface.contrast,
      font: core.font.body_small,
      overflow: "auto",
      paddingLeft: core.space.s2,
    }),
    ScrollPanel().append(Ensemble(selectedViewID, () => createObjectTree()))
  );
}
