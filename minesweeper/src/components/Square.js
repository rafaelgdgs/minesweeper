import { useEffect } from "react";
import styles from "./Square.module.css";

function Square({ hasBomb }) {

  function reveal() {
    console.log("Reveal");
  }
  function explode() {
    console.log("Explode");
  }

  useEffect(() => {
    hasBomb ? reveal() : explode()
  })

  return <div className={styles.square}></div>
}

export default Square;
