import React, { Component } from 'react';
import './HealthBar.css';
import { Link } from 'react-router-dom';

class HealthBar extends Component {

  render() {
    return (
      <div id="HealthBar">
        <div id="HealthBar-bar">
          <div id="HealthBar-hp"></div>
        </div>
      </div>
    );
  }
}

export default HealthBar;
