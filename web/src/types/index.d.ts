interface IPokemon {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  superType: string;
  subtype: string;
  ability: IAbility;
  hp: string;
  retreatCost: string[];
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  text: string[];
  attacks: IAttack[];
  weaknesses: IWeakness[];
  type: string;
}

interface IAbility {
  name: string;
  text: string;
  type: string;
}

interface IAttack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

interface IWeakness {
  type: string;
  value: string;
}
