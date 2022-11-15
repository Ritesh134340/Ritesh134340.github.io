import React, { useEffect } from 'react'
import { SkillsWrapper, SkillsWrapperChild } from '../styles/section/Skills.styled'
 import {FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaGithub,FaNodeJs} from "react-icons/fa"
 import {SiMongodb,SiPostman,SiStyledcomponents,SiChakraui,SiJson} from "react-icons/si";
 import axios from "axios";
const Skills = () => {
 
  return (
    <SkillsWrapper id="skills">
       <hr/>
       <h1>WORK-TOOLS</h1>
      <SkillsWrapperChild>
       
      <div>
        <img src=""></img>
        <FaHtml5 style={{color:"rgb(247,84,33)",fontSize:"110px"}}/>
        <h4>HTML</h4>
      </div>
      <div><FaJsSquare style={{color:"rgb(239,216,29)",fontSize:"110px"}}/><h4>JavaScript</h4></div>
      <div><FaCss3Alt style={{color:"rgb(46,73,210)",fontSize:"110px"}}/><h4>CSS</h4></div>
      <div><FaReact style={{color:"rgb(95,213,244)",fontSize:"110px"}}/><h4>React Js</h4></div>
      <div><FaGithub style={{color:"white",fontSize:"140px"}}/><h4>GitHub</h4></div>
      <div><SiMongodb style={{color:"rgb(15,165,77)",fontSize:"110px"}}/><h4>MongoDb</h4></div>
      <div><SiPostman style={{color:"rgb(247,105,54)",fontSize:"110px"}}/><h4 >Postman</h4></div>
      <div><SiStyledcomponents style={{color:"rgb(224,147,34)",fontSize:"110px"}}/><h4 style={{width:"135px",textAlign:"center"}}>Styled Component</h4></div>
      <div><SiChakraui style={{color:"rgb(98,196,199)",fontSize:"110px"}}/><h4>Chakra Ui</h4></div>
      <div><FaNodeJs style={{color:"rgb(99,151,93)",fontSize:"110px"}}/><h4>Node Js</h4></div>
      <div><SiJson style={{color:"rgb(199,34,35)",fontSize:"110px"}}/><h4>Json Sever</h4></div>
      </SkillsWrapperChild>

    </SkillsWrapper>
  )
}

export default Skills
