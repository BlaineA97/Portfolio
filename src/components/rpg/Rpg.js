import React, { Component } from 'react';
import './Rpg.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import HealthBar from './HealthBar';
import CombatControls from './CombatControls';

class Rpg extends Component {
  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
    this.reduceHp = this.reduceHp.bind(this);
    this.state = {
      combatControlsHidden: true,
      enemyHp: 15,
      playerHp: 123,
      isDead: false
    };
  }

/*
attack
roll
reduceHp
flee
defend
checkDead - If dead, options are removed
*/

  // Take the enemy HP and reduce it using the reduceHp function.
  attack(attackRoll) {
    let roll = this.rollDice(attackRoll);
    console.log(`Attack ${roll}`)
    this.reduceHp(roll)
  }

  defend(defendRoll) {
    let roll = this.rollDice(defendRoll);
    console.log(`Defend ${roll}`)
    this.reduceHp(roll)
  }

  rollDice(number) {
    let roll = Math.floor(Math.random() * Math.floor(number));
    console.log(`rollDice ${roll}`)
    return roll
  }

  reduceHp(reducedNumber) {
    let updatedHp = this.state.playerHp - reducedNumber;
    console.log(`reduceHp ${updatedHp}`)
    this.setState({
      playerHp: updatedHp
    });
    this.checkDefeated(updatedHp);
  }

  checkDefeated(currentHp) {
    if (currentHp <= 0) {
      this.setState({
        playerHp: "Dead"
      });
    }
  }

  render() {
    return (
      <div id="Rpg">
        <div id="Rpg-Navigation"><Navigation /></div>

        <div id="Rpg-wrapper">

          <div id="player-stats">
            <div id="HealthBar-container"><HealthBar /></div>
            <div id="CombatPortrait-container"></div>
          <div id="CombatControls-container">
            <CombatControls isDead={this.state.isDead} playerHp={this.state.playerHp} />
          </div>
            {/* <div id="Rpg-attacks">
              <button className="action-button" onClick={() => this.attack(20)}>Attack</button>
              <button className="action-button" onClick={() => this.attack(12)}>Defend</button>
              <button className="action-button" onClick={() => this.attack(6)}>Flee</button>
            </div> */}
          </div>

          <div id="battle-stats">
            <span className="Combat-hp-bar">{this.state.enemyHp}</span>
            <span className="Combat-portrait"></span>
          </div>

          <div id="enemy-stats">
            <span className="Combat-hp-bar">{this.state.enemyHp}</span>
            <span className="Combat-portrait"></span>
          </div>

        </div>

        <div id="Rpg-Footer"><Footer /></div>
      </div>
    );
  }
}

export default Rpg;
