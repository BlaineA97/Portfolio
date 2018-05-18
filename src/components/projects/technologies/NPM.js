import React, { Component } from 'react';
import TechImage from './npm.svg'

class TechNPM extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechNPMBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechNPM');
    e.onmouseover = function() {
      document.getElementById('TechNPMBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechNPMBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechNPM" onMouseOver={this.handleHover}>
        <a href="https://www.npmjs.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechNPMBox" className="TechDescriptionBox"> NPM </p>
      </div>
    );
  }
}

export default TechNPM;
