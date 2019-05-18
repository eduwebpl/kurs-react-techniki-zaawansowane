import React from "react";

class Collapse extends React.Component {
  state = {
    isCollapsed: true,
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const renderProps = {
      isCollapsed: this.state.isCollapsed,
      toggle: this.toggle,
    };

    return this.props.render(renderProps);
  }
}

export default Collapse;
