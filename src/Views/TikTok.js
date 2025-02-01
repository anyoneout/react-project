import React from "react";


export function TikTok(props) {
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const captions = props.children;
  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <blockquote className="tiktok-embed" cite={src} data-video-id="7445374483956780334" style={{
        Width: `${width}%`,
        Height: `${height}%`
      }} > <section> <a target="_blank" title="@petebenson7" href="https://www.tiktok.com/@petebenson7?refer=embed">@petebenson7</a> Ornament Roll Christmas Game!! 🎁🎄 <a title="games" target="_blank" href="https://www.tiktok.com/tag/games?refer=embed">#games</a> <a title="familygamenight" target="_blank" href="https://www.tiktok.com/tag/familygamenight?refer=embed">#familygamenight</a> <a title="partygames" target="_blank" href="https://www.tiktok.com/tag/partygames?refer=embed">#partygames</a><a title="christmas" target="_blank" href="https://www.tiktok.com/tag/christmas?refer=embed">#christmas</a> <a title="christmasparty" target="_blank" href="https://www.tiktok.com/tag/christmasparty?refer=embed">#christmasparty</a>  <a title="familygathering" target="_blank" href="https://www.tiktok.com/tag/familygathering?refer=embed">#familygathering</a> <a target="_blank" title="♬ original sound - Peter B" href="https://www.tiktok.com/music/original-sound-7445374472636549934?refer=embed">♬ original sound - Peter B</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    </>
  )
}

