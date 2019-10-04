const router = require('express').Router();
const passport = require('passport');

const Tutorial = require('../../models/Tutorial');
const { tutorialValidator } = require('../../validation/tutorials');

// Routes for /api/tutorials

// Type		GET
// URL		/api/tutorials/:tag
// Desc		Returns list of tutorials of the given tag
router.get('/:tag', (req, res) => {
	// Split the request param by '-' and join by ' '. ex machine-learning -> machine learning
	let tag = req.params.tag
		.replace(/-sharp/g, '#')
		.replace(/-plus/g, '+')
		.replace(/-dot-/g, '.')
		.replace(/dot-/g, '.')
		.replace(/-/g, ' ');

	// 1 - Find the tutorial with given tag from the database (regex is used to find tag ingoring case)
	// 2 - Return the tutorials array in response
	Tutorial.find({ tags: { $regex: tag, $options: 'i' } })
		.sort({ title: 1 })
		.then(tutorials => {
			res.json({ tutorials });
		})
		.catch(err => res.status(500).json({ error: 'Unable to get tutorials', errorMsg: err }));
});

// Type		POST
// URL		/api/tutorials
// Desc		Adds a new tutorial to the database
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	// Validate input data
	const { errors, isValid } = tutorialValidator(req.body);

	if (!isValid) {
		res.status(400).json({ errors });
	}

	// Destructre the fields from request body
	const { title, educator, link, medium, type, skillLevel, tags } = req.body;
	// Create a new tutorial with the given fields
	const tutorial = new Tutorial({
		title,
		educator,
		link,
		medium,
		type,
		skillLevel,
		tags,
		submittedBy: req.user._id
	});

	// 1 - Save the tutorial
	// 2 - Find the authenticated user and update the array of submitted tutorials of the user by adding ID of saved tutorial
	// 3 - Return the saved tutorial in response
	tutorial
		.save()
		.then(tutorial => {
			res.json({ tutorial });
		})
		.catch(err => res.status(500).json({ error: 'Unable to save tutorial', errorMsg: err }));
});

module.exports = router;
