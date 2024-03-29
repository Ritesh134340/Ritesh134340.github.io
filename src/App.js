
import { ThemeProvider } from 'styled-components';
 import {theme} from "./styles/theme"
import { TopBanner } from './components/TopBanner';
import { GlobalStyles } from './styles/Globals.styled';
import { Navbar} from "./components/Navbar"
import { HeroSection } from './components/sections/HeroSection';
import Contact from './components/Contact';
import Follow from './components/Follow';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Scroll from './components/Scroll';


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
     
     <TopBanner/>
    
     <Navbar/>

     <div style={{paddingTop:"20px"}}>
     
     <hero>
     <HeroSection/>
     </hero>

     <about>
      <About/>
     </about>
     
     <project>
     <Projects/>
     </project>
     
     <skills>
     <Skills/>
     </skills>
      
      <stats>
      <Stats/>
      </stats>
    
    <contact>
    <Contact/>
    </contact>
    
     <Scroll/>

     <social>
     <Follow/>
    </social>
     
     </div>
    
    </ThemeProvider>
    </>
    
   
  );
}

export default App;
