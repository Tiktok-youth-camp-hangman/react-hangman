import React from 'react'
import Button from '@mui/material/Button'

const RestartButton = ({handleRestart}) => {
  return (
    <Button variant="contained" onClick={handleRestart}>Play again</Button>
  )
}

export default RestartButton