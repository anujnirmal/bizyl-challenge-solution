const express = require('express');
const cors = require('cors');
const { asyncHandler } = require('./src/utils/AsyncHandler.js');
const logHttpRequests = require('./src/logger/httpLogger.js');
const logger = require('./src/logger/logger.js');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(logHttpRequests);
