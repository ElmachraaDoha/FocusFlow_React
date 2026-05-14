import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  List,
  Timer,
  TvMinimal,
  CheckCircle2,
} from "lucide-react";


function Features() {

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


      {/* hero */}
      <div style={styles.hero}>

        <h1 style={styles.title}>
          Everything You Need to Stay Productive
        </h1>

        <p style={styles.subtitle}>
          FocusFlow is designed to help students stay organized,
          focused, and productive without feeling overwhelmed.
          Everything works together inside one clean and modern workspace.
        </p>

      </div>

      {/* intro */}
      <div style={styles.introBox}>

        <p style={styles.introText}>
          Whether you are preparing for exams, managing assignments,
          building better habits, or trying to stay consistent with your goals,
          FocusFlow gives you the tools to create structure and improve
          your daily workflow.
        </p>

        <p style={styles.introText}>
          Our platform combines simplicity, performance,
          and productivity features to help students focus on what truly matters:
          learning effectively and making real progress.
        </p>

      </div>

      {/* features */}
      <div style={styles.grid}>

          {/* dashboard */}
          <div
            style={styles.card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >

            <div style={styles.icon}>
              <LayoutDashboard size={20} />
            </div>

            <h2 style={styles.cardTitle}>
              Smart Dashboard
            </h2>

            <p style={styles.cardText}>
              The dashboard acts as the center of your productivity system,
              helping students clearly organize tasks, focus sessions,
              and study goals in one place.
            </p>

            <ul style={styles.list}>
              <li>View daily and weekly goals</li>
              <li>Track completed tasks</li>
              <li>Monitor productivity progress</li>
              <li>Access focus sessions quickly</li>
              <li>Build better study routines</li>
            </ul>

          </div>

          {/* tasks */}
          <div
            style={styles.card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >

            <div style={styles.icon}>
              <List size={20} />
            </div>

            <h2 style={styles.cardTitle}>
              Task Management System
            </h2>

            <p style={styles.cardText}>
              Organize assignments, break large goals into smaller steps,
              and create a simple workflow that keeps studying manageable
              and motivating.
            </p>

            <ul style={styles.list}>
              <li>Create study tasks easily</li>
              <li>Organize by priority</li>
              <li>Track progress clearly</li>
              <li>Build personalized study plans</li>
              <li>Stay consistent daily</li>
            </ul>

          </div>

          {/* pomodoro */}
          <div
            style={styles.card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >

            <div style={styles.icon}>
              <Timer size={20} />
            </div>

            <h2 style={styles.cardTitle}>
              Pomodoro Focus Sessions
            </h2>

            <p style={styles.cardText}>
              Improve concentration using structured focus and break cycles
              designed to reduce burnout and increase productivity.
            </p>

            <ul style={styles.list}>
              <li>Stay focused longer</li>
              <li>Reduce procrastination</li>
              <li>Improve time awareness</li>
              <li>Prevent mental exhaustion</li>
              <li>Create healthier study routines</li>
            </ul>

          </div>

          {/* study room */}
          <div
            style={styles.card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >

            <div style={styles.icon}>
              <TvMinimal size={20} />
            </div>

            <h2 style={styles.cardTitle}>
              Calm Study Rooms
            </h2>

            <p style={styles.cardText}>
              Enter relaxing virtual study spaces designed to help students
              focus better through calm environments, peaceful sounds,
              and guided study sessions.
            </p>

            <ul style={styles.list}>
              <li>Watch calm study session videos</li>
              <li>Study with relaxing background music</li>
              <li>Improve concentration naturally</li>
              <li>Create a peaceful learning atmosphere</li>
              <li>Stay motivated during long sessions</li>
            </ul>

          </div>
      </div>
      
        {/* why section */}
        <div style={styles.whySection}>

          <h2 style={styles.whyTitle}>
            Built for Students Who Want Results
          </h2>

          <p style={styles.whyText}>
            FocusFlow is more than just a productivity app.
            It is a study environment created for students
            who want to improve habits, stay organized,
            and achieve meaningful goals without feeling overwhelmed.
          </p>

          <div style={styles.points}>

            <div style={styles.point}>
              <CheckCircle2 size={18} />
              <span>Remove unnecessary distractions</span>
            </div>

            <div style={styles.point}>
              <CheckCircle2 size={18} />
              <span>Encourage deep focus</span>
            </div>

            <div style={styles.point}>
              <CheckCircle2 size={18} />
              <span>Simplify organization</span>
            </div>

            <div style={styles.point}>
              <CheckCircle2 size={18} />
              <span>Build consistent habits</span>
            </div>

          </div>

        </div>

        {/* final cta */}
        <div style={styles.bottom}>

          <h2 style={styles.bottomTitle}>
            Why FocusFlow Matters
          </h2>

          <p style={styles.bottomText}>
            Students today face distractions, pressure,
            procrastination, and burnout more than ever before.
            FocusFlow was created to solve these problems through
            simplicity, structure, and smart productivity tools.
          </p>

          <p style={styles.bottomText}>
            The goal is simple:
            help students stay focused, stay consistent,
            and achieve their goals with confidence.
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
    background:"linear-gradient(to bottom right, #A7C957, #ecfdf5)",
    fontFamily: "system-ui",
  },

  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },

  badge: {
    background: "#d1fae5",
    color: "#065f46",
    padding: "8px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "600",
  },

  title: {
    fontSize: "54px",
    marginTop: "20px",
    color: "#111827",
    lineHeight: "1.1",
  },

  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
    maxWidth: "750px",
    margin: "20px auto 0",
    lineHeight: "1.8",
  },

  introBox: {
    maxWidth: "950px",
    margin: "0 auto 70px",
    padding: "40px",
    borderRadius: "24px",
    background: "white",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  introText: {
    color: "#4b5563",
    lineHeight: "1.9",
    marginBottom: "18px",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },

  card: {
    padding: "30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.95)",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  icon: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #10b981, #34d399)",
    color: "white",
    marginBottom: "20px",
  },

  cardTitle: {
    fontSize: "24px",
    color: "#111827",
    marginBottom: "15px",
  },

  cardText: {
    color: "#6b7280",
    lineHeight: "1.8",
    marginBottom: "18px",
  },

  list: {
    paddingLeft: "18px",
    color: "#374151",
    lineHeight: "2",
  },

  whySection: {
    marginTop: "90px",
    padding: "60px",
    borderRadius: "28px",
    background: "#ecfdf5",
    border: "1px solid #d1fae5",
    textAlign: "center",
  },

  whyTitle: {
    fontSize: "38px",
    color: "#111827",
  },

  whyText: {
    marginTop: "20px",
    color: "#6b7280",
    lineHeight: "1.9",
    maxWidth: "850px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  points: {
    marginTop: "35px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  point: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "18px",
    borderRadius: "16px",
    background: "white",
    color: "#111827",
    fontWeight: "500",
  },

  bottom: {
    marginTop: "90px",
    textAlign: "center",
    padding: "70px 40px",
    borderRadius: "28px",
    background: "linear-gradient(to right, #f0fdf4, #ecfdf5)",
    border: "1px solid #d1fae5",
  },

  bottomTitle: {
    fontSize: "40px",
    color: "#111827",
  },

  bottomText: {
    marginTop: "18px",
    color: "#6b7280",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "1.9",
    fontSize: "17px",
  },

  button: {
    marginTop: "30px",
    padding: "14px 30px",
    borderRadius: "14px",
    border: "none",
    background: "#10b981",
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};



export default  Features;