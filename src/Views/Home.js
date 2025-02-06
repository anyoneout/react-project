import React, { useEffect } from "react"

import handleClick from "../controllers/handleClick";
import handleSubmit from "../controllers/handleSubmit";
import "./Home.scss";
import src from "../assets/image.jpg";
import Nav from "./Nav";
import Modal from "./Modal";

const number = "4";
const message = `1 2 3 ${number}`;
export function Home() {


  useEffect(componentDidMount, []);


  return (
    <>
      <main id="homeMain">
        <Modal />
        <img id="imagePic" data-bs-toggle="tooltip" data-bs-title="headpiece" src={src} width="100px"></img>
        <h1>Hello World! command line is newt test second test {message}</h1>
        <ol className="list-group">colors
          <li className="list-item">blue</li>
          <li className="highlight list-item">red</li>
          <li className="list-item">purple</li>
          <li className="list-item">green</li>
        </ol>
        <button onClick={handleClick}>click</button>
        <output id="outputTag"></output>
        <form onSubmit={handleSubmit}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </main >
      <footer id="homeFooter">Footer</footer>
    </>
  )

}

function componentDidMount() {
  const titleTag = document.getElementById("titleTag");
  titleTag.innerHTML = ("React Workspace");
  const imageTag = document.getElementById("imagePic");
  new bootstrap.Tooltip(imageTag);
}
