import React, { useState } from "react";

export function AppButtons() {
  const [lastClicked, setLastClicked] = useState("");

  return (
    <div>
      <button onClick={() => setLastClicked("1")}>Button1</button>
      <button onClick={() => setLastClicked("2")}>Button2</button>
      <button onClick={() => setLastClicked("3")}>Button3</button>

      <p>Button #{lastClicked} was clicked</p>
    </div>
  );
}
