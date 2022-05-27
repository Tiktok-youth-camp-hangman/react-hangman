import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WordHolder from './components/WordHolder';
import WrongLetters from './components/WrongLetters';
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import Animals from "./words/Animals"
import Foods from "./words/Foods"
import RandomWords from "./words/RandomWords"
import Keyboard from './components/Keyboard';
import EndgameMsg from './components/EndgameMsg';
import CategoryButtons from './components/CategoryButtons';
import './App.css'

function App() {
  const PRESTART = "prestart";
  const START = "start";
  const WIN = "win";
  const LOSE = "lose";

  const ANIMAL = "animals";
  const FOOD = "foods";
  const RANDOM = "randome";

  const [word, setWord] = useState('');
  const [letters, setLetters] = useState([])

  const selectWord = (library) => {
    const num = Math.floor(Math.random() * library.length);
    const selectedWord = library[num].toLowerCase();
    console.log(selectedWord);
    return selectedWord;
  }

  const handleClick = (category) => {
    console.log(category)
    var newWord = ''
    switch (category) {
      case ANIMAL:
        newWord = selectWord(Animals);
        setWord(newWord);
        break;
      case FOOD:
        newWord = selectWord(Foods)
        setWord(newWord);
        break;
      default:
        newWord = selectWord(RandomWords)
        setWord(newWord);
        break;
    }
    const newLetters = newWord.split('');
    setLetters(newLetters)
    setWordHolder(newLetters);
    setGameState(START);
  }

  const maxWrong = 7;
  const [mistakes, setMistakes] = useState(0);

  const [gameState, setGameState] = useState(PRESTART)

  const [guessedLetters, setGuessedLetters] =
    useState([]);
  
  const [correctLetters, setCorrectLetters] =
    useState([]);

  
  const [wordHolder, setWordHolder] = useState(null)

  const [wrongLetters, setWrongLetters] =
    useState([])
  
  const defaultVisibilities = Array(7).fill('hidden')
  const [visibilities, setVisibilities] = useState(defaultVisibilities)

  const [gameResult, setGameResult] = useState(null);

  const handleKeyboard = (e) => {
    let letter = e.target.value;
    
    setGuessedLetters(
      (prevArr) => [...prevArr, letter]
    );

    if (letters.includes(letter)) {
      setCorrectLetters(
        (prevArr) => [...prevArr, letter]
      );
    } else {
      setWrongLetters(
        (prevArr) => [...prevArr, letter]
      );
      setVisibilities(
        (prevArr) => ({ ...prevArr, [wrongLetters.length]: "visible" })
      );
      setMistakes(prevCount => prevCount + 1);
      if (wrongLetters.length+1 === maxWrong) {
        setGameResult(LOSE);
      }
    }
  }

  const handleRestart = () => {
    setGameState(PRESTART);
    setGameResult(null);
    setMistakes(0);
    setGuessedLetters([]);
    setWrongLetters([]);
    setCorrectLetters([]);
    setVisibilities(defaultVisibilities);
  }

  switch (gameState) {
    case PRESTART:
      return (
        <div style={{
          justifyContent: "center",
          dispaly: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}>
          <Header />
          <CategoryButtons
            handleClick={handleClick}
            ANIMAL={ANIMAL}
            FOOD={FOOD}
            RANDOM={RANDOM}
          />
        </div>
        
      )
    
    case START:
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{display: "flex", flexDirection: "row"}}>
            <div className="left-wrapper">
              <Keyboard handleGuess={handleKeyboard} guessedLetters={guessedLetters} />

              <WordHolder
                word={word}
                letters={wordHolder}
                correctLetters={correctLetters}
              />
            </div>
            <div className="right-wrapper">
              <Figure visibility={visibilities} />

              <WrongLetters wrongLetters={wrongLetters} />
            </div>
          </div>
          <div style={{
            justifyContent: "center",
            diplay: "flex",
            alignItems: "center"
          }}>
            <EndgameMsg
              letters={letters}
              correctLetters={correctLetters}
              gameResult={gameResult}
              setGameResult={setGameResult}
              WIN={WIN}
              handleRestart={handleRestart}
            />
          </div>
        </div>
      );
    default:
      return console.error('there is an error');
  }
}

export default App;
