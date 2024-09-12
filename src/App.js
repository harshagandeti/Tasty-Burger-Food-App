import React from "react";
// import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
