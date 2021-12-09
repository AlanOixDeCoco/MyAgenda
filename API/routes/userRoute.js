const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// GET
router.get('/', controller.get);


// POST


// PUT


// DELETE

module.exports = router;