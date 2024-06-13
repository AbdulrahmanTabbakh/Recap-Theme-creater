import { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput.jsx";

export default function ColorForm({ onAddColor }) {
  const [role, setRole] = useState("Primary");
  const [hex, setHex] = useState("#000000");
  const [contrastText, setContrastText] = useState("#ffffff");

  const handleSubmit = (Event) => {
    Event.preventDefault();
    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };

    onAddColor(newColor);

    setRole("Primary");
    setHex("#000000");
    setContrastText("#ffffff");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rolle:
        {}
        <input
          type="text"
          value={role}
          onChange={(Event) => setRole(Event.target.value)}
        />
      </label>
      {}
      <ColorInput label="Hex" value={hex} onChange={setHex} />
      {}
      <ColorInput
        label="Kontrastfarbe"
        value={contrastText}
        onChange={setContrastText}
      />
      {}
      <button type="submit">Farbe hinzufügen</button>
    </form>
  );
}
