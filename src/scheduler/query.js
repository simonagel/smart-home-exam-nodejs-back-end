const con = require('../database/database');

createSchedulerQuery = (scheduler) => {
    const query = "INSERT INTO Scheduler (ActionTime, DeviceId, ActionId) VALUES (TIME(?), ?, ?)";
    return new Promise((resolve, reject) => {
        con.query(query, [scheduler.ActionTime, scheduler.DeviceId, scheduler.ActionId], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            };
        });
    });
};

module.exports = {
    createSchedulerQuery
};