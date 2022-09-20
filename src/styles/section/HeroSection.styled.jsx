import styled,{keyframes} from "styled-components";
  
const typing=keyframes`
75%{
  width:0ch;
}
100%{
width:25ch;
}

`;

const blink=keyframes`
 0%{
border-right:4px solid rgba(255,255,255,0);
 } 
 100%{
border-right:4px solid rgba(255,255,255,1);
 } 

`

export const StyledHeroSection=styled.section`
 width:100%;
 height:70vh;
 background:linear-gradient(
   135deg,
   rgba(8,64,77,0.9) 0%,
   rgba(2,12,27,0.8) 20%
 ), url("./images/bg1.jpg") center no-repeat;
 background-size:fill;
 position:relative;
 display:flex;
 align-items:center;
 justify-content:center;
 text-align:center; 
 margin-top:80px; 
`

export const HeroContent=styled.div`
width:100%;
max-width:58rem;
color:${({theme})=>theme.colors.white};
text-transform:uppercase;

h1{
  letter-spacing:1.2rem;
  font-size:2rem;
  overflow:hidden;
  font-weight:400;
  width:25ch;
  white-space:nowrap;
  margin:auto;
  animation:${typing} 5s steps(25), ${blink} 1s ease-in-out 8s infinite;
  border-right:4px solid rgba(255,255,255,1)
}


p{
  font-size:1.7rem;
  font-weight:400;
  text-transform:none;
}
div{
  margin:2.5rem 0;
}

@media (max-width: ${({theme})=>theme.mobile}){
h1{
  letter-spacing:1rem;
  font-size:1.5rem;
  width:27ch;
}
h3{
  font-size:2.2rem;
 
}
p{
  font-size:1.3rem;
}
}
`;

 const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
export const AnimatedGradientText = styled.h3`
  color:${({theme})=>theme.colors.orange};
  font-size:4rem;
  margin:1.5rem 0;
  background-image: -webkit-linear-gradient(92deg, ${({theme})=>theme.colors.purple},${({theme})=>theme.colors.white});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-weight: 500;
  margin-bottom: 80px;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;