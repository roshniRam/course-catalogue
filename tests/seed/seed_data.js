const mongoose = require('mongoose');

const userOneId = new mongoose.Types.ObjectId();
const userTwoId = new mongoose.Types.ObjectId();

const tutorialOneId = new mongoose.Types.ObjectId();
const tutorialTwoId = new mongoose.Types.ObjectId();
const tutorialThreeId = new mongoose.Types.ObjectId();

// User Data
const users = [
	{
		_id: userOneId,
		email: 'user1@example.com',
		password: 'userOnePassword',
		name: 'User1'
	},
	{
		_id: userTwoId,
		email: 'user2@example.com',
		password: 'userTwoPassword',
		name: 'User2'
	}
];

// Tutorial Data
const tutorials = [
	{
		_id: tutorialOneId,
		title: 'Modern React with Redux',
		educator: 'Stephen Grider',
		link: 'https://www.udemy.com/react-redux/',
		medium: 'Video',
		type: 'Paid',
		skillLevel: 'Beginner',
		tags: ['React']
	},
	{
		_id: tutorialTwoId,
		title: 'Advanced React and Redux: 2018 Edition',
		educator: 'Stephen Grider',
		link: 'https://www.udemy.com/react-redux-tutorial/',
		medium: 'Video',
		type: 'Paid',
		skillLevel: 'Intermediate',
		tags: ['React', 'Redux']
	},
	{
		_id: tutorialThreeId,
		title: 'Four Ways To Style React Components',
		educator: 'Agata Krzywda',
		link: 'https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822',
		medium: 'Blog',
		type: 'Free',
		skillLevel: 'Beginner',
		tags: ['React']
	}
];

// Tags Data
const tags = [
	{
		_id: new mongoose.Types.ObjectId(),
		tag: 'Express'
	},
	{
		_id: new mongoose.Types.ObjectId(),
		tag: 'React'
	},
	{
		_id: new mongoose.Types.ObjectId(),
		tag: 'Redux'
	}
];

module.exports = { users, tutorials, tags };
