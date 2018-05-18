import React, { Component } from 'react';
import TechImage from './css.svg'

class TechCSS extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechCSSBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechCSS');
    e.onmouseover = function() {
      document.getElementById('TechCSSBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechCSSBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechCSS" onMouseOver={this.handleHover}>
        <a href="https://www.w3schools.com/css/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechCSSBox" className="TechDescriptionBox"> CSS3</p>
      </div>
    );
  }
}

export default TechCSS;
