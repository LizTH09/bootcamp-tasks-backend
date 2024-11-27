const userController = require("../../../../controllers/users");

const Query = {
    getUsers: (_, { search }, _, _) =>
      userController.getUsers({ search }),
  };
  
  exports.Query = Query;