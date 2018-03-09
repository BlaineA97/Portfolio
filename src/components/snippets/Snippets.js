import React, { Component } from 'react';
import './Snippets.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

class Snippets extends Component {
  render() {
    return (
      <div id="Snippets">
        <div id="Snippets-Navigation">
          <Navigation />
        </div>
        <div id="Snippets-wrapper">

          <div id="Snip-buttons-container" className="Snippet-container">
            <Link to="" id="Snip-button-01" className="Snip-button">
              Hover Here!
            </Link>
            <Link to="" id="Snip-button-02" className="Snip-button">
              Hover Here!
            </Link>
            <Link to="" id="Snip-button-03" className="Snip-button">
              Hover Here!
            </Link>
            <Link to="" id="Snip-button-04" className="Snip-button">
              <div id="Snip-button-04-border"></div>
              <p id="Snip-button-04-text">Hover Here!</p>
            </Link>
            <Link to="" id="Snip-button-05" className="Snip-button">
              Hover Here!
            </Link>

          </div>



          <div id="Snip-testing-container">
            <Link to="" id="Snip-testing-button">
              Test Button
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Snippets;
