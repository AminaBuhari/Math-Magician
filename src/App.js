import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Quote from './components/quote';
import Home from './components/home';
import Calculator from './components/calculator';

function App() {
  return (

    <div className="App">
      <nav className="nav">
        <h1 className="head">
          Math Magicians
        </h1>
        <ul className="navList">
          <li><Link to="/" className="dec">Home</Link></li>
          <li><Link to="/calculator" className="calculator">Calculator</Link></li>
          <li><Link to="/quote" className="dec">Quotes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator />} />

      </Routes>

    </div>
  );
}

export default App;
