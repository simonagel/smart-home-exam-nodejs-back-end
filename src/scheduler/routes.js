const express = require("express");
const action = require("./action");

const router = express.Router();

router.post("/schedulers", action.createScheduler);

module.exports = router;