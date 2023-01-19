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
    height:5px;
    width:50%;
    margin:auto;
  
     background:linear-gradient(to right,black,white,black);
    color: white;
    font-family: monospace;
    font-size: 22px;
    text-align: center;
    letter-spacing: 0.6px;
    font-weight: 400;
    @media (max-width:500px){
   font-size:20px;
    width:95%;
  }
  }
  margin-top:50px;


`;

export const ProjectWrapperChild = styled.div`
margin:auto;
    margin-top:70px;
    
`;

export const IndividualProject = styled.div`
  box-sizing: border-box;
  margin:auto;
  margin-top:45px;
  background: linear-gradient(to top,teal ,black 70%);

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
  padding-left:20px;
  width:52%;
  height:100%;
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

  @media (max-width:1024px){
      margin-top:40px;
     width:100%;
     padding-left:0px;
   }
`;

export const CoverImage=styled.img`
  height:100%;
  width:100%;
  border-radius:8px;
  @media all and (max-width:1024px) and (min-width:769px){
   
}


@media all and (max-width:768px) and (min-width:481px){
}

@media all and (max-width:480px) and (min-width:279px){

}
 
`


export const ChildImageWrapper=styled.a`
    width:48%;
    height:100%;
    & :hover{
      padding:5px;
    }
    @media (max-width:1050px){
     width:100%;
  };
 
`

export const ChildHolder=styled.div`
   margin:auto;
   display:flex;
   padding:10px;
   gap:20px;
   height:400px;
   box-sizing: border-box;
   align-items: center;
   width:100%;
   justify-content: space-between;
 
   
   @media (max-width:1050px){
    flex-direction:${(props)=>props.rev==="rev" ? "column-reverse":"column"};
      width:90%;
      height:auto;
      gap:0px;
      padding:0px;
      text-align:center;
  };
  
`