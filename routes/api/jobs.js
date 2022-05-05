const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');


router.delete('/user/:id/delete/:id', jobsCtrl.destroy)

router.put('/user/:id/update/:id', jobsCtrl.update);

router.post('/user/:id/new', jobsCtrl.create);

router.get('/user/:id/:id', jobsCtrl.show);
//actual route /api/jobs/:id 
//this is declared in server.js

router.get('/user/:id/index', jobsCtrl.index);

module.exports = router;