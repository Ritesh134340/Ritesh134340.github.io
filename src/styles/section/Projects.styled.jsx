import styled,{keyframes} from "styled-components";

const Divmover=keyframes`
  
  0%{
    transform: rotate3d(1, 1, 1, 0.05turn);
     
  }
 
  

 


`

export const ProjectWrapper = styled.div`
  margin-bottom:30px;
  padding-bottom:35px;
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
`;

export const IndividualProject = styled.div`
  box-sizing: border-box;
  margin:auto;
`;

export const ButtonHolder = styled.div`
margin:auto;
box-sizing: border-box;
display:flex;
justify-content: center;
gap:20px;
align-items: center;
margin-top:30px;


a{
  padding:8px 20px;
  border-radius:5px;
  text-decoration:none;
  color:white;
  font-weight:bold;
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
  flex:1;
  height:100%;

  .tech-stack-wrapper{

    display:flex;
    margin-top:13px;
    padding-bottom:30px;
  
    flex-wrap:wrap;
    gap:25px;
    align-items:center;
    justify-content:center;
    row-gap:22px;
    
  }
  .tech-stack-wrapper>div{
    font-size:30px;
    text-align:center;
    padding:0px 6px;
    color:orange
  }
  .tech-stack-wrapper>div>p{
    font-size:15px;
    color:white;
  }

  .credential-wrapper>h5{
    color:wheat;
    margin-top:15px;
  }
   
  .credential-wrapper p>span{
    color:red;
    font-size:13px;
  }
 
  h2{
    font-family:"poppins",monospace;
    font-size:20px;
    letter-spacing:0.7px;
    color:wheat;
    margin-bottom:10px;

  }
  h5{
    font-size:18px;
    font-family:"poppins",monospace;
    margin-top:15px;
    margin-bottom:10px;
    letter-spacing:0.6px;

  }
  p{
    padding-top:3px;
    font-size:15px;
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
     margin-top:5px;
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
    height:100%;
    width:55%;

    
  .diagram-wrapper{
    margin-top:18px;
   
  }
  .diagram-wrapper>h3{
    text-align:center;
    font-family:sans-serif;
    font-size:18px;
    padding-bottom:8px;
  }
  .diagram-wrapper>img{
    width:100%;
    height:100%;
    border-radius:5px;
  
  }
   
    @media (max-width:1050px){
     width:100%;
  };
 
`

export const ChildHolder=styled.div`
   margin:auto;
   display:flex;
   gap:18px;
   align-items:center;
   padding:15px 10px;
   margin-bottom:38px;
   box-sizing: border-box;
   width:100%;
   justify-content:space-between;
   background:linear-gradient(to bottom , teal , black)
 
   ;
   @media (max-width:1050px){
    flex-direction:${(props)=>props.rev==="rev" ? "column-reverse":"column"};
      width:100%;
      height:auto;
      gap:0px;
      padding:5px;
      text-align:center;
  };
  
`