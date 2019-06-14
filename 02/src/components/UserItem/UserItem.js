import React from "react";
import styles from "./UserItem.module.scss";
import cx from "classnames";

const UserItem = ({ user }) => (
  <li key={user.id}>
    <p
      className={cx(styles.userStatus, {
        [styles.isActive]: true,
      })}
    >
      {user.name}
    </p>
  </li>
);

export default UserItem;
