import React, { Component } from 'react';
import TechImage from './react.svg'

class TechReact extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechReactBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechReact');
    e.onmouseover = function() {
      document.getElementById('TechReactBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechReactBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechReact" onMouseOver={this.handleHover}>
        <a href="https://reactjs.org/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechReactBox" className="TechDescriptionBox"> ReactJS </p>
      </div>
    );
  }
}

export default TechReact;
