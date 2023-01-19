import styled, { keyframes, css } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
const navItemFade = keyframes`
  from{
    opacity:0;
    transform:translate(50px);
  } 
  to{
    opacity:1;
    transform:translate(0px);
  } 

`;

const navItemAnimation = ({ index }) => css`
  animation: ${navItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

export const Nav = styled.nav`
  height: 85px;
  width: 100vw;
  padding-right:15px;
  background: rgb(2, 12, 27, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  position: fixed;
  top: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
   width:97%;
   
  }
`;

export const Logo = styled.img`
  width: 120px;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
   width:105px;
   
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  padding: 0.3rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 23px;
  top: 15px;
  z-index: 999;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
    right:6%;
    
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;

  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px ) scaleX(2)" : "none"};
`;

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  transition: ${({ theme }) => theme.transition};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? 0 : "15px")};
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-5px, -6px ) scaleX(2)" : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
 

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;

    background: ${({ theme }) => theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    padding-top: 5rem;

    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;

    padding-bottom: 15px;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)};
  }
`;
export const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.orange};
    transition: all ease-in-out 300ms;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const Anchor = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.orange};
    transition: all ease-in-out 300ms;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
export const Profile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90px;
      display: block;
      margin: 1.5rem 0;
    }
  }
`;
export const SocialIcons = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;
