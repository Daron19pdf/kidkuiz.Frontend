import React from "react";
import styles from "../styles/start.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { scoreToStore } from "../reducers/scoring";

function start(props) {

    const dispatch = useDispatch();

    const raz = () => {
       setTimeout(() => {
        dispatch(scoreToStore(0))
        }, 2000);
    }

  return (
    <div>
        <Link href="/menu">
            <button onClick={() => raz()} className={styles.startButton}>{props.name}</button>
        </Link>
    </div>

  );
  
}

export default start;
