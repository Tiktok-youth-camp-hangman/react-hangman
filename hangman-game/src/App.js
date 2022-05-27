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

  // var stand = document.getElementById('stand');
  // var head = document.getElementById('head');//mans face
  // var body = document.getElementById('body');//mans spine
  // var leftHand = document.getElementById('leftHand');
  // var rightHand = document.getElementById('rightHand');
  // var leftLeg = document.getElementById('leftLeg');
  // var rightLeg = document.getElementById('rightLeg');
  // var hangman = [stand, head, body, leftHand, rightHand, leftLeg, rightLeg];

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
    setMistakes(0);
    setGuessedLetters([]);
    setWrongLetters([]);
    setCorrectLetters([]);
    setVisibilities(defaultVisibilities);
  }

  switch (gameState) {
    case PRESTART:
      return (
        <div>
          <Header />
          <Button onClick={() => handleClick(ANIMAL)}>Animal</Button>
          <Button onClick={() => handleClick(FOOD)}>Food</Button>
          <Button onClick={() => handleClick(RANDOM)}>Random</Button>
        </div>
        
      )
    
    case START:
      return (
        <div>
          <Keyboard handleGuess={handleKeyboard} guessedLetters={guessedLetters} />

          <WordHolder
            word={word}
            letters={wordHolder}
            correctLetters={correctLetters}
          />
          
          <Figure visibility={visibilities} />
          
          <WrongLetters wrongLetters={wrongLetters} />

          <EndgameMsg
            letters={letters}
            correctLetters={correctLetters}
            gameResult={gameResult}
            setGameResult={setGameResult}
            WIN={WIN}
            handleRestart={handleRestart}
          />
        </div>
      );
    default:
      return console.error('there is an error');
  }
}

export default App;
