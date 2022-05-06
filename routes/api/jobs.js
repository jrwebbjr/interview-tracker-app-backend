const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

router.get('/:id/index', jobsCtrl.index);

router.delete('/:id/delete/:id', jobsCtrl.destroy)

router.put('/:id/update/:id', jobsCtrl.update);

router.post('/:id/new', jobsCtrl.create);

router.get('/:id', jobsCtrl.show);
//actual route /api/jobs/:id 
//this is declared in server.js



module.exports = router;