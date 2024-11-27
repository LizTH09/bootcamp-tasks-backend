class TaskController {

  tasks = [
    {
      id: '1',
      title: "Tarea Cocinar 1 ",
      description: "Esta es una descriptión de la tarea 1",
      createdById: '1'
    },
    {
      id: '2',
      title: "Tarea Cocinar 2 ",
      description: "Esta es una descriptión de la tarea 2",
      createdById: '1'
    },
    {
      id: '3',
      title: "Tarea 3 ",
      description: "Esta es una descriptión de la tarea 3",
      createdById: '2'
    },
  ]

  async getTask({ search }) {
    return this.tasks.filter((task) => search ? task.title.includes(search) : true);
  }
}

const taskController = new TaskController();

module.exports = taskController;
