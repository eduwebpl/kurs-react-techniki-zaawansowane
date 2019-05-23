import React, { useState, useReducer } from "react";
import cx from "classnames";
import styles from "./Components.module.scss";

const Components = () => {
  const [inputsContent, setInputContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      searchInputContent: "",
      itemInputContent: "",
    }
  );

  const [itemsList, setItemsList] = useState([
    {
      id: "1",
      content: "Hello, please add your first note",
    },
  ]);

  const handleInputChange = e => {
    setInputContent({
      [e.target.name]: e.target.value,
    });
  };

  const addNewItem = () => {
    const newElement = {
      content: inputsContent.itemInputContent,
      id: itemsList.length + 1,
    };

    setItemsList([...itemsList, newElement]);
  };

  const removeElement = id => {
    const newItemsList = itemsList.filter(item => item.id !== id);

    setItemsList(newItemsList);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="search">Search items by content</label>
      <input
        autoComplete="off"
        className="input is-large"
        name="searchInputContent"
        id="search"
        type="text"
        placeholder="Search item"
        value={inputsContent.searchInputContent}
        onChange={handleInputChange}
      />
      <hr />
      <input
        autoComplete="off"
        className="input is-large"
        name="itemInputContent"
        type="text"
        placeholder="Create new item"
        value={inputsContent.itemInputContent}
        onChange={handleInputChange}
      />
      <button
        onClick={addNewItem}
        className={cx("button is-warning is-large", styles.button)}
      >
        Add item
      </button>
      {itemsList
        .filter(item =>
          item.content
            .toLowerCase()
            .includes(inputsContent.searchInputContent.toLowerCase())
        )
        .map(item => (
          <div
            key={item.id}
            className={cx("notification is-info", styles.item)}
          >
            <button className="delete" onClick={() => removeElement(item.id)} />
            {item.content}
          </div>
        ))}
    </div>
  );
};

export default Components;
