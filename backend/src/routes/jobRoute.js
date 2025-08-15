const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { asyncHandler } = require('../util/AsynHandler');

router.get('/', asyncHandler(jobController.getJobs));
router.post('/', asyncHandler(jobController.addJobs));

module.exports = router;
