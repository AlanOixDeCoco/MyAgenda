const express = require("express");
const router = express.Router();
const controller = require("../controllers/agendaController");

// GET
router.get('/', controller.get);
router.get('/:agendaID', controller.getID);
router.get('/:agendaID/groups', controller.getGroup);
router.get('/:agendaID/tasks', controller.getTask);
router.get('/:agendaID/subjects', controller.getSubject);

// POST
router.post('/', controller.post);

// PUT
router.put('/', controller.put);
router.put('/:agendaID', controller.putByID);
router.put('/:agendaID/groups', controller.putGroupByID);

// DELETE
router.delete('/:agendaID', controller.delete);

module.exports = router;