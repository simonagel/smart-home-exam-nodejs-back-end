const express = require("express");
const action = require("./action");
const {
    validateRoom
} = require('../middleware/validators');

const router = express.Router();

router.post("/rooms", validateRoom, action.createRoom);
router.get("/rooms/:roomId", action.getRoomWithDevices);

module.exports = router;
