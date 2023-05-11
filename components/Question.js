import React from "react";
import styles from "../styles/question.module.css";

function Question(props) {

  return (
    <div className={styles.questionContainer}>
        <span>Question n° <strong className={styles.numberQuestion}>{props.next}</strong>/10 : {props.question}</span>
    </div>

  );
  
}

export default Question;