import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.svg';

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar__logo">
				<img src={Logo} alt="Course Catalogue Logo" />
			</Link>
			<ul className="navbar__links">
				<li className="navbar__link">
					<Link to="/submit-tutorial">Submit a tutorial</Link>
				</li>
				<li className="navbar__link">
					<Link to="/login">Log In</Link>
				</li>
				<li className="navbar__link">
					<Link to="/signup">Sign Up</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
