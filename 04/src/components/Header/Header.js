import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from 'context';

const Header = () => {
  const context = useContext(LangContext);
  
  return (
  <section className="hero is-primary">
    <div className="hero-head">
      <nav className="navbar">
        <div className="navbar-end">
            <button onClick={() => context.setLanguage('pl')} className="button is-medium is-primary">PL</button>
          <button onClick={() => context.setLanguage('en')} className="button is-medium is-primary">EN</button>  
        </div>
        <p>Current language: {context.currentLanguage}</p>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">The magic of React</h1>
        <h2 className="subtitle">advanced course</h2>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">Users</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
) 
};

export default Header;
