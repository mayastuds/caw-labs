import React, { useState } from "react";

export function BoxCreator() {
  const [boxes, setBoxes] = useState([]);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newBox = { width, height, color };
    setBoxes([...boxes, newBox]);

    setWidth("");
    setHeight("");
    setColor("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button type="submit">Add Box</button>
      </form>

      {boxes.map((b, i) => (
        <div
          key={i}
          style={{
            width: b.width + "px",
            height: b.height + "px",
            backgroundColor: b.color,
            margin: "10px",
          }}
        ></div>
      ))}
    </div>
  );
}
