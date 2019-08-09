const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// eslint-disable-next-line
const mongoose = require('./db/mongoose');

const auth = require('./routes/api/auth');
const tags = require('./routes/api/tags');
const tutorials = require('./routes/api/tutorials');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Routes
app.use('/api/auth', auth);
app.use('/api/tags', tags);
app.use('/api/tutorials', tutorials);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set a static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
	// eslint-disable-next-line
	console.log(`Server running on port ${port}`);
});

module.exports = { app };
