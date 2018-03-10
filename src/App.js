import React, { Component } from 'react';
import TVImg from './images/tv-1.png';
import MacImg from './images/mac-1.png';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="App-Navigation"><Navigation /></div>

        <div id="App-wrapper"> {/* Flexboxed Body while maintaining the Navigation and Footer */}

          <div id="App-screen-container">
            <img src={MacImg} id="App-screen-img" alt="Laptop" />
          </div>

        </div>

        <div id="App-Footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
