import React, { useState } from 'react';
import Board from './Components/Board';

const App = () => {

  const [screen, setScreen] = useState("", "", "", "", "", "", "", "", "");

  return (
    <div className="game">
      <h1>React Game ( Tic-Tac-Toe )</h1>
      <Board />
    </div>
  )
}
export default App
