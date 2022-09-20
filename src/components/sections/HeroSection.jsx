import { CTAButton } from "../../styles/common/CTAbutton.styled"
import { AnimatedGradientText, HeroContent, StyledHeroSection } from "../../styles/section/HeroSection.styled"
import Contact from "../Contact"

export const HeroSection=()=>{
  return (
  <StyledHeroSection>
  
    <HeroContent>
        <h1>Ritesh Kumar</h1>
        <AnimatedGradientText>{"{Full-Stack Web Developer}"}</AnimatedGradientText>
        <h3 ></h3>

        <div>
            <CTAButton href="#projects">Projects</CTAButton>
            <CTAButton href="#contact" primary margin="0 0 0 20px">Hire Me</CTAButton>
        </div>
    </HeroContent>
  </StyledHeroSection>

  )  
}