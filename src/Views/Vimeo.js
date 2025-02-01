import React from "react";

export function Vimeo(props) {
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const captions = props.children;
  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <iframe src={src} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{
        position: "relative",
        top: 0,
        left: 0,
        width: { width },
        height: { height }
      }} title="Procedural Romanesco Broccoli"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
    </>
  )
}
