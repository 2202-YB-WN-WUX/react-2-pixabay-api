import { CardImage, ThreeDots } from 'react-bootstrap-icons';
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const [MenuIsOpen, openMenu] = useState(false)
    return (
        <>
            <div id="navbar">
                <div id="logo">
                    <CardImage />
                </div>
                <div id="desktop-menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div id="nav-icon">
                    <ThreeDots />
                </div>
            </div>
            {/* check if the menu is open, by checking if MenuIsOpen===true */}
            {/* if it's true, then render the MobileMenu component */}
            {MenuIsOpen && <MobileMenu />}
        </>
    )
}

export default Navbar