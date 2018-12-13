import React, { Component } from 'react';
export default class Education extends Component {
  render() {
    return (

      <section id="resume">
  {/* Education
----------------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>DigitalCrafts</h3>
          <p className="info">16- Week Full Stack Immersive Software Development Program <span>•</span> <em className="date">January 2018</em></p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Houston</h3>
          <p className="info">Bachelors in Economics<span>•</span> <em className="date">December 2015</em></p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Houston</h3>
          <p className="info">Bachelors in Psychology<span>•</span> <em className="date">December 2015</em></p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}

  {/* Skills
----------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
      <div className="bars">
        <ul className="skills">
          <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
          <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
          <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
          <li><span className="bar-expand css" /><em>CSS</em></li>
          <li><span className="bar-expand html5" /><em>HTML5</em></li>
          <li><span className="bar-expand jquery" /><em>jQuery</em></li>
        </ul>
      </div>{/* end skill-bars */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
</section>
    );
  }
}
