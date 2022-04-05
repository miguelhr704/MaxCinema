import React from "react";
import NavBar from "../NavBar";
import Video from "./Video";
import MovieInfo from "./MovieInfo";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <Video />
      <MovieInfo />
    </div>
  );
}

export default Header;
