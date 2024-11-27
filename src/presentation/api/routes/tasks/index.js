const { Router } = require("express");
const taskController = require("../../../../controllers/tasks");

const taskRouter = Router();

taskRouter.get("/", async (req, res) => {
  const { search } = req.query;
  const tasks = await taskController.getTask({ search });
  res.status(200).json({
    data: tasks,
    message: null,
    success: true,
  });
});

module.exports = taskRouter;
