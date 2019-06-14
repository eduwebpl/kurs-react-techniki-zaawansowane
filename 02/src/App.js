import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Users from "views/Users.js";
import Tips from "views/Tips.js";
import Patterns from "views/Patterns.js";
import Components from "views/Components.js";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Route path="/" exact component={Users} />
        <Route path="/tips" exact component={Tips} />
        <Route path="/patterns" exact component={Patterns} />
        <Route path="/components" exact component={Components} />
      </div>
    </Router>
  );
}

export default App;
