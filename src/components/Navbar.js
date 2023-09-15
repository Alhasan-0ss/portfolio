import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"; // This is to close the navbar after selecting the page i want to nav with.
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import Experience from '../pages/Experience';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false); // This is to work when my website expand and work on phone navi.

  const location = useLocation(); //This is to close the navbar after selecting the page i want to nav with.
  useEffect(() => {setExpandNavbar(false); }, [location]); //this is good for user Experience to see your website link location.
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
    <div className="toggleButton">
        <button onClick={() => {setExpandNavbar((prev) => !prev);}} >

          <ReorderIcon />
        </button>
    </div>
    <div className="links">
        <Link to="/"> Home </Link>
        <Link to="projects"> Projects </Link>
        <Link to="experience"> Experience</Link>
        </div>
    </div>
  );
}

export default Navbar; 