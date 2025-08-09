import ballista_1 from "../assets/Northern Realms/troops/Ballista 1.png";
import ballista_2 from "../assets/Northern Realms/troops/Ballista 2.png";
import blue_stripes_commando from "../assets/Northern Realms/troops/Blue Stripes Commando.png";
import catapult from "../assets/Northern Realms/troops/Catapult.png";
import crinfrid_reavers_dragon_hunter from "../assets/Northern Realms/troops/Crinfrid Reavers Dragon Hunter.png";
import dethmold from "../assets/Northern Realms/troops/Dethmold.png";
import dun_banner_medic from "../assets/Northern Realms/troops/Dun Banner Medic.png";
import esterad_thyssen from "../assets/Northern Realms/troops/Esterad Thyssen.png";
import john_natalis from "../assets/Northern Realms/troops/John Natalis.png";
import kaedweni_siege_expert from "../assets/Northern Realms/troops/Kaedweni Siege Expert.png";
import keira_metz from "../assets/Northern Realms/troops/Keira Metz.png";
import phillipa_eilhart from "../assets/Northern Realms/troops/Philippa Eilhart.png";
import poor_fucking_infantry from "../assets/Northern Realms/troops/Poor Fucking Infantry.png";
import prince_stennis from "../assets/Northern Realms/troops/Prince Stennis.png";
import redanian_foot_soldier_1 from "../assets/Northern Realms/troops/Redanian Foot Soldier 1.png";
import redanian_foot_soldier_2 from "../assets/Northern Realms/troops/Redanian Foot Soldier 2.png";
import sabrina_glevissig from "../assets/Northern Realms/troops/Sabrina Glevissig.png";
import sheldon_skaggs from "../assets/Northern Realms/troops/Shelden Skaggs.png";
import siege_tower from "../assets/Northern Realms/troops/Siege Tower.png";
import siegfried_of_denesle from "../assets/Northern Realms/troops/Siegfried of Denesle.png";
import sigismund_dijkstra from "../assets/Northern Realms/troops/Sigismund Dijkstra.png";
import sile_de_tansarville  from "../assets/Northern Realms/troops/Sile de Tansarville.png";
import thaler from "../assets/Northern Realms/troops/Thaler.png";
import trebuchet_1 from "../assets/Northern Realms/troops/Trebuchet  1.png";
import trebuchet_2 from "../assets/Northern Realms/troops/Trebuchet  2.png";
import vernon_roche from "../assets/Northern Realms/troops/Vernon Roche.png";
import ves from "../assets/Northern Realms/troops/Ves.png";
import yarpen_zigrin from "../assets/Northern Realms/troops/Yarpen Zigrin.png";

import { CardClass, type CardType } from "./game_types/RowType";

type cardData = {
  name: string;
  image: string;
  damage: number;
  cardClass: CardType;
  isHero: boolean;
};

const northernRealms: cardData[] = [
  {
    name: "Ballista",
    image: ballista_1,
    damage: 6,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
  {
    name: "Ballista",
    image: ballista_2,
    damage: 6,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
  {
    name: "Blue Stripes Commando",
    image: blue_stripes_commando,
    damage: 4,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Catapult",
    image: catapult,
    damage: 8,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
  {
    name: "Crinfrid Reavers Dragon Hunter",
    image: crinfrid_reavers_dragon_hunter,
    damage: 5,
    cardClass: CardClass.RANGED,
    isHero: false,
  },
  {
    name: "Dethmold",
    image: dethmold,
    damage: 6,
    cardClass: CardClass.RANGED,
    isHero: false,
  },
  {
    name: "Dun Banner Medic",
    image: dun_banner_medic,
    damage: 5,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
  {
    name: "Esterad Thyssen",
    image: esterad_thyssen,
    damage: 10,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "John Natalis",
    image: john_natalis,
    damage: 10,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Kaedweni Siege Expert",
    image: kaedweni_siege_expert,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
  {
    name: "Keira Metz",
    image: keira_metz,
    damage: 5,
    cardClass: CardClass.RANGED,
    isHero: false,
  },
  {
    name: "Philippa Eilhart",
    image: phillipa_eilhart,
    damage: 10,
    cardClass: CardClass.RANGED,
    isHero: true,
  },
  {
    name: "Poor Fucking Infantry",
    image: poor_fucking_infantry,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Prince Stennis",
    image: prince_stennis,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Redanian Foot Soldier",
    image: redanian_foot_soldier_1,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Redanian Foot Soldier",
    image: redanian_foot_soldier_2,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Sabrina Glevissig",
    image: sabrina_glevissig,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Sheldon Skaggs",
    image: sheldon_skaggs,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
  {
    name: "Siege Tower",
    image: siege_tower,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
    {
    name: "Siegfried of Denesle",
    image: siegfried_of_denesle,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
      {
    name: "Sigismund Dijkstra",
    image: sigismund_dijkstra,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
        {
    name: "Síle de Tansarville ",
    image: sile_de_tansarville,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
  },
          {
    name: "Thaler",
    image: thaler,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
            {
    name: "Trebuchet",
    image: trebuchet_1,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
            {
    name: "Trebuchet",
    image: trebuchet_2,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
              {
    name: "Vernon Roche",
    image: vernon_roche,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
              {
    name: "Ves",
    image: ves,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
              {
    name: "Yarpen Zigrin",
    image: yarpen_zigrin,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
  },
];

export default northernRealms;
