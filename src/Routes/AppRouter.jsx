
//importing routing library 
import { createBrowserRouter } from 'react-router-dom';

//importing Layouts
import AppLayout from "../Layouts/AppLayout.jsx";
import LandingLayout from "../Layouts/LandingLayout.jsx";

//importing Pages
import Landing from "../Pages/Landing.jsx";
import Features from "../Pages/Features.jsx";
import About from "../Pages/About.jsx";
import Login from "../Pages/Login.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import Tasks from "../Pages/Tasks.jsx";
import Pomodoro from "../Pages/Pomodoro.jsx";
import StudyRoom from "../Pages/StudyRoom.jsx";



//routing
const router =  createBrowserRouter([

  {
    path:"/",
    element:<LandingLayout/>,
    children:[

      {index:true ,element:<Landing/>},
      {path :"features", element :<Features/>},
      {path :"about", element:<About/>},
      {path :"login",element:<Login/>},

    ]
  },

  {
    path:"/app",
    element:<AppLayout/>,
    children:[

      {index: true ,element:<Dashboard/>},
      {path:"dashboard" ,element:<Dashboard/>},
      {path:"tasks" ,element:<Tasks/>},
      {path:"pomodoro" ,element:<Pomodoro/>},
      {path:"studyroom",element:<StudyRoom/> },

    ]

  }
 
]);

export default router;

