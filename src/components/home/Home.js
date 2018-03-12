import React, { Component } from 'react';
import TVImg from '../../images/tv-1.png';
import MacImg from '../../images/mac-1.png';
import './Home.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ProgramOne from '../../videos/ProgramOne.mp4'
import ProgramTwo from '../../videos/ProgramTwo.mp4'
import ProgramThree from '../../videos/ProgramThree.mp4'
import ProgramFour from '../../videos/ProgramFour.mp4'


class Home extends Component {
  render() {
    let programVideo = ProgramOne

    // setInterval(function() {}, 5000);

      const videoDisplay = (programVideo) => {
        switch (programVideo) {
          case ProgramOne:
            return(<source id="Home-screen-video-source" src={programVideo} type="video/mp4" />)
            programVideo = ProgramTwo;
            break;
          case ProgramTwo:
            return(<source id="Home-screen-video-source" src={programVideo} type="video/mp4" />)
            programVideo = ProgramThree;
            break;
          case ProgramThree:
            return(<source id="Home-screen-video-source" src={programVideo} type="video/mp4" />)
            programVideo = ProgramFour;
            break;
          default:
            return(<source id="Home-screen-video-source" src={programVideo} type="video/mp4" />)
            programVideo = ProgramTwo;
            break;
        }
      }

    return (
      <div id="Home">
        <div id="Home-Navigation"><Navigation /></div>

        <div id="Home-wrapper"> {/* Flexboxed Body while maintaining the Navigation and Footer */}


          <div id="Home-screen-container">
            <img src={MacImg} id="Home-screen-img" alt="Laptop" />
          </div>
          <div id="Home-screen-interior">
            <video autoPlay="autoplay" muted loop id="Home-screen-interior-video">
              {/* { setInterval(function() {videoDisplay(programVideo)}, 5000) } */}
              {/* {videoDisplay(programVideo)} */}
<source id="Home-screen-video-source" src={programVideo} type="video/mp4" />

            </video>
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
