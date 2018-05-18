import React, { Component } from 'react';
import TechImage from './postgresql.svg'

class TechPostgresql extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    document.getElementById('TechPostgresqlBox').style.display = 'none';
  }

  handleHover() {
    const e = document.getElementById('TechPostgresql');
    e.onmouseover = function() {
      document.getElementById('TechPostgresqlBox').style.display = 'block';
    }
    e.onmouseout = function() {
      document.getElementById('TechPostgresqlBox').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="TechPostgresql" onMouseOver={this.handleHover}>
        <a href="https://www.postgresql.org/" alt="" >
          <img src={TechImage} alt="TechImage" className="TechImages"/>
        </a>
        <p id="TechPostgresqlBox" className="TechDescriptionBox"> Postgresql </p>
      </div>
    );
  }
}

export default TechPostgresql;
