import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChnage(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChnage,
  };

  return inputProps;
}
