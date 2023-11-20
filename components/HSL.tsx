import { ChangeEvent, FC } from "react";

export interface HSLValues {
  h: number;
  s: number;
  l: number;
  a: number;
}

interface HSLProps {
  HSLvalue: HSLValues;
  onHSLChange: (rgbValues: HSLValues) => void;
}

const HSL: FC<HSLProps> = ({ HSLvalue, onHSLChange }) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    color: keyof HSLValues
  ) => {
    const value = e.target.value;
    onHSLChange({ ...HSLvalue, [color]: value });
  };
  return (
    <>
      <div className="flex items-center bg-gray-600 p-4 rounded-xl">
        <h1 className="text-4xl mr-4">HSL:</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-2 items-center">
            <div className="flex-1">Hue (H):</div>
            <div className="flex flex-col space-y-2">
              <input
                className="input"
                value={HSLvalue.h}
                onChange={(e) => handleInputChange(e, "h")}
                type="number"
              />
              <input
                type="range"
                value={HSLvalue.h}
                min="0"
                max="360"
                onChange={(e) => handleInputChange(e, "h")}
              />
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex-1">Saturation (S):</div>
            <div className="flex flex-col space-y-2">
              <input
                className="input"
                value={HSLvalue.s}
                onChange={(e) => handleInputChange(e, "s")}
                type="number"
              />
              <input
                type="range"
                value={HSLvalue.s}
                min="0"
                max="360"
                onChange={(e) => handleInputChange(e, "s")}
              />
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex-1">Lightness (L):</div>
            <div className="flex flex-col space-y-2">
              <input
                className="input"
                value={HSLvalue.l}
                onChange={(e) => handleInputChange(e, "l")}
                type="number"
              />
              <input
                type="range"
                value={HSLvalue.l}
                min="0"
                max="100"
                onChange={(e) => handleInputChange(e, "l")}
              />
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex-1">ALPHA:</div>
            <div className="flex flex-col space-y-2">
              <input
                className="input"
                value={HSLvalue.a}
                onChange={(e) => handleInputChange(e, "a")}
                type="number"
              />
              <input
                type="range"
                value={HSLvalue.a}
                min="0"
                max="1"
                step="0.01"
                onChange={(e) => handleInputChange(e, "a")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HSL;
