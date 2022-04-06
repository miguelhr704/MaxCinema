import React from "react";
import MovieItem from "./MovieItem";

function MoviesGrid() {
  return (
    <div className="moviesGrid">
      <div className="moviesGrid__titulo">Estrenos</div>
      <div className="moviesGrid__container">
        <MovieItem
          name="Animales Fantásticos: Los Secretos de Dumbledore"
          src="../../../images/movieInfoImage.jpeg"
        />
        <MovieItem
          name="Doctor Strange in the Multiverse of Madnes"
          src="../../../images/doctor-strange.jpeg"
        />
        <MovieItem name="Sonic 2" src="../../../images/sonic2.jpeg" />
      </div>
    </div>
  );
}

export default MoviesGrid;
