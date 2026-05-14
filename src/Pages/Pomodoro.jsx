import { useEffect, useState } from "react";
import { database } from "../data/database";
import "./Pomodoro.css";


function Pomodoro() {

  //user
  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);

  //default values
  const defaultFocus = currentUser?.preferences?.pomodoroDuration || 25;
  const defaultBreak = 5;
  
  //session type ( default:study)
  const [sessionType, setSessionType] = useState("focus");

  //change default values (user can change the timer to his/her liking)
  const [focusTime, setFocusTime] = useState(defaultFocus);
  const [breakTime, setBreakTime] = useState(defaultBreak);

  // the remaining time(s)
  const [timeLeft, setTimeLeft] = useState(defaultFocus * 60);

  //is timer (running or not )
  const [isRunning, setIsRunning] = useState(false);

  //handle timer 
  useEffect(() => {

    let interval = null;

    //start timer (interval)
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    //when timer ends
    if (timeLeft === 0) {
      setIsRunning(false);

      //get the date (today)
      const today = new Date().toISOString().split("T")[0];
      //create new session
      const newSession = {
        id: `sess${Date.now()}`,
        durationMinutes: sessionType === "focus" ? focusTime : breakTime,
        type: sessionType,
        date: today
      };

      //save study session to database
      currentUser.studySessions.push(newSession);
      
      //reset to next sesion
      if (sessionType === "focus") {
        setSessionType("break");
        setTimeLeft(breakTime * 60);
      } else {
        setSessionType("focus");
        setTimeLeft(focusTime * 60);
      }
    }
    
    //clrear interval
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType, focusTime, breakTime]);

  //start timer(triggers useEffect to begin count down )
  const startTimer = () => setIsRunning(true);

  //stop timer
  const pauseTimer = () => setIsRunning(false);

  //reset timer to initial state
  const resetTimer = () => {
    setIsRunning(false);
    setSessionType("focus");
    setTimeLeft(focusTime * 60);
  };

  // apply the new values the user chose  without starting it 
  const applySettings = () => {
    setIsRunning(false);
    setTimeLeft((sessionType === "focus" ? focusTime : breakTime) * 60);
  };

  //change time format 
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);//get minutes
    const s = sec % 60;//get remaining secondes 
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