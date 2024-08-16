import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { DateInputExample } from "./DateInputExample";
import { TimeInputExample } from "./TimeInputExample";
import { ColorInputExample } from "./ColorInputExample";
import { TextInputExample } from "./TextInputExample";
import { EmailInputExample } from "./EmailInputExample";
import { FileInputExample } from "./FileInputExample";
import { PasswordInputExample } from "./PasswordInputExample";
import { NumberInputExample } from "./NumberInputExample";
import { TelephoneInputExample } from "./TelephoneInputExample";
import { URLInputExample } from "./URLInputExample";

export function InputControlsDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/InputControls",
  sections: [
    {
      title: "Color Input",
      componentFn: ColorInputExample,
      sources: ["ColorInputExample.ts",],
      markdown: "ColorInputExample.md",
    },
    {
      title: "Date Input",
      componentFn: DateInputExample,
      sources: ["DateInputExample.ts",],
      markdown: "DateInputExample.md",
    },
    {
      title: "Email Input",
      componentFn: EmailInputExample,
      sources: ["EmailInputExample.ts",],
      markdown: "EmailInputExample.md",
    },
    {
      title: "File Input",
      componentFn: FileInputExample,
      sources: ["FileInputExample.ts",],
      markdown: "FileInputExample.md",
    },
    {
      title: "Number Input",
      componentFn: NumberInputExample,
      sources: ["NumberInputExample.ts",],
      markdown: "NumberInputExample.md",
    },

    {
      title: "Password Input",
      componentFn: PasswordInputExample,
      sources: ["PasswordInputExample.ts",],
      markdown: "PasswordInputExample.md",
    },
    {
      title: "Telephone Input",
      componentFn: TelephoneInputExample,
      sources: ["TelephoneInputExample.ts",],
      markdown: "TelephoneInputExample.md",
    },
    {
      title: "Text Input",
      componentFn: TextInputExample,
      sources: ["TextInputExample.ts",],
      markdown: "TextInputExample.md",
    },
    {
      title: "Time Input",
      componentFn: TimeInputExample,
      sources: ["TimeInputExample.ts",],
      markdown: "TimeInputExample.md",
    },
    {
      title: "URL Input",
      componentFn: URLInputExample,
      sources: ["URLInputExample.ts",],
      markdown: "URLInputExample.md",
    },
  ],
};

export default InputControlsDemo;

