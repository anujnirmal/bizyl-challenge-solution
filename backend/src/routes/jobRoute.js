const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/', asyncHandler(jobController.getJobs));
router.post('/', asyncHandler(jobController.addJobs));
