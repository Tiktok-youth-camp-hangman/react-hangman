import React from 'react'

const Keyboard = ({handleGuess, guessedLetters}) => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessedLetters.includes(letter)}
        >
        {letter}
        </button>
    ));
}

export default Keyboard