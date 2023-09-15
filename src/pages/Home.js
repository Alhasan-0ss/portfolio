import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Alhasan</h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning and creating </p>
        <a href="https://linkedin.com/in/alhasan-al-azzawi-0b4a99116/" target="_blank"><LinkedInIcon /></a>
        <a href="mailto:https://alhassan.alazzawi92@gmail.com" target="_blank"><EmailIcon /></a>
        <a href="https://github.com/Alhasan-0ss" target="_blank"><GitHubIcon /></a>
        </div>
      </div>
      <div className='skills'> <h1> Skills</h1>
      <ol className='list'> 
      {/* To make list number for my skills below */}
        <li className='item'>
          <h2>Front-End</h2>
          <span>
            ReactJS, HTML, CSS, React Native, NPM, Icons, MateriaLlUT, Yarn, WordPress, JavaScript
          </span>
          </li>
          < li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, ExpressJS, MySQL, MangoDB, JavaScript, PHP, Python(Flask-server)
            </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>JavaScript, Python, Java, C#, TypeScript</span>
        </li>
        <li className='item'>
          <h2>Data Science</h2>
          <span>With basic knowledge of Business intelligence and Data Science
            (Data manipulation and cleaning, data visualization, machine learning, and working with database). </span>
        </li>
        

      </ol>
      
      </div>
    </div>
  )
}

export default Home;