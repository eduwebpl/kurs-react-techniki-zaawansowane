import React from "react";
import styles from "./App.module.scss";
import ItemsList from "./components/ItemsList/ItemsList";

function App() {
  return (
    <div className={styles.app}>
      <ItemsList />
    </div>
  );
}

export default App;
