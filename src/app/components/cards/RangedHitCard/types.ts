import { CardType } from '../types'

export type RangedHitCard  = {
  type: CardType.CARD_TYPE_RANGED_HIT
  subType: RangedHitCardSubtype
  title: string
  footer: string
}

enum RangedHitCardSubtype {
  Miss,
  Hit,
  PiercingHit,
  CriticalHit,
  CriticalFailure,
}
