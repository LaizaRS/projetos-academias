import React, { useState } from "react";
import './Switch.css';


const Switch = () => {
  const [ligado, setLigado] = useState(false);

  const handleToggle = () => {
    setLigado(!ligado);
  };

  return (
    <div className={`switch ${ligado ? "ligado" : ""}`} onClick={handleToggle}>
      <div className="slider"></div>
    </div>
  );
};

export default Switch;