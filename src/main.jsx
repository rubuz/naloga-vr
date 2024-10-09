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
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import ArtistPage from "./components/ArtistPage";
import "./styles/styles.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path=":artistUuid" element={<ArtistPage />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
