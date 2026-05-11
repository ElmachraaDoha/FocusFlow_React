import { Link } from "react-router-dom";
import { LayoutDashboard, List, Timer, BarChart3} from "lucide-react";

export default function Features() {
  const handleHover = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.10)";
    e.currentTarget.style.borderColor = "#10b981";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    e.currentTarget.style.borderColor = "#e5e7eb";
  };

  return (
    <div style={styles.page}>

      <div style={styles.hero}>

        <h1 style={styles.title}>
          Everything You Need to Stay Productive
        </h1>

        <p style={styles.subtitle}>
          FocusFlow combines structure, simplicity, and performance tools to help you
          build better study habits and stay consistent.
        </p>
      </div>

      <div style={styles.grid}>

        <div style={styles.card} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <div style={styles.icon}><LayoutDashboard size={18} /></div>
          <h2 style={styles.cardTitle}>Smart Dashboard</h2>
          <p style={styles.cardText}>
            Track tasks, sessions, and progress in one clean overview.
          </p>
        </div>

        <div style={styles.card} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <div style={styles.icon}><List size={18} /></div>
          <h2 style={styles.cardTitle}>Task System</h2>
          <p style={styles.cardText}>
            Organize your study plan with simple, flexible task management.
          </p>
        </div>

        <div style={styles.card} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <div style={styles.icon}><Timer size={18} /></div>
          <h2 style={styles.cardTitle}>Pomodoro Focus</h2>
          <p style={styles.cardText}>
            Improve concentration using structured focus and break cycles.
          </p>
        </div>

        <div style={styles.card} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <div style={styles.icon}><BarChart3 size={18} /></div>
          <h2 style={styles.cardTitle}>Analytics</h2>
          <p style={styles.cardText}>
            Understand your productivity patterns and improve over time.
          </p>
        </div>

      </div>

    <div style={styles.bottom}>

      <h2 style={styles.bottomTitle}>
        Built for Students Who Want Results
      </h2>

      <p style={styles.bottomText}>
        FocusFlow removes distractions and gives you a simple system
        to organize your work, stay consistent, and actually finish your tasks.
      </p>
      <Link to="/login">
        <button style={styles.button}>
          Get Started
        </button>
      </Link>

    </div>

    </div>
  );
}


const styles = {
  page: {
    padding: "90px 10%",
    background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
    fontFamily: "system-ui",
  },

  hero: {
    textAlign: "center",
    marginBottom: "70px",
  },

  badge: {
    background: "#d1fae5",
    color: "#065f46",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "600",
  },

  title: {
    fontSize: "48px",
    marginTop: "20px",
    color: "#111827",
  },

  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
    maxWidth: "650px",
    margin: "20px auto 0",
    lineHeight: "1.7",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },

  card: {
    padding: "28px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.9)",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    background: "linear-gradient(135deg, #10b981, #34d399)",
    color: "white",
    marginBottom: "18px",
  },

  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#111827",
  },

  cardText: {
    color: "#6b7280",
    lineHeight: "1.6",
  },

  bottom: {
    marginTop: "90px",
    textAlign: "center",
    padding: "70px 40px",
    borderRadius: "24px",
    background: "linear-gradient(to right, #ecfdf5, #f0fdf4)",
    border: "1px solid #d1fae5",
  },

  bottomTitle: {
    fontSize: "34px",
    color: "#111827",
  },

  bottomText: {
    marginTop: "15px",
    color: "#6b7280",
    maxWidth: "650px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "1.7",
    fontSize: "16px",
  },

  button: {
    marginTop: "25px",
    padding: "12px 26px",
    borderRadius: "12px",
    border: "none",
    background: "#10b981",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};