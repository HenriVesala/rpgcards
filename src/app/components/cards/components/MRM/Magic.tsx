import styled from "@emotion/styled";

type Props = {
    magic: number
}

export const MagicMRMSymbol: React.FC<Props> = ({ magic }) => {
  return (
    <MagicSymbol>
      {magic}
    </MagicSymbol>  
  )
}


export const MagicSymbol = styled.span(
  ({ theme }) => ({
    display: "flex",
    flexBasis: "auto",
    backgroundColor: theme.mrm.magic.color,
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    height: `calc(${theme.mrm.magic.height} * 1.05)`,
    width: `calc(${theme.mrm.magic.width} * 1.05)`,
   // paddingTop: `calc(${theme.mrm.melee.height} / 8)`,
    fontSize: `calc(${theme.mrm.melee.height} / 1.5)`,
    alignItems:"end",
    justifyContent:"center",
       lineHeight: theme.mrm.melee.height 
  }),
);


