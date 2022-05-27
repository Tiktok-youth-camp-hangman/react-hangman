import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import '../App.css'

const CategoryButtons = ({handleClick, ANIMAL, FOOD, RANDOM}) => {
    const buttons = [
        <Button
            className="category-button"
            onClick={() => handleClick(ANIMAL)}>Animal</Button>,
        <Button
            className="category-button"
            onClick={() => handleClick(FOOD)}>Food</Button>,
        <Button
            className="category-button"
            onClick={() => handleClick(RANDOM)}>Random</Button>
    ];
    return (
      <div style={{
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
      }}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
        >
            {buttons}
        </ButtonGroup>
    </div>
  )
}

export default CategoryButtons