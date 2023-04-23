export default function Square({ value, onSquareClick }) {
  const playerColor = {
    X: 'bg-sky-600 text-white',
    O: 'bg-red-500 text-white',
  };
  const cName =
    'h-full w-full flex justify-center items-center rounded-lg ' +
    playerColor[value];

  return (
    <>
      <button className={cName} onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
