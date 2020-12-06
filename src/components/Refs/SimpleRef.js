import React, { Component } from "react";

class CustomComponent extends Component {
  apiMethod() {
    console.log("API method on CustomComponent is called.");
  }

  render() {
    return <div />;
  }
}

class SimpleRef extends Component {
  handleClick = () => {
    this.component.apiMethod();
  };

  render() {
    return (
      <>
        <h2>Refs</h2>
        <button onClick={this.handleClick}>Click me</button>
        {/* On mount the ref callback will receive the DOM element or the mounted instance of the component. */}
        <CustomComponent ref={(r) => (this.component = r)} />
      </>
    );
  }
}

export default SimpleRef;
