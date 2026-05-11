import { useState } from "react";
import "./Tasks.css";
import { database } from "../data/database";

function Tasks() {
  
  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);

  
  const [tasks, setTasks] = useState(currentUser?.tasks || []);
  const [subjects] = useState(currentUser?.subjects || []);
  const [showModal, setShowModal] = useState(false);
  
  
  const [filterSubject, setFilterSubject] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedSubjectName, setSelectedSubjectName] = useState(subjects[0]?.name || "General");
  const [selectedPriority, setSelectedPriority] = useState("High");

 
  const filteredTasks = tasks.filter((task) => {
    const matchSubject = filterSubject === "All" || task.subjectId === subjects.find(s => s.name === filterSubject)?.id || (filterSubject === "General" && task.subjectId === "general");
    const matchPriority = filterPriority === "All" || task.priority === filterPriority;
    const matchStatus = filterStatus === "All" || task.status === filterStatus;
    return matchSubject && matchPriority && matchStatus;
  });

 
  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: task.status === "done" ? "todo" : "done" } : task
    ));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const targetSubject = subjects.find(s => s.name === selectedSubjectName);
    const newTask = {
      id: `t${Date.now()}`,
      subjectId: targetSubject ? targetSubject.id : "general",
      title: newTaskTitle,
      status: "todo",
      priority: selectedPriority
    };
    setTasks([...tasks, newTask]);
    setShowModal(false);
    setNewTaskTitle("");
  };

  return (
    <div className="tasks-page">
      <div className="tasks-container">
        <div className="tasks-header">
          <h2>Tasks</h2>
          <button className="add-task-btn" onClick={() => setShowModal(true)}>+ Add Task</button>
        </div>

        {/* les filtres */}
        <div className="filters">
          <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
            <option value="All">All Subjects</option>
            {subjects.map((subj) => (
              <option key={subj.id} value={subj.name}>{subj.name}</option>
            ))}
            <option value="General">General</option>
          </select>

          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
          </select>
        </div>

        {/*la liste des taches*/}
        <div className="tasks-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => {
              const isDone = task.status === "done";
              const taskSubject = subjects.find(s => s.id === task.subjectId);
              const subjectName = taskSubject ? taskSubject.name : "General";

              return (
                <div className="task-item" key={task.id}>
                  <div className="task-left">
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => toggleTask(task.id)}
                    />
                    <div>
                      <h4 className={isDone ? "completed" : ""}>{task.title}</h4>
                      <p className="subject-name">{subjectName}</p>
                    </div>
                  </div>
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="no-tasks">No tasks found with these filters.</p>
          )}
        </div>
      </div>

      {/* fenetre POPUP */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Task</h3>
            <form onSubmit={handleAddTask}>
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
                <label>Subject</label>
                <select value={selectedSubjectName} onChange={(e) => setSelectedSubjectName(e.target.value)}>
                  {subjects.map((subj) => (
                    <option key={subj.id} value={subj.name}>{subj.name}</option>
                  ))}
                  <option value="General">General</option>
                </select>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
                <button type="submit" className="submit-btn">Create Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;