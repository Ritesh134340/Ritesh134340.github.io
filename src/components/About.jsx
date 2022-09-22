import React from "react";
import { AboutHeader, AboutWrapper, ImageWrapper, ParaWrapper } from "../styles/section/About.styled";

const About = () => {
  return (
    <div div id="about">
     <AboutHeader>Let's Know Me</AboutHeader>
    <AboutWrapper >
     
      <ImageWrapper>
      <img src="../images/profile.png"></img>
      <h1>Ritesh Kumar</h1>
      </ImageWrapper>

      <ParaWrapper>
      <h1>👋 </h1><span>Hi !</span>
      
      <p>I am Ritesh Kumar a Full Stack Web developer based in India. </p>
      <p>
        {" "}
        I like to think of myself as a curious mind with a positive attitude. I
        am always energetic and enthusiastic to create and build new platforms.
      </p>
      <p>
        I am gearing up for an exciting career in tech in which I can
        collaborate with teammates and learn in global work environments.
      </p>
     
      </ParaWrapper>
    
    </AboutWrapper>
    
    </div>
  );
};

export default About;
