import React from "react";
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
    <ProjectWrapper id="projects">
      <h1>PROJECTS</h1>
      <h4></h4>
      <IndividualProject reverse>
        <ChildHolder>
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
            <h6>
              REACT | REDUX | PASSPORTJS | CHARTJS | STYLEDCOMPONENT | MONGODB
            </h6>
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
            <CoverImage src="https://user-images.githubusercontent.com/105931703/213341996-37f302a6-6282-448b-8667-6cc60fc86030.png"></CoverImage>
          </ChildImageWrapper>
        </ChildHolder>
      </IndividualProject>

      <IndividualProject>
        <ChildHolder>
          <ChildImageWrapper
            href="https://naukri12345.netlify.app/"
            target="_blank"
          >
            <CoverImage src="https://user-images.githubusercontent.com/105931703/201856774-9736373d-5cf7-487e-a69f-48282f2ef351.png"></CoverImage>
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
      <ProjectWrapperChild>
        <IndividualProject reverse>
          <ChildHolder>
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
              <CoverImage src="https://user-images.githubusercontent.com/105931703/213372419-7a8080f5-5f8a-4666-a4d0-c72c309c3545.png"></CoverImage>
            </ChildImageWrapper>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject reverse>
          <ChildHolder>
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

            <ChildImageWrapper
              href="https://rct211-tripoto-clone.netlify.app/"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/201858980-a1544fe6-368e-4df6-a223-ef2b76112593.png"></CoverImage>
            </ChildImageWrapper>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject>
          <ChildHolder>
            <ChildImageWrapper
              href=" https://fitness-blender.netlify.app"
              target="_blank"
            >
              <CoverImage src="./images/fitness_blender/landing.png"></CoverImage>
            </ChildImageWrapper>

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
          </ChildHolder>
        </IndividualProject>

        <IndividualProject>
          <ChildHolder>
            <ChildImageWrapper
              href="https://weather-application1343.netlify.app/"
              target="_blank"
            >
              <CoverImage src="https://user-images.githubusercontent.com/105931703/213369881-4a6a635d-4931-45e3-b9a9-aea2d89292c2.png"></CoverImage>
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
          <ChildHolder>
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
              <CoverImage src="./images/s_sense/landing.png"></CoverImage>
            </ChildImageWrapper>
          </ChildHolder>
        </IndividualProject>

        <IndividualProject>
          <ChildHolder>
            <ChildImageWrapper
              href="https://spicy-representative-2917.vercel.app"
              target="_blank"
            >
              <CoverImage src="./images/expedia/landing.png"></CoverImage>
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
    </ProjectWrapper>
  );
};

export default Projects;
