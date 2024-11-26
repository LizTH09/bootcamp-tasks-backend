class TaskController {
  async getTask({ search }) {
    return [
      {
        id: 1,
        title: "Tarea Cocinar 1 ",
        description: "Esta es una descriptión de la tarea 1",
      },
      {
        id: 2,
        title: "Tarea Cocinar 2 ",
        description: "Esta es una descriptión de la tarea 2",
      },
      {
        id: 3,
        title: "Tarea 3 ",
        description: "Esta es una descriptión de la tarea 3",
      },
    ].filter((task) => task.title.includes(search));
  }
}

const taskController = new TaskController();

module.exports = taskController;
