const mongoose = require('mongoose');
const jobSchema = require('./jobSchema');

require('./jobSchema');

module.exports = mongoose.model('Job', jobSchema);