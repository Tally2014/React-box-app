import Box from "./Box";
import { useState } from "react";

export default function BoxGrid() {
  const [resetCounter, setResetCounter] = useState(0);

  const handleReset = () => {
    setResetCounter(resetCounter + 1);
  };

  return (
    <div>
      {[...Array(9)].map((_, index) => (
        <Box key={index} resetCounter={resetCounter} />
      ))}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
