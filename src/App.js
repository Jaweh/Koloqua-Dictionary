import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Contribute from "./components/Contribute";
import DictionarySearch from "./components/DictionarySearch";



function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="top-bar">
          <div className="logo">Koloqua <span>Dictionary</span></div>
          <div className="nav-wrapper"><Navbar /></div>
        </div>
        <div className="main-content-area">
        <Routes>
          <Route index element={<DictionarySearch />}></Route>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
        </div>
        <div className="footer-wrapper"></div>
      </div>
    </Router>
  );
}

export default App;