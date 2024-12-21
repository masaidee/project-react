import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/page/Home/Header"; // นำเข้าคอมโพเนนต์ Header
import Home from "./page/Home"; // สร้างหน้า Home
import About from "./page/About"; // สร้างหน้า About

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
