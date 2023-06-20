import React, { useEffect } from 'react';
import Logo from '/components/Logo';
import Start from '/components/Start';
import styles from '../styles/Home.module.css';


function Home() {

  const preheat = async () => {
    await fetch('https://kidikuiz-backend.vercel.app/questions')
    .then(response => response.json())
  }
  preheat()



  const name = "Start";
  return (
    <div>
      <header>
        <Logo />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Kidikuiz</h1>
        <div className={styles.containerButton}>
           <Start name={name} />
        </div>
      </main>
    </div>
  );
}

export default Home;
