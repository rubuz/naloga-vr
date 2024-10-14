import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ArtistPage from "./components/artistPage/ArtistPage";
import Header from "./components/Header";

import "./styles/styles.css";

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
