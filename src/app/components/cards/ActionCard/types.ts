import { ActionCardDefence } from '@/app/components/cards/ActionCard/DefenceCard/defenceCardType'
import { ActionCardStrike } from '@/app/components/cards/ActionCard/StrikeCard/strikeCardType'
import { CardType } from '../types'

export enum ActionCardType {
  STRIKE = 'STRIKE',
  DEFENCE = 'DEFENCE',
  MANEUVER = 'MANEUVER',
  CAST = "CAST",
  FOCUS = "FOCUS"
  // ACTION = 'ACTION', ?
}

export type MRMValues = {
  melee: number,
  ranged: number,
  magic: number
}

export type BaseActionCard = {
  type: CardType.CARD_TYPE_ACTION
  title: string
  footer: string
}

export type ActionCard = ActionCardDefence |  ActionCardStrike

