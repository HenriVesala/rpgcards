import { CardType } from '../types'

export type AbilityTitle =
  | 'Stength'
  | 'Dexterity'
  | 'Intelligence'
  | 'Health'
  | 'Courage/Iniative'

export enum AbilityCardSubType {
  STRENGTH = 'STRENGTH',
  DEXTERITY = 'DEXTERITY',
  INTELLIGENCE = 'INTELLIGENCE',
  HEALTH = 'HEALTH',
  COURAGE = 'COURAGE',
}

export type AbilityCard = {
    type: CardType.CARD_TYPE_ABILITY;
    subType: AbilityCardSubType;
    title: AbilityTitle;
    footer: string;
    bacgroundImage: string;
  }
