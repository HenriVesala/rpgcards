import styled from "@emotion/styled";

type Props = {
    ranged: number
}

export const RangedMRMSymbol: React.FC<Props> = ({ ranged }) => {
  return (
    <RangedSymbol>
      {ranged}
    </RangedSymbol>  
  )
}

export const RangedSymbol = styled.span(
  ({ theme }) => ({
    display: "flex",
    flexBasis: "auto",
    background: `repeating-radial-gradient(
        circle,
        ${theme.mrm.ranged.color},
        ${theme.mrm.ranged.color} 5px,
        ${theme.mrm.ranged.alternateColor} 5px, 
        ${theme.mrm.ranged.alternateColor} 10px
    )`,
    clipPath: "circle(50% at 50% 50%)",
    height: theme.mrm.ranged.height, 
    width: theme.mrm.ranged.width,
    fontSize: `calc(${theme.mrm.melee.height} / 1.5)`,
    alignItems:"end",
    justifyContent:"center",
    lineHeight: theme.mrm.melee.height
  }),
);
