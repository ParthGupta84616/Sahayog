import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashAdmin from "./components/DashAdmin";
import DashSuper from "./components/DashSuper";
import DashTherapist from "./components/DashTherapist";
import DashPatient from "./components/DashPatient";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    ),
  },
  {
    path: "/management",
    element: (
      <div>
        <Navbar />
        <Management />
        <Footer />
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Navbar />
        <Profile />
        <Footer />
      </div>
    ),
  },
  {
    path: "/settings",
    element: (
      <div>
        <Navbar />
        <Settings />
        <Footer />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />
        <Footer />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Navbar />
        <Signup />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashadmin",
    element: (
      <div>
        <Navbar />
        <DashAdmin />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashsuper",
    element: (
      <div>
        <Navbar />
        <DashSuper />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashtherapist",
    element: (
      <div>
        <Navbar />
        <DashTherapist />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashpatient",
    element: (
      <div>
        <Navbar />
        <DashPatient />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
