const express = require('express');
const router = express.Router();

router.use("/restaurants", require("./restaurants"));
router.use("/users", require("./users"));

module.exports = router
