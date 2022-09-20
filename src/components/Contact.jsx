import React,{useState} from 'react'
import { ChildHolder, ContactOptional, ContactWrapper, FormWrapper, InputWrapper } from '../styles/section/Contact.style'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FaWhatsapp} from "react-icons/fa"
import {SiGmail} from "react-icons/si";
const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.user_email,form.current.user_message)
    emailjs.sendForm('service_dbypmdj', 'template_73rnwuy', form.current, 'OKsVpYnIuJVJInk-2')
      .then((result) => {
         alert("Message sent !");
         
      }, (error) => {
          alert(error.text);
      });
  };
 
  return (
  
     
     <ContactWrapper id="contact">
      <hr/> 
      <h1>Please Send your Query</h1>
      <ChildHolder>
      <ContactOptional>
        <a><FaWhatsapp  style={{marginRight:"10px",fontSize:"35px"}} href="#"/>+91 8541837750</a>
        <a href="mailto:riteshkumar134340@gmail.com"><SiGmail  style={{marginRight:"10px",fontSize:"35px"}} />riteshKumar134340@gmail.com</a>
      </ContactOptional>
      
      
      <FormWrapper ref={form} onSubmit={sendEmail}>
      
      <InputWrapper>
    
      <input type="text" name="user_name" placeholder='Your name' />
   
      <input type="email" name="user_email" placeholder="Your email" />
   
      <textarea name="message" placeholder="Type your message..." />
      <button type="submit" value="Send">Submit</button>
      
        </InputWrapper>
      </FormWrapper> 
      
      </ChildHolder>
      <hr/> 
    </ContactWrapper>
 
    
  )
}

export default Contact
