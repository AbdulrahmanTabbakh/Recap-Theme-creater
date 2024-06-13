import { initialColors } from "./lib/colors";

import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import Color from "./Components/Color/Color.jsx";

function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
