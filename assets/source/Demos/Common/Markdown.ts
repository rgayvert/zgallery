import { zget, atom, em, zstring, core } from "zaffre";
import { defineComponentDefaults, mergeComponentDefaults, createFetchTextAtom, resolveURI } from "zaffre";
import { View, TextBox, TextBoxOptions } from "zaffre";
import { MarkdownService } from ":services";

/**
 * #Markdown
 *   - simple text display of markdown content, used for demo notes
 *   - assumes that Markdown service has been installed
 *   - content is supplied either by a URI or directly as a string 
 */

export interface MarkdownOptions extends TextBoxOptions {
  markdown?: zstring;
  uri?: zstring;
  markdownStyle?: string;
}
defineComponentDefaults<MarkdownOptions>("Markdown", "Box", {
  extraClasses: "markdown-body",
  background: core.color.background,
  minHeight: em(1.2),
  textTransformFn: markdownTransform,
  padding: core.space.s3,
  userSelect: "text",
});

function markdownTransform(s: string): string {
  return MarkdownService.defaultInstance.renderMD(s);
}

export function Markdown(inOptions: MarkdownOptions = {}): View {
  const options = mergeComponentDefaults("Markdown", inOptions);
  let mdText: zstring;
  if (options.uri) {
    const url = atom(() => resolveURI(options.uri!));
    mdText = url ? createFetchTextAtom(url) : "";
  } else {
    mdText = zget(options.markdown || "");
  }
  return TextBox(mdText, options);
}
