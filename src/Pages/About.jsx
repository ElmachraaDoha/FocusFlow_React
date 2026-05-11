
export default function About() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>

        <h1 style={styles.title}>
          Studying Smarter Starts Here
        </h1>

        <p style={styles.subtitle}>
          A space created for students, dreamers, and lifelong learners
          who want to grow through meaningful learning and better habits.
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div style={styles.contentBox}>

        <h2 style={styles.sectionTitle}>
          Welcome to FocusFlow
        </h2>

        <p style={styles.text}>
          Welcome to our Study With Me space — a place built for students,
          dreamers, and lifelong learners who want to grow, improve,
          and achieve their goals through meaningful learning.
        </p>

        <p style={styles.text}>
          Studying is often viewed as stressful or overwhelming,
          but we believe it can become inspiring and rewarding when approached
          with the right mindset. Learning is not only about passing exams
          or getting high grades. It is about building confidence,
          developing discipline, discovering new ideas,
          and creating opportunities for your future.
        </p>

        <p style={styles.text}>
          Our goal is to help students understand that success does not come
          from studying longer hours alone, but from studying smarter.
          A few focused hours with the right strategy can be far more powerful
          than an entire day filled with distractions and stress.
        </p>

      </div>

      {/* WHY SECTION */}
      <div style={styles.cardSection}>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Why Loving to Study Matters</h2>

          <p style={styles.cardText}>
            When students begin to enjoy learning, everything changes.
            Curiosity replaces pressure, and studying becomes less of an obligation
            and more of a personal investment.
          </p>

          <p style={styles.cardText}>
            Learning develops important life skills such as discipline,
            time management, problem-solving, patience, independence,
            and critical thinking.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Study Smarter, Not Harder</h2>

          <p style={styles.cardText}>
            Productivity is not measured only by the number of hours spent studying.
            Effective learning is about quality, focus, consistency, and strategy.
          </p>

          <ul style={styles.list}>
            <li>Creating a study plan</li>
            <li>Staying consistent</li>
            <li>Using active learning methods</li>
            <li>Managing time effectively</li>
            <li>Building healthy routines</li>
          </ul>
        </div>

      </div>

      {/* MISTAKES SECTION */}
      <div style={styles.mission}>

        <h2 style={styles.missionTitle}>
          Learning Through Mistakes
        </h2>

        <p style={styles.missionText}>
          Mistakes are a natural part of growth. Every successful student
          has faced challenges, confusion, and failure at some point.
          What matters most is persistence — the willingness to continue
          learning and improving.
        </p>

        <p style={styles.missionText}>
          Progress does not happen overnight.
          Real success is built slowly through consistency,
          patience, and effort.
        </p>

      </div>

      {/* FINAL CTA */}
      <div style={styles.finalSection}>

        <h2 style={styles.finalTitle}>
          Our Mission
        </h2>

        <p style={styles.finalText}>
          This website was created to motivate and support students
          on their learning journey. We believe every student has potential.
          With the right mindset, smart study methods,
          and consistent effort, incredible growth is possible.
        </p>

        <p style={styles.finalText}>
          Learning is not just about school —
          it is about becoming the best version of yourself.
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
    marginBottom: "70px",
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
    fontSize: "52px",
    color: "#111827",
    marginTop: "20px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
    maxWidth: "700px",
    margin: "20px auto 0",
    lineHeight: "1.7",
  },

  contentBox: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px",
    borderRadius: "24px",
    background: "white",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  sectionTitle: {
    fontSize: "32px",
    color: "#111827",
    marginBottom: "20px",
  },

  text: {
    color: "#4b5563",
    lineHeight: "1.9",
    marginBottom: "20px",
    fontSize: "17px",
  },

  cardSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    marginTop: "60px",
  },

  card: {
    padding: "30px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.9)",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    fontSize: "24px",
    marginBottom: "18px",
    color: "#111827",
  },

  cardText: {
    color: "#6b7280",
    lineHeight: "1.8",
    marginBottom: "15px",
  },

  list: {
    paddingLeft: "20px",
    color: "#374151",
    lineHeight: "2",
  },

  mission: {
    marginTop: "70px",
    padding: "50px",
    borderRadius: "24px",
    background: "#ecfdf5",
    border: "1px solid #d1fae5",
  },

  missionTitle: {
    fontSize: "32px",
    color: "#111827",
    marginBottom: "20px",
    textAlign: "center",
  },

  missionText: {
    color: "#4b5563",
    lineHeight: "1.9",
    maxWidth: "900px",
    margin: "0 auto 20px",
    textAlign: "center",
  },

  finalSection: {
    marginTop: "70px",
    textAlign: "center",
    padding: "60px 40px",
  },

  finalTitle: {
    fontSize: "40px",
    color: "#111827",
    marginBottom: "20px",
  },

  finalText: {
    color: "#6b7280",
    lineHeight: "1.9",
    maxWidth: "800px",
    margin: "0 auto 20px",
    fontSize: "17px",
  },
};