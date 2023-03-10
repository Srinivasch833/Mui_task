import React from 'react'
import Signup from './Routing/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Routing/navbar';
import Home from './Routing/home';
import About from './Routing/about';
import Login from './Routing/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Signup" exact element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
