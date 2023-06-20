import React, { useEffect, useState } from "react";
import styles from "../styles/menu.module.css";
import Logo from "../components/Logo";
import QuizChoice from "../components/QuizChoice";
import { useSelector } from "react-redux";
import Link from "next/link";

function Menu() {

    const [quizzData, setQuizzData] = useState({data: []})
    const checksStore = useSelector((state) => state.checkQuiz.value.checks)
    const numberQuizz = []
    
    useEffect(() => {
        fetch('https://kidikuiz-backend.vercel.app/questions')
        .then(response => response.json())
        .then(data => {
            setQuizzData(data.data.length) 
        })
    }, [])

    for (let i = 1; i < quizzData+1; i++) {
        numberQuizz.push(<QuizChoice key={i} number={i} index={i} checkStore={checksStore} />)
    }

    const raz = () => {
        
    }

  return (
    <div>
      <header>
        <Logo />
      </header>
      <main className={styles.main}>
        <h2 className={styles.title}>Menu</h2>
        <div className={styles.containerBtn}>
        {numberQuizz}
        </div>
        </main>
    </div>

  );
  
}

export default Menu;
