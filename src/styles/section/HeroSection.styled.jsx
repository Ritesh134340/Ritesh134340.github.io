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
 height:auto;
 background:linear-gradient(
   135deg,
   rgba(8,64,77,0.9) 0%,
   rgba(2,12,27,0.8) 20%
 ), url("./images/bg1.jpg") center no-repeat;
 background-size:cover;
 background-position:center;
 align-items:center;
 justify-content:center;
 text-align:center; 

`

export const HeroContent=styled.div`
margin:auto;
color:${({theme})=>theme.colors.white};
text-transform:uppercase;
text-align: center;
padding-top:20px;
padding-bottom:30px;
.cta-wrapper{

  margin-top:50px;
  height:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:30px;
}
h1{
  letter-spacing:1.2rem;
  font-size:2rem;
  overflow:hidden;
  font-weight:400;
  width:25ch;
  margin:auto;
  white-space:nowrap;
  animation:${typing} 5s steps(25), ${blink} 1s ease-in-out 8s infinite;
  border-right:4px solid rgba(255,255,255,1)
}
h5{
  
 font-size:17px;
 
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
  .cta-wrapper{
    gap:20px;
    margin-top:30px;
  }
 
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
h5{
  font-size:10px;
  font-weight:500;

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
   margin-bottom:40px;
  color:${({theme})=>theme.colors.orange};
  font-size:4rem;
  margin-top:15px;
  background-image: -webkit-linear-gradient(92deg, ${({theme})=>theme.colors.purple},${({theme})=>theme.colors.white});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-weight: 500;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: ${({theme})=>theme.mobile}){
  margin-bottom:60px;
  
 }
`;