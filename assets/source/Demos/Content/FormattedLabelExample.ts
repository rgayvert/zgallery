import { core, View, pct, LabelBox, FormattedLabel, NumericFormatter, TextLabelOptions } from "zaffre";
import { LabelBoxOptions, Grid } from "zaffre";
import { DateTimeFormatter } from ':services';

export function FormattedLabelExample(): View {
  const numericValue = 12345.6789;
  const dateValue = new Date();
  const opts: TextLabelOptions = {
    border: core.border.thin,
    padding: core.space.s2,
  };
  const labelOpts: LabelBoxOptions = {
    placementPt: "xstart-ystart",
    labelOptions: {
      font: core.font.label_large.bold(),
    },
  };
  function label(label: string, view: View): View {
    return LabelBox(label, labelOpts).append(view);
  }
  const intl = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

  return Grid({ width: pct(100), gap: core.space.s5, ncolumns: 4 }).append(
    label("Plain: ", FormattedLabel(numericValue, NumericFormatter({}), opts)),
    label("Fixed(2): ", FormattedLabel(numericValue, NumericFormatter({ fixed: 2 }), opts)),
    label("Precision(4): ", FormattedLabel(numericValue, NumericFormatter({ precision: 4 }), opts)),
    label("Exponential(5): ", FormattedLabel(numericValue, NumericFormatter({ exponential: 5 }), opts)),
    label("Round: ", FormattedLabel(numericValue, NumericFormatter({ round: "round" }), opts)),
    label("Floor: ", FormattedLabel(numericValue, NumericFormatter({ round: "floor" }), opts)),
    label("Ceiling: ", FormattedLabel(numericValue, NumericFormatter({ round: "ceiling" }), opts)),
    label("DE-Currency: ", FormattedLabel(numericValue, NumericFormatter({ intl: intl }), opts)),

    label("DD-MM-YYYY", FormattedLabel(dateValue, DateTimeFormatter("DD-MM-YYYY"), opts)),
    label("HH:mm:ss", FormattedLabel(dateValue, DateTimeFormatter("HH:mm:ss"), opts)),
    label("ddd MMM D", FormattedLabel(dateValue, DateTimeFormatter("ddd MMM D"), opts)),
    label("MMM D, YYYY", FormattedLabel(dateValue, DateTimeFormatter("MMM D, YYYY"), opts)),
  );
}
