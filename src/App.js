import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery"; // Ensure this is implemented
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Explore from "./components/Explore";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/exploration" element={<Explore />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
