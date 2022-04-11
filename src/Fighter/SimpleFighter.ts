interface SimpleFighterAttributes {
  lifePoints: number;
  strength: number;
}

interface SimpleFighter extends SimpleFighterAttributes {
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): void;
}

export default SimpleFighter;