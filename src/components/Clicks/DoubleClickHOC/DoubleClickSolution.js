/* Using HOC is not the best solution!
 * Avoid this solution!
 *
 *
 *
 */
import React from "react";
import PreventClicksOnDoubleClickHOC from "./PreventClicksOnDoubleClickHOC";

const DoubleClick = ({ handleClick, handleDoubleClick }) => (
  <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
    Click me!
  </button>
);

const DoubleClickSolution = PreventClicksOnDoubleClickHOC(DoubleClick);

export default DoubleClickSolution;
