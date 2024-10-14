// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./styles/styles.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import ArtistPage from "./components/artistPage/ArtistPage";
import Header from "./components/Header";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Header />
    <Routes>
      <Route path=":artistUuid" element={<ArtistPage />} />
    </Routes>
  </Router>
);
