import React from 'react';

const Navigation = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <span className="navbar-brand">Connecc</span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse signup" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" id="nav-home">
          <a className="nav-link" href="index.html">
            Home
          </a>
        </li>

        <li className="nav-item" id="nav-about">
          <a className="nav-link" href="about.html">
            About
          </a>
        </li>
        <li className="nav-item" id="nav-signup">
          <a className="nav-link" href="signup.html">
            Sign up
          </a>
        </li>
        <li className="nav-item" id="nav-login">
          <a className="nav-link" href="signin.html">
            Sign in
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
