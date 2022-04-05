import React from "react";
import video from "../../images/fb.mp4";

function Video() {
  return (
    <>
      <div className="header__video">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Video;
