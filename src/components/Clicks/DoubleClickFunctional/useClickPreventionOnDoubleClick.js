import { useCancelablePromises } from "./useCancelablePromises";
import { CancelablePromise } from "../CancelablePromise";

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

export const useClickPreventionOnDoubleClick = (
  handleClick,
  handleDoubleClick
) => {
  const {
    addPendingPromise,
    removePendingPromise,
    clearPendingPromises,
  } = useCancelablePromises();

  const onClick = () => {
    const pendingPromise = CancelablePromise(delay(250));
    addPendingPromise(pendingPromise);

    pendingPromise.promise
      .then(() => {
        removePendingPromise(pendingPromise);
        handleClick();
      })
      .catch((errorInfo) => {
        if (!errorInfo.isCanceled) {
          throw errorInfo.error;
        }
      });
  };

  const onDoubleClick = () => {
    clearPendingPromises();
    handleDoubleClick();
  };

  return [onClick, onDoubleClick];
};
