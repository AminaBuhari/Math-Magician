import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calc from './components/events';
import Quote from './components/quote';
import Home from './components/home';
import Calculator from './components/calculator'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator/>} />

      </Routes>
      <header className="header">
        <Calc/>
      </header>
    </div>
  );
}

export default App;
