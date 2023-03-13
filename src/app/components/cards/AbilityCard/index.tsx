import React from "react";
import { Border, Footer, Title } from "../components";
import { AbilityCard as AbilityCardProps, AbilityCardSubType } from "./types";
import styled from "@emotion/styled";

interface Props {
  card: AbilityCardProps;
}

export const AbilityCard: React.FC<Props> = ({ card }) => {
  const { title, footer, bacgroundImage, subType } = card;
  return (
    <AbilityCardBorder abilityCardType={subType}>
      <AbilityCardTitle abilityCardType={subType}>{title}</AbilityCardTitle>
      <CardArea abilityCardType={subType}>
          <Img abilityCardType={subType} src={bacgroundImage} alt={title} />
      </CardArea>
      <Footer>{footer}</Footer>
    </AbilityCardBorder>
  );
};


type CardAreaProps = {
  abilityCardType: AbilityCardSubType
};


export const AbilityCardBorder = styled(Border)<CardAreaProps>(
  ({ theme }) => ({
    border: "8px solid"
  }),
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.INTELLIGENCE && { 
    borderColor: theme.cards.abilityCard.intelligence.cardBorderColor,
    backgroundColor: theme.cards.abilityCard.intelligence.cardBackgroundColor
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.STRENGTH && { 
    borderColor: theme.cards.abilityCard.strength.cardBorderColor,
    backgroundColor: theme.cards.abilityCard.strength.cardBackgroundColor
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.DEXTERITY && { 
    borderColor: theme.cards.abilityCard.dexterity.cardBorderColor,
    backgroundColor: theme.cards.abilityCard.dexterity.cardBackgroundColor
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.HEALTH && { 
    borderColor: theme.cards.abilityCard.health.cardBorderColor,
    backgroundColor: theme.cards.abilityCard.health.cardBackgroundColor  
  },
);

export const CardArea = styled.div<CardAreaProps>(
  ({ theme }) => ({
  borderRadius: "50%",
  display: "inline-block",
  position: "relative"
  }),
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.INTELLIGENCE && { 
    backgroundColor: theme.cards.abilityCard.intelligence.baseColor, 
    height: theme.cards.abilityCard.intelligence.width, 
    width: theme.cards.abilityCard.intelligence.width,
    left: `-${theme.cards.abilityCard.intelligence.border}`
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.STRENGTH && { 
    backgroundColor: theme.cards.abilityCard.strength.baseColor,    
    height: theme.cards.abilityCard.strength.width, 
    width: theme.cards.abilityCard.strength.width,
    left: `-${theme.cards.abilityCard.strength.border}`
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.DEXTERITY && { 
    backgroundColor: theme.cards.abilityCard.dexterity.baseColor,
    height: theme.cards.abilityCard.dexterity.width, 
    width: theme.cards.abilityCard.dexterity.width,
    left: `-${theme.cards.abilityCard.dexterity.border}`
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.HEALTH && { 
    backgroundColor: theme.cards.abilityCard.health.baseColor,
    height: theme.cards.abilityCard.health.width, 
    width: theme.cards.abilityCard.health.width,
    left: `-${theme.cards.abilityCard.health.border}`
  },
);

export const Img = styled.img<CardAreaProps>(
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.INTELLIGENCE && { 
    maxWidth: theme.cards.abilityCard.intelligence.width,
    maxHeight: theme.cards.abilityCard.intelligence.width,
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.STRENGTH && { 
    maxWidth: theme.cards.abilityCard.strength.width,
    maxHeight: theme.cards.abilityCard.strength.width,
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.DEXTERITY && { 
    maxWidth: theme.cards.abilityCard.dexterity.width,
    maxHeight: theme.cards.abilityCard.dexterity.width,
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.HEALTH && { 
    maxWidth: theme.cards.abilityCard.health.width,
    maxHeight: theme.cards.abilityCard.health.width,
  },
);

export const AbilityCardTitle = styled(Title)<CardAreaProps>(
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.INTELLIGENCE && { 
    color: theme.cards.abilityCard.intelligence.titleColor,
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.STRENGTH && { 
    color: theme.cards.abilityCard.strength.titleColor,
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.DEXTERITY && { 
    color: theme.cards.abilityCard.dexterity.titleColor,
  },
  ({ abilityCardType, theme }) => abilityCardType === AbilityCardSubType.HEALTH && { 
    color: theme.cards.abilityCard.health.titleColor,
  },
);