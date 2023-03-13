import styled from "@emotion/styled";

type Props = {
    melee: number
}

export const MeleeMRMSymbol: React.FC<Props> = ({ melee }) => {
  return (
    <MeleeSymbol>
      {melee}
    </MeleeSymbol>  
  )
}


export const MeleeSymbol = styled.span(
  ({ theme }) => ({
    display: "flex",
    flexBasis: "auto",
    background: `repeating-radial-gradient(
                    circle farthest-corner,
                    ${theme.mrm.melee.color},
                    ${theme.mrm.melee.color} 5px,
                    ${theme.mrm.melee.alternateColor} 5px, 
                    ${theme.mrm.melee.alternateColor} 10px
                )`,
    clipPath:  "polygon(50% 0%, 0% 100%, 100% 100%)",
    shapeOutside: "polygon(50% 0%, 0% 100%, 100% 100%)",
    height: `calc(${theme.mrm.melee.height} * 1.1)`,
    width: `calc(${theme.mrm.melee.width} * 1.1)`,
    fontSize: `calc(${theme.mrm.melee.height} / 1.5)`,
    lineHeight: theme.mrm.melee.height,
    alignItems:"end",
    justifyContent:"center"
  // paddingTop: `calc(${theme.mrm.melee.height} / 4)`,
  // calc(2 * var(--side-size) * 0.866)
  }),
);

