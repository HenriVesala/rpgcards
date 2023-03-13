import { AbilityCard } from '@/app/components/cards/AbilityCard'
import { ActionCard } from '@/app/components/cards/ActionCard'
import { HitCard } from '@/app/components/cards/HitCard'
import { RangedHitCard } from '@/app/components/cards/RangedHitCard'
import { CardType } from '@/app/components/cards/types'
import { getCards } from '@/app/getCards'
import styled from '@emotion/styled'
import React from 'react'



export const Cards: React.FC = () => {
  return (
    <ApplicationContainer>
      <CardsContainer>
        {getCards().map((card, i) => {
          if (card.type === CardType.CARD_TYPE_ACTION) {
            return <ActionCard key={i} card={card} />
          }

          if (card.type === CardType.CARD_TYPE_ABILITY) {
            return <AbilityCard key={i} card={card} />
          }

          if (card.type === CardType.CARD_TYPE_HIT) {
            return <HitCard key={i} card={card} />
          }

          if (card.type === CardType.CARD_TYPE_RANGED_HIT) {
            return <RangedHitCard key={i} card={card} />
          }
        })}
      </CardsContainer>
    </ApplicationContainer>
  )
}

const ApplicationContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const CardsContainer = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`
