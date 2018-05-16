import React, { Component } from 'react';
import './ProjectList.css';
import PortfolioScreenShot from '../../images/PortfolioScreenShot.png'

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: null
    }
  }

  render() {
    return (
      <div id="ProjectList">

        <div className="ListProject">
          <div className="ListProjectInformation">
            <p className="ProjectName">My Portfolio</p>
            <p className="ProjectGithub">
              <a href="https://github.com/BlaineA97/Portfolio">
                Project Github
              </a>
            </p>
            <p className="ProjectUrl">You're Here!</p>
            <p className="ProjectDescription">
              A website designed to show you all the wonderful things I spend my free time doing :)
            </p>
          </div>
          <div className="ListProjectImage">
            <img src={PortfolioScreenShot}
              alt="PortfolioImage"
              className="ListImages"/>
          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
