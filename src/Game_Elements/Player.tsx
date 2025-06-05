import PlayerCards from "./PlayerCards";
import Row from "./Row";

interface player {
    playerType: boolean,
}

export default function Player(props: player) {
    

    return(
        <>
            <Row/>
            <Row/>
            <Row/>
            <PlayerCards/>
        </>
    )
}