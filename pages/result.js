import React from "react";
import styles from "../styles/result.module.css";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";
import Start from "../components/Start";

function Result() {

    const score = useSelector((state) => state.scoring.value);
    const name = "Menu";

  return (
    <div>
      <header>
        <Logo />
      </header>
      <main className={styles.main}>
            <h2>Votre Score</h2>
                <div className={styles.content}>
                    <div className={styles.base}>
                        <span className={styles.fontStyle}><strong className={styles.numberScore}>{score}/10</strong> </span>
                    </div>
                    <Start name={name} />
                </div>
       </main>

      
    </div>

  );
  
}

export default Result;
