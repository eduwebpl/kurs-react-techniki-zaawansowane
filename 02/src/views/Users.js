import React, { useState, useRef, useEffect } from "react";
import { useDetectOutsideClick } from "hooks/useDetectOutsideClick";
import cx from "classnames";

const Users = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const modalRef = useRef(null);

  useDetectOutsideClick(modalRef, setModalVisibility);

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
        <div ref={modalRef} className="modal-content">
          <article className="message">
            <div className="message-header">
              <p>Hello World</p>
              <button
                className="delete"
                aria-label="delete"
                onClick={() => setModalVisibility(false)}
              />
            </div>
            <div className="message-body">
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
