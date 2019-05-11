import React from "react";

const withCollapse = WrappedComponent => {
  return class WithCollapse extends React.Component {
    state = {
      isCollapsed: true,
    };

    toggle = () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed,
      }));
    };

    render() {
      const { isCollapsed } = this.state;

      return (
        <WrappedComponent
          isCollapsed={isCollapsed}
          toggle={this.toggle}
          {...this.props}
        />
      );
    }
  };
};

export default withCollapse;
