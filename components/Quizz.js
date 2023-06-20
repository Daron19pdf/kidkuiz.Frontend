import React, { useEffect, useState } from "react";
import styles from "../styles/quizz.module.css";
import Logo from "../components/Logo";
import Question from "../components/Question";
import { useSelector } from "react-redux";
import Answer from "../components/Answer";
import { useDispatch } from "react-redux";
import { scoreToStore } from "../reducers/scoring";


function Quizz() {

  const dispatch = useDispatch();
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState([]) 
  const [correct, setCorrect] = useState()
  const [next, setNext] = useState(1) 
  const [answerStatuses, setAnswerStatuses] = useState([null, null, null, null])
  const quizzNumber = useSelector((state) => state.theQuestions.value.number);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {

    const fetchQuestions = async () => {
        try {
          const res = await fetch("https://kidikuiz-backend.vercel.app/questions");
          const data = await res.json();
          setQuestion(data.data[quizzNumber - 1][`question${next}`].question);
          setAnswers([data.data[quizzNumber - 1][`question${next}`].answer1,
                      data.data[quizzNumber - 1][`question${next}`].answer2,
                      data.data[quizzNumber - 1][`question${next}`].answer3,
                      data.data[quizzNumber - 1][`question${next}`].answer4]);
          setCorrect(data.data[quizzNumber-1][`question${next}`].correctAnswer);
          setAnswerStatuses([null, null, null, null])
          setError(null);
    }
    catch (err) {
      setError("déso ça marche pas");
      setScore(0);
      setNext(1);
    }
  };
    fetchQuestions();
  }, [next]);

  const resetAnswers = () => {
    if (next === 10) {
      window.location.href = "result";
    }else {
    setNext(next + 1);
    setAnswerStatuses([null, null, null, null]);
    }
  }

  const scoreUp = () => {
    setScore(score + 1);
    dispatch(scoreToStore(score+1));
  }

  const raz = () => {
    setNext(1);
    setScore(0);
    window.location.href = "/menu";
  }

  const allAnswer = answers.map((answer, index) => (
    <Answer 
      resetAnswers={resetAnswers} 
      key={index} 
      answer={answer} 
      correct={correct}
      scoreUp={scoreUp}
      answerStatus={answerStatuses[index]}
      setAnswerStatus={(status) => {
        let newAnswerStatuses = [...answerStatuses];
        newAnswerStatuses[index] = status;
        setAnswerStatuses(newAnswerStatuses);
      }}
    />
  ));

  return (
    <div className={styles.mep}>
      <Logo />
      <main className={styles.main}>
        <h2 className={styles.title}>Quizz</h2>
        {error ? (
          <div className={styles.error}>
            <p>{error}</p>
            <button onClick={() => raz()}>Recommencer</button>
          </div>
        ) : (
          <>
            <div className={styles.containerBtn}>
              <Question next={next} question={question} />
            </div>
            <div className={styles.answerContainer}>{allAnswer}</div>
          </>
        )}
      </main>
    </div>
  );
}

export default Quizz;