
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

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
     <TopBanner/>
     <Navbar/>
     <HeroSection/>
     <About/>
     <Projects/>
     <Skills/>
     <Stats/>
     <Contact/>
     <Follow/>
    </ThemeProvider>
    </>
    
   
  );
}

export default App;
