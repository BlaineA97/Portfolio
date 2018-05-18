import React, { Component } from 'react';
import TechImage from './yarn.svg'

class TechYarn extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechYarnBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechYarn');
    e.onmouseover = function() {
      document.getElementById('TechYarnBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechYarnBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechYarn" onMouseOver={this.handleHover}>
        <a href="https://yarnpkg.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechYarnBox" className="TechDescriptionBox"> Yarn </p>
      </div>
    );
  }
}

export default TechYarn;
