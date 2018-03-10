import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="App-Navigation"><Navigation /></div>

        <div id="App-wrapper"> {/* Flexboxed Body while maintaining the Navigation and Footer */}
        </div>

        <div id="App-Footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
