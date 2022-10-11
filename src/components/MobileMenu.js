import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ closeMethod }) => {

    return (
        <div id="mobile-menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button id="close-nav-menu">
                <X onClick={closeMethod} />
            </button>
        </div>
    )
}

export default MobileMenu