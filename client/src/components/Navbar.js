import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from '../actions/auth.action';

import Logo from '../img/logo.svg';

function Navbar(props) {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar__logo">
				<img src={Logo} alt="Course Catalogue Logo" />
			</Link>
			<ul className="navbar__links">
				<li className="navbar__link">
					<Link to="/submit-tutorial">Submit a tutorial</Link>
				</li>
				{!props.auth.authenticated ? (
					<>
						<li className="navbar__link">
							<Link to="/login">Log In</Link>
						</li>
						<li className="navbar__link">
							<Link to="/signup">Sign Up</Link>
						</li>
					</>
				) : (
					<li className="navbar__link">
						<Link to="/" onClick={props.logOut}>Log Out</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
	mapStateToProps,
	{ logOut }
)(Navbar);
