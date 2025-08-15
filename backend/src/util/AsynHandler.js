const ApiError = require('./ApiError');

exports.asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        console.error(error);
        const statusCode = error.code || error.statusCode || 500;
        return res
            .status(statusCode)
            .json(new ApiError(statusCode, error?.message, error?.errors));
    }
};
