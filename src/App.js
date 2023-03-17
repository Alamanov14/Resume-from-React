import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body/Body";
import Education from "./components/Body/Education";
import Portfolio from "./components/Body/Portfolio";
import Skils from "./components/Body/Skils";
import AboutMe from "./components/Header/AboutMe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/1" element={<AboutMe />} />
          <Route path="/2" element={<Skils />} />
          <Route path="/3" element={<Education />} />
          <Route path="/4" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
