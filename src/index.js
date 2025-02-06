import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Videos } from "./Views/Videos";
import { MyGreeting } from "./Views/MyGreeting";
import { OutputPractice } from "./Views/OutputPractice";
import Domain from "./Views/Domain";
import Carousel from "./Views/Carousel";
import ActiveNavbar from "./Views/ActiveNavbar";
import ResponsiveDesign from "./Views/ResponsiveDesign";
import CollapsibleNavbar from "./Views/CollapsibleNavbar";
import Modal from "./Views/Modal";
import SignInModal from "./Views/SingInModal";
import Header from "./Views/Header";
import Footer from "./Views/Footer";
import Nav from "./Views/Nav";



const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const domain = window.location.hostname;
let rootPath = "";
if (domain === "anyoneout.github.io") rootPath = "/react-project";
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />} />
      <Route path={`${rootPath}/Videos`} element={<Videos />} />
      <Route path={`${rootPath}/MyGreeting`} element={<MyGreeting />} />
      <Route path={`${rootPath}/OutputPractice`} element={<OutputPractice />} />
      <Route path={`${rootPath}/Domain`} element={<Domain />} />
      <Route path={`${rootPath}/Carousel`} element={<Carousel />} />
      <Route path={`${rootPath}/Modal`} element={<Modal />} />
      <Route path={`${rootPath}/CollapsibleNavbar`} element={<CollapsibleNavbar />} />
      <Route path={`${rootPath}/ActiveNavbar`} element={<ActiveNavbar />} />
      <Route path={`${rootPath}/SignInModal`} element={<SignInModal />} />
      <Route path={`${rootPath}/ResponsiveDesign`} element={<ResponsiveDesign />} />
    </Routes>
    <Footer />
  </BrowserRouter>


);






