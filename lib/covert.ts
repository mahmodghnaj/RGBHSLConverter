import { HSLValues } from "@/components/HSL";
import { RGBValues } from "@/components/RGB";
import { colord } from "colord";

export const covertRGBToHSL = (rgb: RGBValues): HSLValues => {
  return colord(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHsl();
};

export const covertHSLToRGB = (hsl: HSLValues): RGBValues => {
  return colord({ h: hsl.h, s: hsl.s, l: hsl.l, a: hsl.a }).toRgb();
};
