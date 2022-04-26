const express = require('express');
const Job = require('../../models/job');

module.exports = {
    index,
    show,
    create
};
//index
async function index(req, res) {
    try{
        const jobs = await Job.find({}).sort({ date: -1, "_id": -1 }).exec();
        //TODO: research created-at syntax
        res.status(200).json(jobs);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
}

//delete

//update

//create
new async function create(req, res) {
    try{
        const job = await Job.create({}).exec();
        res.status(200).json(jobs);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
}
//edit

//show
async function show(req, res) {
    try{
        const job = await Job.findById(req.params.id);
        res.status(200).json(job);
    }catch(e){
        res.status(400).json({ msg: e.message })
    }
}