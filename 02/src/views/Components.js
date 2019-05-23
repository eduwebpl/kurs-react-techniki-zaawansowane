import React, { useState } from "react";
import cx from "classnames";
import styles from "./Components.module.scss";

const Components = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className="title is-3">Components</h2>
      {/* {itemsList.map(item => (
        <div key={item.id} className={cx("notification is-info", styles.item)}>
          <button className="delete" onClick={() => removeElement(item.id)} />
          {item.content}
        </div>
      ))} */}
    </div>
  );
};

export default Components;
