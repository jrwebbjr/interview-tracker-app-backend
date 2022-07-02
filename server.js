
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const app = express();
app.use(cors());

app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Protect the API routes below from anonymous users

const ensureLoggedIn = require('./config/ensureLoggedIn.js');
app.use('/api/jobs', require('./routes/api/jobs'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests

// This was commented out testing it 7/2/22
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

// Test to ensure server is deployed on Heroku 7/2/22
app.get('/', (req, res) => { res.send('Hello from Express!')


app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});