import React from "react";
import NavBar from "../NavBar";
import NavBar2 from "../NavBar2";
import Video from "./Video";
import MovieInfo from "./MovieInfo";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <NavBar2 />
      <Video />
      <MovieInfo />
    </div>
  );
}

export default Header;
