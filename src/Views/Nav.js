import React from "react";
import { Link, NavLink } from "react-router";

export default function Nav() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/react-project";

  return (
    <nav className="nav nav-pills">
      <NavLink className="nav-link" to={`${rootPath}/`}>Home</NavLink>
      {/*       <NavLink className="nav-link" to={`${rootPath}/`}>About |</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/`}>Contact |</NavLink> */}
      <NavLink className="nav-link" to={`${rootPath}/Videos`}>Gallery</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/MyGreeting`}>Greeting</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/OutputPractice`}>Output Practice</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/Domain`}>Domain</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/Carousel`}>Carousel</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/ActiveNavbar`}>Active Navbar</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/ResponsiveDesign`}>Responsive Web Design</NavLink>
    </nav>
  )
}