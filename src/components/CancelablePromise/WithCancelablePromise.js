import React, { Component } from "react";
import CancelablePromise from "./CancelablePromise";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello World!"), 3000);
  });
}

class WithCancelablePromise extends Component {
  state = {
    data: undefined,
    error: undefined,
  };

  pendingPromises = [];

  componentWillUnmount() {
    this.pendingPromises.forEach((promise) => promise.cancel());
  }

  appendPendingPromise(promise) {
    this.pendingPromises = [...this.pendingPromises, promise];
  }

  removePendingPromise(promise) {
    this.pendingPromises = this.pendingPromises.filter(
      (pendingPromise) => pendingPromise !== promise
    );
  }

  handleClick = () => {
    const wrappedPromise = CancelablePromise(fetchData());
    this.appendPendingPromise(wrappedPromise);

    wrappedPromise.promise
      .then((data) => {
        this.setState({ data });
        this.removePendingPromise(wrappedPromise);
      })
      .catch((errorInfo) => {
        if (!errorInfo.isCanceled) {
          this.setState({ error: errorInfo.error });
          this.removePendingPromise(wrappedPromise);
        }
      });
  };

  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>Error while fetching data: {error}</div>;
    }

    return (
      <div>
        <p>Data is: {data}</p>
        <button onClick={this.handleClick}>Load Data </button>
      </div>
    );
  }
}

export default WithCancelablePromise;
