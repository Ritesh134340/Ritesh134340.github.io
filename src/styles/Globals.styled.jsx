import { createGlobalStyle } from "styled-components";
export const GlobalStyles=createGlobalStyle`
 *,
 *::before,
 *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;

 }
 html{
    scroll-behavior:smooth ;
    font-family:"Share  Tech Mono",monospace;
    color:${({theme})=>theme.colors.white};
    background:${({theme})=>theme.colors.navyBlue};
    font-size:12px;

 }

 *{
    text-decoration:"none";
    transition:"all 250ms ease-in-out";
    
 }

 ul{
    list-style: none;

 }
 hr{
   background: linear-gradient(to right,
   ${({theme})=>theme.colors.orange} 0%,
   ${({theme})=>theme.colors.purple} 100%
   );
   border:0;
   height:1px
 }
 ::-webkit-scrollbar{
   width:15px;
 }
::-webkit-scrollbar-track{
   background:#7a8ba9;
}
::-webkit-scrollbar-thumb{
   background:#31435f;
   border-radius:30px;
}
::-webkit-scrollbar-thumb:hover{
   background:#202e46;
}

`
