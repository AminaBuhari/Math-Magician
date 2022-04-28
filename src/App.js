import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/events';
import About from './components/about';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <header className="header">
        <Calculator />
      </header>
    </div>
  );
}

export default App;
