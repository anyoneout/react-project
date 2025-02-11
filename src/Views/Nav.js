import React from "react";
import { NavLink } from "react-router";
import SignInArea from "./SignInArea";

export default function Nav() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/react-project";

  return (
    <nav className="nav nav-pills">
      <NavLink className="nav-link" to={`${rootPath}/`} end>Home</NavLink>
      {/*       <NavLink className="nav-link" to={`${rootPath}/`}>About |</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/`}>Contact |</NavLink> */}
      <NavLink className="nav-link" to={`${rootPath}/Videos`}>Gallery</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/MyGreeting`}>Greeting</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/OutputPractice`}>Output Practice</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/Domain`}>Domain</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/SignInModal`}>Sign In Modal</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/Carousel`}>Carousel</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/Modal`}>Modal</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/Carousel`}>Carousel</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/ActiveNavbar`}>Active Navbar</NavLink>
      <NavLink className="nav-link" to={`${rootPath}/ResponsiveDesign`}>Responsive Web Design</NavLink>
      <SignInArea />
    </nav>
  )
}