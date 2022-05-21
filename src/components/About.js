import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="text-container">
      <div className="social-btn">
        <button className="email-btn">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button className="linkedin-btn">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </button>
      </div>
      <h2 className="text-title">About</h2>
      <p className="text-detail">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>

      <h2 className="text-title">Interests</h2>
      <p className="text-detail">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
};

export default About;
