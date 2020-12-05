const CancelablePromise = (promise) => {
  let isCanceled = false;

  const cancelablePromise = new Promise((resolve, reject) => {
    promise.then(
      (data) => (isCanceled ? reject({ isCanceled, data }) : resolve(data)),
      (error) => reject({ isCanceled, error })
    );
  });

  function cancel() {
    isCanceled = true;
  }

  return { promise: cancelablePromise, cancel };
};

export default CancelablePromise;
