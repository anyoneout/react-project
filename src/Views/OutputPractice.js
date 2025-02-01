import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import Nav from "./Nav";

export function OutputPractice() {
  const [message, setMessage] = useState(<p>default useState message via jsx paragraph</p>)
  return (
    <>
      <Nav />
      <main>
        <form onSubmit={handleSubmit}>Enter some text
          <input />
          <input type="submit" />
        </form>
        <output>{message}</output>
      </main>

    </>
  );

  function handleSubmit(event = new Event) {
    const input = event.target;
    const textInput = input[0];
    const userInput = textInput.value;
    setMessage(<>{message} < p > You submitted {userInput}</p ></>)
  }
}