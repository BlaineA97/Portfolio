import React, { Component } from 'react';
import TechImage from './mysql.svg'

class TechMySQL extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechMySQLBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechMySQL');
    e.onmouseover = function() {
      document.getElementById('TechMySQLBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechMySQLBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechMySQL" onMouseOver={this.handleHover}>
        <a href="https://www.mysql.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechMySQLBox" className="TechDescriptionBox"> MySQL </p>
      </div>
    );
  }
}

export default TechMySQL;
