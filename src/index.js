import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Moviepage from "./components/moviepage/moviepage";
import reportWebVitals from "./reportWebVitals";
import AddValuesData from "./components/addValues/addValuesData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie" element={<Moviepage />} />
      <Route path="/add" element={<AddValuesData />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
