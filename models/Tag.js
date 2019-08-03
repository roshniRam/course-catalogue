const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Tag
const TagSchema = new Schema({
	tag: {
		type: String,
		required: true,
		unique: true,
		trim: true
	}
});

const Tag = mongoose.model('tag', TagSchema);

module.exports = Tag;
