import HSL, { HSLValues } from "@/components/HSL";
import RGB, { RGBValues } from "@/components/RGB";
import { covertHSLToRGB, covertRGBToHSL } from "@/lib/covert";
import { useState } from "react";

export default function Home() {
  const [RGBValue, setRGB] = useState<RGBValues>({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  });
  const [HSLvalue, setHSL] = useState({
    h: 0,
    s: 0,
    l: 0,
    a: 1,
  });

  const handleRGBChange = (rgbValues: RGBValues) => {
    setRGB(rgbValues);
    const hsl = covertRGBToHSL(rgbValues);
    setHSL(hsl);
  };

  const onHSLChange = (hslValues: HSLValues) => {
    setHSL(hslValues);
    const rgb = covertHSLToRGB(hslValues);
    console.log(rgb);
    setRGB(rgb);
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-full">
          <div
            style={{
              backgroundColor: `rgba(${RGBValue?.r},${RGBValue?.g},${RGBValue?.b},${RGBValue?.a})`,
            }}
            className="max-w-md w-full mb-4 h-20 flex items-center justify-center text-white font-bold text-xl"
          >
            RGB ({RGBValue?.r} , {RGBValue?.g} , {RGBValue?.b} , {RGBValue?.a})
          </div>
          <div className="mx-28"></div>
          <div
            style={{
              backgroundColor: `hsla(${HSLvalue.h},${HSLvalue.s}%,${HSLvalue.l}%,${HSLvalue.a})`,
            }}
            className=" max-w-md w-full mb-4 h-20 flex items-center justify-center text-white font-bold text-xl"
          >
            HSL ({HSLvalue.h} , {HSLvalue.s}% , {HSLvalue.l}% , {HSLvalue.a})
          </div>
        </div>
        <div className="flex">
          <RGB rgbValues={RGBValue} onRGBChange={handleRGBChange} />
          <div className="mx-8 text-6xl">To</div>
          <HSL onHSLChange={onHSLChange} HSLvalue={HSLvalue} />
        </div>
      </div>
    </>
  );
}
