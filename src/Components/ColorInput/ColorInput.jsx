export default function ColorInput({ label, value, onChange }) {
  const handleChange = (Event) => {
    onChange(Event.target.value);
  };

  return (
    <div>
      <label>
        {label}
        <input type="text" value={value} onChange={handleChange} />
        <input type="color" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}
