export default function ColorInput({ label, value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
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
