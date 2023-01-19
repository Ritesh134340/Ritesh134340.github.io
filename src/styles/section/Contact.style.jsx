import styled from "styled-components"


export const  ContactWrapper=styled.div`
   border:1px solid transparent;
  

   background:linear-gradient(
   to right,
   rgba(8,64,77,0.6) 0%,
   rgba(2,12,27,0.5) 100%
 ), url("./images/contact.png") ;
    background-image: fit;
    background-size: 65%;
  
  h1{
   text-transform:uppercase;
   padding-top:15px;
   padding-bottom:10px;
   letter-spacing:0.7px;
   border-bottom:3px solid white;
   width:330px;
   margin:auto;
  }
`


export const InputWrapper=styled.div`

   margin:auto;
   text-align:center;
    font-weight:900;
    color:black;
    & :hover{
   color:black;
   border:1px solid black;
 }

  input{

   width:90%;
   height:50px;
   border-radius:13px;
   background:${({theme})=>theme.colors.white};
   margin-top:20px;
   padding-left:15px;
   font-size:18px;
   border:1px solid black;
   font-weight:400;
   color:black;
   
  }
 
  textarea{
   width:90%;
   height:160px;
   border-radius:13px;
   background:${({theme})=>theme.colors.white};
   margin-top:20px;
   padding-left:15px;
   padding-top:15px;
   font-size:18px;
   border:1px solid black;
   font-weight:400;
   color:black;
  } 
  button{
   border:1px solid transparent;
   display:block;
    margin:auto;
   padding:16px 80px;
   border-radius:12px;
   margin-top:15px;
   margin-bottom:20px;
   
   font-weight:bold;
   color:white;
   background-color:${({theme})=>theme.colors.green};
  
  }

  & :hover{
      cursor:pointer;
      border:2px solid ${({theme})=>theme.colors.orange};
      background-color:transparent;
      color:${({theme})=>theme.colors.orange};
   }
`

export const ChildHolder=styled.div`
   display:flex;
  
   align-items: center;
   @media (max-width:${({theme})=>theme.mobile}){
      flex-direction:column;
   }
`
export const ContactOptional=styled.div`
    padding:15px;
    box-sizing: border-box;
    margin-left:110px;
    border-radius: 8px;
    font-size:16px;
    background:linear-gradient(to right ,teal,black);
    a{
      display:flex;
      align-items:center;
      margin-top:10px;
      color:white;
      text-decoration:none;
      
    }
    @media (max-width:${({theme})=>theme.mobile}){
      width:80%;
      text-align:center;
      margin-left:0px;
      margin-top:50px;
    
   }
    
` 
export const FormWrapper=styled.form`
color:black;
width:27%;
margin-left:30px;
margin-right:30px;
border:1px solid red;
@media all and (max-width:1024px) and (min-width:769px){
   
  width:40%;
  padding:5px;
}


@media all and (max-width:768px) and (min-width:481px){
   width:80%; 
}

@media all and (max-width:480px) and (min-width:279px){
   width:90%; 
   padding:10px;
}



  background-color:rgba(255,255,255,0.9);
  
  margin:auto;
  border:2px solid black;
  border-radius:13px;
  padding:25px;
  margin-top:60px;
  margin-bottom:50px;
 
`
 

