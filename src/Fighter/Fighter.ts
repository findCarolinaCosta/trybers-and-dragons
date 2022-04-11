import Energy from '../Energy';

interface FighterAttributes {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy; 
}

interface Fighter extends FighterAttributes {
  attack(enemy: FighterAttributes): void;
  special(enemy: FighterAttributes): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;