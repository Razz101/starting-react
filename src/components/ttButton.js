import "../styles/tictacToe.css";

function TTButton({val, onClick, isDisabled=false}) {
  return (
    <>
      <button className="square" onClick={onClick} isDisabled={isDisabled}>
        {val}
      </button>
    </>
  );
}

export default TTButton;
