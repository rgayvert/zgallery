import { zget, atom, em, zstring, core, zutil } from "zaffre";
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
  expandRelativeAssets?: boolean;
}
defineComponentDefaults<MarkdownOptions>("Markdown", "Box", {
  extraClasses: "markdown-body",
  background: core.color.background,
  minHeight: em(1.2),
  textTransformFn: markdownTransform,
  padding: core.space.s3,
  userSelect: "text",
  expandRelativeAssets: true,
});

function markdownTransform(s: string): string {
  return MarkdownService.defaultInstance.renderMD(s);
}

export function Markdown(inOptions: MarkdownOptions = {}): View {
  const options = mergeComponentDefaults("Markdown", inOptions);
  let mdText: zstring;
  if (options.uri) {
    let url = resolveURI(options.uri);
    if (options.expandRelativeAssets) {
      // prepend ./assets/ with the path to this file
      const path = url.split("/").slice(0, -1).join("/");
      console.log("url="+url+",path="+path);
      const f = <typeof markdownTransform>options.textTransformFn;
      options.textTransformFn = (text: string) => f(text).replaceAll("./assets/", `${path}/assets/`);
    }
    mdText = url ? createFetchTextAtom(url) : "";
  } else {
    mdText = zget(options.markdown || "");
  }
  return TextBox(mdText, options);
}
