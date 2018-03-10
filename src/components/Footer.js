import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  openLinkReactJS() {
    window.open("https://reactjs.org/", '_blank');
  }

  openLinkBlaine() {
    window.open("https://github.com/BlaineA97", '_blank');
  }

  render() {
    return (
      <div id="Footer-wrapper">

        <div id="Footer-container">
          <div id="Footer-center">
            <p className="Footer-text">© 2018 BlaineAndersonDev</p>
            <p className="Footer-text-link" onClick={() => this.openLinkBlaine()}>Built by Blaine Anderson</p>
            <p className="Footer-text-link" onClick={() => this.openLinkReactJS()}>Powered with ReactJS</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
