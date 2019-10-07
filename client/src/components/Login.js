import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logIn } from '../actions/auth.action';
import { clearErrors } from '../actions/error.action';

function Login(props) {
	const [input, setInput] = useState({
		email: '',
		password: ''
	});
	const [isTyping, setIsTyping] = useState(true);

	const onChange = event => {
		setInput({
			...input,
			[event.target.name]: event.target.value
		});

		if (!isTyping) {
			setIsTyping(true);
		}

		if (props.error.authErrors) {
			props.clearErrors();
		}
	};

	const logIn = event => {
		event.preventDefault();
		setIsTyping(false);

		const { email, password } = input;

		props.logIn({ email, password }, props.history);
	};

	return (
		<section className="auth">
			<main className="auth__wrapper">
				<h1 className="heading--primary">Log In</h1>
				<form className="auth__form" onSubmit={logIn}>
					<div className="input">
						<label htmlFor="login-email">Email</label>
						<input id="login-email" type="email" name="email" value={input.email} onChange={onChange} />
						{props.error.authErrors && props.error.authErrors.email && !isTyping ? (
							<small className="error">{props.error.authErrors.email}</small>
						) : null}
					</div>
					<div className="input">
						<label htmlFor="login-password">Password</label>
						<input
							id="login-password"
							type="password"
							name="password"
							value={input.password}
							onChange={onChange}
						/>
						{props.error.authErrors && props.error.authErrors.password && !isTyping ? (
							<small className="error">{props.error.authErrors.password}</small>
						) : null}
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

const mapStateToProps = ({ error }) => ({ error });

export default connect(
	mapStateToProps,
	{ logIn, clearErrors }
)(Login);
