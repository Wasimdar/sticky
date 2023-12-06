import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import DrawingArea from "./components/Draw/DrawingArea";
import StickyBoard from "./components/Dashboard/StickyBoard";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="drawing" element={<DrawingArea />} />
        <Route path="/StickyBoard" element={<StickyBoard />} />
  
      </Routes>
    </HashRouter>
  );
};

export default App;
