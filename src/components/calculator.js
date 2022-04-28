import React from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
  return (
    <>
      <nav className="nav">
        <h1>
          Math Magicians
        </h1>
        <ul className="navList">
          <li><Link to="/" className="dec">Home</Link></li>
          <li><Link to="/calculator" className="calculator">Calculator</Link></li>
          <li><Link to="/about" className="dec">Quotes</Link></li>
        </ul>
      </nav>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav />
    </>
  );
}

export default Calculator;
