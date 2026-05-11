import { Link } from "react-router-dom";
import study3 from "../assets/study3.jfif";
import studyAnimation from "../assets/studyAnimation.gif";


export default function Landing() {
  return (
    <section style={styles.hero}>

      <div style={styles.topSection}>

        <div style={styles.left}>

          <h1 style={styles.title}>
            Focus Better.
            <br />
            Study Smarter.
          </h1>

          <p style={styles.text}>
            FocusFlow helps students organize tasks,
            manage study sessions, and track productivity
            using a modern and distraction-free workspace.
          </p>

          <div style={styles.buttons}>

            <Link to="/features">
              <button style={styles.primaryBtn}>
                Explore Features
              </button>
            </Link>

            <Link to="/about">
              <button style={styles.secondaryBtn}>
                Learn More
              </button>
            </Link>

          </div>

        </div>

        <div style={styles.right}>

          <img
            style={styles.image}
            src={study3}
            alt="FocusFlow Dashboard"
          />

        </div>

      </div>

      <div style={styles.videoContainer}>

      <img
        style={styles.video}
        src={studyAnimation}
        alt="Study Animation"
      />

      </div>

    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    padding: "80px 10%",
    background:
      "linear-gradient(to bottom right, #f8fafc, #ecfdf5)",
  },

  topSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  badge: {
    background: "#d1fae5",
    color: "#065f46",
    padding: "8px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "600",
    display: "inline-block",
  },

  title: {
    fontSize: "72px",
    lineHeight: "1.1",
    marginTop: "25px",
    color: "#111827",
    fontWeight: "700",
  },

  text: {
    marginTop: "25px",
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#6b7280",
    maxWidth: "550px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
  },

  primaryBtn: {
    padding: "14px 28px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    background: "#10b981",
    color: "white",
  },

  secondaryBtn: {
    padding: "14px 28px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    border: "1px solid #d1d5db",
    background: "white",
    color: "#111827",
  },

  image: {
    width: "100%",
    maxWidth: "650px",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },

  videoContainer: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
  },

  video: {
    width: "100%",
    maxWidth: "1200px",
    maxHeight: "500px", 
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    objectFit: "cover",
  },
};