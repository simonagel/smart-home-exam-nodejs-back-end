handler = (err, req, res, next) => {
    let errorObj = {
        status: err.status,
        error: {
            message: err.message
        }
    };

    res.status(err.status).json(errorObj);
};

module.exports = {
    handler
}