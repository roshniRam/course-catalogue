const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Tutorial
const TutorialSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true,
		unique: true
	},
	tags: [String],
	medium: {
		type: String,
		required: true
	},
	educator: {
		type: String
	},
	type: {
		type: String,
		required: true
	},
	skillLevel: {
		type: String,
		required: true
	}
});

const Tutorial = mongoose.model('tutorial', TutorialSchema);

module.exports = Tutorial;
