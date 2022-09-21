import { keyframes } from "styled-components";
import styled from "styled-components";

const iconsRotate=keyframes`
    0%{
        transform:rotate(0deg)
    }
    25%{
        transform:rotate(50deg)
    }
    50%{
        transform:rotate(-50deg)
    }
    100%{
        transform:rotate(0)
    }
        
`


export const FollowDiv=styled.div`
    width:100%;
    margin:auto;
    height:60px;
    display:flex;
    align-items: center;
    background:linear-gradient(
   135deg,
   white 1%,
   rgba(2,12,27,0.8) 80%
 );
    div{
        margin:auto;
        width:280px;
        display:flex;
        font-size:2.5rem;
        justify-content: space-evenly;
        align-items: center;

        & :hover{
        animation: ${iconsRotate} 0.8s infinite;
       
       color: ${({theme})=>theme.colors.orange};
      
    }
    }

  
`