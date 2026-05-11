import "./Dashboard.css";



export default function Dashboard() {
 return (

 <div className="dashboard">

 <main className="main">
 
 <header className="topbar">
 <h2>Dashboard</h2>
 </header>

 <div className="grid">

 <div className="card timer">
 <h3>Focus Session</h3>

<div className="circle">
 24:57
 </div>

<button>Pause</button>
<button>Reset</button>
 </div>

{/* Overview */}
 <div className="card">
 <h3>Today Overview</h3>
 <p> 1h 20m</p>
<p> 3 tasks done</p>
 <p>2 focus sessions</p>
</div>

{/* Tasks */}
<div className="card">
 <h3>Upcoming Tasks</h3>
 <ul>
<li>Finish OS assignment</li>
 <li>Watch React tutorial</li>
 <li>Lab report</li>
 </ul>
 </div>

 {/* Sessions */}
<div className="card">
 <h3>Recent Sessions</h3>
 <p> gtk - 25 min</p>
 <p> web - 25 min</p>
 </div>

 </div>

 </main>
 </div>
 );
}

