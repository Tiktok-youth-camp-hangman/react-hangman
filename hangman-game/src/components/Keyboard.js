import React from 'react'

const Keyboard = ({handleGuess, guessedLetters}) => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button
            className='keyboard_button'
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={guessedLetters.includes(letter)}
            // style={{
            //     boxSizing: "border-box",
            //     lineHeight: "80px",
            //     fontSize: "22px",
            //     textAlign: "center",
            //     width: "80px",
            //     color: "#555",
            //     cursor: "pointer",
            //     margin: "0 8px",
            //     height: "80px",
            //     borderColor: "#f2f2f2",
            //     borderStyle: "solid",
            //     textShadow: "0 0.5px 1px #777, 0 2px 6px #f2f2f2",
            //     borderWidth: "1px",
            //     borderRadius: "10px",
            //     background: "-webkit-linear-gradient(top, #f9f9f9 0%, #D2D2D2 80%, #c0c0c0 100%)",
            //     display: "inline-block",
            //     transition: "box-shadow 0.3s ease, transform 0.15s ease",
            //     boxShadow: "0 0 1px #888,0 1px 0 #fff, 0 6px 0 #C0C0C0, 0 8px 17px rgba(#444, 0.4), 2px 1px 4px rgba(#444, 0.25), -2px 1px 4px rgba(#444, 0.25), 0 9px 16px rgba(#444, 0.1)",
            // }}
            // onMouseEnter={{
            //     boxShadow: "0 0 1px #888,0 1px 0 #fff, 0 4px 0 #C0C0C0, 0 2px 35px rgba(#444, 0.3), 2px 2px 4px rgba(#444, 0.25), -2px 2px 4px rgba(#444, 0.25), 0 7px 4px rgba(#444, 0.1)",
            //     transform: "translateY(2px)"
            // }}
        >
            {letter}
        </button>
    ));
}

export default Keyboard