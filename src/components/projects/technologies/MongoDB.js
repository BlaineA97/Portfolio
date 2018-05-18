import React, { Component } from 'react';
import TechImage from './mongodb.svg'

class TechMongoDB extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechMongoDBBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechMongoDB');
    e.onmouseover = function() {
      document.getElementById('TechMongoDBBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechMongoDBBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechMongoDB" onMouseOver={this.handleHover}>
        <a href="https://www.mongodb.com/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechMongoDBBox" className="TechDescriptionBox"> MongoDB </p>
      </div>
    );
  }
}

export default TechMongoDB;
