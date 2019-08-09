import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUp } from '../actions/auth.action';

function SignUp(props) {
	const [input, setInput] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const onChange = event =>
		setInput({
			...input,
			[event.target.name]: event.target.value
		});

	const signUp = event => {
		event.preventDefault();

		const { name, email, password, confirmPassword } = input;

		props.signUp({ name, email, password }, props.history);
	};

	return (
		<section className="auth">
			<main className="auth__wrapper">
				<h1 className="heading--primary">Sign Up</h1>
				<form className="auth__form" onSubmit={signUp}>
					<div className="input">
						<label htmlFor="signup-name">Name</label>
						<input id="signup-name" name="name" value={input.name} onChange={onChange} />
					</div>
					<div className="input">
						<label htmlFor="signup-email">Email</label>
						<input id="signup-email" type="email" name="email" value={input.email} onChange={onChange} />
					</div>
					<div className="input">
						<label htmlFor="signup-password">Password</label>
						<input
							id="signup-password"
							type="password"
							name="password"
							value={input.password}
							onChange={onChange}
						/>
					</div>
					<div className="input">
						<label htmlFor="signup-confirm-password">Confirm Password</label>
						<input
							id="signup-confirm-password"
							type="password"
							name="confirmPassword"
							value={input.confirmPassword}
							onChange={onChange}
						/>
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

export default connect(
	null,
	{ signUp }
)(SignUp);
