import React from "react";
import image from "../../images/movieInfoImage.jpeg";

function MovieItem(props) {
  return (
    <div className="movieItem">
      <p className="movieItem__enlace-text">{props.name}</p>
      <img
        src={props.src}
        alt="cover"
        srcset=""
        className="movieItem__enlace-img"
      />
    </div>
  );
}

export default MovieItem;
