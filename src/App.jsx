import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BigLogo from "./assets/images/logo-big.png";

import Header from "./components/Header";
import ArtistPage from "./components/artistPage/ArtistPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                marginInline: "auto",
                width: "20%",
                minWidth: "200px",
                marginTop: "50px",
              }}
            >
              <img src={BigLogo} alt="big logo" />
            </div>
          }
        />
        <Route path=":artistUuid" element={<ArtistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
