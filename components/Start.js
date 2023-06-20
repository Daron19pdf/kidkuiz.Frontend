import React from "react";
import styles from "../styles/start.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { scoreToStore } from "../reducers/scoring";

function Start(props) {

    const dispatch = useDispatch();

    const raz = async () => {
      dispatch(scoreToStore(0));
      await router.prefetch("/menu"); 
      router.push("/menu"); 
    };

  return (
    <div>
        <Link href="/menu">
            <button onClick={() => raz} className={styles.startButton}>{props.name}</button>
        </Link>
    </div>

  );
  
}

export default Start;
