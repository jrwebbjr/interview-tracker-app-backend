const job = require('./job');

const Schema = require('mongoose').Schema;

const jobSchema = new Schema({
    company: { type: String, required: true },
    location: { type: String,
    required: true },
    position: { type: String,
    required: true  },
    date: String,
    status: String, 
    applicationService: String,
    contacts: String,
    history: String,
    interviewProcess: String,
    interviewNotes: String,
    technicalNotes: String
}, {
    timestamps: true
});

 module.exports = jobSchema;