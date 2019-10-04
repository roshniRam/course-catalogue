const validator = require('validator');

const isEmpty = require('../utils/isEmpty');

const tutorialValidator = ({ title, educator, link, medium, type, skillLevel, tags }) => {
	const errors = {};

	if (validator.isEmpty(title, { ignore_whitespace: true })) {
		errors.name = 'Please enter the tutorial title';
	}

	if (validator.isEmpty(educator, { ignore_whitespace: true })) {
		errors.educator = "Please enter the Educator's name";
	}

	if (!validator.isURL(link)) {
		errors.link = 'Please enter a valid URL';
	}

	if (!['Video', 'Blog'].includes(medium)) {
		errors.medium = 'Please select a valid medium for the tutorial (Video or Blog)';
	}

	if (validator.isEmpty(medium, { ignore_whitespace: true })) {
		errors.medium = 'Please select a medium';
	}

	if (!['Free', 'Paid'].includes(type)) {
		errors.type = 'Please select a valid type for the tutorial (Free or Paid)';
	}

	if (validator.isEmpty(type, { ignore_whitespace: true })) {
		errors.type = 'Please select a tutorial type';
	}

	if (!['Beginner', 'Intermediate', 'Advanced'].includes(skillLevel)) {
		errors.skillLevel = 'Please select a valid skill level for the tutorial (Beginner, Intermediate or Advanced)';
	}

	if (validator.isEmpty(skillLevel, { ignore_whitespace: true })) {
		errors.skillLevel = 'Please select a tutorial skill level';
	}

	const isValidTag = tags.every(tag => !validator.isEmpty(tag, { ignore_whitespace: true }));

	if (!isValidTag) {
		errors.tags = 'One of the tags you entered is not valid';
	}

	if (tags.length === 0) {
		errors.tags = 'Please enter atleast 1 tag for the tutorial';
	}

	if (tags.length > 5) {
		errors.tags = 'Tags should not be more than 5';
	}

	return {
		isValid: isEmpty(errors),
		errors
	};
};

module.exports = { tutorialValidator };
