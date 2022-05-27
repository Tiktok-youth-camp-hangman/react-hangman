import React from 'react'
import Box from '@mui/material/Box'

const WrongLetters = ({ wrongLetters }) => {
  if (wrongLetters.length === 0) return;
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }}>
      <div>Wrong letters</div>
      <div>{wrongLetters}</div>
    </Box>
  )
}

export default WrongLetters