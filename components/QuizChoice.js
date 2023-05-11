import React from "react";
import styles from "../styles/quizChoice.module.css";
import {useDispatch} from "react-redux";
import { addQuizzToStore } from "../reducers/theQuestions";
import Link from "next/link";
import { useEffect } from "react";
import { addCheckToStore } from "../reducers/checkQuiz";

function QuizChoice(props) {

    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(addQuizzToStore(props.number))
        dispatch(addCheckToStore({ index : props.index , checked: true }))
    }

    useEffect(() => {
      // Récupère les valeurs de checkStore depuis localStorage au chargement du composant
      const checkStoreFromStorage = JSON.parse(localStorage.getItem("checks") || "[]");
      if (checkStoreFromStorage.length) {
          dispatch(addCheckToStore(checkStoreFromStorage));
      }
    }, []);
      
    useEffect(() => {
      // Stocke les valeurs de checkStore dans localStorage à chaque changement
      localStorage.setItem("checks", JSON.stringify(props.checkStore));
    }, [props.checkStore]);
    
  const index = props.checkStore.findIndex((item) => item.index === props.index);
  const isChecked = index !== -1 && props.checkStore[index].checked;

  return (
    <div className={styles.containerBtn}>
       <Link href="/quizz"><button onClick={()=> handleClick()} className={styles.button}>Quiz n° {props.number}</button></Link>
       {isChecked && (
   <img className={`${styles.img} ${styles.check}`} src="done.png" alt="check" />
)}

    </div>

  );
  
}

export default QuizChoice;
