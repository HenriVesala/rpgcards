import { BaseActionCard, ActionCardType, MRMValues } from "@/app/components/cards/ActionCard/types"

export type ActionCardStrike  = BaseActionCard &  MRMValues & {
    actionCardType: ActionCardType.STRIKE
    feint: boolean
    armorPiercing: boolean
    bacgroundImage: string;
}

