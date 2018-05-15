import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import App from './App';
import Home from './components/home/Home';
import Snippets from './components/snippets/Snippets';
import ProjectBody from './components/projects/ProjectBody';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/snippets" component={Snippets} />
            <Route exact path="/projects" component={ProjectBody} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
