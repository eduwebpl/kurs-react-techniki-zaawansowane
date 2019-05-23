import React, { useEffect, useState } from "react";
import cx from "classnames";
import axios from "axios";
import styles from "./Components.module.scss";

const Components = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://www.mocky.io/v2/5ce7075e3300001ab373199e?mocky-delay=1000ms"
      );

      setItemsList(response.data);
    };

    fetchData();
  });

  return (
    <div className={styles.wrapper}>
      <h2 className="title is-3">Components</h2>
      {itemsList.length ? (
        itemsList.map(item => (
          <div
            key={item.id}
            className={cx("notification is-info", styles.item)}
          >
            <button className="delete" />
            {item.content}
          </div>
        ))
      ) : (
          <button className="button is-loading is-info is-large" />
        )}
    </div>
  );
};

export default Components;
