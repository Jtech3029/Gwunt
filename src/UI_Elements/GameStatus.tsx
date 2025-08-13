interface GameStatus {
  playerDamage: number;
  enemyDamage: number;
}

export default function GameStatus(props: GameStatus) {
  return (
    <div className="flex flex-col justify-evenly w-20/100 h-screen p-5">
      <div>
        <div className="w-15 h-25 opacity-50 border-2 border-amber-700/60">
          enemyleader
        </div>
        <div className="h-[11.5dvh] flex flex-col justify-evenly items-center opacity-50 border-2 border-amber-700/60 text-amber-400 mb-2">
          <p> Enemy Damage </p>
          <p> {props.enemyDamage} </p>
        </div>
      </div>
      <div className="h-[11.5dvh] flex justify-evenly opacity-50 border-2 border-amber-700/60 text-amber-400 mb-2">
        Weather Cards
      </div>
      <div>
        <div className="h-[11.5dvh] flex flex-col justify-evenly items-center opacity-50 border-2 border-amber-700/60 text-amber-400 mb-2">
          <p>Player Damage </p>
          <p> {props.playerDamage} </p>
        </div>
        <div className="w-15 h-25 opacity-50 border-2 border-amber-700/60">
          playerleader
        </div>
      </div>
    </div>
  );
}
