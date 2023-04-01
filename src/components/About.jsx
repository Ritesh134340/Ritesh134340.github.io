import React from "react";
import { AboutHeader, AboutWrapper, ImageWrapper, ParaWrapper } from "../styles/section/About.styled";

const About = () => {
  return (
    <div id="about">
    <AboutHeader>About Me
    </AboutHeader>
    <AboutWrapper >
        <div className="about-left" >
        <ImageWrapper>
      <img src="../images/profile.png" alt="profile"></img>
      <h1>Ritesh Kumar</h1>
      </ImageWrapper>

      <ParaWrapper>
      <h1>👋 </h1><span>Hello !</span>
      
      <p>I am Ritesh Kumar a Full Stack Web developer based in India.
      {" "}
        I like to think of myself as a curious mind with a positive attitude. I
        am always energetic and enthusiastic to create and build new platforms.
         </p>
     
      <p>
        I am gearing up for an exciting career in tech in which I can
        collaborate with teammates and learn in global work environments.
      </p>
     
      </ParaWrapper>
        </div>
     
     
      <div className="certificate-wrapper" >
        <h2>Masai Certificate</h2>
        <img  src="https://user-images.githubusercontent.com/105931703/227996926-1b422e2c-f864-4161-9c4f-952120caf28e.png" alt="certificate" />
      </div>
    </AboutWrapper>
   
    </div>
  );
};

export default About;
