import React from 'react'
import styled from '@emotion/styled'
import { Border, Footer, Title } from '@/app/components/cards/components'
import { MRM } from '@/app/components/cards/components/MRM/Mrm'
import { ActionCardDefenceDodge } from '@/app/components/cards/ActionCard/DefenceCard/defenceCardType'

type Props  = {
  card: ActionCardDefenceDodge
}

export const DefenceCardDodge: React.FC<Props> = ({ card }) => {
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
    height: theme.cards.actionCard.defence.width, 
    width: theme.cards.actionCard.defence.width,

    "&::before": {
      position: "absolute",
      content: "''",
      height: "90%",
      width: "100%",
      top: "10%",
      left: "0%",
      background: `linear-gradient(45deg, transparent 50%, ${theme.cards.actionCard.defence.baseColor} 0%), linear-gradient(45deg, transparent 50%, ${theme.cards.actionCard.defence.baseColor} 0%)`,
      backgroundSize: `calc(${theme.cards.actionCard.defence.width} * 0.5) calc(${theme.cards.actionCard.defence.width} * 0.5), calc(${theme.cards.actionCard.defence.width} * 0.5) calc(${theme.cards.actionCard.defence.width} * 0.5)`,
      backgroundPosition: "10% 100%, 50% 50%",
      transform: "rotate(45deg)",

      backgroundRepeat: "no-repeat",
      backfaceVisibility: "hidden", 
    }
  }),
);


export const Img = styled.img(
  ({ theme }) => ({
    position: "relative",
    maxWidth: theme.cards.actionCard.defence.width,
    maxHeight: theme.cards.actionCard.defence.width,
  }),
);

