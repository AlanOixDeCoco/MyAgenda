const express = require("express");
const router = express.Router();
const controller = require("../controllers/subjectController");

// GET
router.get('/', controller.get);
router.get('/:subjectID', controller.getID);
router.get('/:subjectID/tasks', controller.getTask);

// POST
router.post('/', controller.post);

// PUT
router.put('/', controller.put);
router.put('/:subjectID', controller.putByID);

// DELETE
router.delete('/:subjectID', controller.delete);

module.exports = router;