import React, { Component } from 'react';
import './CombatControls.css';
import { Link } from 'react-router-dom';

class CombatControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // Take the enemy HP and reduce it using the reduceHp function.
  attack(attackRoll) {
    if (this.state.isDead = true) {
      return(
        <p>You are dead.</p>
      )
    } else {
      let roll = Math.floor(Math.random() * Math.floor(attackRoll));
      let updatedHp = this.state.playerHp - roll;
      if (updatedHp <= 0) {
        this.setState({
          playerHp: updatedHp,
          isDead: true
        });
      } else {
        this.setState({
          playerHp: updatedHp
        });
      }
    }
  }

  //
  // defend(defendRoll) {
  //   let roll = this.rollDice(defendRoll);
  //   console.log(`Defend ${roll}`)
  //   this.reduceHp(roll)
  // }
  //
  // rollDice(number) {
  //   let roll = Math.floor(Math.random() * Math.floor(number));
  //   console.log(`rollDice ${roll}`)
  //   return roll
  // }
  //
  // reduceHp(reducedNumber) {
  //   let updatedHp = this.state.playerHp - reducedNumber;
  //   console.log(`reduceHp ${updatedHp}`)
  //   this.setState({
  //     playerHp: updatedHp
  //   });
  //   this.checkDefeated(updatedHp);
  // }
  //
  // checkDefeated(currentHp) {
  //   console.log(`checkDefeated ${currentHp}`)
  //
  // }
  //
  // hitBtn.on("click", function(){
  //    var total = hBar.data('total'),
  //        value = hBar.data('value');
  //
  //    if (value < 0) {
 	// 		log("you dead, reset");
  //      return;
  //    }
  //    // max damage is essentially quarter of max life
  //    var damage = Math.floor(Math.random()*total);
  //    // damage = 100;
  //    var newValue = value - damage;
  //    // calculate the percentage of the total width
  //    var barWidth = (newValue / total) * 100;
  //    var hitWidth = (damage / value) * 100 + "%";
  //
  //    // show hit bar and set the width
  //    hit.css('width', hitWidth);
  //    hBar.data('value', newValue);
  //
  //    setTimeout(function(){
  //      hit.css({'width': '0'});
  //      bar.css('width', barWidth + "%");
  //    }, 500);
  //    //bar.css('width', total - value);
  //
  //    log(value, damage, hitWidth);
  //
  //    if( value < 0){
  //      log("DEAD");
  //    }
  //  });

  render() {
    return (
      <div id="CombatControls">
        <button id="CombatControls-attack" className="CombatControls-button" onClick={this.attack(21)}>Attack</button>
        <button id="CombatControls-defend" className="CombatControls-button" onClick={this.attack(21)}>Defend</button>
        <button id="CombatControls-item" className="CombatControls-button" onClick={this.attack(21)}>Item</button>
        <button id="CombatControls-flee" className="CombatControls-button" onClick={this.attack(21)}>Flee</button>
      </div>
    );
  }
}

export default CombatControls;
