export const database = {
  users: [
    {
      id: "u1",
      name: "Naima Agouzoul",
      email: "naima@example.com",
      password: "123", 
      preferences: { pomodoroDuration: 25, theme: "light" },
      subjects: [
        { id: "s1", name: "React", color: "#10b981" },
        { id: "s2", name: "Systèmes d'exploitation", color: "#3b82f6" },
        { id: "s3", name: "C++", color: "#3b82d7" },
        { id: "s4", name: "GTK", color: "#3b8" }
      ],
      tasks: [
        { id: "t1", subjectId: "s1", title: "Faire e devoir E-wallet", status: "todo", priority: "High" },
        { id: "t2", subjectId: "s2", title: "Resodre TP3", status: "done", priority: "Medium" },
        { id: "t3", subjectId: "s2", title: "Reviser le chapitre 2", status: "done", priority: "Low" },
        { id: "t4", subjectId: "s1", title: "Regarder React tutorial", status: "focus", priority: "Medium" },
        { id: "t5", subjectId: "s4", title: "Commencer le projet GTK", status: "todo", priority: "Medium" }
      ],
      studySessions: [
        { id: "sess1", subjectId: "s1", durationMinutes: 45, date: "2026-05-09" }
      ],
      analytics: { totalStudyTime: "12h 45m", tasksCompleted: 15 }
    },
    {
      id: "u2",
      name: "Nassima Moujib",
      email: "Nassima@example.com",
      password: "456",
      preferences: { pomodoroDuration: 50, theme: "dark" },
      subjects: [
        { id: "s5", name: "Analyse 3", color: "#f59e0b" },
        { id: "s6", name: "Physique Appliquée", color: "#ef4444" },
        { id: "s7", name: "Algebre 1", color: "#ef4444" }
      ],
      tasks: [
        { id: "t6", subjectId: "s5", title: "Exercices d'intégration", status: "todo", priority: "High" },
        { id: "t7", subjectId: "s6", title: "TP Optique", status: "done", priority: "Low" },
        { id: "t8", subjectId: "s7", title: "Reviser le chapitre 4", status: "focus", priority: "Medium" }
      ],
      studySessions: [
        { id: "sess2", subjectId: "s7", durationMinutes: 60, date: "2026-05-08" }
      ],
      analytics: { totalStudyTime: "25h 10m", tasksCompleted: 42 }
    },
    {
      id: "u3",
      name: "Elmachraa Doha",
      email: "Doha@example.com",
      password: "789",
      preferences: { pomodoroDuration: 50, theme: "dark" },
      subjects: [
        { id: "s8", name: "Robotique", color: "#f59e0b" },
        { id: "s9", name: "Reseau", color: "#ef4444" },
        { id: "s10", name: "Java", color: "#ef4444" }
      ],
      tasks: [
        { id: "t9", subjectId: "s10", title: "Resoudre TP 1", status: "todo", priority: "High" },
        { id: "t10", subjectId: "s9", title: "Reviser pour l'exam", status: "done", priority: "HIGH" },
        { id: "t11", subjectId: "s8", title: "Preparer le rapport de projet", status: "focus", priority: "Medium" }
      ],
      studySessions: [
        { id: "sess3", subjectId: "s8", durationMinutes: 60, date: "2026-05-08" }
      ],
      analytics: { totalStudyTime: "10h 00m", tasksCompleted: 10 }
    }
  ]
};