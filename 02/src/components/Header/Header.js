import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">Magia Reacta</h1>
        <h2 className="subtitle">kurs zaawansowany</h2>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">Docs</NavLink>
            </li>
            <li>
              <NavLink to="/tips">Tips</NavLink>
            </li>
            <li>
              <NavLink to="/patterns">Patterns</NavLink>
            </li>
            <li>
              <NavLink to="/components">Components</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
