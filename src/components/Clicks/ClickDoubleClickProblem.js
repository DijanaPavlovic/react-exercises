import React from "react";

// If Toogle Device Toolbar in DevTools is ON, double clicks are never fired.
const ClickDoubleClickProblem = () => {
  const handleClick = () => {
    console.log("Click event!");
  };

  const handleDoubleClick = () => {
    console.log("Double Click event!");
  };

  return (
    <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
      Click me!
    </button>
  );
};

export default ClickDoubleClickProblem;
