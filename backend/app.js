const express = require('express');
const cors = require('cors');
const { asyncHandler } = require('./src/utils/AsyncHandler.js');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Root route to check server online statu
app.get(
    '/',
    asyncHandler(async (req, res) => {
        res.json(`Server is online! Version 0.0.1`);
    })
);

// Import routes
const jobRoute = require('./src/routes/jobRoute.js');

app.use('/api/v1/jobs', jobRoute);

app.listen(PORT, () => {
    logger.info(`${ENV} :  Server running on http://localhost:${PORT}`);
});
