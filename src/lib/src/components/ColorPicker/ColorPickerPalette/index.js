import React, { useState } from "react";

const ColorPickerPalette = (props) => {
  const [icolor, setColor] = useState(props.color);

  return (
    <label className="app-color-picker-item palette">
      <input
        type="color"
        value={icolor}
        disabled={props.disabled}
        onChange={props.onChange}
        onChangeCapture={e => setColor(e.target.value)}
      />
      <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: icolor
      }}>
      </div>
    </label>
  )
}

ColorPickerPalette.defaultProps = {
  color: "#eee"
}

export default ColorPickerPalette;