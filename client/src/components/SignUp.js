import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
	return (
		<section className="auth">
			<main className="auth__wrapper">
				<h1 className="heading--primary">Sign Up</h1>
				<form className="auth__form">
					<div className="input">
						<label htmlFor="signup-name">Name</label>
						<input id="signup-name" />
					</div>
					<div className="input">
						<label htmlFor="signup-email">Email</label>
						<input id="signup-email" type="email" />
					</div>
					<div className="input">
						<label htmlFor="signup-password">Password</label>
						<input id="signup-password" type="password" />
					</div>
					<div className="input">
						<label htmlFor="signup-confirm-password">Confirm Password</label>
						<input id="signup-confirm-password" type="password" />
					</div>
					<Link to="/login" className="auth__form-info">
						Already have an account? Click here to Log In.
					</Link>
					<button type="submit" className="btn btn--primary">
						Sign Up
					</button>
				</form>
			</main>
		</section>
	);
}

export default SignUp;
