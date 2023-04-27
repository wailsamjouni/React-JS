import React, { useContext } from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import RightBar from './components/rightbar/RightBar'
import LeftBar from './components/leftbar/LeftBar'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'
import { DarkModeContext } from './context/darkMode'

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from './context/authContext'

function App() {

  const currentUsers = true;
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  console.log(darkMode)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div>
          <NavBar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUsers) {
      return <Navigate to={"login"} />;
    }
    else {
      return children
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
