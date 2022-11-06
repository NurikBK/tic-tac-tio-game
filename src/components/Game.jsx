import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../gameLogic';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);

  function onClick(i) {
    const boardCopy = [...board];
    //if user click square is occupied or game is over, return
    if (winner || board[i]) return;

    // show X or O
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  function jumpTo() {}

  function renderMoves() {}
  return (
    <div>
      <Board squares={board} onClick={onClick} />
    </div>
  );
}

export default Game;
