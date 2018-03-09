import React, { Component } from 'react';
import './Navigation.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div id="Navigation-wrapper">

        <div id="Navigation-logo-container">
          <img src={logo} id="Nav-logo" alt="logo" />
        </div>

        <div id="Navigation-title-container">
          <h1 id="Navigation-title">Blaine Anderson</h1>
        </div>

        <div id="Navigation-menu-container">
          <Link to="/projects" className="Navigation-menu-link">
            Projects
          </Link>
          <Link to="/hobbies" className="Navigation-menu-link">
            <p>Hobbies</p>
          </Link>
          <Link to="/skills" className="Navigation-menu-link">
            <p>Skills</p>
          </Link>
        </div>

      </div>
    );
  }
}

export default Navigation;
