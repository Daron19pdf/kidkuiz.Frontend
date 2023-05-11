import React from "react";
import styles from "../styles/answer.module.css";

function Answer(props) {

    const handleClick = () => {
      if (props.answer === props.correct) {
        props.scoreUp();
        props.setAnswerStatus(true);
        setTimeout(() => {
          props.setAnswerStatus(null);
          props.resetAnswers();
        }, 1000);
      } else {
        props.setAnswerStatus(false);
        setTimeout(() => {
            props.setAnswerStatus(null);
            props.resetAnswers();
            }, 1000);
      }
    };

  return (
    <div className={styles.content} onClick={() => handleClick()}>
        <div  className={`${styles.base} ${props.answerStatus === true ? styles.correct : ''} ${props.answerStatus === false ? styles.wrong : ""}`}>
            <span className={styles.fontStyle}>{props.answer}</span>
        </div>
    </div>

  );
  
}

export default Answer;
