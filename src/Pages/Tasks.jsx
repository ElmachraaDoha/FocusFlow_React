import { useState } from "react";
import { database } from "../data/database";
import "./Tasks.css";

function Tasks() {

  //user
  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);


  //task list
  const [tasks, setTasks] = useState(currentUser?.tasks || []);

  //popup
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [showPop, setShowPop] = useState(false);


  //filters
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");


  //filter tasks (return only tasks that follow the options the user wants )
  const filteredTasks = tasks.filter((task) => {
    const matchPriority =
      filterPriority === "All" || task.priority === filterPriority;

    const matchStatus =
      filterStatus === "All" || task.status === filterStatus;

    return matchPriority && matchStatus;
  });

  //change task status  : toggle (something that have 2 options or 2 states)
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, status: task.status === "done" ? "todo" : "done" }
        : task
    ));
  };

  // ADD TASK 
  const AddTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: `t${Date.now()}`,
      title: newTaskTitle,
      description: newTaskDescription,
      status: "todo",
      priority: selectedPriority
    };

  setTasks([...tasks, newTask]);

  setShowPop(false);
  setNewTaskTitle("");
  setNewTaskDescription("");
  setSelectedPriority("High");

  };

  return (
    <div className="tasks-page">
      <div className="tasks-container">

        {/* add task*/}
        <div className="tasks">
          <h2>Tasks</h2>
          <button
            className="add-task-btn"
            onClick={() => setShowPop(true)}
          >+ Add Task
          </button>
        </div>

        {/* filters */}
        <div className="filters">

          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
          </select>

        </div>

        {/* tasks list */}
        <div className="tasks-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => {
              const isDone = task.status === "done";

              return (
                <div className="task-item" key={task.id}>
                  <div className="task-left">

                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => toggleTask(task.id)}
                    />

                    <div>
                      <h4 className={isDone ? "completed" : ""}>
                        {task.title}
                      </h4>
                      <p>
                      {task.description}
                    </p>
                    </div>
                  </div>

                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="no-tasks">
              No tasks found with these filters.
            </p>
          )}
        </div>

      </div>

      {/* popup */}
      {showPop && (
        <div className="modal-overlay">
          <div className="modal-content">

            <h3>Add New Task</h3>

            <form onSubmit={AddTask}>

              <div className="form-group">
                <label>Task Name</label>
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  placeholder="Add task details..."
                  required
                />
              </div>

              <div className="form-group">
                <label>Priority</label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  onClick={() => setShowPop(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>

                <button type="submit" className="submit-btn">
                  Create Task
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default Tasks;