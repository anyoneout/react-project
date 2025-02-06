import React, { useEffect, useState } from "react";
import { TikTok } from "./TikTok";
import { Twitch } from "./Twitch";
import { Video } from "./Video";
import { Vimeo } from "./Vimeo";
import { YouTube } from "./YouTube";
import "./Videos.scss";
import { Link } from "react-router";
import Nav from "./Nav";


const height = 500;
const width = 500;

export function Videos() {
  const [video, setVideo] = useState(<YouTube label="Hello YouTube" height={height} width={width} src="https://www.youtube.com/embed/PkZNo7MFNFg?si=Kl3WyBnAVe9eR03J">Youtube caption</YouTube>);

  useEffect(componentDidMount, []);

  return (
    <>
      <main>
        {video}
        <Vimeo label="Hello Vimeo" height={height} width={width} src="https://player.vimeo.com/video/187512360?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479">new sentence</Vimeo>
        <Twitch label="Hello Twitch" height={height} width={width} src="https://player.twitch.tv/?video=2327784555&parent=127.0.0.1">What up twitch</Twitch>
        <Video label="Hello Local" height={height} width={width} src="./assets/test.mp4">Local video</Video>
        <TikTok label="Hello TikTok" height={height} width={width} src="https://www.tiktok.com/@petebenson7/video/7445374483956780334">Enjoy The new Year!! </TikTok>
      </main>
    </>
  )

  function componentDidMount() {
    setTimeout(hideVideo, 3000);
    const titleTag = document.getElementById("titleTag");
    titleTag.innerHTML = "React Workspace - Videos";
  }


  function hideVideo() {
    setVideo(<></>);
  }
}