import ballista_v1 from "../assets/northern-realms/ballista_v1.png";
import { CardClass, type CardType } from "./game_types/RowType";
// import "./UI_Elements_Styles/card.css";
import phil from "../assets/phil.jpg?url";
import type { CompleteCardProps } from "../UI_Elements/CompleteCard";

enum Glimmers {
  GOLD = "via-yellow-200",
  WHITE = "via-white",
}

enum Shadows {
  BLUE = "#06b6d440",
  GOLD = "#ffbf0050",
}

const northernRealms: CompleteCardProps[] = [
  {
    name: "Philippa",
    img: phil,
    damage: 2,
    cardClass: CardClass.RANGED,
    isHero: true,
    glimmer: Glimmers.GOLD,
    shadow: Shadows.BLUE,
    center: 50,
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
