const express = require("express");
const router = express.Router();
const controller = require("../controllers/groupController");

// GET
router.get('/', controller.get);
router.get('/:groupID', controller.getID);
router.get('/:groupID/users', controller.getUser);
router.get('/:groupID/parents', controller.getParent);
router.get('/:groupID/tasks', controller.getTask);

// POST
router.post('/', controller.post);

// PUT
router.put('/', controller.put);
router.put('/:userID', controller.putByID);

// DELETE
router.delete('/:userID', controller.delete);

module.exports = router;