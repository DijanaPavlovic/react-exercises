import React, { Component } from "react";
import { CancelablePromise } from "../CancelablePromise";

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

const PreventClicksOnDoubleClickHOC = (WrappedComponent) => {
  class ComponentWrapper extends Component {
    pendingPromises = [];

    componentWillUnmount() {
      this.clearPendingPromises();
    }

    addPromise = (promise) => {
      this.pendingPromises = [...this.pendingPromises, promise];
    };

    removePromise = (promise) => {
      this.pendingPromises = this.pendingPromises.filter(
        (pendingPromise) => pendingPromise !== promise
      );
    };

    clearPendingPromises = () => {
      this.pendingPromises = this.pendingPromises.map((promise) =>
        promise.cancel()
      );
      this.pendingPromises = [];
    };

    handleSingleClick = () => {
      const waitForClick = CancelablePromise(delay(250));
      this.addPromise(waitForClick);

      return waitForClick.promise
        .then(() => {
          this.handleClick();
          this.removePromise(waitForClick);
        })
        .catch((errorInfo) => {
          if (!errorInfo.isCanceled) {
            throw errorInfo.error;
          }
        });
    };

    handleClick = () => {
      console.log("Single Click!");
    };

    handleDoubleClick = () => {
      this.clearPendingPromises();
      console.log("Double Click!");
    };

    render() {
      return (
        <WrappedComponent
          handleClick={this.handleSingleClick}
          handleDoubleClick={this.handleDoubleClick}
        />
      );
    }
  }

  return ComponentWrapper;
};

export default PreventClicksOnDoubleClickHOC;
