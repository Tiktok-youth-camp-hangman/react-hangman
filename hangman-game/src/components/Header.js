import React from 'react'
import Box from "@mui/material/Box"

const Header = () => {
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
          <h1>Welcom to Hangman</h1>
          <p>Are you ready to be hung?</p>
      </Box>
  )
}

export default Header