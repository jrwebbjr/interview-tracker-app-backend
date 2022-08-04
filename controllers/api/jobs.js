const express = require('express');
const Job = require('../../models/job');


module.exports = {
    index,
    destroy,
    update,
    create,
    show,
};
//index
async function index(req, res) {
    try{
        const jobs = await Job.find({user: req.params.id}).sort({ date: -1, "_id": -1 }).exec();
        //Sort is working correctly by date, -1 is newest to oldest .exec() executes and stops the line.
        res.status(200).json(jobs);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
}

//delete
async function destroy(req, res) {
    const id = req.params.id
    try{
        const foundJob = await Job.findByIdAndDelete(id);
        res.status(200).json(foundJob);
    }catch(e){
        res.status(400).json({ msg: e.message })
    }
}

//update
async function update(req, res) {
    const id = req.params.id
    const body = req.body
    try{
        const foundJob = await Job.findByIdAndUpdate(id, body, {new:true});
        res.status(200).json(foundJob);
    }catch(e){
        res.status(400).json({ msg: e.message })
    }
}

//create
async function create(req, res) {
    try{
        const job = await Job.create(req.body);
        res.status(200).json(job);
    }catch(e){
        res.status(400).json({ msg: e.message });
        console.log("Create Job Function Error")
    }
}

//show
async function show(req, res) {
    const id = req.params.id
    try{
        const foundJob = await Job.findById(id);
        res.status(200).json(foundJob);
    }catch(e){
        res.status(400).json({ msg: e.message })
    }
}