import { useState } from "react";

// ─── Données fictives ────────────────────────────────────────────────────────

const subjectData = [
  { subject: "CPSC 310", hours: "5h 15m", percent: 41, color: "#4a7c59" },
  { subject: "CPSC 386", hours: "3h 30m", percent: 27, color: "#8db48e" },
  { subject: "MATH 240", hours: "2h 15m", percent: 17, color: "#c8dfc9" },
  { subject: "PHYS 210", hours: "1h 45m", percent: 15, color: "#e8e0c0" },
];

const dayData = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.0 },
  { day: "Wed", hours: 3.25, highlight: true },
  { day: "Thu", hours: 1.0 },
  { day: "Fri", hours: 0.5 },
  { day: "Sat", hours: 0.0 },
  { day: "Sun", hours: 0.5 },
];

const weekData = [
  { label: "Apr 6",  hours: 8 },
  { label: "Apr 13", hours: 12 },
  { label: "Apr 20", hours: 10 },
  { label: "Apr 27", hours: 14 },
  { label: "May 4",  hours: 18 },
];

// ─── DonutChart ──────────────────────────────────────────────────────────────

function DonutChart({ data }) {
  const size = 130;
  const cx = size / 2;
  const cy = size / 2;
  const r = 45;
  const circumference = 2 * Math.PI * r;

  let offset = 0;
  const slices = data.map((item) => {
    const dash = (item.percent / 100) * circumference;
    const gap = circumference - dash;
    const slice = { ...item, dash, gap, offset };
    offset += dash;
    return slice;
  });

  return (
    <svg width={size} height={size}>
      {slices.map((s, i) => (
        <circle
          key={i}
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={s.color}
          strokeWidth={22}
          strokeDasharray={`${s.dash} ${s.gap}`}
          strokeDashoffset={-s.offset}
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      ))}
    </svg>
  );
}

// ─── BarChart (Study Time by Day) ────────────────────────────────────────────

function BarChartDay({ data }) {
  const maxH = 4;
  const barW = 22;
  const chartH = 100;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
        {/* Labels Y */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: chartH, fontSize: 10, color: "#999", textAlign: "right", paddingRight: 4 }}>
          {[4, 3, 2, 1, 0].map((v) => <span key={v}>{v}h</span>)}
        </div>
        {/* Barres */}
        <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: chartH }}>
          {data.map((d, i) => {
            const barH = (d.hours / maxH) * chartH;
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                {d.highlight && (
                  <span style={{ fontSize: 10, color: "#4a7c59", fontWeight: 600 }}>{d.hours}h</span>
                )}
                <div style={{
                  width: barW,
                  height: barH || 3,
                  backgroundColor: d.highlight ? "#4a7c59" : "#c8dfc9",
                  borderRadius: "4px 4px 0 0",
                }} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Labels X */}
      <div style={{ display: "flex", gap: 6, marginLeft: 30 }}>
        {data.map((d, i) => (
          <div key={i} style={{ width: barW, textAlign: "center", fontSize: 10, color: "#999" }}>{d.day}</div>
        ))}
      </div>
    </div>
  );
}

// ─── LineChart (Study Time Over Time) ────────────────────────────────────────

function LineChart({ data }) {
  const W = 240;
  const H = 100;
  const maxH = 20;
  const padL = 28;
  const padB = 20;

  const points = data.map((d, i) => ({
    x: padL + (i / (data.length - 1)) * (W - padL - 10),
    y: H - padB - (d.hours / maxH) * (H - padB - 10),
    label: d.label,
    hours: d.hours,
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={W} height={H}>
      {[0, 5, 10, 15, 20].map((v) => {
        const y = H - padB - (v / maxH) * (H - padB - 10);
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - 10} y2={y} stroke="#eee" strokeWidth={1} />
            <text x={padL - 4} y={y + 3} fontSize={8} fill="#bbb" textAnchor="end">{v}h</text>
          </g>
        );
      })}
      <polyline
        points={`${points[0].x},${H - padB} ${polyline} ${points[points.length - 1].x},${H - padB}`}
        fill="#e8f4e8" stroke="none"
      />
      <polyline points={polyline} fill="none" stroke="#4a7c59" strokeWidth={2} />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill="#4a7c59" />
      ))}
      {points.map((p, i) => (
        <text key={i} x={p.x} y={H - 4} fontSize={8} fill="#bbb" textAnchor="middle">{p.label}</text>
      ))}
    </svg>
  );
}

