import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
 {/* className='footer'> will need it later for css. */}
      <div className='socialMedia'>
         <a href="https://github.com/Alhasan-0ss" target="_blank"><GitHubIcon /></a>
        <a href="https://linkedin.com/in/alhasan-al-azzawi-0b4a99116/" target="_blank"><LinkedInIcon /></a>
         
        {/* In this div we will insert all icons that will links for my Github, Linkden. */}
      </div>
      
      <p> &copy; 2023 Alhasan.com</p>
      {/* This is a p tag that has a uniqe code sample to implmant and generate the commen info there. */}
    </div>
  )
}

export default Footer;