import React, { Component } from 'react';
import TechImage from './git.svg'

class TechGit extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechGitBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechGit');
    e.onmouseover = function() {
      document.getElementById('TechGitBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechGitBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechGit" onMouseOver={this.handleHover}>
        <a href="https://git-scm.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechGitBox" className="TechDescriptionBox"> Git </p>
      </div>
    );
  }
}

export default TechGit;
