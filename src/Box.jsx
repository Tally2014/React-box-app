import { useEffect, useState } from "react";
import "./Box.css";

export default function Box({ resetCounter }) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [resetCounter]);

  const handleSelect = () => {
    setActive(!isActive);
  };

  return (
    <div
      onClick={handleSelect}
      className="Box"
      style={{ backgroundColor: isActive ? "green" : "aquamarine" }}
    ></div>
  );
}
