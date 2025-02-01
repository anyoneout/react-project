import React, { useEffect } from "react"

export function YouTube(props) {
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const captions = props.children;

  useEffect(componentDidUnmount, []);


  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <iframe
        width={width}
        height={height} src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </>
  )

  function componentDidUnmount() {
    return function () {
      console.log("YouTube component unmounted");
    }
  }
}