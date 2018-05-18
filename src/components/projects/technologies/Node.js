import React, { Component } from 'react';
import TechImage from './node.svg'

class TechNode extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechNodeBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechNode');
    e.onmouseover = function() {
      document.getElementById('TechNodeBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechNodeBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechNode" onMouseOver={this.handleHover}>
        <a href="https://nodejs.org/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechNodeBox" className="TechDescriptionBox"> Node </p>
      </div>
    );
  }
}

export default TechNode;
