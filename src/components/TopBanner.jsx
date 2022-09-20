import React from 'react'
import { BannerSection, StyledTopBanner } from '../styles/layout/TopBanner.styled'

export const TopBanner=()=>{
  return <>
    <StyledTopBanner>

     <BannerSection showOnMobile>
       <a href="mailto:riteshkumar134340@gmail.com" >😊    riteshkumar134340@gmail.com</a> 
    </BannerSection> 

      <BannerSection>
        ⚡ Available for Hire
    </BannerSection>   
    </StyledTopBanner>
  </>  
}
