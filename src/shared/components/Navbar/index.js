import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ links }) {
    return(
        <div className="navbar">
            <nav className="navbar__nav">
                {links.map((link) =>
                    <Link key={link.id} className="navbar__link" to={link.path}>
                        {link.name}
                    </Link>
                )}
            </nav>
        </div>
    );
}

export default Navbar;