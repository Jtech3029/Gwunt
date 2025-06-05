import { useState } from "react"
import Player from "./Player";

export default function Board() {
    const [userPlayer, setUserPlayer] = useState();
    const [enemyPlayer, setEnemyPlayer] = useState();

    return(
        <>
            <Player player={enemyPlayer}/>
            <Player player={userPlayer}/>
        </>
    )
}