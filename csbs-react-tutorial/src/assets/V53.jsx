import { useState } from "react";

export default function V52() {
  const [value, toggleValue] = useToggle(false);
  const [value2, toggleValue2] = useToggle(true);
  return (
    <section>
      <h2>V53 - Custome hook</h2>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(true)}>Show Toggle</button>
      <button onClick={() => toggleValue(false)}>Hide Toggle</button>
      {value && <h3>This is a first toggled heading!</h3>}

      <br />
      <button onClick={toggleValue2}>Toggle Heading</button>
      <button onClick={() => toggleValue2(true)}>Show Toggle</button>
      <button onClick={() => toggleValue2(false)}>Hide Toggle</button>
      {value2 && <h3>This is a second toggled heading!</h3>}
    </section>
  );
}

function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  function toggleValue(val) {
    if (typeof val === "boolean") {
      setValue(val);
    } else {
      setValue(!value);
    }
  }
  return [value, toggleValue];
}
