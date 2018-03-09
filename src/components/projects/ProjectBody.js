import React, { Component } from 'react';
import './ProjectBody.css';

class ProjectBody extends Component {
  render() {
    return (
      <div id="ProjectBody">
        <div id="ProjectBody-Navigation">
          <Navigation />
        </div>

        <div id="ProjectBody-wrapper">
          {/* Actual Body of Page */}
        </div>
      </div>
    );
  }
}

export default ProjectBody;
