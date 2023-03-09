import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/MPComponents/Navbar";
import Footer from "./Components/MPComponents/Footer";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Donator from "./Components/pages/Donator";
import Receiver from "./Components/pages/Receiver";
import Login from "./Components/pages/Login";
import Foodbank from "./Components/pages/Foodbank";
import Registration from "./Components/pages/Registration";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Donator" element={<Donator />} />
        <Route path="/Receiver" element={<Receiver />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Foodbank" element={<Foodbank />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
