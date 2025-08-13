import type { JSX } from "react";
import React from "react";
import UpdatedCard from "./Updated_Card";

export interface CompleteCardProps {
  img: string;
  shadow: string;
  glimmer: string;
  center: number;

  name: string;
  damage: number;
  cardClass: string;
  isHero: boolean;
}

class CompleteCard {
  private cardData: CompleteCardProps;

  public constructor(cardData: CompleteCardProps) {
    this.cardData = cardData;
  }

  public renderCard(): JSX.Element {
    const props = {
      img: this.cardData.img,
      shadow: this.cardData.shadow,
      glimmer: this.cardData.glimmer,
      center: this.cardData.center,
    };

    return React.createElement(UpdatedCard, props);
  }

  public getName(): string {
    return this.cardData.name;
  }

  public getDamage(): number {
    return this.cardData.damage;
  }
  public getCardClass(): string {
    return this.cardData.cardClass;
  }
  public isHero(): boolean {
    return this.cardData.isHero;
  }
}

export default CompleteCard;
