import React from "react";
import video from "../../images/fb.mp4";

function Video() {
  const video = () => {
    return (
      <>
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
        <iframe
          id="ytplayer"
          type="text/html"
          width="135%"
          height="200%"
          src="https://www.youtube.com/embed/QfYgcLuxS5Y?playlist=QfYgcLuxS5Y&amp;loop=1&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;mute=1&amp;disablekb=1&amp;modestbranding=1"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
      </>
    );
  };
  return (
    <>
      <div className="header__video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QfYgcLuxS5Y?controls=0&autoplay=1&mute=1&playlist=QfYgcLuxS5Y&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}

export default Video;
