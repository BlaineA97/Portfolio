import React, { Component } from 'react';
import TechImage from './javascript.svg'

class TechJavaScript extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechJavaScriptBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechJavaScript');
    e.onmouseover = function() {
      document.getElementById('TechJavaScriptBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechJavaScriptBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechJavaScript" onMouseOver={this.handleHover}>
        <a href="https://www.javascript.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechJavaScriptBox" className="TechDescriptionBox"> JavaScript </p>
      </div>
    );
  }
}

export default TechJavaScript;
