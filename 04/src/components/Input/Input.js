import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, placeholder }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} placeholder={placeholder} />
  </>
);

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Your Value",
};

export default Input;
