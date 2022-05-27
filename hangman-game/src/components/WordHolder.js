import React from 'react'
import Box from '@mui/material/Box'

const WordHolder = ({ letters, correctLetters }) => {
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
                                border: "1px dashed grey",
                                height: "30px",
                                width: "30px",
                                textAlign: "center"
                            }}
                            key={index}
                        >
                            {(correctLetters.includes(letter))
                                ? letter
                                : ""
                            }
                        </Box>)
                })
            }
        </Box>
    )
}

export default WordHolder