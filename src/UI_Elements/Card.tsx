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
      <div className="aspect-7/10 h-[11dvh] opacity-75">
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </>
  );
}
