import Square from './square';
import { useState } from 'react';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isGnameOver, setIsGnameOver] = useState(false);
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setIsGnameOver(!nextSquares.some((i) => i === null));
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);

  let status = 'Next Player : ' + (xIsNext ? 'X' : 'O');
  if (winner) {
    status = 'Winner : ' + winner;
  } else if (isGnameOver) {
    status = 'No Winner';
  }
  const playerColor = {
    X: 'bg-sky-600 text-white',
    O: 'bg-red-500 text-white',
  };
  let cName = winner
    ? 'h-16 flex justify-center items-center rounded-lg ' + playerColor[winner]
    : 'bg-gray-100 h-16 flex justify-center items-center rounded-lg';
  if (isGnameOver) {
    cName =
      'h-16 flex justify-center items-center rounded-lg bg-gradient-to-r from-sky-500 to-red-500 bg-blend-multiply text-white';
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto">
          <h1 className="grid grid-cols-1 gap-4 mb-4 text-center text-5xl text-ellipsis text-blue-800">
            Tic-Tac-Toe
          </h1>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className={cName}>{status}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 h-16">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            </div>
            <div className="bg-gray-100 h-16">
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
