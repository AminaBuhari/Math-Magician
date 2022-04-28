import React from 'react';
import styles from './home.module.scss';

function Home() {
  return (
    <>
      <main className={styles.main}>
        <h2 className={styles.header}>Welcome to our page!</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque in facilisis justo.
          Duis nulla mauris, ultricies eu eleifend sit amet, scelerisque sed enim.
          Donec a risus vel sem facilisis tempus at non ex.
          Morbi a mattis lacus, vitae molestie sem.
          Phasellus libero ante, malesuada sit amet mauris tempus, ultricies rutrum ex.
          In ac dui sodales, rhoncus orci et, rutrum orci.
          Vestibulum fermentum pellentesque nunc, vitae egestas ligula gravida quis.
          Nullam arcu urna, varius id erat in, hendrerit imperdiet enim.
        </p>
        <br />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque in facilisis justo. Duis nulla mauris, ultricies  sit amet, scelerisque sed enim.
          Donec a risus vel sem facilisis tempus at non ex. Morbi lacus, vitae molestie sem.
          Phasellus libero ante, malesuada sit amet mauris tempus, ultricies rutrum ex.
          In ac dui sodales, rhoncus orci et, rutrum orci.
          Vestibulum fermentum pellentesque nunc, vitae egestas ligula gravida quis.
          Nullam arcu urna, hendrerit imperdiet enim.
        </p>
      </main>

    </>
  );
}
export default Home;
