// calculate Pokemon HP
const hp = (hpLevel: string): number => {
  const HP = hpLevel.toLowerCase() !== 'none' ? parseInt(hpLevel) : 0;

  return HP > 100 ? 100 : HP;
};

// calculate Pokemon strength
const strength = (attacks: IAttack[]): number => {
  const str = (attacks?.length || 0) * 50;

  return str > 100 ? 100 : str;
};

// calculate Pokemon weakness
const weakness = (weaknesses: IWeakness[]): number => {
  const weak = (weaknesses?.length || 0) * 100;

  return weak > 100 ? 100 : weak;
};

// calculate Pokemon happiness
const happiness = (attacks: IAttack[], HP: number, weak: number): number => {
  let damage = 0;
  attacks?.map((attack: IAttack) => {
    damage += parseInt(attack.damage.replace(/[^0-9]/g, '')) || 0;
  });

  return Math.ceil((HP / 10 + damage / 10 + 10 - weak / 100) / 5);
};

export const levelCalculator = {
  hp,
  strength,
  weakness,
  happiness,
};
