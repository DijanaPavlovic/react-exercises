import React, { useEffect, useState, useRef } from "react";
import CancelablePromise from "./CancelablePromise";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello World!"), 3000);
  });
}

const FunctionalCancelablePromise = () => {
  const [state, setState] = useState({ data: "", error: "" });

  const pendingPromises = useRef();

  const appendPendingPromise = (promise) => {
    pendingPromises.current = [...pendingPromises.current, promise];
  };

  const removePendingPromise = (promise) => {
    pendingPromises.current = pendingPromises.current.filter(
      (pendingPromise) => pendingPromise !== promise
    );
  };

  useEffect(() => {
    pendingPromises.current = [];
    return () => pendingPromises.current.forEach((promise) => promise.cancel());
  }, []);

  const handleClick = () => {
    const wrappedPromise = CancelablePromise(fetchData());
    appendPendingPromise(wrappedPromise);

    wrappedPromise.promise
      .then((data) => {
        setState({ data });
        removePendingPromise(wrappedPromise);
      })
      .catch((errorInfo) => {
        if (!errorInfo.isCanceled) {
          setState({ error: errorInfo.error });
          removePendingPromise(wrappedPromise);
        }
      });
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

export default FunctionalCancelablePromise;
