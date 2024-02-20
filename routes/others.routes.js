const express = require ("express");
const router = express.Router();
const otherController = require("../controllers/other");

/* routes*/
router.get("/", otherController.home);








module.exports = router;