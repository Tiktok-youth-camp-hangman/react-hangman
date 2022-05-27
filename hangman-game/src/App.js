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
  
  const defaultVisibilities = Array(7).fill('hidden')
  const [visibilities, setVisibilities] = useState(defaultVisibilities)


  // for(let i = wrongLetters.length; i < hangman.length; i++ ) {
  //   hangman[i].style.visibility = "hidden";
  // }

  const [hasStarted, setHasStarted] = useState(false)

  const handleClick = () => {
    setWordHolder(letters)
    setHasStarted(true)
  }

  var stand = document.getElementById('stand');
  var head = document.getElementById('head');//mans face
  var body = document.getElementById('body');//mans spine
  var leftHand = document.getElementById('leftHand');
  var rightHand = document.getElementById('rightHand');
  var leftLeg = document.getElementById('leftLeg');
  var rightLeg = document.getElementById('rightLeg');
  var hangman = [stand, head, body, leftHand, rightHand, leftLeg, rightLeg];

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
      setVisibilities(
        (prevArr) => ({...prevArr, [wrongLetters.length]: "visible"})
      )
    }
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
      <Figure visibility={ visibilities }/>
    </div>
    
  );
}

export default App;
