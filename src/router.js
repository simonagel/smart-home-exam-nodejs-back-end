const express = require("express");
const roomRoutes = require("./room/routes");
const deviceRoutes = require("./device/routes");
const schedulerRoutes = require("./scheduler/routes");

const router = express.Router();

router.use(roomRoutes);
router.use(deviceRoutes);
router.use(schedulerRoutes);

module.exports = router;
