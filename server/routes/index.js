const express = require('express');
const router = express.Router();

router.use("/restaurants", require("./restaurants"));
module.exports = router