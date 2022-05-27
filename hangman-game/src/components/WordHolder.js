import React from 'react'
import Box from '@mui/material/Box'
import '../App.css'

const WordHolder = ({ word, letters, correctLetters }) => {

    if (letters === null) return (<div></div>);
    
    return (
        <Box
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
            }}
        >
            {
                letters.map((letter, index) => {
                    return (
                        <Box
                            style={{
                                marginTop: "20px",
                                border: "1px dashed grey",
                                height: "80px",
                                width: "80px"
                            }}
                            key={index}
                        >
                            <div
                                style={{
                                    fontSize: "50px",
                                    textAlign: "center",
                                    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
                                }}>
                                {(correctLetters.includes(letter))
                                    ? letter
                                    : ""
                                }
                            </div>
                        </Box>)
                })
            }
        </Box>
    )
}

export default WordHolder