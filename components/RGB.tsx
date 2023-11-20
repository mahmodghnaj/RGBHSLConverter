import { ChangeEvent, FC } from "react";

export interface RGBValues {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface RGBProps {
  onRGBChange: (rgbValues: RGBValues) => void;
  rgbValues: RGBValues;
}
const RGB: FC<RGBProps> = ({ onRGBChange, rgbValues }) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    color: keyof RGBValues
  ) => {
    const value = e.target.value;
    onRGBChange({ ...rgbValues, [color]: value });
  };

  return (
    <>
      <div className="flex items-center bg-gray-600 p-4 rounded-xl">
        <h1 className="text-4xl mr-4">RGB:</h1>
        <div className="flex flex-col space-y-4 ">
          <div className="flex space-x-2 items-center">
            <div className="flex-1">Enter red color (R):</div>
            <div className="flex flex-col space-y-2">
              <input
                type="number"
                className="input"
                value={rgbValues.r}
                onChange={(e) => handleInputChange(e, "r")}
              />
              <input
                type="range"
                value={rgbValues.r}
                min="0"
                max="255"
                onChange={(e) => handleInputChange(e, "r")}
              />
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <div className="flex-1">Enter green color (G):</div>
            <div className="flex flex-col space-y-2">
              <input
                type="number"
                className="input"
                value={rgbValues.g}
                onChange={(e) => handleInputChange(e, "g")}
              />
              <input
                type="range"
                value={rgbValues.g}
                min="0"
                max="255"
                onChange={(e) => handleInputChange(e, "g")}
              />
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <div className="flex-1">Enter blue color (B):</div>
            <div className="flex flex-col space-y-2">
              <input
                type="number"
                className="input"
                value={rgbValues.b}
                onChange={(e) => handleInputChange(e, "b")}
              />
              <input
                type="range"
                value={rgbValues.b}
                min="0"
                max="255"
                onChange={(e) => handleInputChange(e, "b")}
              />
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <div className="flex-1">ALPHA:</div>
            <div className="flex flex-col space-y-2">
              <input
                type="number"
                className="input"
                value={rgbValues.a}
                onChange={(e) => handleInputChange(e, "a")}
              />
              <input
                type="range"
                value={rgbValues.a}
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

export default RGB;
