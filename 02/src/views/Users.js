import React, { useState } from "react";
import cx from "classnames";

const Users = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div>
      <h2 className="title is-3">Users</h2>
      <button
        className="button is-primary"
        onClick={() => setModalVisibility(true)}
      >
        Open modal
      </button>
      <div className={cx("modal", { "is-active": isModalVisible })}>
        <div className="modal-background" />
        <div className="modal-content">
          <article class="message">
            <div class="message-header">
              <p>Hello World</p>
              <button
                class="delete"
                aria-label="delete"
                onClick={() => setModalVisibility(false)}
              />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
              porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
            </div>
          </article>
        </div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    </div>
  );
};

export default Users;
