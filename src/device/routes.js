const express = require("express");
const action = require("./action");
const {
    validateIsActiveDevice,
    validateDevice
} = require('../middleware/validators');

const router = express.Router();

router.get("/devices", action.getAllDevices);
router.post("/rooms/:roomId/devices", validateIsActiveDevice, action.createDevice);
router.get("/rooms/:roomId/devices/:deviceId", action.getSpecificDevice);
router.patch("/rooms/:roomId/devices/:deviceId", validateDevice, action.updateDevice)
router.patch("/rooms/:roomId/devices/:deviceId/action", action.updateDeviceAction)

module.exports = router;