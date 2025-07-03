const RowUnit = {
    MELEE: "MELEE",
    RANGED: "RANGED",
    SUPPORT: "SUPPORT",
} as const;

type RowType = typeof RowUnit[keyof typeof RowUnit];

export type { RowType } ;
export { RowUnit };