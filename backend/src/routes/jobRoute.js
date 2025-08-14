const express = require('express');
const router = express.Router();

router.post('/jobs', asyncHandler(authController.loginWithGoogleId));
