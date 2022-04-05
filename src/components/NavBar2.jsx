import React, { useEffect, useState } from "react";
import logo from "../images/logoNW.png";
import Button from "./Button";

function NavBar2() {
  const [navbar2, setNavBar2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackNavbar2);
  });
  const changeBackNavbar2 = () => {
    if (window.scrollY >= 100) {
      setNavBar2(true);
    } else {
      setNavBar2(false);
    }
  };
  return (
    <>
      <nav className={navbar2 ? "navBar2 active" : "navBar2"}></nav>
    </>
  );
}

export default NavBar2;
