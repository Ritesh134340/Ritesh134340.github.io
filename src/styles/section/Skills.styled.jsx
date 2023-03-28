import styled from "styled-components"

export const SkillsWrapper=styled.div`

margin:auto;
width:90%;
h1{
 padding-top:40px;
  width:200px;
  margin:auto;
  text-align:center;
  font-family:'poppins',monospace;
  color:white;
  letter-spacing:0.7px;
  border-bottom:3px solid wheat;
}

`

export const SkillsWrapperChild=styled.div`
   text-align:center;

   margin-top:30px;
   margin-bottom:80px;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-wrap:wrap;
   gap:20px;
  
  
  
   div{
    
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding:5px 10px;
      color:white;
   }
   div>h4{
      font-size:14px;
      margin-top:15px;
      font-family:"poppins",monospace;
      letter-spacing:0.8px;
      background-color:white;
      color:black;
      font-weight:600;
      padding:2px 15px;
      border-radius: 8px;
   }
   @media (max-width:1050px){
   grid-template-columns: repeat(3,1fr);
   font-size:100px;
   gap:30px;
  };
  
  @media (max-width:${({theme})=>theme.mobile}){
   grid-template-columns: repeat(2,1fr);
   font-size:100px;
   grid-row-gap:25px;
   grid-column-gap:0px;
  }
  
`

