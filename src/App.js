import "./App.css";
import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AcademyPage from "./components/Academy";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AcademyPage />} />
      </Routes>
    </div>
  );
}

export default App;
