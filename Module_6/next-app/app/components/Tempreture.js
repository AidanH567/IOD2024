"use client";
import React, { useState } from "react";

export function Temperature({ temp, units = "C" }) {
  const [currentUnits, setCurrentUnits] = useState(units);
  const displayTemp = currentUnits === "C" ? temp : (temp * 9) / 5 + 32;

  const toggleUnits = () => {
    setCurrentUnits((prevUnits) => (prevUnits === "C" ? "F" : "C"));
  };

  return (
    <div className="Temperature">
      <span>
        <strong>
          {parseInt(displayTemp)}&deg;{currentUnits}
        </strong>
      </span>
      <button onClick={toggleUnits}>
        Switch to {currentUnits === "C" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}
