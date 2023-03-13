import { ActionCard  } from './ActionCard/types'
import { HitCard  } from './HitCard/types'
import { AbilityCard  } from './AbilityCard/types'
import { RangedHitCard  } from './RangedHitCard/types'

export type Card = ActionCard |  AbilityCard | RangedHitCard | HitCard 


export enum CardType {
  CARD_TYPE_ACTION = 'CARD_TYPE_ACTION',
  CARD_TYPE_HIT = 'CARD_TYPE_HIT',
  CARD_TYPE_ITEM = "CARD_TYPE_ITEM",
  CARD_TYPE_ABILITY = 'CARD_TYPE_ABILITY',
  CARD_TYPE_RANGED_HIT = 'CARD_TYPE_RANGED_HIT',
}

/*

titlecolor
titlealign
text
textbackggroundcolor
textalign
imaeg
subtext
subtextcolor
subtextbackgroundcolor
bordercolor

Offence
Parry
Dodge
Offence 2
Parry 2
Dodgge 2
Offence - riposte
Offence - grapple
Offence - disarm
Offence Combo
Offence PEnetration 1
Offense - swift strike
Parry -s hiled strike

Cast a spell

*/
