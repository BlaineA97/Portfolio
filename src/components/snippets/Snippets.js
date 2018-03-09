import React, { Component } from 'react';
import './Snippets.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

class Snippets extends Component {
  render() {
    return (
      <div className="Snippets-wrapper">
        <Navigation />

        <div id="Snip-button-01">
          <Link to="" className="Snip-button">
            Projects
          </Link>
        </div>
      </div>
    );
  }
}

export default Snippets;
