import React from "react";

const About = () => (
  <div>
    <div>
      <h2>About Me</h2>
      <div className="aboutMeContainer">
        <div className="intro">
          <p>
            Website design intrigues me because we can provide users with tools,
            to better understand challenges and solutions, and everything
            inbetween, by presenting data in novel way.
          </p>
          <blockquote>
            "I suppose it is tempting, if the only tool you have is a hammer, to
            treat everything as if it were a nail."
          </blockquote>
          <span className="quote_author">Abraham Maslow</span>
          <p>
            Learning is a life long passion of mine, since not only does it open
            new doors but also allows me to revaluate what I already know in a
            new light!
          </p>
        </div>
        <img className="profile" src="img/me.png" alt="profile" />
        <div className="hobbies">
          <h3>Interests</h3>
          <ul>
            <li className="print">
              3D Printing
              <div className="printer">
                <div className="printerFrame" />
                <div className="printerHead" />
              </div>
            </li>
            <li className="cycle">
              Cycling
              <div className="bike">
                <div className="frame" />
                <div className="fwheel" />
                <div className="bwheel" />
              </div>
            </li>
            <li className="garden">
              Gardening
              <div className="gardener">
                <div className="stem" />
                <div className="leaf1" />
                <div className="leaf2" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
