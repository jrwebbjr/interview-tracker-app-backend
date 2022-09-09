const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

router.get('/:userid/index', jobsCtrl.index);

router.delete('/:userid/delete/:id', jobsCtrl.destroy)

router.put('/:userid/update/:id', jobsCtrl.update);

router.post('/:userid/new/', jobsCtrl.create);

router.get('/:userid/show/:id', jobsCtrl.show);
//actual route /api/jobs/:id 
//this is declared in server.js



module.exports = router;