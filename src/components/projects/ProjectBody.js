import React, { Component } from 'react';
import './ProjectBody.css';
import Navigation from '../Navigation';
import ProjectList from './ProjectList';
import Footer from '../Footer';

class ProjectBody extends Component {
  render() {
    return (
      <div id="ProjectBody" id="ProjectBody-background">
        <div id="ProjectBody-Navigation"><Navigation /></div>

        <div id="ProjectBody-wrapper">
          <ProjectList />
        </div>

        <div id="ProjectBody-Footer"><Footer /></div>
      </div>
    );
  }
}

export default ProjectBody;
