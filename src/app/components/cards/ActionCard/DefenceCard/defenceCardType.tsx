import { BaseActionCard, ActionCardType, MRMValues } from "@/app/components/cards/ActionCard/types"

export enum DefenceType {
  PARRY ="PARRY",
  DODGE = "DODGE"
}

export type ActionCardDefenceParry  = BaseActionCard &  MRMValues & {
    actionCardType: ActionCardType.DEFENCE
    defenceType: DefenceType.PARRY
    riposte: boolean
    protect: boolean
    bacgroundImage: string;

}

export type ActionCardDefenceDodge  = BaseActionCard &  MRMValues & {
    actionCardType: ActionCardType.DEFENCE
    defenceType: DefenceType.DODGE
    maneuver: boolean
    bacgroundImage: string;
}

export type ActionCardDefence = ActionCardDefenceParry | ActionCardDefenceDodge