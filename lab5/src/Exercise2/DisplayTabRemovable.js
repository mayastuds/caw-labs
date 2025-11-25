import React, { useState } from "react";

export function DisplayTabRemovable() {
  const [tab, setTab] = useState(["hello", "world", "from", "react"]);

  function removeItem(index) {
    setTab(tab.filter((_, i) => i !== index));
  }

  return (
    <ul>
      {tab.map((item, i) => (
        <li key={i} onClick={() => removeItem(i)}>
          Element {i + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}
