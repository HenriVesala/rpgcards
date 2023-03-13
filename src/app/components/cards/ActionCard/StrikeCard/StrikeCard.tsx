import React from 'react'
import styled from '@emotion/styled'
import { Border, Footer, Title } from '@/app/components/cards/components'
import { ActionCardStrike } from '@/app/components/cards/ActionCard/StrikeCard/strikeCardType'
import { MeleeMRMSymbol } from '@/app/components/cards/components/MRM/Melee'
import { MRM } from '@/app/components/cards/components/MRM/Mrm'

type Props  = {
  card: ActionCardStrike
}

export const StrikeCard: React.FC<Props> = ({ card }) => {
  const { title, footer, bacgroundImage } = card
  return (
    <Border>
      <Title>
        {title}
      </Title>
      <CardArea>
        <Img src={bacgroundImage} alt={title} />

        
          <MRM melee={card.melee} ranged={card.ranged} magic={card.magic} />
    
      </CardArea>
      <Footer>{footer}</Footer>
    </Border>
  )
}


export const CardArea = styled.div(
  ({ theme }) => ({
    display: "block",
    position: "relative",
   // clipPath: "polygon(65% 0%, 34% 37%, 55% 36%, 26% 66%, 44% 71%, 29% 94%, 58% 73%, 51% 60%, 76% 30%, 60% 23%)",

    height: theme.cards.actionCard.strike.width, 
    width: theme.cards.actionCard.strike.width,

    "&::before": {
      position: "absolute",
      content: "''",
      height: "90%",
      width: "100%",
      top: "0%",
      left: "0%",
      background: `linear-gradient(transparent 0%, ${theme.cards.actionCard.strike.baseColor} 0%), linear-gradient(to top left, ${theme.cards.actionCard.strike.baseColor} 43%, yellow 43%, yellow 44%, transparent 44%), linear-gradient(to top left, transparent 56%, yellow 56%, yellow 57%, ${theme.cards.actionCard.strike.baseColor} 57%), linear-gradient(transparent 0%, yellow 0%), linear-gradient(to top left, yellow 51%, transparent 51%), linear-gradient(to top left, transparent 49%, yellow 49%)`,
      backgroundSize: "20% 40%, 22% 42%, 22% 42%, 23% 42%, 23% 42%, 23% 42%",
      backgroundPosition: "50% 50%, 32% 5%, 70% 100%, 50% 50%, 33% 7%, 69% 98%",
      backgroundRepeat: "no-repeat",
      transform: "skewY(-30deg) skewX(-30deg)",
      backfaceVisibility: "hidden",
    }
  }),
);


export const Img = styled.img(
  ({ theme }) => ({
    position: "relative",
    maxWidth: theme.cards.actionCard.strike.width,
    maxHeight: theme.cards.actionCard.strike.width,
  }),
);




/*
const triangle = styled.div(.triangle-element {
    width: 40px;
    height: 40px;
    background: green;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
})

/*

  backgroundColor: `repeating-radial-gradient(
    circle,
    purple,
    purple 10px,
    #4b026f 10px, 
    #4b026f 20px
  )`,

  */