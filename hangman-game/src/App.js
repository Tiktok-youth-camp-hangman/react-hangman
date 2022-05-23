import React, { useState } from 'react';
import Header from './components/Header';
import Stand from './components/Stand';
import WordHolder from './components/WordHolder';
import WrongLetters from './components/WrongLetters';
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";

function App() {
  const word = "serendipity";
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

  const handleSubmit = (e) => {
    e.preventDefault();

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
        helperText: "Already guessed this letter"
      });
      return;
    }

    setGuessedLetters(
      (prevArr) => [...prevArr, formValue]
    );

    if (letters.includes(formValue)) {
      console.log("correct");
    } else {
      setWrongLetters(
        (prevArr) => [...prevArr, formValue]
      );
    }

    console.log(guessedLetters)
  }

  const [wordHolder, setWordHolder] = useState(null)

  const [wrongLetters, setWrongLetters] =
    useState([])
  
  const [stand, setStand] = useState(null)

  const [hasStarted, setHasStarted] = useState(false)

  const handleClick = () => {
    setWordHolder(letters)
    setHasStarted(true)
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
        <TextField
          disabled={!hasStarted}
          error={formState.error}
          helperText={formState.helperText}
          id="guess-input"
          label="Input your guess here"
          type="text"
          value={formValue}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          disabled={formState.error || !hasStarted}
        >
          Guess
        </Button>
      </form>

      <WordHolder letters={wordHolder} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Stand stand={stand} />
    </div>
    
  );
}

export default App;
