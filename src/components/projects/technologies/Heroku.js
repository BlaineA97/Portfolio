import React, { Component } from 'react';
import TechImage from './heroku.svg'

class TechHeroku extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechHerokuBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechHeroku');
    e.onmouseover = function() {
      document.getElementById('TechHerokuBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechHerokuBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechHeroku" onMouseOver={this.handleHover}>
        <a href="https://www.heroku.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechHerokuBox" className="TechDescriptionBox"> Heroku </p>
      </div>
    );
  }
}

export default TechHeroku;
