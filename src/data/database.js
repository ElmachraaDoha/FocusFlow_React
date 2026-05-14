
export const database = {

  users: [
    {
      id: "u1",
      name: "Naima Agouzoul",
      email: "naima@example.com",
      password: "123",
      preferences: { pomodoroDuration: 25, theme: "light" },

      tasks: [
        {
          id: "t1",
          title: "Complete E-wallet assignment",
          description: "Finish the E-wallet assignment and submit it before the deadline.",
          status: "todo",
          priority: "High"
        },
        {
          id: "t2",
          title: "Solve TP3 exercises",
          description: "Complete all TP3 exercises and verify the solutions.",
          status: "done",
          priority: "Medium"
        },
        {
          id: "t3",
          title: "Revise Chapter 2",
          description: "Review Chapter 2 and create summary notes.",
          status: "done",
          priority: "Low"
        },
        {
          id: "t4",
          title: "Watch React tutorial",
          description: "Learn React fundamentals including components and hooks.",
          status: "focus",
          priority: "Medium"
        },
        {
          id: "t5",
          title: "Start GTK project",
          description: "Initialize the GTK project structure and setup environment.",
          status: "todo",
          priority: "Medium"
        }
      ],

      studySessions: [
        { id: "sess1", durationMinutes: 45, date: "2026-05-09" },
        { id: "sess2", durationMinutes: 30, date: "2026-05-10" },
        { id: "sess3", durationMinutes: 60, date: "2026-05-11" }
      ]
    },

    {
      id: "u2",
      name: "Nassima Moujib",
      email: "Nassima@example.com",
      password: "456",
      preferences: { pomodoroDuration: 50, theme: "dark" },

      tasks: [
        {
          id: "t6",
          title: "Read web development course",
          description: "Study core concepts of modern web development.",
          status: "done",
          priority: "High"
        },
        {
          id: "t7",
          title: "Create sequence diagrams",
          description: "Design UML sequence diagrams for system interactions.",
          status: "todo",
          priority: "High"
        },
        {
          id: "t8",
          title: "Complete Angular lab",
          description: "Follow instructions and complete Angular TP step by step.",
          status: "todo",
          priority: "Medium"
        },
        {
          id: "t9",
          title: "Prepare presentation slides",
          description: "Create slides for upcoming project presentation.",
          status: "focus",
          priority: "Medium"
        },
        {
          id: "t10",
          title: "Practice SQL queries",
          description: "Solve SQL exercises focusing on joins and subqueries.",
          status: "todo",
          priority: "Low"
        }
      ],

      studySessions: [
        { id: "sess4", durationMinutes: 60, date: "2026-05-08" },
        { id: "sess5", durationMinutes: 45, date: "2026-05-09" }
      ]
    },

    {
      id: "u3",
      name: "Elmachraa Doha",
      email: "Doha@example.com",
      password: "789",
      preferences: { pomodoroDuration: 50, theme: "dark" },

      tasks: [
        {
          id: "t11",
          title: "Solve TP1 exercises",
          description: "Complete TP1 exercises and validate all answers.",
          status: "todo",
          priority: "High"
        },
        {
          id: "t12",
          title: "Revise for exam",
          description: "Review all chapters and practice previous exams.",
          status: "done",
          priority: "High"
        },
        {
          id: "t13",
          title: "Prepare project report",
          description: "Write structured report with explanations and diagrams.",
          status: "focus",
          priority: "Medium"
        },
        {
          id: "t14",
          title: "Practice JavaScript problems",
          description: "Solve algorithmic JavaScript exercises daily.",
          status: "todo",
          priority: "Medium"
        },
        {
          id: "t15",
          title: "Improve Git skills",
          description: "Practice Git commands and branching workflows.",
          status: "todo",
          priority: "Low"
        }
      ],

      studySessions: [
        { id: "sess6", durationMinutes: 50, date: "2026-05-07" },
        { id: "sess7", durationMinutes: 70, date: "2026-05-08" },
        { id: "sess8", durationMinutes: 40, date: "2026-05-09" }
      ]
    }
  ]
};