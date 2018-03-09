import React, { Component } from 'react';
import './Navigation.css';
import logo from '../logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div id="Navigation-wrapper">
        <div id="Navigation-logo" className="Navigation-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div id="Navigation-title" className="Navigation-container">
          <h1>Item 2</h1>
        </div>
        <div id="Navigation-menu" className="Navigation-container">
          <h1>Div Item 1</h1>
          <h1>Div Item 2</h1>
          <h1>Div Item 3</h1>
          <h1>Div Item 4</h1>
        </div>
      </div>
    );
  }
}

export default Navigation;
