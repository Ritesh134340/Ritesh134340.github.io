import React from 'react'
import { NavItems } from '../data/NavItems'
import {FaTwitterSquare,FaGithub,FaLinkedin} from "react-icons/fa"
import { LineOne,LineTwo,LineThree, Nav, NavList,NavItem,NavLink,Profile, SocialIcons } from '../styles/layout/Nav.styled'
import { Logo,MenuIcon} from '../styles/layout/Nav.styled'
import useScrollDirection from '../hooks/useScrollDirection'
import { useState } from 'react'
import { CTAButton } from '../styles/common/CTAbutton.styled'
import { HashLink as Link } from 'react-router-hash-link'
import {FaDownload} from 'react-icons/fa'

const Navbar = () => {
  
  const [menuOpen,setMenuOpen]=useState(false);
  const scrollDirection=useScrollDirection("down")
  return (
    <>
    <Nav scrollDirection={scrollDirection}>
      <div>
       <a >
        <Logo src="./images/logo.png"/>
       </a>
      </div>
     <MenuIcon menuOpen={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>
      <LineOne menuOpen={menuOpen}/>
      <LineTwo  menuOpen={menuOpen}/>
      <LineThree  menuOpen={menuOpen}/>
     </MenuIcon>
     <NavList  menuOpen={menuOpen}>
      {
        
       NavItems &&  NavItems.map((ele,index)=>
       <NavItem key={index} index={index} menuOpen={menuOpen} onClick={()=>setMenuOpen(false)}>
        {ele.isProfile ? (<NavLink href="#hero-section">
          <Profile>
            <img src="\images\profile.png" alt="Ritesh Kumar"></img>
            <span>Ritesh Kumar</span>
          </Profile>
        </NavLink> ): null}
        {ele.text ?(<NavLink smooth to={ele.href}>{ele.text}</NavLink>) :  null }

    

        {

        ele.hasSocialIcons ? <SocialIcons>
          <NavLink href="#" target="_blank">
          <FaGithub/>  
          </NavLink>

          <NavLink href="#" target="_blank">
          <FaLinkedin/>  
          </NavLink>

          <NavLink href="#" target="_blank">
          <FaTwitterSquare/>  
          </NavLink>
        </SocialIcons> : null  
        }

        
        
       </NavItem>
        
       )
      }
     <CTAButton  href="https://drive.google.com/uc?export=download&id=1kY_wIb3m12dG8qCaamZeiPqXhiq5SA9P" targnt="_blank" download="Ritesh-Kumar-Resume.pdf">
    <FaDownload></FaDownload>{" "}Resume
      </CTAButton>
     </NavList>
     
    </Nav>
  
    </>
  )
}

export  {Navbar};


