class UserController {

    users = [
        {
          id: '1',
          firstName: "Lizbeth Aldana",
          lastName: "Aldana",
        },
        {
          id: '2',
          firstName: "Tania Aldana",
          lastName: "Aldana",
        },
        {
          id: '3',
          firstName: "Maribel",
          lastName: "Tarifeño",
        },
      ]

    async getUsers({ search }) {
      return this.users.filter((user) => user.firstName.includes(search));
    }

    async getUserById( userId){
      return this.users.find((user) => user.id === userId)
    }
  }
  
  const userController = new UserController();
  
  module.exports = userController;
  