export const database = {
  users: [
    {
      id: "u1",
      name: "Naima Agouzoul",
      email: "naima@example.com",
      password: "123", 
      preferences: { pomodoroDuration: 25, theme: "light" },
      tasks: [
        { id: "t1",  title: "Faire e devoir E-wallet", status: "todo", priority: "High" },
        { id: "t2",  title: "Resodre TP3", status: "done", priority: "Medium" },
        { id: "t3",  title: "Reviser le chapitre 2", status: "done", priority: "Low" },
        { id: "t4",  title: "Regarder React tutorial", status: "focus", priority: "Medium" },
        { id: "t5",  title: "Commencer le projet GTK", status: "todo", priority: "Medium" }
      ],
      studySessions: [
        { id: "sess1",  durationMinutes: 45, date: "2026-05-09" }
      ]
    },
    {
      id: "u2",
      name: "Nassima Moujib",
      email: "Nassima@example.com",
      password: "456",
      preferences: { pomodoroDuration: 50, theme: "dark" },
      tasks: [
        { id: "t6",  title: "Exercices d'intégration", status: "todo", priority: "High" },
        { id: "t7",  title: "TP Optique", status: "done", priority: "Low" },
        { id: "t8",  title: "Reviser le chapitre 4", status: "focus", priority: "Medium" }
      ],
      studySessions: [
        { id: "sess2", durationMinutes: 60, date: "2026-05-08" }
      ],
    },
    {
      id: "u3",
      name: "Elmachraa Doha",
      email: "Doha@example.com",
      password: "789",
      preferences: { pomodoroDuration: 50, theme: "dark" },
      tasks: [
        { id: "t9",  title: "Resoudre TP 1", status: "todo", priority: "High" },
        { id: "t10", title: "Reviser pour l'exam", status: "done", priority: "High" },
        { id: "t11", title: "Preparer le rapport de projet", status: "focus", priority: "Medium" }
      ],
      studySessions: [
        { id: "sess3", durationMinutes: 60, date: "2026-05-08" }
      ],
    }
  ]
};

