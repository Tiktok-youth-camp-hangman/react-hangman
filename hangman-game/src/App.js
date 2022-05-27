import React, { useState } from 'react';
import Header from './components/Header';
import Stand from './components/Stand';
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
  
  const [stand, setStand] = useState(null)

  const [hasStarted, setHasStarted] = useState(false)

  const handleClick = () => {
    setWordHolder(letters)
    setHasStarted(true)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValue("");
    document.getElementById("guess-input").focus();

    if (!isLetter(formValue)) {
      setFormState({
        error: true,
        helperText: "Key in a letter!"
      });
      return;
    }

    if (guessedLetters.includes(formValue)) {
      setFormState({
        error: true,
        helperText: "Already guessed " + formValue
      });
      return;
    }

    setGuessedLetters(
      (prevArr) => [...prevArr, formValue]
    );

    if (letters.includes(formValue)) {
      setCorrectLetters(
        (prevArr) => [...prevArr, formValue]
      )
    } else {
      setWrongLetters(
        (prevArr) => [...prevArr, formValue]
      );
    }
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

      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* <TextField
          disabled={!hasStarted}
          error={formState.error}
          helperText={formState.helperText}
          id="guess-input"
          label="Input your guess here"
          type="text"
          value={formValue}
          onChange={handleInputChange}
        /> */}
        {/* <Button
          type="submit"
          disabled={formState.error || !hasStarted}
        >
          Guess
        </Button> */}
      </form>

      <Keyboard handleGuess={handleKeyboard} />

      <WordHolder
        letters={wordHolder}
        correctLetters={correctLetters}
      />
      <WrongLetters wrongLetters={wrongLetters} />
      <Stand stand={stand} />
    </div>
    
  );
}

export default App;
