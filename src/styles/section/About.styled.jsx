import styled, { keyframes } from "styled-components"

const waving=keyframes`
0%{
  transform: rotate(0deg);
}
10%{
  transform: rotate(14deg);
}
20%{
  transform: rotate(-8deg);
}
30%{
  transform: rotate(14deg);
}
40%{
  transform: rotate(-4.0deg);
}
50%{
    transform: rotate(10deg);
}
60%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(0deg);
}
`

export const AboutWrapper=styled.div`
color:white;
border-radius:3px;
margin:auto;
margin-bottom:35px;
display:flex;
align-items: center;
font-family:"poppins",monospace;
padding-left:30px;
gap:30px;
width:70%;
box-sizing: border-box;

& :hover{
    color:white;
}
@media (max-width:${({theme})=>theme.mobile}){
    flex-direction:column;
    width:100%;
    padding-left:0px;
}
   
`

export const ImageWrapper=styled.div`
 text-align:center;
 color:white;
 
 @media (max-width:${({theme})=>theme.mobile}){

   margin:0px;
   margin-top:0px;
}
h1{
  margin-top:-30px;
}

`

export const ParaWrapper=styled.div`
  
    p{
         color:white;
        font-family:"poppins",monospace;
         font-size:17px;
         margin-top:13px;
         letter-spacing:0.6px;
         line-height:25px;
         text-align:left;
     
    }

    h1{
        display:inline-block;
         color:white;
         font-size:45px;
         animation:${waving} 2.5s infinite ; 
         transform-origin:70% 70%;  
    }
     span{
        font-size:25px;
        letter-spacing: 0.7px;
        margin-left:20px;
        
    }
    @media (max-width:${({theme})=>theme.mobile}){
    width:90%;
    margin:0px;
   }

`

export const AboutHeader=styled.h1`
   letter-spacing:0.5px;
   text-align:center;
   font-family:"poppins",monospace;
   width:200px;
   border-bottom:3px solid;
   margin:auto;
   margin-bottom:15px;
   padding:10px 5px;
   color:${({theme})=>theme.colors.orange}

  
`

export const SoftSkill=styled.div`
display:flex;
margin-top:10px;
margin:auto;
width:80%;
justify-content: space-evenly;

  li{
    text-align:center;
    margin-left:10px;
    font-size:16px;
    font-family:sans-serif;
    letter-spacing:0.6px;
  }
  @media (max-width:${({theme})=>theme.mobile}){
    display:none;
  }
`