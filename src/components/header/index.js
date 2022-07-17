import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi';

import './style.css';

function Header() {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    return (
        <div>
            <div className={`header ${toggle === true ? 'active' : ''}`}>
                <GiHamburgerMenu className="burger" style={{ left: `${location.pathname === "/gallery" || location.pathname === "/favourite" ? "-95px" : "-50%"}` }} onClick={() => setToggle(!toggle)} />
                <Link className="link" onClick={() => setToggle(!toggle)} to="/">About</Link>
                <Link className="link" onClick={() => setToggle(!toggle)} to="/gallery">Gallery</Link>
                <Link className="link" onClick={() => setToggle(!toggle)} to="/favourite">Favourite</Link>
                <Link className="link" onClick={() => setToggle(!toggle)} to="/contacts">Contacts</Link>
            </div>
            <div className="header-bg" onClick={() => setToggle(!toggle)} style={{ display: `${toggle === true ? 'inline' : 'none'}` }}></div>
        </div>
    )
}
export default Header;