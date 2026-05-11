import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, List, Timer, BarChart3} from "lucide-react";
import FocusFlow from "../assets/FocusFlow.jpg";
import "./Sidebar.css";



export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      
      <div className="sidebar-logo">
        <img src={FocusFlow} alt="FocusFlow-logo" />
      </div>

      <nav className="sidebar-nav">

        <Link to="/app" className={location.pathname === "/app" ? "active" : ""}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link to="/app/tasks" className={location.pathname === "/app/tasks" ? "active" : ""}>
          <List size={18} />
          Tasks
        </Link>

        <Link to="/app/pomodoro" className={location.pathname === "/app/pomodoro" ? "active" : ""}>
          <Timer size={18} />
          Pomodoro
        </Link>

        <Link to="/app/analytics" className={location.pathname === "/app/analytics" ? "active" : ""}>
          <BarChart3 size={18} />
          Analytics
        </Link>

      </nav>

    </aside>
  );
}