import React from "react";
import styles from "../styles/best.module.css";
import Link from "next/link";

function Best() {

  
  return (
    <div>
        <Link href="/bestscore">
        <button className={styles.bestButton}>Best Score</button>
        </Link>
    </div>

  );
  
}

export default Best;
