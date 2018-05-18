import React, { Component } from 'react';
import TechImage from './sass.svg'

class TechSass extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechSassBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechSass');
    e.onmouseover = function() {
      document.getElementById('TechSassBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechSassBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechSass" onMouseOver={this.handleHover}>
        <a href="https://sass-lang.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechSassBox" className="TechDescriptionBox"> Sass </p>
      </div>
    );
  }
}

export default TechSass;
