import React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder }) => <input placeholder={placeholder} />;

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Your Value",
};

export default Input;
