import React, { Component } from 'react';
import './ProjectBody.css';
import Navigation from '../Navigation';
import Footer from '../Footer';

class ProjectBody extends Component {
  render() {
    return (
      <div id="ProjectBody">
        <div id="ProjectBody-Navigation"><Navigation /></div>

        <div id="ProjectBody-wrapper">
        </div>

        <div id="ProjectBody-Footer"><Footer /></div>
      </div>
    );
  }
}

export default ProjectBody;
