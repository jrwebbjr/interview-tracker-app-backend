const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

router.get('/', jobsCtrl.index);

router.get('/:id', jobsCtrl.show);

router.post('/', jobsCtrl.create);

module.exports = router;