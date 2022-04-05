import React from 'react'
import NavBar from './NavBar'
import video from '../images/fb.mp4'

function Header() {
    return (
        <div className='header'>

            <NavBar />
            <video autoPlay loop muted >
                <source src={video} type="video/mp4" />
            </video>
            <div>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
            </div>


        </div>
    )
}

export default Header