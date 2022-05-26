import React, {Component} from 'react';
import './Hangman.css';
import {randomWord} from './Words.js';

import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";
import step7 from "./images/7.png";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 7,
        images: [step0, step1, step2, step3, step4, step5, step6, step7]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0, // number of mistakes start at 0
            guessed: new Set([]), // contains all guessed letters
            answer: randomWord()
        }
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    handleGuess = e => {
        let letter = e.target.value;

        this.setState(st => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }))
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
          <button
            class='btn btn-lg btn-primary m-2'
            key={letter}
            value={letter}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(letter)}
          >
            {letter}
          </button>
        ));
    }

    resetButton = () => {
        this.setState({
          mistake: 0,
          guessed: new Set([]),
          answer: randomWord()
        });
    }

    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        const allGuessedLetters = Array.from(this.state.guessed);

        let gameStat = this.generateButtons();

        if (isWinner) {
            gameStat = "You win!";
        }

        if (gameOver) {
            gameStat = "You lose!";
        }

        return (
            <div className='Hangman container'>
                {/* Header */}
                <h1 className='text-center'>Hangman Game</h1>

                {/* Display letter(s) that are guessed wrongly */}
                <div className='float-right'>
                <p>You have guessed: {allGuessedLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}</p>
                </div>

                {/* Record number of wrong guess(es) and word(s) that are entered wrongly. */}
                <div className='float-left'>Wrong Guess(es): {this.state.mistake} of {this.props.maxWrong}</div>

                {/* Display game image corresponding to the current game stage (which is in turn based on number of wrong guess(es)) */}
                <div className='text-center'>
                    <img src={this.props.images[this.state.mistake]} 
                    width="240" 
                    height="auto"
                    alt=""/>
                </div>

                {/* Guess the word session */}
                <div className='text-center'>
                    {!(gameOver || isWinner) ? "Guess the word!" : ""}
                    <p>
                        {!gameOver ? this.guessedWord() : "The correct word is: " + this.state.answer}
                    </p>
                    <p>{gameStat}</p>
                    <button className='btn btn-info' onClick={this.resetButton}>Start again</button>
                </div>

            </div>
        )
    }
}

export default Hangman;
