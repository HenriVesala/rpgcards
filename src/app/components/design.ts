

export const CARD_HEIGHT = 360;
export const CARD_WIDTH = 240;

export type MRM = {
    melee: {
        color: string
        alternateColor: string
        height: string
        width: string
    },
    ranged: {
        color: string
        alternateColor: string
        height: string
        width: string
    },
    magic: {
        color: string
        alternateColor: string        
        height: string
        width: string
    }
}

export type Card = {
    titleColor: string
    cardBorderColor: string
    cardBackgroundColor: string
    baseColor: string
    height: string
    width: string
    border: string
}

export type AbilityCardTheme = {
    intelligence: Card
    strength: Card 
    dexterity: Card
    health: Card
}

export type ActionCardTheme = {
    strike: Card
    defence: Card 
}


export type Cards = {

    abilityCard: AbilityCardTheme
    actionCard: ActionCardTheme
};

    export type Theme = {
        cards: Cards
        mrm: MRM
    };

    declare module '@emotion/react' {

}
export const theme: Theme = {
    cards: {
        abilityCard: {
            intelligence: {
                titleColor: "#ffffff",
                cardBorderColor: "#0954a5",
                cardBackgroundColor: "#744800",
                baseColor : "#0954a5",
                height: `${CARD_HEIGHT}px`,
                width: `${CARD_WIDTH}px`,
                border: "8px"
            },
            strength: {
                titleColor: "#ffffff",
                cardBorderColor: "#822025",
                cardBackgroundColor: "#744800",
                baseColor : "#822025",
                height: `${CARD_HEIGHT}px`,
                width: `${CARD_WIDTH}px`,
                border: "8px"
            },
            dexterity: {
                titleColor: "#ffffff",
                cardBorderColor: "#299764",
                cardBackgroundColor: "#744800",
                baseColor : "#299764",
                height: `${CARD_HEIGHT}px`,
                width: `${CARD_WIDTH}px`,
                border: "8px"
            },
            health: {
                titleColor: "#ffffff",
                cardBorderColor: "#ffffff",
                cardBackgroundColor:  "#744800",
                baseColor: "#ffffff",
                height: `${CARD_HEIGHT}px`,
                width: `${CARD_WIDTH}px`,
                border: "8px"
            }
        },
        actionCard: {
            strike: {
                titleColor: "#ffffff",
                cardBorderColor: "#822025",
                cardBackgroundColor:  "#ffffff",
                baseColor : "#cd2b31",
                height: `${CARD_HEIGHT}px`,
                width: `${CARD_WIDTH}px`,
                border: "8px"
            },
            defence: {
                titleColor: "#ffffff",
                cardBorderColor: "#299764",
                cardBackgroundColor:  "#ffffff",
                baseColor : "#18794e",
                height: `${CARD_HEIGHT}px`,
                width: `${CARD_WIDTH}px`,
                border: "8px"
            }
        } 
    },
    mrm: {
        melee: {
            color: "#822025", 
            alternateColor: "#cd2b31",
            height: `${CARD_WIDTH / 5}px`,
            width: `${CARD_WIDTH / 5}px`,
        },
        ranged: {
            color: "#1b543a",
            alternateColor: "#299764",
            height: `${CARD_WIDTH / 5}px`,
            width: `${CARD_WIDTH / 5}px`,
        },
        magic: {
            color: "#0f3058" ,
            alternateColor: "#0954a5",
            height: `${CARD_WIDTH / 5}px`,
            width: `${CARD_WIDTH / 5}px`,
        }
    }
};


