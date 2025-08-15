const Joi = require('joi');

const addJobValidator = Joi.object({
    title: Joi.string().required(),
    salary: Joi.number(),
    description: Joi.string(),
    type: Joi.string().valid('partTime', 'fullTime', 'remote').required(),
    postedDate: Joi.string().required(),
});

module.exports = {
    addJobValidator,
};
