import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [isErrorVisible, setErrorVisibility] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);

    const regex = /[0-9]+/;

    if (regex.test(value)) {
      setErrorVisibility(true);
    } else {
      setErrorVisibility(false);
    }
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
      {isErrorVisible && (
        <p>
          <strong>Error: </strong>You can't pass digits into this field
        </p>
      )}
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "Your Value",
};

export default Input;
