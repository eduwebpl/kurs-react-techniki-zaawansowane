import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Users from "views/Users.js";
import Contact from "views/Contact.js";
import styles from "./App.module.scss";
import {LangContext} from './context';

class App extends Component {
  setLanguage = (lang) => {
    this.setState({
      currentLanguage: lang
    })
  }
  
  state = {
    currentLanguage: 'en',
    setLanguage: this.setLanguage,
  }
  
  render() { 
    return (
      <Router>
        <LangContext.Provider value={this.state}>
        <Header />
        <div className={styles.app}>
          <Route path="/" exact component={Users} />
          <Route path="/contact" exact component={Contact} />
        </div>
        </LangContext.Provider>
      </Router>
    );  
  }
}

export default App;
