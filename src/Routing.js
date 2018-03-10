import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Snippets from './components/snippets/Snippets';
import ProjectBody from './components/projects/ProjectBody';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/snippets" component={Snippets} />
            <Route exact path="/projects" component={ProjectBody} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
