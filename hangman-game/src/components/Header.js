import React from 'react'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const Header = ({handleClick}) => {
  return (
      <Box
          style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px"
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
              onClick={handleClick}
          >
              Yes! Let's go!
          </Button>
          <Button
                variant="contained"
                style={{
                    textTransform: 'none'
                }}
                onClick={handleClick}
          >
              Uh I guess so...
          </Button>
          </Box>
          
      </Box>
  )
}

export default Header