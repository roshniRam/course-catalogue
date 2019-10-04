const validator = require('validator');

const isEmpty = require('../utils/isEmpty');

const tagValidator = ({ tag }) => {
	const errors = {};

	if (validator.isEmpty(tag, { ignore_whitespace: true })) {
		errors.name = 'Please enter the tag';
	}

	return {
		isValid: isEmpty(errors),
		errors
	};
};

module.exports = { tagValidator };
