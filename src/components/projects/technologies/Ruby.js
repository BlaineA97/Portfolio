import React, { Component } from 'react';
import TechImage from './ruby.svg'

class TechRuby extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechRubyBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechRuby');
    e.onmouseover = function() {
      document.getElementById('TechRubyBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechRubyBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechRuby" onMouseOver={this.handleHover}>
        <a href="https://www.ruby-lang.org/en/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechRubyBox" className="TechDescriptionBox"> Ruby </p>
      </div>
    );
  }
}

export default TechRuby;
