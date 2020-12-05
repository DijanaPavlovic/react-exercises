import React, { Component } from "react";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello World!"), 3000);
  });
}

class WithoutCancelablePromise extends Component {
  state = {
    data: undefined,
    error: undefined,
  };

  handleClick = () => {
    fetchData()
      .then((data) => {
        this.setState({ data });
        console.log(data);
      })
      .catch((error) => this.setState({ error }));
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

export default WithoutCancelablePromise;
