import { useNavigate } from "react-router-dom";
import { database } from "../data/database";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  //user
  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);

  //the study time of the day
  const today = new Date().toISOString().split("T")[0];
  const todayMinutes = currentUser.studySessions
    .filter(s => s.date === today)
    .reduce((sum, s) => sum + s.durationMinutes, 0);

  //get in progress tasks 
  const upcomingTasks = currentUser.tasks.filter(t => t.status !== "done").slice(0, 3);

  //get reccet sessions( 2 most recent )
  const recentSessions = currentUser.studySessions.slice(-2).reverse();


  return (
    <div className="dashboard">
      <main className="main">
        <header className="topbar"><h2>Welcome Back {currentUser.name}</h2></header>
        <div className="grid">

          <div className="card timer">
            <h3>Focus Session</h3>
            <div className="circle">50:00</div>
            <button className="timer-btn" onClick={() => navigate("/app/pomodoro")}>Open Timer</button>
          </div>

          <div className="card">
            <h3>Today's Overview</h3>
            <div className="overview-items">

              <div className="overview-box">

                  <p> {todayMinutes}m</p>
              </div>

              <div className="overview-box">
                  <p> {currentUser.tasks.filter(t => t.status === "done").length} tasks done</p>
              </div>

              <div className="overview-box">
                  <p> {currentUser.studySessions.filter(s => s.date === today).length} focus sessions</p>
              </div>

              </div>
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
              <p key={sess.id} > Focus Session - {sess.durationMinutes} min</p>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;