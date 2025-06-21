import philippa from "../assets/philippa.jpg";
// import "./UI_Elements_Styles/card.css";

type CardProps = {
  name: string;
  image: string;
  damage: number;
  cardClass: string;
  isHero: boolean;
};

export default function Card({
  name,
  image,
  damage,
  cardClass,
  isHero,
}: CardProps) {
  return (
    <>
      <div className="w-60 h-100 ">
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: `url(${philippa})` }}
        ></div>
      </div>
    </>
  );
}
