import React, { Component } from 'react';
import TechImage from './rails.svg'

class TechRails extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechRailsBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechRails');
    e.onmouseover = function() {
      document.getElementById('TechRailsBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechRailsBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechRails" onMouseOver={this.handleHover}>
        <a href="http://rubyonrails.org/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechRailsBox" className="TechDescriptionBox"> Ruby on Rails </p>
      </div>
    );
  }
}

export default TechRails;
