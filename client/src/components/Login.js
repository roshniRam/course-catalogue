import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<section className="auth">
			<main className="auth__wrapper">
				<h1 className="heading--primary">Log In</h1>
				<form className="auth__form">
					<div className="input">
						<label htmlFor="login-email">Email</label>
						<input id="login-email" type="email" />
					</div>
					<div className="input">
						<label htmlFor="login-password">Password</label>
						<input id="login-password" type="password" />
					</div>
					<Link to="/signup" className="auth__form-info">
						New to Course Catalogue? Click here to Sign Up.
					</Link>
					<button type="submit" className="btn btn--primary">
						Log In
					</button>
				</form>
			</main>
		</section>
	);
}

export default Login;
