import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./app.scss";
import Home from "./pages/Home";
import React from "react";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import About from "./pages/About";
import Photography from "./pages/Photography";
function App() {
  return (
    <div className=" background bg-overlay text-white">
      <div className="bg-overlay xl:px-20">
        <HashRouter>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
