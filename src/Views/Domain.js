import React from "react";
import Nav from "./Nav";

export default function Domain() {
  const domain = window.location.hostname;
  const port = window.location.port;
  return (
    <main>
      <h1>Domain</h1>
      <p>{domain}</p>
      <p>{port}</p>
    </main>
  )

}