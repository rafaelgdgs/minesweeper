import { useEffect } from "react";
import styles from "./Square.module.css";

function Square({ hasBomb, key }) {
  function reveal() {
    console.log("Reveal");
  }
  function explode() {
    console.log("Explode");
  }

  useEffect(() => {
    hasBomb ? reveal() : explode();
    // Rafael é viado
  });

  return <div className={styles.square}></div>;
}

export default Square;
