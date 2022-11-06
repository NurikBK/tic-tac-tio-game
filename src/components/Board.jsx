import Square from './Square';

function Board({ squares, onClick }) {
  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  };
  return (
    <div style={style}>
      {squares.map((square, index) => {
        return (
          <Square key={index} value={square} onClick={() => onClick(index)} />
        );
      })}
    </div>
  );
}

export default Board;
