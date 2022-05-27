import React from 'react'

const Keyboard = ({handleGuess}) => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={handleGuess}
        // disabled={this.state.guessed.has(letter)}
        >
        {letter}
        </button>
    ));
}

export default Keyboard