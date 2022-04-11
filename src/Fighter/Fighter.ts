import Energy from '../Energy';

export interface IFighterAttributes {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy; 
}

interface Fighter extends IFighterAttributes {
  attack(enemy: IFighterAttributes): void;
  special(enemy: IFighterAttributes): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;