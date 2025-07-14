const CardClass = {
    MELEE: "MELEE",
    RANGED: "RANGED",
    SUPPORT: "SUPPORT",
} as const;

type CardType = typeof CardClass[keyof typeof CardClass];

export type { CardType } ;
export { CardClass };