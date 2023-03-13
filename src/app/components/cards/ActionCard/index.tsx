import React from 'react'
import { ActionCardStrike } from '@/app/components/cards/ActionCard/StrikeCard/strikeCardType'
import { ActionCardDefence, DefenceType } from '@/app/components/cards/ActionCard/DefenceCard/defenceCardType'
import { ActionCardType } from "@/app/components/cards/ActionCard/types"
import { StrikeCard } from '@/app/components/cards/ActionCard/StrikeCard/StrikeCard'
import { DefenceCardDodge } from '@/app/components/cards/ActionCard/DefenceCard/DodgeCard'
import { DefenceCardParry } from '@/app/components/cards/ActionCard/DefenceCard/ParryCard'


type Props  = {
  card:  ActionCardStrike | ActionCardDefence
}

export const ActionCard: React.FC<Props> = ({ card }) => {
  if(card.actionCardType === ActionCardType.STRIKE) {
    return <StrikeCard card={card} />
  }
  if(card.actionCardType === ActionCardType.DEFENCE) {
    if(card.defenceType === DefenceType.DODGE) {
      return <DefenceCardDodge card={card} />
    }
    if(card.defenceType === DefenceType.PARRY) {
      return <DefenceCardParry card={card} />
    }
  }

  return null
}

