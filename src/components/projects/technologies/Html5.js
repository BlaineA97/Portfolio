import React, { Component } from 'react';
import TechImage from './html5.svg'

class TechHtml5 extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechHtml5Box').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechHtml5');
    e.onmouseover = function() {
      document.getElementById('TechHtml5Box').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechHtml5Box').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechHtml5" onMouseOver={this.handleHover}>
        <a href="https://www.w3schools.com/html/html5_intro.asp" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechHtml5Box" className="TechDescriptionBox"> Html 5 </p>
      </div>
    );
  }
}

export default TechHtml5;
