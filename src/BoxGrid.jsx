import Box from "./Box";
import { useState } from "react";

export default function BoxGrid() {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const reset = () => {
    setBoxes([false, false, false, false, false, false, false, false, false]);
  };

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) {
          return !value;
        } else {
          return value;
        }
      });
    });
  };

  return (
    <div>
      {boxes.map((b, index) => (
        <Box key={index} isActive={b} toggle={() => toggleBox(index)} />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
