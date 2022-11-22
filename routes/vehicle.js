const express = require("express");
const router = express.Router();

const { getAllVehicles } = require("../controller/vehicles");

router.route("/").get(getAllVehicles);

module.exports = router;
