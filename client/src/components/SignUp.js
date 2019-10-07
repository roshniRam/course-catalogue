import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUp } from '../actions/auth.action';
import { clearErrors } from '../actions/error.action';

function SignUp(props) {
	const [input, setInput] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const [isTyping, setIsTyping] = useState(true);
	const [error, setError] = useState('');

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
			setError('');
		}
	};

	const signUp = event => {
		event.preventDefault();
		setIsTyping(false);

		const { name, email, password, confirmPassword } = input;

		if (password !== confirmPassword) {
			setError("Your passwords doesn't match");
			return;
		}

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
						{props.error.authErrors && props.error.authErrors.name && !isTyping ? (
							<small className="error">{props.error.authErrors.name}</small>
						) : null}
					</div>
					<div className="input">
						<label htmlFor="signup-email">Email</label>
						<input id="signup-email" type="email" name="email" value={input.email} onChange={onChange} />
						{props.error.authErrors && props.error.authErrors.email && !isTyping ? (
							<small className="error">{props.error.authErrors.email}</small>
						) : null}
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
						{props.error.authErrors && props.error.authErrors.password && !isTyping ? (
							<small className="error">{props.error.authErrors.password}</small>
						) : null}
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
						{error !== '' && !isTyping ? <small className="error">{error}</small> : null}
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

const mapStateToProps = ({ error }) => ({ error });

export default connect(
	mapStateToProps,
	{ signUp, clearErrors }
)(SignUp);
