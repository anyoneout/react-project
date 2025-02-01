import React from "react";

export function Twitch(props) {
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const captions = props.children;
  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <iframe src={src} frameBorder="0" allowFullScreen={true} scrolling="no" height={height} width={width}></iframe>

    </>
  )
}