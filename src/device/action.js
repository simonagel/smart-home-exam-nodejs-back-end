const query = require("./query");

createDevice = async (req, res) => {
    const deviceRequest = req.body;
    const roomId = req.params.roomId;
    
    try {
        await query.createDeviceQuery(deviceRequest, roomId)
        res.status(200).send("Device created!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getAllDevices = async (req, res) => {
    try {
        const devices = await query.getAllDevicesQuery()
        res.status(200).send(devices);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getSpecificDevice = async (req, res) => {
    const deviceId = req.params.deviceId;

    try {
        const device = await query.getSpecificDeviceQuery(deviceId)
        res.status(200).send(device[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

updateDeviceAction = async (req, res) => {
    const deviceId = req.params.deviceId;
    const actionId = req.body.ActionId;

    try {
        await query.updateDeviceActionQuery(deviceId, actionId);
        res.status(200).send("Action changed!");
    } catch (error) {
        res.status(500).send(error.message);
    };
};

updateDevice = async (req, res) => {
    const deviceId = req.params.deviceId;

    try {
        await query.updateDeviceQuery(deviceId, req.body);
        res.status(200).send("Device updated!");
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports = {
    createDevice,
    getAllDevices,
    getSpecificDevice,
    updateDeviceAction,
    updateDevice
}