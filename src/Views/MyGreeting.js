import React, { useEffect, useState } from "react"
import Nav from "./Nav";


export function MyGreeting() {

  const [greeting, setGreeting] = useState("Amazing World!");
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidUpdate, [greeting]);
  useEffect(componentDidMount, []);
  useEffect(componentDidUnmount, []);

  return (
    <section>
      <h3>My Greeting</h3>
      <p>{greeting}</p>
    </section>
  );
  function changeGreeting() {
    setGreeting("Have a nice day!");
  }
  function componentDidUpdate() {
    if (didMount) console.log("the component updated.")
  }

  function componentDidUnmount() {
    function displayMessage() {
      console.log("component did unnmount")
    }
    return displayMessage;

  }

  function componentDidMount() {


    /*     console.log("the component mounted or updated"); */
    setDidMount(true);
    console.log("The component mounted.");
    setTimeout(changeGreeting, 5000);

    return componentDidUnmount;
  }
}

