import React from "react";
import Imagen from "../../images/movieInfoImage.jpeg";
import Button from "../Button";
function MovieInfo() {
  return (
    <>
      <div className="movieInfo">
        <div className="movieInfo__imgCont"></div>
        <div className="movieInfo__textContainer">
          <h1 className="movieInfo__textContainer-title">
            Animales Fantasticos: Los Secretos de Dumbledor
          </h1>
          <article className="movieInfo__textContainer-text">
            Ante una severa amenaza, el magizoólogo Newt Scamander lidera a un
            valiente grupo de magos y brujas que busca detener al malvado
            Gellert Grindelwald.
          </article>
          <section className="movieInfo__textContainer-btn">
            <Button class="btn main" content="Comprar Boletos" />
            <Button class="btn secondary" content="Ver Trailer" />
          </section>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
