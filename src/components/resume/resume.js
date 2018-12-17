import React, { Component } from 'react';
import redux from './redux (amz).png'
import PostgreSQL from './sql (amz).png'
import HTML5 from './html5 (amz).png'
import CSS3 from './css3 (amz).png'
import JS from './js (amz).png'
import Node from './node (amz).png'
import Python from './python (amz).png'
import React1 from './react (amz).png'
import Git from './git (amz).png'
import AWS from './aws (amz).png'
import PS from './ps (amz).png'
import MongoDB from './mongo (amz).png'
import JSON from './json (amz).png'
import jQuery from './jquery (amz).png'
import Heroku from './heroku (amz).png'
import Bootstrap from './bootstrap (amz).png'



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
      <h1><span>Skills</span></h1>
      <div className="imggrid">
        <div className="imgblock">
          <img className="rig-img" src={HTML5} />
          <span>HTML5</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={CSS3} />
          <span>CSS3</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={JS} />
          <span>JavaScript</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={Node} />
          <span>Node.js</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={Python} />
          <span>Python</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={React1} />
          <span>React</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={redux} />
          <span>Redux</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={AWS} />
          <span>AWS</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={PostgreSQL} />
          <span>PostgreSQL</span>
        </div>
        <div className="imgblock">
          <img className="rig-img" src={MongoDB} />
          <span>MongoDB</span>
        </div>  <div className="imgblock">
            <img className="rig-img" src={JSON} />
            <span>JSON</span>
          </div>
          <div className="imgblock">
            <img className="rig-img" src={jQuery} />
            <span>jQuery</span>
          </div>
          <div className="imgblock">
            <img className="rig-img" src={Heroku} />
            <span>Heroku</span>
          </div>
          <div className="imgblock">
            <img className="rig-img" src={Bootstrap} />
            <span>BootStrap</span>
          </div>
          <div className="imgblock">
            <img className="rig-img" src={PS} />
            <span>Photoshop</span>
          </div>
      </div>
  </div> {/* End skills */}
</section>
    );
  }
}
