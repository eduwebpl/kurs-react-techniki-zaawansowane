import React from "react";
import cx from "classnames";
import Downshift from "downshift";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];

const Patterns = () => (
  <Downshift>
    {({
      isOpen,
      inputValue,
      getInputProps,
      getMenuProps,
      getItemProps,
      selectedItem,
    }) => (
      <div className={cx("dropdown", { "is-active": isOpen })}>
        <input
          className="input"
          type="text"
          placeholder="Text input"
          {...getInputProps()}
        />
        <div className="dropdown-menu">
          <div className="dropdown-content" {...getMenuProps()}>
            {items
              .filter(item => item.value.includes(inputValue))
              .map(({ value }, index) => (
                <button
                  className={cx("dropdown-item", "button", "is-white", {
                    "is-active": value === selectedItem,
                  })}
                  key={value}
                  {...getItemProps({
                    key: value,
                    index,
                    item: value,
                  })}
                >
                  {value}
                </button>
              ))}
          </div>
        </div>
      </div>
    )}
  </Downshift>
);

export default Patterns;
