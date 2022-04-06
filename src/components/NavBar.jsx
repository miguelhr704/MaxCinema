import React, { useEffect, useState } from "react";
import logo from "../images/logoNW.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [navbar, setNavBar] = useState(false);
  const [button, setButton] = useState("");
  const [seeMenu, setSeeMenu] = useState("navBar__menu ver");

  const ShowMenu = () => {
    if (seeMenu == "navBar__menu") {
      setSeeMenu("navBar__menu ver");
    } else {
      setSeeMenu("navBar__menu");
    }
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    window.addEventListener("scroll", changeBackNavbar);
    if (width <= 768) {
      setButton("btn secondary");
    } else {
      setButton("btn main");
    }
    console.log(seeMenu);
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
        <img src={logo} alt="logo" srcSet="" className="navBar__img" />
        <FontAwesomeIcon
          icon={faBars}
          className="navBar__icon"
          onClick={() => {
            ShowMenu();
          }}
        />
        <ul className={seeMenu}>
          <li>Inicio</li>
          <li>Cartelera</li>
          <li>Promociones</li>
          <li>Nosotros</li>
          <li>
            <Button class={button} content="Sing In" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
