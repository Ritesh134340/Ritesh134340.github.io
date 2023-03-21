import React from "react";
import {SiFirebase} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {SiRedux} from "react-icons/si"
import {SiReactrouter} from "react-icons/si"
import {SiAmazonaws} from "react-icons/si"
import {SiStyledcomponents} from "react-icons/si"
import {AiOutlineGoogle} from "react-icons/ai"
import {SiNetlify} from "react-icons/si"
import {BiLineChart} from "react-icons/bi"
import {SiJsonwebtokens} from "react-icons/si"
import {SiSlickpic} from "react-icons/si"
import {TbBrandJavascript} from "react-icons/tb"
import {SiExpress} from "react-icons/si"
import {RiHtml5Line} from "react-icons/ri"
import {FaCss3} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {SiPassport} from "react-icons/si"
import {SiMinutemailer} from "react-icons/si"
import {AiOutlineYoutube} from "react-icons/ai"
import {ImFacebook2} from "react-icons/im"
import {
  ButtonHolder,
  ChildHolder,
  ChildImageWrapper,
  CoverImage,
  IndividualProject,
  ProjectDiscription,
  ProjectWrapper,
  ProjectWrapperChild,
} from "../styles/section/Projects.styled";

const Projects = () => {
  return (
    <>
     <ProjectWrapper id="projects">
      <h1>PROJECTS</h1>
      <h4></h4>
      </ProjectWrapper>

     
      
      <ProjectWrapperChild>

      <IndividualProject>
        <ChildHolder>
          <ChildImageWrapper>
          
            <a href="https://amazingrecipe.in"
            target="_blank">

            <CoverImage  src="https://user-images.githubusercontent.com/105931703/226233064-dbedd050-6e9f-4c41-af08-795ba281a6c0.png">
            </CoverImage>
            </a>

              <div className="diagram-wrapper">
                <h3>Flow Diagram</h3>
                  <img src="https://user-images.githubusercontent.com/105931703/224886457-e3d0a73b-e71d-4ffc-a804-c9c446247d0d.svg" alt="chart" />
              </div>
             
        
           
          </ChildImageWrapper>

          <ProjectDiscription>
            <h2>Amazing Recipe</h2>
            <h5>Description :</h5>
            <p>
            Welcome to Amazing Recipe ! Our site is powered by the MERN stack, and we utilize the YouTube API to bring you the latest and most popular recipe videos on the web.
            </p>
            <p> As a user, you can create an account, sign in,watch and start adding your favorite videos to your personal list. Our user-friendly interface makes it easy to find and save the content you love.</p>
           
            <div className="credential-wrapper">
              <h5>Admin Credentials :</h5>
            <p style={{marginTop:"5px",paddingBottom:"0px",fontSize:"15px"}}>Email : <span> admin@recipe.com </span> </p>
            <p style={{marginTop:"0px",fontSize:"15px"}}>
           Password : <span>admin@recipe</span> 
            </p>

              </div>
            <h5>Tech-Stack</h5>
             <div className="tech-stack-wrapper">
             <div>
                <p>AWS</p>
                <SiAmazonaws/>
              </div>
              <div>
                <p>ReactJS</p>
                <GrReactjs/>
              </div>
              <div>
                <p>Redux</p>
                <SiRedux/>
              </div>
              <div>
                <p>Router</p>
                <SiReactrouter/>
              </div>
             <div>
              <p>YoutubeApi</p>
              <AiOutlineYoutube/>
             </div>
             <div>
              <p>FacebookApi</p>
              <ImFacebook2/>
             </div>
             <div>
              <p>GoogleApi</p>
              <AiOutlineGoogle/>
             </div>
              <div>
                <p>Styled Com</p>
                <SiStyledcomponents/>
              </div>
        
              <div>
                <p>Slick</p>
                <SiSlickpic/>
              </div>
              <div>
                <p>Javascript</p>
                <TbBrandJavascript/>
              </div>
              <div>
                <p>Html</p>
                <RiHtml5Line/>
              </div>
              <div>
                <p>Css</p>
                <FaCss3/>
              </div>
              <div>
                <p>NodeJS</p>
                <FaNodeJs/>
              </div>
              <div>
                <p>MongoDB</p>
                <SiMongodb/>
              </div>
              <div>
                <p>Express</p>
                <SiExpress/>
              </div>
              <div>
                <p>JWT</p>
                <SiJsonwebtokens/>
              </div>
              <div>
                <p>Firebase</p>
                <SiFirebase/>
              </div>
              <div>
                <p>NodeMailer</p>
                <SiMinutemailer/>
              </div>

              <div>
                <p>PassportJS</p>
                <SiPassport/>
              </div>
            
             </div>
         
            <ButtonHolder>
              <a
                href="https://github.com/Ritesh134340/Recipe_Client_Side"
                target="_blank"
              >
                Code
              </a>
              <a href="https://amazingrecipe.in" target="_blank">
                View
              </a>
            </ButtonHolder>
          </ProjectDiscription>
         
        </ChildHolder>
       
      </IndividualProject>

      <IndividualProject reverse>
        <ChildHolder rev="rev">
          <ProjectDiscription>
            <h2>TodoApplication</h2>
            <h5>Description :</h5>
            <p>
              This is TodoApplication in which MERN stack is used.Apart from
              that user can see his complete data in the form of chart.For
              signup there are two methods first one is traditional way using
              email and password and along with that user can use his google
              account for login and signup.
            </p>

            <h5>Tech-Stack</h5>
            <div className="tech-stack-wrapper">
             <div>
                <p>Netlify</p>
                <SiNetlify/>
              </div>
            
              <div>
                <p>ReactJS</p>
                <GrReactjs/>
              </div>
              <div>
                <p>Redux</p>
                <SiRedux/>
              </div>
              <div>
                <p>Router</p>
                <SiReactrouter/>
              </div>
             
              <div>
                <p>Styled Com</p>
                <SiStyledcomponents/>
              </div>
             <div>
              <p>ChartJs</p>
              <BiLineChart/>
             </div>
              <div>
                <p>Javascript</p>
                <TbBrandJavascript/>
              </div>
              <div>
                <p>Html</p>
                <RiHtml5Line/>
              </div>
              <div>
                <p>Css</p>
                <FaCss3/>
              </div>
              <div>
                <p>NodeJS</p>
                <FaNodeJs/>
              </div>
              <div>
                <p>MongoDB</p>
                <SiMongodb/>
              </div>
              <div>
                <p>Express</p>
                <SiExpress/>
              </div>
              <div>
                <p>JWT</p>
                <SiJsonwebtokens/>
              </div>
              <div>
                <p>PassportJS</p>
                <SiPassport/>
              </div>
            
             </div>
            <ButtonHolder>
              <a href="https://github.com/Ritesh134340/Mern_todo_application">
                Code
              </a>
              <a href="https://todoapplicationmern.netlify.app" target="_blank">
                View
              </a>
            </ButtonHolder>
          </ProjectDiscription>

          <ChildImageWrapper
            href="https://todoapplicationmern.netlify.app/"
            target="_blank"
          >
            <CoverImage src="https://user-images.githubusercontent.com/105931703/226313396-66daa637-80e4-414a-88f3-162c48252e68.png"></CoverImage>
          </ChildImageWrapper>
        </ChildHolder>
      </IndividualProject>

      <IndividualProject>
        <ChildHolder>
          <ChildImageWrapper
            href="https://naukri12345.netlify.app/"
            target="_blank"
          >
            <CoverImage src="https://user-images.githubusercontent.com/105931703/226314028-7d81f5ec-a6de-4f11-9430-ad83bc3af1ea.png
"></CoverImage>
          </ChildImageWrapper>

          <ProjectDiscription>
            <h2>Naukri_Clone</h2>
            <h5>Description :</h5>
            <p>
              Naukri.com is a recruitment platform that provides hiring-related
              services to corporates/recruiters, placement agencies, and job
              seekers in India and overseas. It offers multiple products like
              Resume Database Access, Job Listings, and Response Management
              Tools.
            </p>

            <h5>Tech-Stack</h5>
            <h6>MONGODB | REACT | NODEJS | EXPRESS | REDUX</h6>
            <ButtonHolder>
              <a
                href="https://github.com/Sharmacs8853/overjoyed-field-1627"
                target="_blank"
              >
                Code
              </a>
              <a href="https://naukri12345.netlify.app/" target="_blank">
                View
              </a>
            </ButtonHolder>
          </ProjectDiscription>
        </ChildHolder>
      </IndividualProject>

        <IndividualProject reverse>
          <ChildHolder rev="rev">
            <ProjectDiscription>
              <h2>GreekTrust_E-commerce</h2>
              <h5>Description :</h5>
              <p>
                GreekTrust E-commerce website is application where user can
                search and filter products with different ways.Cart
                functionality is also added where items can be added to cart and
                also be deleted from the cart.React-Redux is used to maintain
                data flow in the application.
              </p>

              <h5>Tech-Stack</h5>
              <h6>REACT | REDUX | STYLEDCOMPONENT | HTML | CSS | JAVASCRIPT</h6>
              <ButtonHolder>
                <a href="https://github.com/Ritesh134340/geektrust_teeRex_store">
                  Code
                </a>
                <a
                  href="https://greektrustecommerce.netlify.app/product"
                  target="_blank"
                >
                  View
                </a>
              </ButtonHolder>
            </ProjectDiscription>

            <ChildImageWrapper
              href="https://greektrustecommerce.netlify.app/product"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/226314801-6bbcc6b9-25fd-43ce-8e56-cb7834f81133.png"></CoverImage>
            </ChildImageWrapper>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject>
          <ChildHolder>
            <ChildImageWrapper
              href="https://rct211-tripoto-clone.netlify.app/"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/226315395-3b04e661-41ad-4925-b17c-97c6fca8832a.png"></CoverImage>
            </ChildImageWrapper>

            <ProjectDiscription>
              <h2>Tripoto_Clone</h2>
              <h5>Description :</h5>
              <p>
                Tripoto is one of the largest communities of Travelers in the
                world. We are crowd-sourcing amazing travel itineraries from
                around the world. Tripoto allows travelers to share their travel
                stories and discover amazing itineraries by real travelers.
              </p>

              <h5>Tech-Stack</h5>
              <h6>REACT | REDUX | CHAKRAUI | FIREBASE | STYLEDCOMPONENT</h6>
              <ButtonHolder>
                <a href="https://github.com/HackerSushant76/flowery-ear-2957">
                  Code
                </a>
                <a
                  href="https://rct211-tripoto-clone.netlify.app/"
                  target="_blank"
                >
                  View
                </a>
              </ButtonHolder>
            </ProjectDiscription>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject reverse>
          <ChildHolder rev="rev">
            <ProjectDiscription>
              <h2>Fitness_Blender_Clone</h2>
              <h5>Description :</h5>
              <p>
                As per name Fitness Blender is a fitness website. It has
                different articles,recepie videos, workout videos and much more.
                This website provides passes through which someone can get
                special access to videos and articles.
              </p>

              <h5>Tech-Stack</h5>
              <h6>HTML | CSS | JAVASCRIPT ES6 | LOCAL-STORAGE </h6>
              <ButtonHolder>
                <a
                  href="https://github.com/MoHitksS/vengeful-thrill-8133"
                  target="_blank"
                >
                  Code
                </a>
                <a href=" https://fitness-blender.netlify.app" target="_blank">
                  View
                </a>
              </ButtonHolder>
            </ProjectDiscription>
            <ChildImageWrapper
              href=" https://fitness-blender.netlify.app"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/226316192-08aa4be7-ac14-4e5f-990a-c29ea5f906af.png"></CoverImage>
            </ChildImageWrapper>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject>
          <ChildHolder>
            <ChildImageWrapper
              href="https://weather-application1343.netlify.app/"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/226317107-61751c64-b5cd-4f35-bef5-d92a9890bf5a.png"></CoverImage>
            </ChildImageWrapper>

            <ProjectDiscription>
              <h2>Weather Application</h2>
              <h5>Description :</h5>
              <p>
                Weather application show the live weather data of the user's
                current location.Weather data of a particular location can be
                checked by searching the name of a particular location.Apart
                from that 8 day weather forecast and sunrise and sunset time can
                also be track through the application.
              </p>

              <h5>Tech-Stack</h5>
              <h6>
                REACT | CHARTJS | STYLED COMPONENTS| HTML | CSS | JAVASCRIPT
              </h6>
              <ButtonHolder>
                <a
                  href="https://github.com/Ritesh134340/Weather_app"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  href="https://weather-application1343.netlify.app/"
                  target="_blank"
                >
                  View
                </a>
              </ButtonHolder>
            </ProjectDiscription>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject reverse>
          <ChildHolder rev="rev">
            <ProjectDiscription>
              <h2>S Sense_Clone</h2>
              <h5>Description :</h5>
              <p>
                S Sense is a E-commerce website where someone can buy cloths and
                beauty products.It has seperate search functionality for men and
                women sections.It also provides exciting discounts on products.
              </p>

              <h5>Tech-Stack</h5>
              <h6>HTML | CSS | JAVASCRIPT | JSON-SERVER</h6>
              <ButtonHolder>
                <a
                  href="https://github.com/suraj-996/ssense_unit2_project"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  href="https://suraj-996.github.io/ssense_unit2_project/"
                  target="_blank"
                >
                  View
                </a>
              </ButtonHolder>
            </ProjectDiscription>

            <ChildImageWrapper
              href="https://suraj-996.github.io/ssense_unit2_project/"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/226317654-c704ea5a-41ef-4382-bd53-a7391ff9fb85.png"></CoverImage>
            </ChildImageWrapper>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject>
          <ChildHolder>
            <ChildImageWrapper
              href="https://spicy-representative-2917.vercel.app"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/226318157-73602b9b-4971-4a87-b4cd-c6a4251fc665.png"></CoverImage>
            </ChildImageWrapper>

            <ProjectDiscription>
              <h2>Expedia_clone</h2>
              <h5>Description :</h5>
              <p>
                Expedia is a service based website where one can book online
                filghts,hotels,cars and much more.Expedia provides discounts on
                holiday package booking.
              </p>

              <h5>Tech-Stack</h5>
              <h6>HTML | CSS | JAVASCRIPT | REACT | FIREBASE | CHAKRA UI</h6>
              <ButtonHolder>
                <a
                  href="https://github.com/Ritesh134340/spicy-representative-2917"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  href="https://spicy-representative-2917.vercel.app"
                  target="_blank"
                >
                  View
                </a>
              </ButtonHolder>
            </ProjectDiscription>
          </ChildHolder>
        </IndividualProject>



      </ProjectWrapperChild>
    </>
   
   
  );
};

export default Projects;
