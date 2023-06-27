import { useState } from "react";
const useInput = (value) => {
  const [input, setInput] = useState(value);
  const updateInput = (e) => {
    setInput(e.target.value);
  };
  return { input, updateInput };
};
export default useInput;