// ─── Page Statistics ──────────────────────────────────────────────────────────

function Analytics() {
  const [activeTab, setActiveTab] = useState("This Week");
  const tabs = ["This Week", "This Month", "This Year", "Custom"];

  return (
    <div style={styles.page}>

      {/* Titre + onglets */}
      <div style={styles.topBar}>
        <h2 style={styles.title}>Statistics</h2>
        <div style={styles.tabs}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={activeTab === t ? styles.tabActive : styles.tab}>
              {t}
            </button>
          ))}
          <button style={styles.tab}>📅</button>
        </div>
      </div>

      {/* ── Ligne 1 : 3 grandes stats ─────────────────────────────────────── */}
      <div style={styles.row}>
        <div style={styles.statCard}>
          <span style={styles.statLabel}>Total Study Time</span>
          <span style={styles.statBig}>12h 45m</span>
          <span style={styles.statUp}>▲ 15% from last week</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statLabel}>Total Sessions</span>
          <span style={styles.statBig}>18</span>
          <span style={styles.statUp}>▲ 12% from last week</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statLabel}>Tasks Completed</span>
          <span style={styles.statBig}>24</span>
          <span style={styles.statUp}>▲ 20% from last week</span>
        </div>
      </div>

      {/* ── Ligne 2 : 3 graphiques ────────────────────────────────────────── */}
      <div style={styles.row}>

        {/* Donut */}
        <div style={styles.card}>
          <span style={styles.cardTitle}>Study Time by Subject</span>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
            <DonutChart data={subjectData} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {subjectData.map((s) => (
                <div key={s.subject} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "#555" }}>{s.subject} {s.hours} ({s.percent}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar day */}
        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={styles.cardTitle}>Study Time by Day</span>
            <span style={{ fontSize: 11, color: "#4a7c59", fontWeight: 600, textAlign: "right" }}>Wed<br />3h 15m</span>
          </div>
          <div style={{ marginTop: 8 }}>
            <BarChartDay data={dayData} />
          </div>
        </div>

        {/* Line */}
        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={styles.cardTitle}>Study Time Over Time</span>
            <select style={styles.select}>
              <option>By Week</option>
              <option>By Month</option>
            </select>
          </div>
          <div style={{ marginTop: 8 }}>
            <LineChart data={weekData} />
          </div>
        </div>

      </div>

      {/* ── Ligne 3 : Insights ────────────────────────────────────────────── */}
      <div style={styles.row}>

        <div style={styles.card}>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ fontSize: 20 }}>💡</span>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#888" }}>Insights</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#555" }}>Your most productive day is</p>
              <p style={{ margin: "4px 0 0", fontSize: 18, fontWeight: 700, color: "#4a7c59" }}>Wednesday</p>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <p style={{ margin: 0, fontSize: 13, color: "#555" }}>You study the most</p>
          <p style={{ margin: "4px 0 0", fontSize: 18, fontWeight: 700, color: "#c4a035" }}>in the morning</p>
        </div>

        <div style={styles.card}>
          <p style={{ margin: 0, fontSize: 13, color: "#555" }}>CPSC 310 is your most studied subject</p>
        </div>

      </div>

    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = {
  page: {
    padding: "20px",
    fontFamily: "system-ui, sans-serif",
    color: "#333",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#08060d",
    margin: 0,
  },
  tabs: {
    display: "flex",
    gap: "6px",
  },
  tab: {
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "13px",
    color: "#555",
  },
  tabActive: {
    padding: "6px 12px",
    border: "1px solid #4a7c59",
    borderRadius: "6px",
    backgroundColor: "#4a7c59",
    cursor: "pointer",
    fontSize: "13px",
    color: "#fff",
    fontWeight: "600",
  },
  row: {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    border: "1px solid #e5e4e7",
    borderRadius: "10px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  statLabel: {
    fontSize: "12px",
    color: "#888",
  },
  statBig: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#08060d",
  },
  statUp: {
    fontSize: "12px",
    color: "#4a7c59",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    border: "1px solid #e5e4e7",
    borderRadius: "10px",
    padding: "16px",
  },
  cardTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#333",
  },
  select: {
    fontSize: "11px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "2px 6px",
    color: "#555",
    cursor: "pointer",
  },
};

export default Analytics;