import { X } from 'react-bootstrap-icons';

const MobileMenu = () => {
    return (
        <div id="mobile-menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button id="close-nav-menu">
                <X />
            </button>
        </div>
    )
}

export default MobileMenu