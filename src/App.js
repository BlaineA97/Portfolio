import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis leo, consequat sollicitudin sagittis non, iaculis sed odio. Cras gravida elit posuere, ullamcorper ligula eget, vestibulum dui. Proin vehicula consectetur fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dui dolor, mattis ac lorem et, pellentesque luctus dui. Quisque venenatis nulla sit amet velit luctus semper. Sed vestibulum fringilla urna dignissim sodales. Nam vulputate ipsum ut massa condimentum luctus. Aliquam non neque velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis eget bibendum nulla. In interdum blandit lorem quis varius.

Cras eget neque mauris. Nullam condimentum ex in massa fringilla viverra. Nam commodo, ante sed facilisis aliquam, elit risus elementum nulla, ac mollis mi risus sed ante. Vestibulum eu fermentum ipsum. Vestibulum ac egestas tellus, pharetra sagittis justo. Nullam non quam ligula. Aenean arcu erat, sagittis a dolor sed, accumsan efficitur magna. Etiam sapien libero, dapibus non mauris tincidunt, finibus condimentum nibh. Vestibulum maximus, ante in lacinia volutpat, arcu metus congue ipsum, ut tincidunt est ante quis arcu. Maecenas in lectus gravida, congue ligula sit amet, fermentum enim. Pellentesque ex magna, laoreet eu pulvinar et, aliquam et magna. Phasellus aliquam, turpis eu molestie imperdiet, libero eros convallis nibh, id auctor neque ligula quis est. Pellentesque vestibulum nulla eu commodo pharetra. Quisque tempus euismod mauris vitae elementum. Ut volutpat dolor at fringilla cursus. Morbi laoreet nunc elit, eu tincidunt nulla blandit sed.

Donec a gravida mi. Quisque condimentum urna eu nulla tincidunt congue. Curabitur tempus condimentum orci non sollicitudin. Vivamus mollis imperdiet odio sit amet tincidunt. Pellentesque eu libero venenatis metus porta sagittis. Aliquam erat volutpat. Nullam pellentesque sagittis ante eget posuere. Morbi a pulvinar sem.

Pellentesque fermentum quam id libero posuere, ut gravida orci rhoncus. Pellentesque varius congue nunc eget fermentum. Donec eu volutpat urna. Curabitur luctus, velit quis eleifend vehicula, augue purus faucibus dui, vitae sollicitudin erat dui vitae lacus. Maecenas bibendum lectus sit amet justo sagittis pellentesque. Proin non ipsum ligula. Aliquam porttitor vel nulla non finibus. Vestibulum varius tortor eros, sed dictum ligula congue a. Quisque ultrices justo risus, eu tempus sem mollis sed. Quisque eu volutpat ipsum, id hendrerit urna. Quisque eu libero consectetur justo scelerisque vehicula. Sed ultricies suscipit nisi in convallis. Etiam non tempor felis. Ut erat libero, ullamcorper eget maximus in, lobortis vulputate leo.

Suspendisse potenti. Mauris eget neque lectus. Cras volutpat tristique ante, sed elementum tellus posuere a. Sed vitae magna placerat, tempor erat eu, consectetur tortor. Ut a justo pretium, interdum odio in, aliquet eros. Duis suscipit mauris odio, non vehicula magna vehicula vitae. Aliquam in tempor tortor, et laoreet justo. </p>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis leo, consequat sollicitudin sagittis non, iaculis sed odio. Cras gravida elit posuere, ullamcorper ligula eget, vestibulum dui. Proin vehicula consectetur fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dui dolor, mattis ac lorem et, pellentesque luctus dui. Quisque venenatis nulla sit amet velit luctus semper. Sed vestibulum fringilla urna dignissim sodales. Nam vulputate ipsum ut massa condimentum luctus. Aliquam non neque velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis eget bibendum nulla. In interdum blandit lorem quis varius.

Cras eget neque mauris. Nullam condimentum ex in massa fringilla viverra. Nam commodo, ante sed facilisis aliquam, elit risus elementum nulla, ac mollis mi risus sed ante. Vestibulum eu fermentum ipsum. Vestibulum ac egestas tellus, pharetra sagittis justo. Nullam non quam ligula. Aenean arcu erat, sagittis a dolor sed, accumsan efficitur magna. Etiam sapien libero, dapibus non mauris tincidunt, finibus condimentum nibh. Vestibulum maximus, ante in lacinia volutpat, arcu metus congue ipsum, ut tincidunt est ante quis arcu. Maecenas in lectus gravida, congue ligula sit amet, fermentum enim. Pellentesque ex magna, laoreet eu pulvinar et, aliquam et magna. Phasellus aliquam, turpis eu molestie imperdiet, libero eros convallis nibh, id auctor neque ligula quis est. Pellentesque vestibulum nulla eu commodo pharetra. Quisque tempus euismod mauris vitae elementum. Ut volutpat dolor at fringilla cursus. Morbi laoreet nunc elit, eu tincidunt nulla blandit sed.

Donec a gravida mi. Quisque condimentum urna eu nulla tincidunt congue. Curabitur tempus condimentum orci non sollicitudin. Vivamus mollis imperdiet odio sit amet tincidunt. Pellentesque eu libero venenatis metus porta sagittis. Aliquam erat volutpat. Nullam pellentesque sagittis ante eget posuere. Morbi a pulvinar sem.

Pellentesque fermentum quam id libero posuere, ut gravida orci rhoncus. Pellentesque varius congue nunc eget fermentum. Donec eu volutpat urna. Curabitur luctus, velit quis eleifend vehicula, augue purus faucibus dui, vitae sollicitudin erat dui vitae lacus. Maecenas bibendum lectus sit amet justo sagittis pellentesque. Proin non ipsum ligula. Aliquam porttitor vel nulla non finibus. Vestibulum varius tortor eros, sed dictum ligula congue a. Quisque ultrices justo risus, eu tempus sem mollis sed. Quisque eu volutpat ipsum, id hendrerit urna. Quisque eu libero consectetur justo scelerisque vehicula. Sed ultricies suscipit nisi in convallis. Etiam non tempor felis. Ut erat libero, ullamcorper eget maximus in, lobortis vulputate leo.

Suspendisse potenti. Mauris eget neque lectus. Cras volutpat tristique ante, sed elementum tellus posuere a. Sed vitae magna placerat, tempor erat eu, consectetur tortor. Ut a justo pretium, interdum odio in, aliquet eros. Duis suscipit mauris odio, non vehicula magna vehicula vitae. Aliquam in tempor tortor, et laoreet justo. </p>
      </div>
    );
  }
}

export default App;
