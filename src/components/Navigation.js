import React, { Component } from 'react';
import './Navigation.css';
import logo from '../logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div id="Navigation-wrapper">
        <div id="Navigation-logo" className="Navigation-container">
          <img src={logo} id="Nav-logo" alt="logo" />
        </div>
        <div id="Navigation-title" className="Navigation-container">
          <h1>Blaine Anderson</h1>
        </div>
        <div id="Navigation-menu" className="Navigation-container">
          <h1>Projects</h1>
          <h1>Hobbies</h1>
          <h1>Skills</h1>
        </div>
      </div>
    );
  }
}

export default Navigation;
