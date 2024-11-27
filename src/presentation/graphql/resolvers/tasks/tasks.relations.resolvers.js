const userController = require("../../../../controllers/users");

const Task = {
  createdBy: (task) => {
    return userController.getUserById(task.createdById);
  },
};

exports.Task = Task;
