import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (

      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Self driven Software Developer from Houston Texas ready for any new opportunities. I truly enjoy working in a team setting with professional colleagues who have the same passion for quality work as I do. I believe that working in a team and bouncing off creative ideas leads to the best work product.<br/><br/>
            I have created multiple web applications utilizing agile methodologies that aimed to solve problems in the hopitality and travel industries. I can do both front end and back end development environments and have a passion for both sides of the process. Although I am a team player I am fully capable of working in a self starting environment with minimal oversight. At times this is when I truly grow and thrive; after the work is defined and a target has been placed in front of me.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Owais Badat</span><br />
                  <span>(832)755-1259</span><br />
                  <span>owaisbadat@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
}
