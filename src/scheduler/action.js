const query = require("./query");

createScheduler = async (req, res) => {
    try {
        await query.createSchedulerQuery(req.body);
        res.status(200).send("Scheduler created!");
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports = {
    createScheduler
}