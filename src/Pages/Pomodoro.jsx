import { useEffect, useState } from "react";
import "./Pomodoro.css";
import { database } from "../data/database";

function Pomodoro() {
  const currentUserId = localStorage.getItem("CurrentUserId") || "u1";
  const currentUser = database.users.find(u => u.id === currentUserId);
  const subjects = currentUser?.subjects || [];

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id || "");

  const [initialDuration] = useState(25); 

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {

          clearInterval(timer);
          setIsRunning(false);
          handleSessionComplete(); 
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const handleSessionComplete = () => {
    const durationEarned = initialDuration; 
    const today = new Date().toISOString().split('T')[0]; 
   
    const newSession = {
      id: `sess${Date.now()}`,
      subjectId: selectedSubjectId,
      durationMinutes: durationEarned,
      date: today
    };

    
    currentUser.studySessions.push(newSession);

   
    console.log(`Session de ${durationEarned} min enregistrée pour le sujet ${selectedSubjectId}`);
    alert(`Bravo ! ${durationEarned} minutes ajoutées à vos statistiques.`);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubjectId(e.target.value);
    resetTimer();
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(initialDuration);
    setSeconds(0);
  };

  return (
    <div className="pomodoro-page">
      <div className="pomodoro-card">
        <h2>Focus Session</h2>
        <div className="timer-circle">
          <h1>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</h1>
        </div>

        <select 
          className="subject-select" 
          value={selectedSubjectId} 
          onChange={handleSubjectChange}
        >
          {subjects.map((subj) => (
            <option key={subj.id} value={subj.id}>{subj.name}</option>
          ))}
        </select>

        <div className="timer-buttons">
          <button className="start-btn" onClick={() => setIsRunning(true)}>Start</button>
          <button className="pause-btn" onClick={() => setIsRunning(false)}>Pause</button>
          <button className="reset-btn" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;