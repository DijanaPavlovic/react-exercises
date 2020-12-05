import React, { useState } from "react";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello World!"), 3000);
  });
}

const FunctionalWithoutCancelablePromise = () => {
  const [state, setState] = useState({ data: "", error: "" });

  const handleClick = () => {
    fetchData()
      .then((data) => {
        setState({ ...state, data });
        console.log(data);
      })
      .catch((error) => setState({ ...state, error }));
  };

  return (
    <>
      {state.error ? (
        <div>Error while fetching data: {state.error}</div>
      ) : (
        <div>
          <p>Data is: {state.data}</p>
          <button onClick={handleClick}>Load Data </button>
        </div>
      )}
    </>
  );
};

export default FunctionalWithoutCancelablePromise;
