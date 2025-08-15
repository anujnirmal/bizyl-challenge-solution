const Joi = require('joi');

const addJobValidator = Joi.object({
    title: Joi.string().required(),
    salary: Joi.number(),
    type: Joi.string(),
    postedDate: Joi.string(),
});

module.exports = {
    addJobValidator,
};
