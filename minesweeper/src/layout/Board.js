import styles from "./Board.module.css";

import Square from "../components/Square";

function Board({ rows, columns }) {

  let board = Array(rows)
    .fill(0)
    .map((row) => new Array(columns).fill(<Square hasBomb={Math.random() > 0.250 ? true : false} />));
  

  return (
    <div className={styles.board} id="board">
      {board && board.map((row) => 
        row.map((square) => square)
      )}
    </div>
  );
}

export default Board;
