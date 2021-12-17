const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

// GET
router.get('/', controller.get);
router.get('/:taskID', controller.getID);
router.get('/:taskID/groups', controller.getGroup);

// POST
router.post('/', controller.post);

// PUT
router.put('/', controller.put);
router.put('/:taskID', controller.putByID);

// DELETE
router.delete('/:taskID', controller.delete);

module.exports = router;