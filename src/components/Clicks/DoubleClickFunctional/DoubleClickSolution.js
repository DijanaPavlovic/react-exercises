import React from "react";
import { useClickPreventionOnDoubleClick } from "./useClickPreventionOnDoubleClick";

const DoubleClickSolution = () => {
  const handleClick = () => {
    console.log("Click event!");
  };

  const handleDoubleClick = () => {
    console.log("Double Click event!");
  };

  const [onClick, onDoubleClick] = useClickPreventionOnDoubleClick(
    handleClick,
    handleDoubleClick
  );

  return (
    <button onClick={onClick} onDoubleClick={onDoubleClick}>
      Click me!
    </button>
  );
};

export default DoubleClickSolution;
