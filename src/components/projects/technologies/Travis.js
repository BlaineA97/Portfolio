import React, { Component } from 'react';
import TechImage from './travis.svg'

class TechTravis extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechTravisBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechTravis');
    e.onmouseover = function() {
      document.getElementById('TechTravisBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechTravisBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechTravis" onMouseOver={this.handleHover}>
        <a href="https://travis-ci.org/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechTravisBox" className="TechDescriptionBox"> Travis CI </p>
      </div>
    );
  }
}

export default TechTravis;
