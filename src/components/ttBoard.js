import { useState } from "react";
import TTButton from "./ttButton";

function TTBoard() {
  const [vals, setVals] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [winnerText, setWinnerText] = useState("Who will be the winner??");

  function checkWinner(vals) {
    if (
      (vals[0] === vals[1] && vals[0] === vals[2] && vals[0] != null) ||
      (vals[3] === vals[4] && vals[3] === vals[5] && vals[3] != null) ||
      (vals[6] === vals[7] && vals[6] === vals[8] && vals[6] != null) ||
      (vals[0] === vals[3] && vals[0] === vals[6] && vals[0] != null) ||
      (vals[1] === vals[4] && vals[1] === vals[7] && vals[1] != null) ||
      (vals[2] === vals[5] && vals[2] === vals[8] && vals[2] != null) ||
      (vals[0] === vals[4] && vals[0] === vals[8] && vals[0] != null) ||
      (vals[2] === vals[4] && vals[2] === vals[6] && vals[2] != null)
    ) {
      console.log(true);
      if (xTurn) {
        setWinnerText("X is the winner");
      } else {
        setWinnerText("O is the winner");
      }
    }
  }

  function handleClick(i) {
    if (vals[i] === null) {
      const nxtVals = vals.slice();
      if (xTurn) {
        nxtVals[i] = "X";
      } else {
        nxtVals[i] = "O";
      }
      setVals(nxtVals);
      checkWinner(nxtVals);
      setXTurn(!xTurn);
    }
  }

  function reset() {
    setVals(Array(9).fill(null))
    setWinnerText("Who will be the winner??")
  }

  return (
    <>
    <span className="winnerText">{winnerText}</span>
    <div></div>
    <button onClick={()=>reset()}>Reset</button>
    <hr></hr>
    <div className="board">
      <div className="boardRow">
        <TTButton val={vals[0]} onClick={() => handleClick(0)} />
        <TTButton val={vals[1]} onClick={() => handleClick(1)} />
        <TTButton val={vals[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="boardRow">
        <TTButton val={vals[3]} onClick={() => handleClick(3)} />
        <TTButton val={vals[4]} onClick={() => handleClick(4)} />
        <TTButton val={vals[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="boardRow">
        <TTButton val={vals[6]} onClick={() => handleClick(6)} />
        <TTButton val={vals[7]} onClick={() => handleClick(7)} />
        <TTButton val={vals[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
    </>
  );
}

export default TTBoard;
