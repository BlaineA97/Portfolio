import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;