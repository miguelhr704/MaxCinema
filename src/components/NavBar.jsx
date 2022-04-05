import React, { useEffect, useState } from "react";
import logo from "../images/logoNW.png";
import Button from "./Button";

function NavBar() {
  const [navbar, setNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackNavbar);
  });
  const changeBackNavbar = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  return (
    <>
      <nav className={navbar ? "navBar active" : "navBar"}>
        <img src={logo} alt="logo" srcset="" className="navBar__img" />
        <ul className="navBar__menu">
          <li>Inicio</li>
          <li>Cartelera</li>
          <li>Promociones</li>
          <li>Nosotros</li>
          <li>
            <Button class="btn main" content="Sing In" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
