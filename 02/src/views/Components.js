import React, { useState } from "react";
import cx from "classnames";
import styles from "./Components.module.scss";

const Components = () => {
  const [inputContent, setInputContent] = useState("Write your task");
  const [itemsList, setItemsList] = useState([
    {
      id: "1",
      content: "Hello, please add your first note",
    },
  ]);

  const handleInputChange = e => {
    setInputContent(e.target.value);
  };

  const addNewItem = () => {
    const newElement = {
      content: inputContent,
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
      <h2 className="title is-3">Components</h2>
      <input
        autoComplete="off"
        class="input is-large"
        name="name"
        type="text"
        value={inputContent}
        onChange={handleInputChange}
      />
      <button
        onClick={addNewItem}
        className={cx("button is-warning is-large", styles.button)}
      >
        Add item
      </button>
      {itemsList.map(item => (
        <div key={item.id} className={cx("notification is-info", styles.item)}>
          <button className="delete" onClick={() => removeElement(item.id)} />
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Components;
