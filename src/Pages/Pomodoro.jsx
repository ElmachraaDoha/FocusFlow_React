import { useEffect, useState } from "react";
import "./Pomodoro.css";
import { database } from "../data/database";

function Pomodoro() {
  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);

  const defaultFocus = currentUser?.preferences?.pomodoroDuration || 25;
  const defaultBreak = 5;

  const [sessionType, setSessionType] = useState("focus");

  const [focusTime, setFocusTime] = useState(defaultFocus);
  const [breakTime, setBreakTime] = useState(defaultBreak);

  const [timeLeft, setTimeLeft] = useState(defaultFocus * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);

      const today = new Date().toISOString().split("T")[0];

      const newSession = {
        id: `sess${Date.now()}`,
        durationMinutes: sessionType === "focus" ? focusTime : breakTime,
        type: sessionType,
        date: today
      };

      currentUser.studySessions.push(newSession);

      if (sessionType === "focus") {
        setSessionType("break");
        setTimeLeft(breakTime * 60);
      } else {
        setSessionType("focus");
        setTimeLeft(focusTime * 60);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType, focusTime, breakTime]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setSessionType("focus");
    setTimeLeft(focusTime * 60);
  };

  const applySettings = () => {
    setIsRunning(false);
    setTimeLeft((sessionType === "focus" ? focusTime : breakTime) * 60);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="pomodoro-page">
      <div className="pomodoro-card">

        <h3 className={`session-type ${sessionType}`}>
          {sessionType === "focus" ? "Focus Time" : "Break Time"}
        </h3>

        <div className="timer-circle">
          <h1>{formatTime(timeLeft)}</h1>
        </div>

        <div className="settings">

          <div>
            <label>Focus (min)</label>
            <input
              type="number"
              value={focusTime}
              onChange={(e) => setFocusTime(Number(e.target.value))}
              min="1"
            />
          </div>

          <div>
            <label>Break (min)</label>
            <input
              type="number"
              value={breakTime}
              onChange={(e) => setBreakTime(Number(e.target.value))}
              min="1"
            />
          </div>

          <div>
            <label>Mode</label>
            <select
              value={sessionType}
              onChange={(e) => {
                setSessionType(e.target.value);
                setTimeLeft(
                  (e.target.value === "focus" ? focusTime : breakTime) * 60
                );
                setIsRunning(false);
              }}
            >
              <option value="focus">Study</option>
              <option value="break">Break</option>
            </select>
          </div>

          <button onClick={applySettings}>
            Apply
          </button>

        </div>

        <div className="timer-buttons">

          <button className="start-btn" onClick={startTimer}>
            Start
          </button>

          <button className="pause-btn" onClick={pauseTimer}>
            Pause
          </button>

          <button className="reset-btn" onClick={resetTimer}>
            Reset
          </button>

        </div>

        <div className="session-info">
          {isRunning
            ? `${sessionType === "focus" ? "Focus" : "Break"} session running...`
            : "Paused"}
        </div>

      </div>
    </div>
  );
}

export default Pomodoro;