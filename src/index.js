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



const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Videos" element={<Videos />} />
      <Route path="/MyGreeting" element={<MyGreeting />} />
      <Route path="/OutputPractice" element={<OutputPractice />} />
      <Route path="/Domain" element={<Domain />} />
      <Route path="/Carousel" element={<Carousel />} />
      <Route path="/ActiveNavbar" element={<ActiveNavbar />} />
      <Route path="/ResponsiveDesign" element={<ResponsiveDesign />} />

    </Routes>
  </BrowserRouter>


);






