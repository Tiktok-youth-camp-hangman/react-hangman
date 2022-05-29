import React from 'react'
import Box from "@mui/material/Box"
import '../App.css'

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
          className="header"
      >
          <h1>Welcome to Hangman</h1>
          <h3>Are you ready?</h3>
      </Box>
  )
}

export default Header