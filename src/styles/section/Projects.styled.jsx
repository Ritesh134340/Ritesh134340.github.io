import styled,{keyframes} from "styled-components";

const Divmover=keyframes`
  
  0%{
    transform: rotate3d(1, 1, 1, 0.05turn);
     
  }
 
  

 


`

export const ProjectWrapper = styled.div`
  line-height: 35px;
  h1{
    
    color: white;
    font-family: monospace;
    text-align: center;
    font-size: 28px;
    letter-spacing: 0.5px;
  }

  h4 {
    color: white;
    font-family: monospace;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.6px;
    font-weight: 400;
 
  }
  margin-top:50px;


`;

export const ProjectWrapperChild = styled.div`
margin:auto;
    margin-top:70px;
    
`;

export const IndividualProject = styled.div`
  margin-top:45px;
  background: linear-gradient(to right,teal ,black);
  background-clip: text;
 
`;

export const ButtonHolder = styled.div`
margin:auto;
box-sizing: border-box;
display:flex;
width:55%;
justify-content: space-evenly;
align-items: center;
margin-top:35px;
margin-bottom:25px;
@media (max-width:${({theme})=>theme.mobile}){
     width:90%;
   }
a{
  padding:4px 35px;
  border-radius:8px;
  text-decoration:none;
  color:white;
  font-weight:bold;
  margin-left:10px;
  box-sizing: border-box;
  background-color: ${({theme})=>theme.colors.green};
  font-size:17px;
  
 
}
& :hover{
      cursor:pointer;
      border:2px solid ${({theme})=>theme.colors.orange};
      background-color:transparent;
      color:${({theme})=>theme.colors.orange};

   }

`;

export const ProjectDiscription = styled.div`
  text-align:left;
  
  h2{
    font-family:"poppins",monospace;
    font-size:22px;
    letter-spacing:0.7px;
    color:wheat;

  }
  h5{
    font-size:20px;
    font-family:"poppins",monospace;
    letter-spacing:0.6px;

  }
  p{
    padding-top:3px;
    font-size:16px;
    line-height:23px;
    font-family:"poppins",monospace;
    letter-spacing:0.6px;
    padding-bottom:15px;
  }
  h6{
   
    font-size:16px;
    font-family:"poppins",monospace;
    letter-spacing:0.6px; 
  }

  @media (max-width:${({theme})=>theme.mobile}){
      margin-top:40px;
   }
`;

export const CoverImage=styled.img`
  opacity: 90%;
  border-radius: 12px;
  height:330px;
  width:95%;
 
`


export const ChildImageWrapper=styled.a`
    padding:10px;
    width:98%;
  
   & :hover{
    animation:${Divmover} 1s ease-in-out ;
  }

 
`

export const ChildHolder=styled.div`
   display:flex;
   box-sizing: border-box;
   align-items: center;
   width:90%;
   margin:auto;
   @media (max-width:1050px){
    flex-direction:column;
      width:90%;
      text-align:center;
  };
  
`