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
import sile_de_tansarville from "../assets/Northern Realms/troops/Sile de Tansarville.png";
import thaler from "../assets/Northern Realms/troops/Thaler.png";
import trebuchet_1 from "../assets/Northern Realms/troops/Trebuchet  1.png";
import trebuchet_2 from "../assets/Northern Realms/troops/Trebuchet  2.png";
import vernon_roche from "../assets/Northern Realms/troops/Vernon Roche.png";
import ves from "../assets/Northern Realms/troops/Ves.png";
import yarpen_zigrin from "../assets/Northern Realms/troops/Yarpen Zigrin.png";
import type { CompleteCardProps } from "../UI_Elements/CompleteCard";
import { Glimmers, Shadows } from "../UI_Elements/UI_Utilities";

import { CardClass, type CardType } from "./game_types/RowType";

const northernRealms: CompleteCardProps[] = [
  {
    name: "Ballista",
    img: ballista_1,
    damage: 6,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Ballista",
    img: ballista_2,
    damage: 6,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Blue Stripes Commando",
    img: blue_stripes_commando,
    damage: 4,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Catapult",
    img: catapult,
    damage: 8,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Crinfrid Reavers Dragon Hunter",
    img: crinfrid_reavers_dragon_hunter,
    damage: 5,
    cardClass: CardClass.RANGED,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Dethmold",
    img: dethmold,
    damage: 6,
    cardClass: CardClass.RANGED,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Dun Banner Medic",
    img: dun_banner_medic,
    damage: 5,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Esterad Thyssen",
    img: esterad_thyssen,
    damage: 10,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "John Natalis",
    img: john_natalis,
    damage: 10,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Kaedweni Siege Expert",
    img: kaedweni_siege_expert,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Keira Metz",
    img: keira_metz,
    damage: 5,
    cardClass: CardClass.RANGED,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Philippa Eilhart",
    img: phillipa_eilhart,
    damage: 10,
    cardClass: CardClass.RANGED,
    isHero: true,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Poor Fucking Infantry",
    img: poor_fucking_infantry,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Prince Stennis",
    img: prince_stennis,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Redanian Foot Soldier",
    img: redanian_foot_soldier_1,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Redanian Foot Soldier",
    img: redanian_foot_soldier_2,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Sabrina Glevissig",
    img: sabrina_glevissig,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Sheldon Skaggs",
    img: sheldon_skaggs,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Siege Tower",
    img: siege_tower,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Siegfried of Denesle",
    img: siegfried_of_denesle,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Sigismund Dijkstra",
    img: sigismund_dijkstra,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Síle de Tansarville ",
    img: sile_de_tansarville,
    damage: 1,
    cardClass: CardClass.MELEE,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Thaler",
    img: thaler,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Trebuchet",
    img: trebuchet_1,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Trebuchet",
    img: trebuchet_2,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Vernon Roche",
    img: vernon_roche,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Ves",
    img: ves,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
  {
    name: "Yarpen Zigrin",
    img: yarpen_zigrin,
    damage: 1,
    cardClass: CardClass.SUPPORT,
    isHero: false,
    shadow: Shadows.BLUE,
    glimmer: Glimmers.WHITE,
    center: 50,
  },
];

export default northernRealms;
