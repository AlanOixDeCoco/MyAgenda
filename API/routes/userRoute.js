const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// GET
router.get('/', controller.get);
router.get('/:userID', controller.getID);
router.get('/:userID/groups', controller.getGroup);
router.get('/:userID/tasks', controller.getTask);

// POST
router.post('/', controller.post);

// PUT
router.put('/', controller.put);
router.put('/:userID', controller.putByID);
router.put('/:userID/groups', controller.putGroupByID);

// DELETE
router.delete('/:userID', controller.delete);

module.exports = router;