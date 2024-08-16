import { core, View, TextBox, lorem, HStack, SimpleDisclosure, ch } from "zaffre";

interface DemoData {
  title: string;
  detail: string;
}
const disclosureData: DemoData = { title: "Some title", detail: lorem.sentences(50) };

export function DisclosureExample(): View {
  function createDisclosureDetail(dataItem: DemoData): View {
    return TextBox(dataItem.detail, {
      padding: core.space.s3,
      borderTop: core.border.thin,
      overflow: "hidden",
    });
  }

  return HStack({ padding: core.space.s5 }).append(
    SimpleDisclosure(disclosureData, disclosureData.title, createDisclosureDetail, {
      border: core.border.thin,
      width: ch(50),
      overflow: "hidden",
    })
  );
}
