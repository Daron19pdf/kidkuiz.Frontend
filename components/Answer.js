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
      const options = document.getElementsByClassName(styles.base);
      for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === props.correct) {
          options[i].classList.add(styles.correct);
        }
      }
      setTimeout(() => {
        props.setAnswerStatus(null);
        props.resetAnswers();
        for (let i = 0; i < options.length; i++) {
          if (options[i].textContent === props.correct) {
            options[i].classList.remove(styles.correct);
          }
        }
      }, 1500);
    }
  };

  return (
    <div className={styles.content} onClick={handleClick}>
      <div
        className={`${styles.base} ${
          props.answerStatus === true ? styles.correct : ""
        } ${props.answerStatus === false ? styles.wrong : ""}`}
      >
        <span className={styles.fontStyle}>{props.answer}</span>
      </div>
    </div>
  );
}

export default Answer;
