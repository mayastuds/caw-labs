import React from "react";

// Exercise 1 imports
import { ClickOnce } from "./Exercise1/ClickOnce";
import { ToggleButton } from "./Exercise1/ToggleButton";
import { AppButtons } from "./Exercise1/AppButtons";
import { Counter } from "./Exercise1/Counter";

// Exercise 2 imports
import { DisplayTab } from "./Exercise2/DisplayTab";
import { DisplayTab2 } from "./Exercise2/DisplayTab2";
import { DisplayTabRemovable } from "./Exercise2/DisplayTabRemovable";
import { DisplayTabProps } from "./Exercise2/DisplayTabProps";

// Exercise 3 import
import { AuthForm } from "./Exercise3/AuthForm";

// Exercise 4 import
import { BoxCreator } from "./Exercise4/BoxCreator";

function App() {
  return (
    <div>
      <h2>Exercise 1</h2>
      <ClickOnce />
      <ToggleButton />
      <AppButtons />
      <Counter />

      <h2>Exercise 2</h2>
      <DisplayTab />
      <DisplayTab2 />
      <DisplayTabRemovable />
      <DisplayTabProps items={["apple", "banana", "cherry"]} />
      <DisplayTabProps items={["dog", "cat"]} />

      <h2>Exercise 3</h2>
      <AuthForm />

      <h2>Exercise 4</h2>
      <BoxCreator />
    </div>
  );
}

export default App;
