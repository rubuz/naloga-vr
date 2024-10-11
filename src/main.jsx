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
import App from "./App";
import Layout from "./Layout";
import "./styles/styles.css";
import ArtistPage from "./components/artistPage/ArtistPage";
import { NavbarProvider } from "./context/NavbarContext";
import { ArtistProvider } from "./context/ArtistContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <NavbarProvider>
    <ArtistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Layout />} /> */}
            <Route path=":artistUuid" element={<ArtistPage />} />
          </Route>
        </Routes>
      </Router>
    </ArtistProvider>
  </NavbarProvider>
);
