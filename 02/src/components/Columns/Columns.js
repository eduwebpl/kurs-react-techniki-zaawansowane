import React from "react";
import cx from "classnames";
import { compose } from "recompose";
import styles from "./Columns.module.scss";

const Columns = ({ isCollapsed, isAuthorised, toggleAuth, toggle }) => {
  const rowClass = cx("columns", {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <div className="columns">
      <div className="column">
        <p>Authorised: {isAuthorised.toString()}</p>
        <button
          className={cx("button", "is-dark", "is-large", [styles.button])}
          onClick={toggle}
        >
          Show / Collapse
        </button>
        <button
          className={cx("button", "is-warning", "is-large", [styles.button])}
          onClick={toggleAuth}
        >
          {isAuthorised ? "logout" : "login"}
        </button>
        {isAuthorised ? (
          <div className={rowClass}>
            <div className="column">
              <div className="notification is-primary">First column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Second column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Third column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Fourth column</div>
            </div>
          </div>
        ) : (
          <h2 class="title is-2">You must sign in to see this content</h2>
        )}
      </div>
    </div>
  );
};

export default Columns;
