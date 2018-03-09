import React, { Component } from 'react';
import './Navigation.css';
import logo from '../logo.svg';

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
          <h1 className="Navigation-menu-link">Projects</h1>
          <h1 className="Navigation-menu-link">Hobbies</h1>
          <h1 className="Navigation-menu-link">Skills</h1>
        </div>
      </div>
    );
  }
}

export default Navigation;
