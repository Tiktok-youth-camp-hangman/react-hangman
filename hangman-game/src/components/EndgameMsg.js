import React from 'react'
import RestartButton from './RestartButton';

const EndgameMsg = ({ letters, correctLetters, gameResult, setGameResult, WIN, handleRestart }) => {

    if (letters.length === 0) return;
    
    function setsAreEqual(a, b) {
        if (a.size !== b.size) {
            return false;
        }

        return Array.from(a).every(element => {
            return b.has(element);
        });
    }
    const correctAns = new Set(letters);
    const providedAns = new Set(correctLetters);
    console.log(correctAns, providedAns);

    if (setsAreEqual(correctAns, providedAns)) setGameResult(WIN);

    const winMsg = "Congratulations! You won!";
    const loseMsg = "Oops...You lost. The correct word is " + letters.join('');

    if (gameResult === null) return;

    if (gameResult === WIN)
    return (
        <div>
            <div>{winMsg}</div>
            <RestartButton handleRestart={handleRestart} />
        </div>
    )

    return (
        <div>
            <div>{loseMsg}</div>
            <RestartButton handleRestart={handleRestart} />
        </div>
    )
}

export default EndgameMsg