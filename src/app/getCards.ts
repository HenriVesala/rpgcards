import { DefenceType } from '@/app/components/cards/ActionCard/DefenceCard/defenceCardType'
import { ActionCardType } from '@/app/components/cards/ActionCard/types'
import { AbilityCardSubType } from './components/cards/AbilityCard/types'
import { Card, CardType } from './components/cards/types'

export const getCards = (): Card[] => {
  return [
    {
      type: CardType.CARD_TYPE_ACTION,
      title: 'Strike',
      footer: '',
      actionCardType: ActionCardType.STRIKE,
      bacgroundImage: '/images/axe.png',
      feint: false,
      armorPiercing: false,
      melee: 2,
      ranged: 1,
      magic: 1
    },
    {
      type: CardType.CARD_TYPE_ACTION,
      title: 'Parry',
      footer: '',
      actionCardType: ActionCardType.DEFENCE,
      defenceType: DefenceType.PARRY,
      bacgroundImage: '/images/shield.png',
      riposte: false,
      protect: false,
      melee: 2,
      ranged: 1,
      magic: 1
    },
    {
      type: CardType.CARD_TYPE_ACTION,
      title: 'Dodge',
      footer: '',
      actionCardType: ActionCardType.DEFENCE,
      defenceType: DefenceType.DODGE,
      bacgroundImage: '/images/boot.png',
      maneuver: false,
      melee: 1,
      ranged: 1,
      magic: 1
    },
    {
      type: CardType.CARD_TYPE_ABILITY,
      title: 'Stength',
      footer: '',
      subType: AbilityCardSubType.STRENGTH,
      bacgroundImage: '/images/strength.png',
    },
    {
      type: CardType.CARD_TYPE_ABILITY,
      title: 'Dexterity',
      footer: '',
      subType: AbilityCardSubType.DEXTERITY,
      bacgroundImage: '/images/dexterity.png',
    },
    {
      type: CardType.CARD_TYPE_ABILITY,
      title: 'Intelligence',
      footer: '',
      subType: AbilityCardSubType.INTELLIGENCE,
      bacgroundImage: '/images/intelligence.png',
    },
    {
      type: CardType.CARD_TYPE_ABILITY,
      title: 'Health',
      footer: '',
      subType: AbilityCardSubType.HEALTH,
      bacgroundImage: '/images/health.png',
    },
    /*{
      type: CardType.CARD_TYPE_ABILITY,
      title: 'Courage/Iniative',
      footer: '',
      subType: AbilityCardSubType.COURAGE,
      bacgroundImage: '/images/courage.png',
    }*/

  ]
}
