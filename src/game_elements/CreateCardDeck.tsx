// import Card from "../UI_Elements/Card";
//
// type cardData = {
//     name: string,
//     image: string,
//     damage: number,
//     cardClass: string,
//     isHero: boolean,
// }
//
// export default function createCardDeck(deckData: cardData[]) {
//   const CardDeck = deckData.map((data: cardData) => (
//         <Card
//           key={data.name}
//           name={data.name}
//           image={data.image}
//           damage={data.damage}
//           cardClass={data.cardClass}
//           isHero={data.isHero}
//         />
//   ))
//
//   return CardDeck;
// }
//

import CompleteCard, {
  type CompleteCardProps,
} from "../UI_Elements/CompleteCard";

export default function createCardDeck(deckData: CompleteCardProps[]) {
  return deckData.map((data) => new CompleteCard(data));
}

