import React, { Component } from 'react';
import './Navigation.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  redirectRPG() {
    window.open("https://serene-inlet-45614.herokuapp.com/","_self")
  }

  render() {
    return (
      <div id="Navigation-wrapper">

        <div id="Navigation-logo-container">
          <Link to="/">
            <img src={logo} id="Nav-logo" alt="logo" />
          </Link>
        </div>

        <div id="Navigation-title-container">
          <h1 id="Navigation-title-1">Blaine Anderson</h1>
          <h4 id="Navigation-title-2">Software | Web | App Developer</h4>
        </div>

        <div id="Navigation-menu-container">
          <Link to="/projects" className="Navigation-menu-link">
            Projects
          </Link>
          <Link to="" className="Navigation-menu-link" onClick={this.redirectRPG}>
            <p>Rpg</p>
          </Link>
          <Link to="/hobbies" className="Navigation-menu-link">
            <p>Hobbies</p>
          </Link>
          <Link to="/skills" className="Navigation-menu-link">
            <p>Skills</p>
          </Link>
          <Link to="/snippets" className="Navigation-menu-link">
            <p>Snippets</p>
          </Link>
        </div>

      </div>
    );
  }
}

export default Navigation;
