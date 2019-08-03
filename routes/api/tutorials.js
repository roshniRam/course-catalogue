const router = require('express').Router();
const passport = require('passport');

const Tutorial = require('../../models/Tutorial');

// Routes for /api/tutorials

// Type		GET
// URL		/api/tutorials/all
// Desc		Returns list of all uploaded tutorials
router.get('/all', (req, res) => {
	// 1 - Find all tutorials from the database
	// 2 - Sort them in ascending order
	// 3 - Return the array of tutorials in response
	Tutorial.find({})
		.sort({ title: 1 })
		.then(tutorials => res.json({ tutorials }))
		.catch(err => res.status(500).json({ error: 'Unable to get tutorials', errorMsg: err }));
});

// Type		GET
// URL		/api/tutorials/tag/:tag
// Desc		Returns list of tutorials of the given tag
router.get('/tag/:tag', (req, res) => {
	// Split the request param by '-' and join by ' '. ex machine-learning -> machine learning
	let tag = req.params.tag
		.replace('-sharp', '#')
		.replace('-plus', '+')
		.replace('dot-', '.')
		.replace('-dot-', '.');

	tag = `^${tag.split('-').join(' ')}$`;
	// 1 - Find the tutorial with given tag from the database (regex is used to find tag ingoring case)
	// 2 - Return the tutorials array in response
	Tutorial.find({ tags: { $regex: tag, $options: 'i' } })
		.sort({ title: 1 })
		.then(tutorials => {
			if (tutorials.length === 0) return res.json({ tutorials, error: 'No tutorials found' });
			else res.json({ tutorials });
		})
		.catch(err => res.status(500).json({ error: 'Unable to get tutorials', errorMsg: err }));
});

// Type		POST
// URL		/api/tutorials
// Desc		Adds a new tutorial to the database
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	// Destructre the fields from request body
	const { title, educator, link, medium, type, skillLevel, tags, description } = req.body;
	// Create a new tutorial with the given fields
	const tutorial = new Tutorial({
		title,
		educator,
		link,
		medium,
		type,
		skillLevel,
		tags
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
