import ballista_v1 from "../assets/northern-realms/ballista_v1.png";
import { CardClass, type CardType } from "./game_types/RowType";
// import "./UI_Elements_Styles/card.css";
import phil from "../assets/phil.jpg?url";

type cardData = {
    name: string,
    image: string,
    damage: number,
    cardClass: CardType,
    isHero: boolean,
}

const northernRealms: cardData[] = [
  {
    name: "Philippa",
    image: phil,
    damage: 2,
    cardClass: CardClass.RANGED,
    isHero: true,
  },
  {
    name: "Ballista",
    image: ballista_v1,
    damage: 50,
    cardClass: CardClass.SUPPORT,
    isHero: true,
  },
];

export default northernRealms;
