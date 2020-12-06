export const CancelablePromise = (promise) => {
  let isCanceled = false;
  const cancel = () => (isCanceled = true);

  const cancelablePromise = new Promise((resolve, reject) => {
    promise.then(
      (data) => (isCanceled ? reject({ isCanceled, data }) : resolve(data)),
      (error) => reject({ isCanceled, error })
    );
  });

  return { promise: cancelablePromise, cancel };
};
