import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../gameLogic';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history[stepNumber]);

  const style = {
    width: '200px',
    margin: '20px auto',
  };

  function onClick(i) {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    //if user click square is occupied or game is over, return
    if (winner || squares[i]) return;

    // show X or O
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  function renderMoves() {
    return history.map((step, move) => {
      const destination = move ? `Go to move#${move}` : 'Go To Start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  }
  return (
    <>
      <Board squares={history[stepNumber]} onClick={onClick} />
      <div style={style}>
        <p>
          {winner
            ? 'Winner is:' + winner
            : 'Next Player is' + (xIsNext ? ' X' : ' O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
