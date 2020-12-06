// Refs as attributes are not passed down through from parent to child.
// Solution - innerRef
import React, { Component } from "react";

class CustomComponent extends Component {
  innerRef = this.props.innerRef || (() => null);

  componentDidMount = () => {
    this.innerRef(this);
  };

  componentWillUnmount = () => {
    this.innerRef(null);
  };

  apiMethod() {
    console.log("Api method is called.");
  }

  render() {
    return <div />;
  }
}

const StyledCustomComponent = (props) => <CustomComponent {...props} />;

const EnhancedCustomComponent = (props) => <StyledCustomComponent {...props} />;

class BetterRef extends Component {
  handleClick = () => this.component.apiMethod();

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>call api method!</button>
        <EnhancedCustomComponent innerRef={(r) => (this.component = r)} />
      </div>
    );
  }
}

export default BetterRef;
