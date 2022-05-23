import React from 'react'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const Header = () => {
  return (
      <Box
          style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
          }}
      >
          <h1>Hangman</h1>
          <p>Are you ready to be hung?</p>
          <Box>
        <Button
              variant="contained"
              style={{
                  textTransform: 'none'
              }}
          >
              Yes! Let's go!
          </Button>
          <Button
              variant="contained"
              style={{
                  textTransform: 'none'
              }}
          >
              Uh I guess so...
          </Button>
          </Box>
          
      </Box>
  )
}

export default Header