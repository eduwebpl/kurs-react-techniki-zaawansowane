import React from "react";
import styles from "./ItemList.module.scss";
import cx from "classnames";
import withCollapse from "../../hoc/withCollapse";

const items = [`Docs1`, `Docs2`, `Docs3`, `Docs4`, `Docs5`];

const ItemsList = ({ isCollapsed, toggle }) => {
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <div>
      <button className="button is-dark is-large" onClick={toggle}>
        Collapse
      </button>
      <ul className={listClass}>
        {items.map(item => (
          <li className="notification is-primary">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default withCollapse(ItemsList);
