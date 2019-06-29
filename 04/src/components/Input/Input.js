import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    const regex = /[0-9]+/;

    setInputValue(value.replace(regex, ""));
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Your Value",
};

export default Input;
