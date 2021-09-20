import React, { useState } from 'react';
import Cross from './Cross';

const initialState = ["", "", "", "", "", "", "", "", "", ""];

function Board() {

    const [cross, setCross] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);

    const winner = calculateWinner(cross);
    let status;
    if (winner) {
        status = alert('Winner is:- ' + winner)
        status = 'Winner is :- ' + winner;
    } else {
        status = 'Player Turn : ' + (X ? 'X' : 'O');
    }

    const renderCross = (i) => {
        return (
            <Cross value={cross[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        let strings = Array.from(cross);
        strings[i] = X ? "X" : "O";
        setCross(strings);
        setX(!X);
    }

    function calculateWinner(crosss) {
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

            if (crosss[a] && crosss[a] === crosss[b] && crosss[a] === crosss[c]) {
                return crosss[a];
            }
        }
        return null;
    }

    return (
        <div className="board">
            <div className="board_row">
                {renderCross(0)}
                {renderCross(1)}
                {renderCross(2)}
            </div>
            <div className="board_row">
                {renderCross(3)}
                {renderCross(4)}
                {renderCross(5)}
            </div>
            <div className="board_row">
                {renderCross(6)}
                {renderCross(7)}
                {renderCross(8)}
            </div>

            <button className="clearbtn" onClick={() => setCross(initialState)}>Clear</button>

            <h2 className="result">{status}</h2>
        </div>
    )
}
export default Board;
