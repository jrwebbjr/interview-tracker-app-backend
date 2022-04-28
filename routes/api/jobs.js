const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');



router.get('/jobs/:id', jobsCtrl.show);

router.post('/', jobsCtrl.create);

router.get('/', jobsCtrl.index);

module.exports = router;