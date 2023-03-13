import { MagicMRMSymbol } from "@/app/components/cards/components/MRM/Magic";
import { MeleeMRMSymbol } from "@/app/components/cards/components/MRM/Melee";
import { RangedMRMSymbol } from "@/app/components/cards/components/MRM/Ranged";
import styled from "@emotion/styled";

type Props = {
  melee: number
  ranged: number
  magic: number
}

export const MRM: React.FC<Props> = ({ melee, ranged, magic }) => {
  return (
    <MRMContainer>
      <MeleeMRMSymbol melee={melee} />
      <RangedMRMSymbol ranged={ranged} />
      <MagicMRMSymbol magic={magic} />
    </MRMContainer>  
  )
}

export const MRMContainer = styled.span(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    alignItems: "flex-end"
  }),
);