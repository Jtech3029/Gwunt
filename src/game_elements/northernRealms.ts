import philippa from "../assets/philippa.jpg";
// import "./UI_Elements_Styles/card.css";

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
    image: philippa,
    damage: 50,
    cardClass: "hero",
    isHero: true,
  },
  // Add more hero cards here...
];

export default northernRealms;