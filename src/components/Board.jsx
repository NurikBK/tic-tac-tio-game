import Square from './Square';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      <Square value="1" onClick={onClick} />
    </div>
  );
}

export default Board;
