import { useState } from "react";
import "./Box.css";

export default function Box() {
  const [isActive, setActive] = useState(false);
  const Select = () => {
    setActive(!isActive);
  };
  return (
    <div
      onClick={Select}
      className="Box"
      style={{ backgroundColor: isActive ? "green" : "aquamarine" }}
    ></div>
  );
}
