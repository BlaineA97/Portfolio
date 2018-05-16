import React, { Component } from 'react';
import './ProjectList.css';

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
            <p className="ProjectGithub"><a href="https://github.com/BlaineA97/Portfolio">Project Github</a></p>
            <p className="ProjectUrl">You're Here!</p>
          </div>
          <div className="ListProjectImage">
            <img src="" alt="IMAGE"/>
          </div>
        </div>

        <div className="ListProject">
          <p className="ProjectName">ProjectName</p>
          <p className="ProjectGithub"><a href="">Project Github</a></p>
          <p className="ProjectUrl">Project Url</p>
        </div>
        <div className="ListProject">
          <p className="ProjectName">ProjectName</p>
          <p className="ProjectGithub"><a href="">Project Github</a></p>
          <p className="ProjectUrl">Project Url</p>
        </div>
        <div className="ListProject">
          <p className="ProjectName">ProjectName</p>
          <p className="ProjectGithub"><a href="">Project Github</a></p>
          <p className="ProjectUrl">Project Url</p>
        </div>
      </div>
    );
  }
}

export default ProjectList;
