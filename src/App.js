import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider } from "./Context/LoginProvider";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashAdmin from "./components/DashAdmin";
import DashPatient from "./components/DashPatient";
import DashSuper from "./components/DashSuper";
import DashTherapist from "./components/DashTherapist";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <Navbar />
        <DashAdmin />
        <Footer />
      </>
    ),
  },
  {
    path: "/supervisor",
    element: (
      <>
        <Navbar />
        <DashSuper />
        <Footer />
      </>
    ),
  },
  {
    path: "/therapist",
    element: (
      <>
        <Navbar />
        <DashTherapist />
        <Footer />
      </>
    ),
  },
  {
    path: "/patient",
    element: (
      <>
        <Navbar />
        <DashPatient />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About/>
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  );
}

export default App;
