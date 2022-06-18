import * as React from 'react';
import { useState } from 'react';
import { HexColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css";

interface IColorPickerProps {
}

const ColorPicker: React.FunctionComponent<IColorPickerProps> = (props) => {
    const [color, setColor] = useState("#999666");

    return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;
