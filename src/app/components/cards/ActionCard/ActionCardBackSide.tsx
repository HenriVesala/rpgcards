

import React from 'react'
import styled from '@emotion/styled'


export const ActionCardBackSide: React.FC = () => {



  return (
    <CardStackContainer onClick={onActionCardStackClick}>
      {cardCount === 0 &&  <EmptyStack />}
       {cardCount > 0 &&  <StackedCards>{rows}</StackedCards>}
    </CardStackContainer>
  )
}


const StackedCards =  styled.div(
    ({ theme }) => ({
    position: "relative",
    border: "1px solid #50107f",
    borderRadius: "0.25rem",
    width: "240px",
    height: "360px",
    zIndex: "1",
    background: `repeating-radial-gradient(
      circle,
      purple,
      purple 10px,
      #4b026f 10px, 
      #4b026f 20px
    )`,
  })
);