import React from 'react'
import '../App.css';

const Keyboard = ({handleGuess, guessedLetters}) => {
    return (
        <div>
            {("abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
                <button
                    className='keyboard-button'
                    key={letter}
                    value={letter}
                    onClick={handleGuess}
                    disabled={guessedLetters.includes(letter)}
                >
                    {letter}
                </button>
            )))
        }</div>
    )
}

export default Keyboard