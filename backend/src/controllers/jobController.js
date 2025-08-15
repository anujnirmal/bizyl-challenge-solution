const ApiResponse = require('../util/ApiResponse');
const jobs = require('../data/jobs');
const { addJobValidator } = require('../validator/jobValidator');
const ApiError = require('../util/ApiError');

exports.getJobs = async (req, res) => {
    const sortedJob = jobs.sort(
        (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
    );
    return res.json(new ApiResponse(sortedJob));
};

exports.addJobs = async (req, res) => {
    const { value, error } = addJobValidator.validate(req.body);

    if (error) {
        throw new ApiError(422, error.message || 'Validation Error');
    }

    const { title, type, salary, postedDate } = value;

    const newJob = { id: jobs.length + 1, title, type, salary, postedDate };
    jobs.push(newJob);
    return res.json(new ApiResponse(newJob, 201));
};
