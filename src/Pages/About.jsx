

export default function About() {
  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <h1 style={styles.title}>About FocusFlow</h1>
        <p style={styles.subtitle}>
          A simple productivity system built to help students stay focused,
          organized, and consistent.
        </p>
      </div>

      <div style={styles.box}>
        <p>
          FocusFlow is a productivity and study management application designed
          to help students stay organized, focused, and consistent in their daily work.
        </p>

        <p>
          It combines task management, Pomodoro technique, and analytics to improve
          learning habits and track progress over time.
        </p>

        <p>
          The goal is simple: help you study smarter, not harder.
        </p>
      </div>

      <div style={styles.mission}>
        <h2 style={styles.missionTitle}>Our Mission</h2>
        <p style={styles.missionText}>
          Make studying easier by giving students modern tools to manage time,
          reduce distraction, and build better habits.
        </p>
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
    marginBottom: "60px",
  },

  title: {
    fontSize: "48px",
    color: "#111827",
  },

  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
    maxWidth: "650px",
    margin: "15px auto 0",
    lineHeight: "1.6",
  },

  box: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.9)",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    lineHeight: "1.8",
    color: "#374151",
    fontSize: "16px",
  },

  mission: {
    marginTop: "60px",
    textAlign: "center",
    padding: "50px",
    borderRadius: "24px",
    background: "#ecfdf5",
    border: "1px solid #d1fae5",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  missionTitle: {
    fontSize: "28px",
    color: "#111827",
  },

  missionText: {
    marginTop: "10px",
    color: "#6b7280",
    lineHeight: "1.7",
  },
};