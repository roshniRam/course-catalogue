const router = require('express').Router();
const passport = require('passport');

const Tag = require('../../models/Tag');

// Routes for /api/tags

// Type		GET
// URL		/api/tags
// Desc		Returns list of all tags
router.get('/', (req, res) => {
	// 1 - Find all tags from the database
	// 2 - Sort them in ascending order
	// 3 - Return the array of tags in response
	Tag.find({})
		.sort({ tag: 1 })
		.then(tags => {
			res.json({ tags });
		})
		.catch(err => {
			res.status(500).json({ error: 'Unable to get tags', errorMsg: err });
		});
});

// Type		POST
// URL		/api/tags
// Desc		Adds a new tag to the database
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	// 1 - Create a new tag using Tag model
	// 2 - Save and return the new tag in response
	const newTag = req.body.tag
		.replace(/\#/g, '-sharp')
		.replace(/\+/g, '-plus')
		.replace(/^\./g, 'dot-')
		.replace(/\./g, '-dot-');

	const tag = new Tag({
		tag: newTag
	});

	tag.save()
		.then(tag => {
			res.json({ tag });
		})
		.catch(err => {
			if (err.code === 11000) res.status(401).json({ error: 'Tag already exist' });
			else res.json({ err });
		});
});

module.exports = router;
