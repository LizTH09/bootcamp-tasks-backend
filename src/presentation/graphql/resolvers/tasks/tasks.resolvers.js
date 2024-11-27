const taskController = require("../../../../controllers/tasks");

const Query = {
  getTask: (_, { search }, _, _) => {

    return taskController.getTask({ search });
  },
};

exports.Query = Query;
