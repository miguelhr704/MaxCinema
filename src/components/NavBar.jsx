import React, { useEffect, useState } from 'react'
import logo from '../images/logoNW.png'

function NavBar() {
    const [navbar, setNavBar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeBackNavbar)
    })
    const changeBackNavbar = () => {
        if (window.scrollY >= 100) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }
    return (
        <div>
            <nav className={navbar ? 'navBar active' : 'navBar'}>
                <img src={logo} alt="logo" srcset="" className='navBar__img' />
                <ul className='navBar__menu'>
                    <li>Nosotros</li>
                    <li>Promociones</li>
                    <li>Cartelera</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar