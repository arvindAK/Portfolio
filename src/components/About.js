import React from 'react';

const About = () => (
  <div>
    <div>
      <h2>About Me</h2>
      <div className="aboutMeContainer">
        <div className="intro">
          <p>What fascinates me about programing and where I see potential is the filtering of data to allow for users to interactively explore datasets.
          <br/>A quote that brought home this idea for me is:</p>
          <blockquote>
             "In ancient times having power meant having access to data. Today having power means knowing what to ignore."
          </blockquote>
          <span className="quote_author">Yuval Noah Harar - Homo Deus: A Brief History of Tomorrow</span>
        </div>
        <img className="profile" src="img/me.png" alt="profile"/>
        <div className="hobbies">
          <h3>Interests</h3>
          <ul>
            <li className="print">3D Printing
              <div className="printer">
                <div className="printerFrame"></div>
                <div className="printerHead"></div>
              </div>
            </li>
            <li className="cycle">Cycling
              <div className="bike" >
                <div className="frame"></div>
                <div className="fwheel"></div>
                <div className="bwheel"></div>
              </div>
            </li>
            <li className="garden">Gardening
              <div className="gardener">
                <div className="stem"></div>
                <div className="leaf1"></div>
                <div className="leaf2"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
