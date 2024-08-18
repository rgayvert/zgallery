import { Box, View, TextBox, HStack, Ensemble, Button, place, StackOptions, zget, createRouteAtom } from "zaffre";
import { Resettable, VStack, Spacer, SegmentedTextButton } from "zaffre";
import { core, createToggleAtom, pct, zutil } from "zaffre";
import { defineComponentDefaults, mergeComponentDefaults } from "zaffre";
import { DOMInspector, DOMInspectorOptions } from "./DOMInspector";
import { DemoSourceView } from "./DemoSourceView";
import { Markdown } from "./Markdown";
import { GalleryTopic, GallerySection } from "./GalleryTypes";

interface DemoBoxOptions extends StackOptions {}

defineComponentDefaults<DemoBoxOptions>("DemoBox", "VStack", {
  width: pct(95),
  marginTop: core.space.s3,
  border: core.border.thin.color(core.color.gray.opacity(0.5)),
});

/**
 * #DemoBox
 *   - standard box used for all demo examples
 *   - contains an ensemble controlled by a segmented button with Demo, Notes, Source, and DOM
 *   - resettable wrapper forces the example to be reloaded when the reset button is clicked
 *   - if the demo has only one section, it is considered "fullpage"; otherwise, space is added around the sections
 *
 */
export function DemoBox(section: GallerySection, topic: GalleryTopic, inOptions: DemoBoxOptions = {}): View {
  const options = mergeComponentDefaults("DemoBox", inOptions);
  options.id = zutil.stripWhitespace(section.title);

  const fullPage = topic.sections.length === 1;
  const viewKey = createRouteAtom(zutil.kebabize(section.title), "demo");
  const viewLabels = ["Demo", "Notes", "Source", "DOM"];
  const viewKeys = viewLabels.map((v) => v.toLowerCase());
  const tooltips = ["Show Demo", "Show Notes", "Show source files", "Show DOM"];
  if (fullPage) {
    options.border = undefined;
    options.marginTop = core.space.s0;
  }

  function reset(): void {
    resetToggle.toggle();
    viewKey.set("demo");
  }

  function headerButtons(): View {
    return HStack({ background: core.color.inherit }).append(
      SegmentedTextButton(viewKey, viewKeys, {
        labels: viewLabels,
        selectionColor: core.color.secondaryContainer,
        tooltips: tooltips,
        tooltipPlacement: place.bottom,
      }),
      Spacer(core.space.s4),
      Button({
        leadingIconURI: "icon.reset",
        action: () => reset(),
        tooltip: "Reset Demo",
        tooltipPlacement: place.bottom,
        border: core.border.none,
      }),
      Spacer(core.space.s4)
    );
  }
  function createBottomView(key: string): View {
    if (key === "dom") {
      const domOptions: DOMInspectorOptions = fullPage
        ? { height: pct(100), maxHeight: undefined, borderBottom: core.border.thin }
        : {};
      return DOMInspector(demoContainer.children.at(0) || demoContainer, domOptions);
    } else if (key === "notes") {
      return Markdown({ uri: section.markdown ? `${topic.sourceDir || ""}/${section.markdown}` : "" });
    } else if (key === "source") {
      return DemoSourceView(topic.sourceDir!, section.sources);
    } else if (key === "demo") {
      return demoContainer;
    } else {
      return Box(); // TODO: some kind of missing box
    }
  }

  function demoHeader(): View {
    return HStack({
      width: pct(100),
      justifyContent: "start",
      paddingLeft: core.space.s1,
      background: core.color.secondaryContainer,
      border: core.border.none,
      borderBottom: core.border.thin.color(core.color.gray.opacity(0.25)),
      name: "DemoHeader",
    }).append(
      TextBox(section.title, {
        color: core.color.secondaryContainer.contrast,
        background: core.color.secondaryContainer,
      }),
      Spacer(1),
      headerButtons()
    );
  }

  options.justifyContent = undefined;
  options.overflow = undefined;
  const resetToggle = createToggleAtom(false);
  const demoContainer = Resettable(section.componentFn, resetToggle, {
    background: core.color.background,
  });

  // TODO: domInspector does not update when demo is reset

  if (fullPage) {
    options.width = pct(100);
    options.height = pct(100);
    return VStack(options).append(
      demoHeader(),
      Ensemble(viewKey, (key) => createBottomView(key))
    );
  } else {
    options.width = pct(95);
    return VStack(options).append(
      demoHeader(),
      demoContainer,
      Ensemble(viewKey, (key) => createBottomView(key), {
        borderTop: core.border.thin,
        overflowY: "hidden",
      })
    );
  }
}
