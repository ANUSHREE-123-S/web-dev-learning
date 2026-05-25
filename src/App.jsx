import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Contact  from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App(){
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );

}
export default App;