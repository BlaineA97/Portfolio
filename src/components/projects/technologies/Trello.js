import React, { Component } from 'react';
import TechImage from './trello.svg'

class TechTrello extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechTrelloBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechTrello');
    e.onmouseover = function() {
      document.getElementById('TechTrelloBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechTrelloBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechTrello" onMouseOver={this.handleHover}>
        <a href="https://trello.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechTrelloBox" className="TechDescriptionBox"> Trello </p>
      </div>
    );
  }
}

export default TechTrello;
