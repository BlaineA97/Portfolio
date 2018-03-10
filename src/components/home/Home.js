import React, { Component } from 'react';
import TVImg from '../../images/tv-1.png';
import MacImg from '../../images/mac-1.png';
import './Home.css';
import Navigation from '../Navigation';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id="Home-Navigation"><Navigation /></div>

        <div id="Home-wrapper"> {/* Flexboxed Body while maintaining the Navigation and Footer */}

          <div id="Home-screen-container">
            <img src={MacImg} id="Home-screen-img" alt="Laptop" />
          </div>
          <div id="Home-screen-interior">
            <h1 id="Home-screen-title-backdrop">-</h1>
            <h1 id="Home-screen-title-1">Blaine Anderson</h1>
            <h4 id="Home-screen-title-2">Software | Web | App Developer</h4>
            {/* <img src={MacImg} id="Home-screen-img-2" alt="Laptop" /> */}
          </div>

        </div>

        <div id="Home-Footer"><Footer /></div>
      </div>
    );
  }
}

export default Home;
