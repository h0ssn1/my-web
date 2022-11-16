import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css'


const  App = () => {
  return (
   <Router>
    <div className="app">
    <NavBar/>
  
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
   
    </div>
   </Router>
  );
}

export default App;