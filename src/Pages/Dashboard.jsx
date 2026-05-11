import { database } from "../data/database";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {

  const navigate = useNavigate();

  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);

  const today = new Date().toISOString().split("T")[0];
  const todayMinutes = currentUser.studySessions
    .filter(s => s.date === today)
    .reduce((sum, s) => sum + s.durationMinutes, 0);

  const upcomingTasks = currentUser.tasks.filter(t => t.status !== "done").slice(0, 3);

  const recentSessions = currentUser.studySessions.slice(-2).reverse();

  const getSubjectName = (id) => currentUser.subjects.find(s => s.id === id)?.name || "General";

  return (
    <div className="dashboard">
      <main className="main">
        <header className="topbar"><h2>Welcome Back {currentUser.name}</h2></header>
        <div className="grid">

          <div className="card timer">
            <h3>Focus Session</h3>
            <div className="circle"></div>
            <button className="timer-btn" onClick={() => navigate("/app/pomodoro")}>Open Timer</button>
          </div>

          <div className="card">
            <h3>Today Overview</h3>
            <p> {todayMinutes}m</p>
            <p> {currentUser.tasks.filter(t => t.status === "done").length} tasks done</p>
            <p> {currentUser.studySessions.filter(s => s.date === today).length} focus sessions</p>
          </div>

          <div className="card">
            <h3>Upcoming Tasks</h3>
            <ul>
              {upcomingTasks.map(task => <li key={task.id}>{task.title}</li>)}
            </ul>
          </div>

          <div className="card">
            <h3>Recent Sessions</h3>
            {recentSessions.map(sess => (
              <p key={sess.id}>{getSubjectName(sess.subjectId)} - {sess.durationMinutes} min</p>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

