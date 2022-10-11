import { CardImage, ThreeDots } from 'react-bootstrap-icons';
import { useState } from 'react'
import MobileMenu from './MobileMenu'

// import linking from react-router
import { Link } from "react-router-dom"

const Navbar = () => {
    const [MenuIsOpen, openMenu] = useState(false)

    const toggleMobileMenu = () => {
        // exclamation mark inverts a boolean value
        openMenu(!MenuIsOpen)
    }

    return (
        <>
            <div id="navbar">
                <div id="logo">
                    <CardImage />
                </div>
                <div id="desktop-menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div id="nav-icon">
                    <ThreeDots onClick={toggleMobileMenu} />
                </div>
            </div>
            {/* check if the menu is open, by checking if MenuIsOpen===true */}
            {/* if it's true, then render the MobileMenu component */}
            {MenuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )
}

export default Navbar

// CLOUD

// Create a contact page
// Create another page of your choice
// Style them up
// Put the links in the footer and mobile menu
// Play round with animations