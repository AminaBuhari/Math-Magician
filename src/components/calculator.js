import React from 'react';
import Calc from './events';
import styles from './calculator.module.scss';

function Calculator() {
  return (
    <div className={styles.wrap}>
      <main>
        <h2 className={styles.head}>Lets do some math!</h2>
      </main>
      <div className={styles.calcwrap}>
        <Calc />
      </div>
    </div>
  );
}

export default Calculator;
