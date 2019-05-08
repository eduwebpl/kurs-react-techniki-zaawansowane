import React, { Component } from "react";
import styles from "./ItemList.module.scss";
import cx from "classnames";

const items = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
];

class ItemsList extends Component {
  state = {
    isCollapsed: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const listClass = cx(styles.list, {
      [styles.isCollapsed]: this.state.isCollapsed,
    });

    return (
      <div>
        <button className="button is-dark is-large" onClick={this.toggle}>
          Collapse
        </button>
        <ul className={listClass}>
          {items.map(item => (
            <li className="notification is-primary">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
