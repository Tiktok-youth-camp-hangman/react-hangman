import React, { useState } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WordHolder from './components/WordHolder';
import WrongLetters from './components/WrongLetters';
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import Animals from "./words/Animals"
import Keyboard from './components/Keyboard';

function App() {
  const words = Animals;
  console.log(words)
  const word = words[0];
  console.log(word)
  const letters = word.split("");

  const defaultFormValue = "";

  const [formValue, setFormValue] = useState(defaultFormValue)

  const defaultFormState = {
    error: false,
    helperText: null
  }

  const [formState, setFormState] = useState(defaultFormState)

  function isLetter(input) {
    return input.length === 1 && input.match(/[a-z]/i);
  }

  const handleInputChange = (e) => {
    const input = e.target.value
    setFormValue(input)
    setFormState(defaultFormState)
    if (!isLetter(input)) {
      setFormState({
        error: true,
        helperText: "Key in a letter!"
      })
    }
  }

  const [guessedLetters, setGuessedLetters] =
    useState([]);
  
  const [correctLetters, setCorrectLetters] =
    useState([]);

  
  const [wordHolder, setWordHolder] = useState(null)

  const [wrongLetters, setWrongLetters] =
    useState([])
  
  const [figure, setFigure] = useState('figure')

  const [hasStarted, setHasStarted] = useState(false)

  const handleClick = () => {
    setWordHolder(letters)
    setHasStarted(true)
  }


  const handleKeyboard = (e) => {
    let letter = e.target.value;
    
    setGuessedLetters(
      (prevArr) => [...prevArr, letter]
    );

    if (letters.includes(letter)) {
      setCorrectLetters(
        (prevArr) => [...prevArr, letter]
      )
    } else {
      setWrongLetters(
        (prevArr) => [...prevArr, letter]
      );
    }

    // if (wrongLetters.includes(letter)) {
    //   e.target.disabled = true;
    // }
  }

  return (
    <div>
      <Header handleClick={() => handleClick()} />

      <Keyboard handleGuess={handleKeyboard} guessedLetters={guessedLetters} />

      <WordHolder
        letters={wordHolder}
        correctLetters={correctLetters}
      />
      <WrongLetters wrongLetters={wrongLetters} />
      <Figure figure={figure} />
    </div>
    
  );
}

export default App;
