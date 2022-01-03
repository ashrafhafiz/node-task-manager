const express = require("express");
const router = express.Router();

// const { taskList, taskDetail } = require("../controllers/tasksController");
// router.route("/").get(taskList);
// router.route("/id").get(taskDetail);

const taskController = require("../controllers/tasksController");
router.route("/").get(taskController.taskList);
router.route("/id").get(taskController.taskDetail);

module.exports = router;
