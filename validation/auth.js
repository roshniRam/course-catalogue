const validator = require('validator');

const isEmpty = require('../utils/isEmpty');

const loginValidator = ({ email, password }) => {
	const errors = {};

	if (!validator.isEmail(email)) {
		errors.email = 'Please enter a valid Email Id';
	}

	if (validator.isEmpty(email, { ignore_whitespace: true })) {
		errors.email = 'Please enter your Email Id';
	}

	if (validator.isEmpty(password)) {
		errors.password = 'Please enter the password';
	}

	return {
		isValid: isEmpty(errors),
		errors
	};
};

const registerValidator = ({ name, email, password }) => {
	const errors = {};

	if (validator.isEmpty(name, { ignore_whitespace: true })) {
		errors.name = 'Please enter your name';
	}

	if (!validator.isEmail(email)) {
		errors.email = 'Please enter a valid Email Id';
	}

	if (validator.isEmpty(email, { ignore_whitespace: true })) {
		errors.email = 'Please enter an Email Id';
	}

	if (validator.isLength(password, { min: 6 })) {
		errors.password = 'Password should be atleast 6 characters long';
	}

	if (validator.isEmpty(password)) {
		errors.password = 'Please enter the password';
	}

	return {
		isValid: isEmpty(errors),
		errors
	};
};

module.exports = { loginValidator, registerValidator };
