const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');





router.get('/', jobsCtrl.index);

router.post('/:id/update', jobsCtrl.update);

router.post('/', jobsCtrl.create);

router.get('/:id', jobsCtrl.show);
//actual route /api/jobs/:id 
//this is declared in server.js

module.exports = router;