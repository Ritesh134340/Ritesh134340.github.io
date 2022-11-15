import React from 'react'
import { ButtonHolder, ChildHolder, ChildImageWrapper, CoverImage, IndividualProject, ProjectDiscription, ProjectWrapper, ProjectWrapperChild } from '../styles/section/Projects.styled'

const Projects = () => {
  return (

    <ProjectWrapper id="projects">
      <h1>PROJECTS</h1>
     <h4></h4>
     <IndividualProject >

         
<ChildHolder>
 

<ChildImageWrapper href="https://naukri12345.netlify.app/" target="_blank">
<CoverImage src="https://user-images.githubusercontent.com/105931703/201856774-9736373d-5cf7-487e-a69f-48282f2ef351.png"></CoverImage>
</ChildImageWrapper>

<ProjectDiscription>
  <h2>Naukri_Clone</h2> 
  <h5>Description :</h5>
   <p>Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas. It offers multiple products like Resume Database Access, Job Listings, and Response Management Tools.</p>
  
   <h5>Tech-Stack</h5>
   <h6>MONGODB | REACT | NODEJS | EXPRESS | REDUX</h6>
   <ButtonHolder>
     <a href="https://github.com/Sharmacs8853/overjoyed-field-1627" target="_blank">Code</a>
     <a href="https://naukri12345.netlify.app/" target="_blank">View</a>
  </ButtonHolder>
</ProjectDiscription>
</ChildHolder>


</IndividualProject>
    <ProjectWrapperChild>
  
    <IndividualProject reverse>

         
<ChildHolder>
 

   
<ProjectDiscription>
  <h2>Tripoto_Clone</h2> 
  <h5>Description :</h5>
   <p>Tripoto is one of the largest communities of Travelers in the world. We are crowd-sourcing amazing travel itineraries from around the world. Tripoto allows travelers to share their travel stories and discover amazing itineraries by real travelers.</p>
  
   <h5>Tech-Stack</h5>
   <h6>REACT | REDUX | CHAKRAUI | FIREBASE | STYLEDCOMPONENT</h6>
   <ButtonHolder>
     <a href="https://github.com/HackerSushant76/flowery-ear-2957">Code</a>
     <a href="https://rct211-tripoto-clone.netlify.app/" target="_blank">View</a>
  </ButtonHolder>
</ProjectDiscription>


<ChildImageWrapper href="https://rct211-tripoto-clone.netlify.app/" target="_blank">
<CoverImage src="https://user-images.githubusercontent.com/105931703/201858980-a1544fe6-368e-4df6-a223-ef2b76112593.png"></CoverImage>
</ChildImageWrapper>

</ChildHolder>


</IndividualProject>



  
      <IndividualProject >

         
        <ChildHolder>
         
        <ChildImageWrapper href=" https://fitness-blender.netlify.app" target="_blank">
     <CoverImage src="./images/fitness_blender/landing.png"></CoverImage>
         
     </ChildImageWrapper>
   
        <ProjectDiscription>
          <h2>Fitness_Blender_Clone</h2> 
          <h5>Description :</h5>
           <p>As per name Fitness Blender is a fitness website. It has different articles,recepie videos, workout videos and much more. This website provides passes through which someone can get special access to videos and articles.</p>
         
           <h5>Tech-Stack</h5>
           <h6>HTML | CSS | JAVASCRIPT ES6 | LOCAL-STORAGE </h6>
           <ButtonHolder>
             <a href="https://github.com/MoHitksS/vengeful-thrill-8133" target="_blank">Code</a>
             <a href=" https://fitness-blender.netlify.app" target="_blank">View</a>
          </ButtonHolder>
        </ProjectDiscription>
        </ChildHolder>
     
   
      </IndividualProject>



      <IndividualProject reverse>

         
<ChildHolder>
 

   
<ProjectDiscription>
  <h2>S Sense_Clone</h2> 
  <h5>Description :</h5>
   <p>S Sense is a E-commerce website where someone can buy cloths and beauty products.It has seperate search functionality for men and women sections.It also provides exciting discounts on products.</p>
  
   <h5>Tech-Stack</h5>
   <h6>HTML | CSS | JAVASCRIPT | JSON-SERVER</h6>
   <ButtonHolder>
     <a href="https://github.com/suraj-996/ssense_unit2_project" target="_blank">Code</a>
     <a href="https://suraj-996.github.io/ssense_unit2_project/" target="_blank">View</a>
  </ButtonHolder>
</ProjectDiscription>


<ChildImageWrapper href="https://suraj-996.github.io/ssense_unit2_project/" target="_blank">
<CoverImage src="./images/s_sense/landing.png"></CoverImage>
</ChildImageWrapper>

</ChildHolder>


</IndividualProject>


<IndividualProject>

         
<ChildHolder>

<ChildImageWrapper href="https://spicy-representative-2917.vercel.app" target="_blank">
<CoverImage src="./images/expedia/landing.png">
</CoverImage>
</ChildImageWrapper>

   
<ProjectDiscription>
  <h2>Expedia_clone</h2> 
  <h5>Description :</h5>
   <p>Expedia is a service based website where one can book online filghts,hotels,cars and much more.Expedia provides discounts on holiday package booking.</p>

   <h5>Tech-Stack</h5>
   <h6>HTML | CSS | JAVASCRIPT | REACT | FIREBASE | CHAKRA UI</h6>
   <ButtonHolder>
     <a href="https://github.com/Ritesh134340/spicy-representative-2917" target="_blank">Code</a>
     <a href="https://spicy-representative-2917.vercel.app" target="_blank">View</a>
  </ButtonHolder>
</ProjectDiscription>
</ChildHolder>


</IndividualProject>

    </ProjectWrapperChild>

    </ProjectWrapper>
    
  )
}

export default Projects
