import React, { Component } from 'react';
import TechImage from './slack.svg'

class TechSlack extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechSlackBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechSlack');
    e.onmouseover = function() {
      document.getElementById('TechSlackBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechSlackBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechSlack" onMouseOver={this.handleHover}>
        <a href="https://slack.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechSlackBox" className="TechDescriptionBox"> Slack </p>
      </div>
    );
  }
}

export default TechSlack;
