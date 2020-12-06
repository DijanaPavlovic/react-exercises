import { useRef } from "react";

export const useCancelablePromises = () => {
  let pendingPromises = useRef([]);

  const addPendingPromise = (promise) => {
    pendingPromises.current = [...pendingPromises.current, promise];
  };

  const removePendingPromise = (promise) => {
    pendingPromises.current = pendingPromises.current.filter(
      (pendingPromise) => pendingPromise !== promise
    );
  };

  const clearPendingPromises = () => {
    pendingPromises = pendingPromises.current.map((promise) =>
      promise.cancel()
    );
    pendingPromises.current = [];
  };

  return { addPendingPromise, removePendingPromise, clearPendingPromises };
};
