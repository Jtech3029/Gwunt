const BoardPlayer = {
    PLAYER: "PLAYER",
    ENEMY: "ENEMY",
} as const;

type PlayerType = typeof BoardPlayer[keyof typeof BoardPlayer];

export type { PlayerType } ;
export { BoardPlayer };