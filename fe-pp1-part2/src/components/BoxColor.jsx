import React from "react";
import "../BoxColor.css";

function BoxColor(props) {

  function toHex(color) {
    const hex = color.toString(16);

    if (hex.length === 1) {
      return "0" + hex;
    }

    return hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
  }

  const hexColor = rgbToHex(props.r, props.g, props.b);

  const BoxDeco = {
    backgroundColor:
      "rgb(" + props.r + ", " + props.g + ", " + props.b + ")"
  };

  return (
    <div className="box-color" style={BoxDeco}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>

      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;