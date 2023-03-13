
import React from 'react'
import styled from '@emotion/styled'

type Props  = {
  cardCount: number
  onActionCardStackClick: () => void
}

export const ActionCardStack: React.FC<Props> = ({ cardCount, onActionCardStackClick }) => {


  const rows = [];
  for (let i = 0; i < cardCount - 1; i++) {
    rows.push(<StackedCard key={i} rotation={(Math.random() *4) - 2  } cardIndex={i -1 }/>);
  }



  return (
    <CardStackContainer onClick={onActionCardStackClick}>
      {cardCount === 0 &&  <EmptyStack />}
       {cardCount > 0 &&  <StackedCards>{rows}</StackedCards>}
    </CardStackContainer>
  )
}

const CardStackContainer = styled.div(
  ({ theme }) => ({
    margin: "20px"

  })
);


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


type StackedCardProps = {
  rotation: number
  cardIndex: number
};

const StackedCard =  styled.div<StackedCardProps>(
    ({ theme, rotation, cardIndex }) => ({
    left: "0px",
    position: "absolute",
    bottom: `${cardIndex}px`,
    height: "100%",
    width: "100%",
    border: "1px solid #2b004f",
    background: `repeating-radial-gradient(
      circle,
      purple,
      purple 10px,
      #4b026f 10px, 
      #4b026f 20px
    )`,
    zIndex: "0",
    transform: `rotate(${rotation}deg)`,
  })
);

const EmptyStack =  styled.div(
    ({ theme }) => ({
    position: "relative",
    border: "1px solid grey",
    borderRadius: "0.25rem",
    width: "240px",
    height: "360px",
    zIndex: "1",
    background: `repeating-radial-gradient(
      circle,
      grey,
      grey 10px,
      darkgrey 10px, 
      darkgrey 20px
    )`,

    "&::before": {
      position: "absolute",
      content: "''",
      height: "90%",
      width: "100%",
      top: "10%",
      left: "0%",
      background: `linear-gradient(transparent 0%, red 0%), linear-gradient(to top left, red 100%, transparent 0%)`,
      backgroundSize: `calc(${theme.cards.actionCard.defence.width} / 5) calc(${theme.cards.actionCard.defence.width} * 0.9), calc(${theme.cards.actionCard.defence.width} * 0.9) calc(${theme.cards.actionCard.defence.width} / 5)`,
      backgroundPosition: "50% 50%, 50% 50%",
      backgroundRepeat: "no-repeat",
      transform: "rotate(-45deg)",
      backfaceVisibility: "hidden", 
    }

  })
);


/*


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
</head>
<body>

<h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

*/