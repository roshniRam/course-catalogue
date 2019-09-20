const request = require('supertest');
const jwt = require('jsonwebtoken');

const { app } = require('../server');
const Tag = require('../models/Tag');
const {
	populateTags,
	populateUsers,
	populateTutorials,
	removeTags,
	removeUsers,
	removeTutorials
} = require('./seed/seed');
let { users, tags, tutorials } = require('./seed/seed_data');
const { secretOrKey } = require('../config/keys');

beforeEach(populateUsers);
beforeEach(populateTags);
beforeEach(populateTutorials);
afterEach(removeUsers);
afterEach(removeTags);
afterEach(removeTutorials);

const payload = {
	id: users[0]._id,
	name: users[0].name,
	email: users[0].email
};

let userOneToken;
jwt.sign(payload, secretOrKey, { expiresIn: 12 * 60 * 60 }, (err, token) => {
	userOneToken = `Bearer ${token}`;
});

// Tests for Tags
describe('Route /api/tags', () => {
	describe('GET /api/tags', () => {
		test('should get all tags alphabetically sorted', done => {
			request(app)
				.get('/api/tags')
				.expect(200)
				.expect(res => {
					expect(res.body.tags.length).toBe(tags.length);
					expect(res.body.tags[0].tag).toBe('Express');
				})
				.end(done);
		});
	});

	describe('POST /api/tags', () => {
		test('should add a new tag', done => {
			const tag = {
				tag: 'Webpack'
			};

			request(app)
				.post('/api/tags')
				.set('Authorization', userOneToken)
				.send(tag)
				.expect(200)
				.expect(res => {
					expect(res.body.tag).toBeTruthy();
				})
				.end((err, res) => {
					if (err) return done(err);
					Tag.findOne({ tag: tag.tag })
						.then(newTag => {
							expect(newTag.tag).toBe(tag.tag);
							done();
						})
						.catch(e => done(e));
				});
		});

		test('should not add a new tag if already exist', done => {
			request(app)
				.post('/api/tags')
				.set('Authorization', userOneToken)
				.send(tags[0])
				.expect(401)
				.end(done);
		});

		test('should not add new tag if user is not authenticated', done => {
			const tag = {
				tag: 'Webpack'
			};

			request(app)
				.post('/api/tags')
				.send(tag)
				.expect(401)
				.end(done);
		});
	});
});

// Tests for User
describe('Route /api/users', () => {
	describe('POST /api/users/login', () => {
		test('should return authorization token', done => {
			const user = {
				email: users[0].email,
				password: users[0].password
			};

			request(app)
				.post('/api/users/login')
				.send(user)
				.expect(200)
				.expect(res => {
					expect(res.body.success).toBeTruthy();
					expect(res.body.token).toBeTruthy();
				})
				.end(done);
		});

		test('should return 404 if user not found', done => {
			const user = {
				email: 'user3@example.com',
				password: 'password'
			};

			request(app)
				.post('/api/users/login')
				.send(user)
				.expect(404)
				.end(done);
		});

		test('should not return authorization token if password is incorrect', done => {
			const user = {
				email: users[1].email,
				password: users[0].password
			};

			request(app)
				.post('/api/users/login')
				.send(user)
				.expect(400)
				.expect(res => {
					expect(res.body.success).toBeFalsy();
					expect(res.body.token).toBeFalsy();
				})
				.end(done);
		});
	});

	describe('POST /api/users/register', () => {
		test('should register a new user', done => {
			const user = {
				email: 'piyushpawar25@gmail.com',
				password: 'password',
				name: 'Piyush'
			};

			request(app)
				.post('/api/users/register')
				.send(user)
				.expect(200)
				.expect(res => {
					expect(res.body.newUser.name).toBe(user.name);
					expect(res.body.newUser.email).toBe(user.email);
				})
				.end(done);
		}, 10000);

		test('should not register the user if already exist', done => {
			const user = {
				email: users[0].email,
				name: users[0].name,
				password: users[0].password
			};

			request(app)
				.post('/api/users/register')
				.send(user)
				.expect(400)
				.expect(res => {
					expect(res.body.newUser).toBeFalsy();
				})
				.end(done);
		});
	});
});

// Tests for Tutorials
describe('Route /api/tutorials', () => {
	describe('GET /api/tutorials/:tag', () => {
		test('should return list of tutorials of the given tag', done => {
			request(app)
				.get(`/api/tutorials/${tags[1].tag}`)
				.expect(200)
				.expect(res => {
					expect(res.body.tutorials).toBeTruthy();
					expect(res.body.tutorials.length).toBe(3);
				})
				.end(done);
		});

		test('should return empty array if no tutorials found', done => {
			request(app)
				.get(`/api/tutorials/${tags[0].tag}`)
				.expect(res => {
					expect(res.body.tutorials.length).toBe(0);
				})
				.end(done);
		});
	});

	describe('POST /api/tutorials', () => {
		test('should add a new tutorial', done => {
			const tutorial = {
				title: 'Complete React Tutorial (with Redux)',
				educator: 'The Net Ninja',
				link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG',
				medium: 'Video',
				type: 'Free',
				skillLevel: 'Beginner',
				tags: ['React', 'Redux']
			};

			request(app)
				.post('/api/tutorials')
				.set('Authorization', userOneToken)
				.send(tutorial)
				.expect(200)
				.expect(res => {
					expect(res.body.tutorial.title).toBe(tutorial.title);
					expect(res.body.tutorial.educator).toBe(tutorial.educator);
					expect(res.body.tutorial.link).toBe(tutorial.link);
					expect(res.body.tutorial.medium).toBe(tutorial.medium);
					expect(res.body.tutorial.type).toBe(tutorial.type);
					expect(res.body.tutorial.skillLevel).toBe(tutorial.skillLevel);
					expect(res.body.tutorial.tags).toContain(tutorial.tags[0]);
				})
				.end(done);
		});

		test('should not add tutorial if user not authenticated', done => {
			const tutorial = {
				title: 'Complete React Tutorial (with Redux)',
				educator: 'The Net Ninja',
				link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG',
				medium: 'Video',
				type: 'Free',
				skillLevel: 'Beginner',
				tags: ['React', 'Redux']
			};

			request(app)
				.post('/api/tutorials')
				.send(tutorial)
				.expect(401)
				.end(done);
		});
	});
});
