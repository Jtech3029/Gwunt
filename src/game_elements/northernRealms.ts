// import "./UI_Elements_Styles/card.css";
import phil from "../assets/phil.jpg?url";

type cardData = {
    name: string,
    image: string,
    damage: number,
    cardClass: string,
    isHero: boolean,
}

const northernRealms: cardData[] = [
  {
    name: "Philippa",
    image: phil,
    damage: 50,
    cardClass: "hero",
    isHero: true,
  },
  // Add more hero cards here...
];

export default northernRealms;
