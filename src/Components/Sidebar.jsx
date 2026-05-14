import { Link, useLocation,useNavigate } from "react-router-dom";
import { LayoutDashboard, List, Timer, TvMinimal} from "lucide-react";
import FocusFlow from "../assets/FocusFlow.png";
import "./Sidebar.css";



export default function Sidebar() {

  //current location
  const location = useLocation();

  //navigation
  const navigate = useNavigate();

  
  //log out function 
  const handleLogout = () => {
    localStorage.removeItem("CurrentUserId");
    navigate("/");
  };


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

        <Link to="/app/studyroom" className={location.pathname === "/app/studyroom" ? "active" : ""}>
          <TvMinimal size={18} />
          StudyRoom
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
            Logout
        </button>


      </nav>


    </aside>
  );
}