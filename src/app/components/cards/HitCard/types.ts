import { CardType } from '../types'

enum Hitlocation {
  'right arm' = 'RIGHT_ARM',
  'left arm' = 'LEFT_ARM',
  'right leg' = 'RIGHT_LEG',
  'left leg' = 'LEFT_LEG',
  torso = 'TORSO',
  head = 'HEAD',
}

export type HitCard = HitLocationCard | MissCard |  ArmorCard

enum HitCardSubtype {
  Health = 'HEALTH',
  FleshWound = 'FLESH_WOUND',
  Armor = 'ARMOR',
}

export type  HitLocationCard = {
  type: CardType.CARD_TYPE_HIT
  subType: HitCardSubtype.Health
  title: Hitlocation
  footer: string
}

export type ArmorCard = {
  type: CardType.CARD_TYPE_HIT
  subType: HitCardSubtype.Armor
  title: 'Armor'
  footer: string
}

export type MissCard = {
  type: CardType.CARD_TYPE_HIT
  subType: HitCardSubtype.FleshWound
  title: 'Fleshwound'
  footer: string
}
