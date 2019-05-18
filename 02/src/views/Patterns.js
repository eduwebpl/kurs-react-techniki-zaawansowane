import React from "react";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];

const Patterns = () => (
  <div className="dropdown is-active">
    <input className="input" type="text" placeholder="Text input" />
    <div className="dropdown-menu">
      <div className="dropdown-content">
        {items.map(({ value }) => (
          <button className="dropdown-item button is-white" key={value}>
            {value}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Patterns;
