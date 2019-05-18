import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import Authorisation from "providers/Authorisation";
import Collapse from "providers/Collapse";

const Columns = ({ isCollapsed, isAuthorised, toggleAuth, toggle }) => {
  const rowClass = isCollapsed =>
    cx("columns", {
      [styles.isCollapsed]: isCollapsed,
    });

  return (
    <Collapse
      render={({ isCollapsed, toggle }) => (
        <Authorisation
          render={({ isAuthorised, toggleAuth }) => (
            <div className="columns">
              <div className="column">
                <p>Authorised: {isAuthorised.toString()}</p>
                <button
                  className={cx("button", "is-dark", "is-large", [
                    styles.button,
                  ])}
                  onClick={toggle}
                >
                  Show / Collapse
                </button>
                <button
                  className={cx("button", "is-warning", "is-large", [
                    styles.button,
                  ])}
                  onClick={toggleAuth}
                >
                  {isAuthorised ? "logout" : "login"}
                </button>
                {isAuthorised ? (
                  <div className={rowClass(isCollapsed)}>
                    <div className="column">
                      <div className="notification is-primary">
                        First column
                      </div>
                    </div>
                    <div className="column">
                      <div className="notification is-primary">
                        Second column
                      </div>
                    </div>
                    <div className="column">
                      <div className="notification is-primary">
                        Third column
                      </div>
                    </div>
                    <div className="column">
                      <div className="notification is-primary">
                        Fourth column
                      </div>
                    </div>
                  </div>
                ) : (
                  <h2 class="title is-2">
                    You must sign in to see this content
                  </h2>
                )}
              </div>
            </div>
          )}
        />
      )}
    />
  );
};

export default Columns;
