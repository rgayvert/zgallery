import { View, core, createAPIAtom, TextLabel } from "zaffre";

const weatherURL = "https://wttr.in/London?format=j1";

// wttr API: https://github.com/chubin/wttr.in
interface WeatherDesc {
  value: string;
}
interface Weather {
  current_condition: [
    {
      temp_C: string;
      weatherDesc: WeatherDesc[];
    }
  ];
}

function extractWeather(json: any): string {
  try {
    const weather = <Weather>json;
    const temp = weather.current_condition[0].temp_C;
    const desc = weather.current_condition[0].weatherDesc[0].value;
    return `London Weather: ${temp}\xB0 ${desc}`;
  } catch (e) {
    return "";
  }
}

export function APIAtomExample(): View {
  const weather = createAPIAtom(weatherURL, extractWeather, "");

  return TextLabel(weather, {
    font: core.font.headline_medium,
  });
}
