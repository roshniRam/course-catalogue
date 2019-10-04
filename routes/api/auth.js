const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secretOrKey } = require('../../config/keys');
const { loginValidator, registerValidator } = require('../../validation/auth');

const User = require('../../models/User');

// Routes for /api/auth

// Type		POST
// URL		/api/auth/login
// Desc		Login user / Return token
router.post('/login', (req, res) => {
	// Validate input data
	const { errors, isValid } = loginValidator(req.body);

	if (!isValid) {
		res.status(400).json({ errors });
	}

	// Destructure the email and password from request body
	const { email, password } = req.body;

	// 1 - Find the user by comparing email with emails in all documents in the collection
	// 2 - Return 404 if user not found
	// 3 - Compare the password with the hashed password using bcrypt
	// 4 - Return the Bearer token created using JWT in response
	User.findOne({ email }).then(user => {
		if (!user) return res.status(404).json({ error: 'User not found' });
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// Create a payload that will be included in the JWT token
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email
				};
				// Expires in 12 hours
				jwt.sign(payload, secretOrKey, { expiresIn: 12 * 60 * 60 }, (err, token) => {
					res.json({ success: true, token: `Bearer ${token}` });
				});
			} else {
				return res.status(400).json({ error: 'Password incorrect' });
			}
		});
	});
});

// Type		POST
// URL		/api/auth/register
// Desc		Creates a new user
router.post('/register', (req, res) => {
	// Validate input data
	const { errors, isValid } = registerValidator(req.body);

	if (!isValid) {
		res.status(400).json({ errors });
	}

	// 1 - Find the user by comparing email with emails in all documents in the collection
	// 2 - If user already exist, don't create a new user
	// 3 - Verify if the given email exist
	// 4 - Create a new user
	// 5 - Save the created user
	// 6 - Return the created user in response
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({ error: 'Email already exist' });
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});

			newUser
				.save()
				.then(newUser => {
					const user = {
						_id: newUser._id,
						name: newUser.name,
						email: newUser.email
					};

					jwt.sign(user, secretOrKey, { expiresIn: 12 * 60 * 60 }, (err, token) => {
						res.json({ user, token: `Bearer ${token}` });
					});
				})
				.catch(err => res.json({ error: 'Unable to register', errorMsg: err }));
		}
	});
});

module.exports = router;
