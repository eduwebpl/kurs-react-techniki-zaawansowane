import React from "react";

class Authorisation extends React.Component {
  state = {
    isAuthorised: false,
  };

  toggleAuth = () => {
    this.setState(prevState => ({
      isAuthorised: !prevState.isAuthorised,
    }));
  };

  render() {
    const renderProps = {
      isAuthorised: this.state.isAuthorised,
      toggleAuth: this.toggleAuth,
    };

    return this.props.render(renderProps);
  }
}

export default Authorisation;
