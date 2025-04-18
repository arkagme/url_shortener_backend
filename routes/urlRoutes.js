const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController.js");
const fs = require("fs");

router.post("/shorturl", urlController.generateURL);
router.delete("/delete/:delete_id", urlController.deleteURL);
module.exports = router;
