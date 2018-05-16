import React, { Component } from 'react';
import './ProjectList.css';
import PortfolioScreenShot from '../../images/PortfolioScreenShot.png'
import TechImageCSS from './technologies/css.svg'
import TechImageGit from './technologies/git.svg'
import TechImageHeroku from './technologies/heroku.svg'
import TechImageHtml5 from './technologies/html5.svg'
import TechImageJavascript from './technologies/javascript.svg'
import TechImageMongoDB from './technologies/mongodb.svg'
import TechImageNode from './technologies/node.svg'
import TechImageNPM from './technologies/npm.svg'
import TechImagePostgresql from './technologies/postgresql.svg'
import TechImageRails from './technologies/rails.svg'
import TechImageReact from './technologies/react.svg'
import TechImageRuby from './technologies/ruby.svg'
import TechImageSass from './technologies/sass.svg'
import TechImageSlack from './technologies/slack.svg'
import TechImageTravis from './technologies/travis.svg'
import TechImageTrello from './technologies/trello.svg'
import TechImageYarn from './technologies/yarn.svg'

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: null
    }
  }

  render() {
    return (
      <div id="ProjectList">

        <div className="ListProject">
          <div className="ListProjectInformation">
            <p className="ProjectName">My Portfolio</p>
            <p className="ProjectGithub">
              <a href="https://github.com/BlaineA97/Portfolio">
                Project Github
              </a>
            </p>
            <p className="ProjectUrl">You're Here!</p>
            <p className="ProjectDescription">
              A website designed to show you all the wonderful things I spend my free time doing :)
            </p>
            <div className="ProjectTechnologies">
              {/* Insert Tech Classes Later */}
              <img src={TechImageReact} alt="TechImage" className="TechImages"/>
              <img src={TechImageJavascript} alt="TechImage" className="TechImages"/>
              <img src={TechImageCSS} alt="TechImage" className="TechImages"/>
              <img src={TechImageHtml5} alt="TechImage" className="TechImages"/>
            </div>
          </div>
          <div className="ListProjectImage">
            <img src={PortfolioScreenShot}
              alt="PortfolioImage"
              className="ListImages"/>
          </div>
        </div>

        <div className="ListProject">
          <div className="ListProjectInformation">
            <p className="ProjectName">Dungeons</p>
            <p className="ProjectGithub">
              <a href="https://github.com/BlaineA97/Dungeons">
                Project Github
              </a>
            </p>
            <p className="ProjectUrl">
              <a href="https://serene-inlet-45614.herokuapp.com/">
                Visit Project Example
              </a>
            </p>
            <p className="ProjectDescription">
              A small battle system highlighting ReactJS props and states along with a large amount of Javascript functionality.
            </p>
            <p className="ProjectDescription">
              This project is planned to be expanded.
            </p>
          </div>
          <div className="ListProjectImage">
            <img src={PortfolioScreenShot}
              alt="PortfolioImage"
              className="ListImages"/>
          </div>
        </div>

        <div className="ListProject">
          <div className="ListProjectInformation">
            <p className="ProjectName">Progressive Power Postal</p>
            <p className="ProjectGithub">
              <a href="https://github.com/BlaineA97/ProgressivePowerPostal">
                Project Github
              </a>
            </p>
            <p className="ProjectUrl">
              <a href="">
                Visit Project Example
              </a>
            </p>
            <p className="ProjectDescription">
              A ReactJS singlepage application reimagining the original website.
            </p>
            <p className="ProjectDescription">
              This project is planned to be expanded.
            </p>
          </div>
          <div className="ListProjectImage">
            <img src={PortfolioScreenShot}
              alt="PortfolioImage"
              className="ListImages"/>
          </div>
        </div>

        <div className="ListProject">
          <div className="ListProjectInformation">
            <p className="ProjectName">Veteran Affairs Data Display</p>
            <p className="ProjectGithub">
              <a href="https://github.com/BlaineA97/VeteransProject">
                Project Github
              </a>
            </p>
            <p className="ProjectUrl">
              <a href="">
                Visit Project Example
              </a>
            </p>
            <p className="ProjectDescription">
              A ReactJS singlepage application that displays information dynamically.
            </p>
            <p className="ProjectDescription">
              This project is planned to be expanded.
            </p>
          </div>
          <div className="ListProjectImage">
            <img src={PortfolioScreenShot}
              alt="PortfolioImage"
              className="ListImages"/>
          </div>
        </div>

        <div className="ListProject">
          <div className="ListProjectInformation">
            <p className="ProjectName">Sautee Seattle</p>
            <p className="ProjectGithub">
              <a href="https://github.com/Sautee-Seattle/Sautee-Seattle">
                Project Github
              </a>
            </p>
            <p className="ProjectUrl">
              <a href="">
                Visit Project Example
              </a>
            </p>
            <p className="ProjectDescription">
              A Ruby on Rails Web Application which scrapes  sources to bring dynamic lists of season based produce.
              Also has user functionality to provide easy local farmers market locations using the application.
            </p>
            <p className="ProjectDescription">
              This project is completed.
            </p>
          </div>
          <div className="ListProjectImage">
            <img src={PortfolioScreenShot}
              alt="PortfolioImage"
              className="ListImages"/>
          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
