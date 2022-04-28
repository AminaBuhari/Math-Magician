import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

function Home() {
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
        <h2>Welcome to our page!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in facilisis justo. Duis nulla mauris, ultricies eu eleifend sit amet, scelerisque sed enim. Donec a risus vel sem facilisis tempus at non ex. Morbi a mattis lacus, vitae molestie sem. Phasellus libero ante, malesuada sit amet mauris tempus, ultricies rutrum ex. In ac dui sodales, rhoncus orci et, rutrum orci. Vestibulum fermentum pellentesque nunc, vitae egestas ligula gravida quis. Nullam arcu urna, varius id erat in, hendrerit imperdiet enim. </p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in facilisis justo. Duis nulla mauris, ultricies eu eleifend sit amet, scelerisque sed enim. Donec a risus vel sem facilisis tempus at non ex. Morbi a mattis lacus, vitae molestie sem. Phasellus libero ante, malesuada sit amet mauris tempus, ultricies rutrum ex. In ac dui sodales, rhoncus orci et, rutrum orci. Vestibulum fermentum pellentesque nunc, vitae egestas ligula gravida quis. Nullam arcu urna, varius id erat in, hendrerit imperdiet enim. </p>
      </main>

    </>
  );
}
export default Home;
