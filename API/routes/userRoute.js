const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authToken = require("../authentication/authToken");

// GET
router.get('/', controller.get);
router.get('/me', authToken.authToken, controller.getLogin);
router.get('/:userID', controller.getID);
router.get('/me/groups', authToken.authToken, controller.getGroup);
router.get('/me/tasks', authToken.authToken, controller.getTask);

//POST
router.post('/me/groups', authToken.authToken, controller.postGroup);

// PUT
router.put('/me', authToken.authToken, controller.put);

// DELETE
router.delete('/me/groups', authToken.authToken, controller.deleteGroup);
router.delete('/me', authToken.authToken, controller.delete);

module.exports = router;