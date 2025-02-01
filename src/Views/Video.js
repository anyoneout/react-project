import React from "react";

export function Video(props) {
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const captions = props.children;
  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <div >
        <video src={src} style={{ width: { width }, height: { height } }} controls></video >
      </div>
    </>
  )
}