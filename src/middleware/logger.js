emptyBody = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        console.log(`Logged ${req.method} with empty body!`);
    }

    next();
};

wrongRoute = (req, res, next) => {
    console.log(`Logged ${req.url} - ${req.method} does not exist!`);

    next();
};

module.exports = {
    wrongRoute,
    emptyBody
}