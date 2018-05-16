import React, { Component } from 'react';
import TechImageCSS from './css.svg'

class TechCSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: null
    }
    this.handleHover = this.handleHover.bind(this)
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
          <img src={TechImageCSS} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechCSSBox"> YO YO YO</p>
      </div>
    );
  }
}

export default TechCSS;
