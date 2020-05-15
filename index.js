// Require necessary NPM packages
const userController = require('./controllers/users');
const jobController = require('./controllers/jobs');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Instantiate express application object
const app = express();

app.use(cors());
app.use(express.json());

// The urlencoded middleware parses requests which use
// a specific content type (such as when using Axios)
app.use(express.urlencoded({ extended: true }));

// Configure the route middleware
app.use('/api/jobs', jobController);
app.use('/api', userController);

// The last middleware receives any error as its first argument
app.use((err, req, res, next) => {
	// If the error contains a statusCode, set the variable to that code
	// if not, set it to a default 500 code
	const statusCode = err.statusCode || 500;
	// If the error contains a message, set the variable to that message
	// if not, set it to a generic 'Internal Server Error'
	const message = err.message || 'Internal Server Error';
	// Set the status and send the message as a response to the client
	res.status(statusCode).send(message);
});

// Require the error handlers
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');

app.use(handleValidationErrors);
// The catch all for handling errors
// MUST BE PLACED IMMEDIATELY BEFORE `app.listen`
app.use(handleErrors);

// Define a port for API to run on, if the environment
// variable called `PORT` is not found use port 4000
app.set('port', process.env.PORT || 4000);
// Run server on designated port
app.listen(app.get('port'), () => {
	console.log('listening on port ' + app.get('port'));
});
