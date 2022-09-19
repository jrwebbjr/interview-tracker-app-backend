const job = require('./job');

const Schema = require('mongoose').Schema;

const jobSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    company: String,
    location: String,
    position: String,
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